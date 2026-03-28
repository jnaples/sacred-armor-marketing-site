"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5" style={{ backgroundImage: "url('/dark-wallpaper.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-newsreader text-4xl font-light text-[#E8E6E3]">
            Sacred Armor
          </h1>
          <p className="mt-2 font-inter text-sm uppercase tracking-[2px] text-dark-accent">
            Reset your password
          </p>
        </div>

        {sent ? (
          <div className="rounded-lg border border-dark-border bg-dark-card p-8 text-center">
            <p className="font-inter text-[#E8E6E3]">
              Check your email for a password reset link.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-block font-inter text-sm text-dark-accent underline"
            >
              Back to sign in
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-lg border border-dark-border bg-dark-card p-8"
          >
            <p className="font-inter text-sm text-[#E8E6E3]/70">
              Enter your email and we&apos;ll send you a link to reset your
              password.
            </p>

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

            {error && (
              <p className="font-inter text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-md bg-dark-accent px-6 py-3 font-inter font-bold text-[#0E1418] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <p className="text-center font-inter text-sm text-[#E8E6E3]/60">
              <Link href="/login" className="text-dark-accent underline">
                Back to sign in
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
