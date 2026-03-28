"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-expanded={open}
    className="group"
  >
    <path
      d="M4 12L20 12"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
        open ? "translate-y-0 rotate-[315deg]" : "-translate-y-[7px]"
      }`}
    />
    <path
      d="M4 12H20"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
        open ? "rotate-45" : ""
      }`}
    />
    <path
      d="M4 12H20"
      className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
        open ? "translate-y-0 rotate-[135deg]" : "translate-y-[7px]"
      }`}
    />
  </svg>
);

const navLinks = [
  { href: "/dashboard", label: "Verses" },
  { href: "/saved", label: "Saved" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-dark-background/90 px-4 backdrop-blur md:px-6">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="font-newsreader text-2xl font-light text-[#E8E6E3] transition-colors hover:text-dark-accent"
        >
          Sacred Armor
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 font-inter text-sm transition-colors hover:text-dark-accent ${
                pathname === link.href
                  ? "text-dark-accent"
                  : "text-[#E8E6E3]/70"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-dark-accent" />
              )}
            </Link>
          ))}

          <div className="mx-3 h-4 w-px bg-dark-border" />

          <button
            onClick={handleSignOut}
            className="px-4 py-2 font-inter text-sm text-[#E8E6E3]/70 transition-colors hover:text-dark-accent"
          >
            Sign out
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-[#E8E6E3] transition-colors hover:text-dark-accent md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-dark-border bg-dark-background px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-4 py-3 font-inter text-sm transition-colors hover:bg-dark-card hover:text-dark-accent ${
                  pathname === link.href
                    ? "bg-dark-card text-dark-accent"
                    : "text-[#E8E6E3]/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleSignOut}
              className="rounded-md px-4 py-3 text-left font-inter text-sm text-[#E8E6E3]/70 transition-colors hover:bg-dark-card hover:text-dark-accent"
            >
              Sign out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
