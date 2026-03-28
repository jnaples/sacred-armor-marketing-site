"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import VerseCard from "./components/VerseCard";
import { placeholderVerses } from "@/lib/placeholderVerses";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-dark-background text-[#E8E6E3]">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="container flex flex-col items-center gap-10 md:flex-row">
          <div className="flex w-full flex-col items-start gap-3 md:w-1/2">
            <h1 className="font-newsreader text-4xl font-light md:text-6xl">
              Sacred Armor
            </h1>
            <p className="font-inter text-sm uppercase tracking-[2px] text-dark-accent md:text-base">
              Put on the full armor of God
            </p>
            <p className="mx-auto max-w-xl font-inter text-base leading-relaxed text-[#E8E6E3]/80 md:mx-0 md:text-lg">
              Daily scripture for men seeking spiritual strength and
              accountability. Swipe through hand-picked verses, save your
              favorites, and build your armor one verse at a time.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://apps.apple.com/us/app/sacred-armor/id6759791605"
                target="_blank"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/google.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                />
              </Link>
            </div>
          </div>
          <div className="relative h-full w-full md:w-1/2">
            <img
              src="/iphone.png"
              alt="Sacred Armor app"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="container flex flex-col items-center md:flex-row">
          <div className="flex w-full flex-col items-center">
            <div className="mb-10 flex w-full flex-col items-center gap-3 text-center">
              <h1 className="font-newsreader text-4xl font-light md:text-6xl">
                Transform Into the New You
              </h1>
              <p className="font-inter text-sm uppercase tracking-[2px] text-dark-accent md:text-base">
                powerful verses to guide you daily
              </p>
            </div>
            <div className="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
              <div className="col-span-1 flex flex-col gap-6 pt-0 md:pt-10">
                {placeholderVerses.verseColOne.map((verse) => (
                  <VerseCard
                    key={verse.id}
                    verse={{ text: verse.text, reference: verse.reference }}
                    isSaved={false}
                    onSave={() => router.push("/sign-up")}
                    className="w-full items-start align-top"
                  />
                ))}
              </div>
              <div className="col-span-1 flex flex-col gap-6">
                {placeholderVerses.verseColTwo.map((verse) => (
                  <VerseCard
                    key={verse.id}
                    verse={{ text: verse.text, reference: verse.reference }}
                    isSaved={false}
                    onSave={() => router.push("/sign-up")}
                    className="w-full items-start align-top"
                  />
                ))}
              </div>
              <div className="col-span-1 flex flex-col gap-6 pt-0 md:pt-12">
                {placeholderVerses.verseColThree.map((verse) => (
                  <VerseCard
                    key={verse.id}
                    verse={{ text: verse.text, reference: verse.reference }}
                    isSaved={false}
                    onSave={() => router.push("/sign-up")}
                    className="w-full items-start align-top"
                  />
                ))}
              </div>
            </div>
            <Link href="/sign-up">
              <button className="rounded-md bg-[#DE9D36] px-10 py-4 font-bold text-[#0E1418]">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="p-8">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-4 text-sm text-dark-text">
              <Link href="#">Terms of Service</Link>•
              <Link href="/privacy-policy">Privacy Policy</Link>•
              <Link href="#">Contact Us</Link>•
              <Link href="/manage-subscription">Manage Subscription</Link>
            </div>
            <div>
              <p className="text-center text-sm text-dark-text">
                © <span>{new Date().getFullYear()} </span>Sacred Armor. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
