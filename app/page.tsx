import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-background text-[#E8E6E3]">
      {/* Hero Section */}
      <section className="px-5 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="container flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col gap-3 w-full md:w-1/2 items-start">
            <h1 className="text-4xl md:text-6xl font-light font-newsreader">
              Sacred Armor
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[2px] text-dark-accent  font-inter">
              Put on the full armor of God
            </p>
            <p className="text-base md:text-lg leading-relaxed  text-[#E8E6E3]/80 font-inter max-w-xl mx-auto md:mx-0">
              Daily scripture for men seeking spiritual strength and
              accountability. Swipe through hand-picked verses, save your
              favorites, and build your armor one verse at a time.
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#">
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
          <div className="relative w-full md:w-1/2 h-full ">
            <img
              src="/iphone.png"
              alt="Sacred Armor app"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="p-8">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center text-sm text-dark-text">
              <Link href="#">Terms of Service</Link>•
              <Link href="/privacy-policy">Privacy Policy</Link>•
              <Link href="#">Contact Us</Link>•
              <Link href="#">Manage Subscription</Link>
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
