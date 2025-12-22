"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

type SignupForm = {
  email: string;
  password: string;
  confirmPassword: string;
  remember?: boolean;
};

export default function SignupPage() {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<SignupForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [tokenData, setTokenData] = useState<{ token: string; user: string } | null>(null);
  const password = watch("password");

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("remember", true);
    }

    // OAuth tokens (CSR-only)
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userParam = params.get("user");
    if (token && userParam) {
      setTokenData({ token, user: userParam });
    }
  }, [setValue]);

  useEffect(() => {
    if (tokenData) {
      try {
        const user = JSON.parse(decodeURIComponent(tokenData.user));
        localStorage.setItem("token", tokenData.token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("✅ OAuth signup successful!");
        router.replace("/");
      } catch {
        toast.error("OAuth signup failed");
      }
    }
  }, [tokenData, router]);

  const onSubmit = async (data: SignupForm) => {
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
        email: data.email,
        password: data.password,
      });

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (data.remember) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      toast.success("✅ Signup successful");
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Signup failed");
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const getPasswordStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
    return "Strong";
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-slate-600 mt-2">Sign up to start your Brilligo journey</p>
        </div>

        {loading && <p className="text-center text-sm text-slate-500 animate-pulse">⏳ Signing up...</p>}

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email address" },
            })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500" : "border-slate-300"} bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500`}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Min 8 characters" },
            })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.password ? "border-red-500" : "border-slate-300"} bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 pr-10`}
          />
          <span className="absolute right-3 top-3 cursor-pointer text-slate-400" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          {password && (
            <p className={`text-sm mt-1 ${getPasswordStrength(password) === "Weak" ? "text-red-500" : getPasswordStrength(password) === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
              Strength: {getPasswordStrength(password)}
            </p>
          )}
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => value === password || "Passwords do not match",
            })}
            className={`w-full px-4 py-3 rounded-xl border ${errors.confirmPassword ? "border-red-500" : "border-slate-300"} bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 pr-10`}
          />
          <span className="absolute right-3 top-3 cursor-pointer text-slate-400" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
          <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2 mt-1">
          <input type="checkbox" {...register("remember")} className="accent-blue-600 w-5 h-5" />
          <span className="text-slate-800 font-medium select-none">Remember me</span>
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>

        {/* OAuth */}
        <div className="border-t pt-4 flex justify-center gap-4">
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`} className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-slate-100 transition" title="Sign up with Google">
            <FcGoogle size={28} />
          </a>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`} className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-slate-100 transition" title="Sign up with GitHub">
            <FaGithub size={28} className="text-black" />
          </a>
        </div>
      </form>
    </main>
  );
}
