"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type LoginForm = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginForm>();

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tokenData, setTokenData] = useState<{
    token: string;
    user: string;
  } | null>(null);

  /* ================= REMEMBER + OAUTH ================= */
  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("remember", true);
    }

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userParam = params.get("user");

    if (token && userParam) {
      setTokenData({ token, user: userParam });
    }
  }, [setValue]);

  useEffect(() => {
    if (!tokenData) return;

    try {
      const user = JSON.parse(decodeURIComponent(tokenData.user));
      localStorage.setItem("token", tokenData.token);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("🎉 Login successful");
      router.replace("/dashboard");
    } catch {
      toast.error("OAuth login failed");
    }
  }, [tokenData, router]);

  /* ================= LOGIN ================= */
  const onSubmit = async (data: LoginForm) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        { email: data.email, password: data.password }
      );

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (data.remember) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      toast.success("Welcome back 👋");
      router.push("/dashboard");
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
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-slate-50 overflow-hidden">

      {/* ================= LEFT BRAND ================= */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden lg:flex flex-col justify-center px-16 bg-linear-to-br from-blue-600 via-indigo-600 to-sky-500 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-extrabold mb-6 leading-tight"
        >
          Welcome to <br /> Brilligo 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-blue-100 max-w-md"
        >
          Learn smarter, build your career, manage finances, and grow —
          everything you need in one powerful platform.
        </motion.p>
      </motion.section>

      {/* ================= LOGIN CARD ================= */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center px-6"
      >
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 space-y-6"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Sign in to Brilligo
            </h2>
            <p className="text-slate-600 mt-2">
              Access your personalized dashboard
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <input
              type="email"
              autoComplete="email"
              placeholder="Email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-3 rounded-xl border
                ${errors.email ? "border-red-500" : "border-slate-300"}
                bg-white text-slate-900 placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password (browser eye icon only) */}
          <div className="space-y-1">
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              className={`w-full px-4 py-3 rounded-xl border
                ${errors.password ? "border-red-500" : "border-slate-300"}
                bg-white text-slate-900 placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                {...register("remember")}
                className="accent-blue-600 w-4 h-4"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-70"
          >
            {loading ? "Signing you in..." : "Login"}
          </motion.button>

          {/* Signup */}
          <p className="text-center text-sm text-slate-600">
            New to Brilligo?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>

          {/* OAuth */}
          <div className="border-t pt-5 flex justify-center gap-6">
            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100 transition"
              title="Sign in with Google"
            >
              <FcGoogle size={26} />
            </a>

            <a
              href={`${process.env.NEXT_PUBLIC_API_URL}/auth/github`}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 hover:bg-slate-100 transition"
              title="Sign in with GitHub"
            >
              <FaGithub size={24} className="text-slate-800" />
            </a>
          </div>
        </motion.form>
      </motion.section>
    </main>
  );
}
