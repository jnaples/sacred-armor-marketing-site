"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({ email, password });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-5"
      style={{
        backgroundImage: "url('/dark-wallpaper.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-newsreader text-4xl font-light text-[#E8E6E3] md:text-5xl">
            Sacred Armor
          </h1>
          <p className="mt-2 font-inter text-sm uppercase tracking-[2px] text-dark-accent">
            Create your account
          </p>
        </div>

        {success ? (
          <div className="rounded-lg border border-dark-border bg-dark-card p-6 text-center">
            <p className="font-inter text-[#E8E6E3]">
              Check your email to confirm your account, then{" "}
              <Link href="/login" className="text-dark-accent underline">
                sign in
              </Link>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-lg border border-dark-border bg-dark-card p-8"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-inter text-sm text-[#E8E6E3]/70"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border border-dark-border bg-dark-background px-4 py-3 font-inter text-[#E8E6E3] outline-none focus:border-dark-accent"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-inter text-sm text-[#E8E6E3]/70"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-md border border-dark-border bg-dark-background px-4 py-3 font-inter text-[#E8E6E3] outline-none focus:border-dark-accent"
                placeholder="Min. 6 characters"
              />
            </div>

            {error && (
              <p className="font-inter text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-md bg-dark-accent px-6 py-3 font-inter font-bold text-[#0E1418] disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="text-center font-inter text-sm text-[#E8E6E3]/60">
              Already have an account?{" "}
              <Link href="/login" className="text-dark-accent underline">
                Sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
