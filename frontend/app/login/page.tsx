"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

type LoginForm = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<LoginForm>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [tokenData, setTokenData] = useState<{ token: string; user: string } | null>(null);

  // Load remembered email
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("remember", true);
    }

    // Handle OAuth tokens (CSR-only)
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
        toast.success("✅ OAuth login successful!");
        router.replace("/");
      } catch {
        toast.error("OAuth login failed");
      }
    }
  }, [tokenData, router]);

  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
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

      toast.success("✅ Login successful");
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data?.message || "Login failed");
      } else {
        toast.error("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-5"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-600 mt-2">Login to continue your Brilligo journey</p>
        </div>

        {loading && <p className="text-center text-sm text-slate-500 animate-pulse">⏳ Logging in...</p>}

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

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
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
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mt-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("remember")} className="accent-blue-600 w-5 h-5" />
            <span className="text-slate-800 font-medium select-none">Remember me</span>
          </label>
          <Link href="/forgot-password" className="text-blue-600 hover:underline text-sm">
            Forgot password?
          </Link>
        </div>

        <button
          disabled={loading}
          className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium hover:underline">
            Create one
          </Link>
        </p>

        <div className="border-t pt-4 flex justify-center gap-4">
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`} className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-slate-100 transition" title="Sign in with Google">
            <FcGoogle size={28} />
          </a>
          <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`} className="flex items-center justify-center w-12 h-12 border rounded-full hover:bg-slate-100 transition" title="Sign in with GitHub">
            <FaGithub size={28} className="text-black" />
          </a>
        </div>
      </form>
    </main>
  );
}
