"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-background px-5">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-newsreader text-4xl font-light text-[#E8E6E3] md:text-5xl">
            Sacred Armor
          </h1>
          <p className="mt-2 font-inter text-sm uppercase tracking-[2px] text-dark-accent">
            Set new password
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-lg border border-dark-border bg-dark-card p-8"
        >
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-inter text-sm text-[#E8E6E3]/70"
            >
              New Password
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

          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirm"
              className="font-inter text-sm text-[#E8E6E3]/70"
            >
              Confirm Password
            </label>
            <input
              id="confirm"
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="rounded-md border border-dark-border bg-dark-background px-4 py-3 font-inter text-[#E8E6E3] outline-none focus:border-dark-accent"
              placeholder="Repeat your password"
            />
          </div>

          {error && <p className="font-inter text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-md bg-dark-accent px-6 py-3 font-inter font-bold text-[#0E1418] disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
