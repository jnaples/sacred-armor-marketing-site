// components/VerseCard.tsx
import { Bookmark, BookmarkCheck } from "lucide-react";

type VerseCardProps = {
  verse: {
    text: string;
    reference: string;
  };
  isSaved: boolean;
  onSave: () => void;
  style?: React.CSSProperties;
  className?: string;
};

export default function VerseCard({
  verse,
  isSaved,
  onSave,
  style,
  className,
}: VerseCardProps) {
  const backgroundImage = "/paper-bg.webp";

  return (
    <div
      className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
      style={{
        maxWidth: 480, // cap it on desktop — RN cards look odd at full width
        backgroundColor: "#000",
        ...style,
      }}
    >
      {/* cardInner */}
      <div className="overflow-hidden rounded-xl border border-[#443A37] bg-[#1D2230]">
        {/* ImageBackground equivalent */}
        <div
          className="w-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* cardContent */}
          <div className="relative flex flex-col items-center px-10 py-10">
            {/* Bookmark button */}
            <button
              onClick={onSave}
              className="absolute right-4 top-4 z-10 transition-opacity hover:opacity-70"
              aria-label={isSaved ? "Unsave verse" : "Save verse"}
            >
              {isSaved ? (
                <BookmarkCheck size={28} className="text-[#DE9D36]/80" />
              ) : (
                <Bookmark size={28} className="text-[#DE9D36]/80" />
              )}
            </button>

            {/* Divider — LinearGradient equivalent */}
            <div className="mb-6 h-10 w-0.5 bg-gradient-to-b from-[#DE9D36]/5 via-[#DE9D36] to-[#DE9D36]/5" />

            {/* Verse text */}
            <p
              className="tracking- mb-4 text-center text-xl text-white/80"
              style={{
                fontFamily: "Newsreader, serif",
              }}
            >
              &ldquo;{verse.text}&rdquo;
            </p>

            {/* Reference */}
            <p
              className="text-xs uppercase tracking-widest text-[#DE9D36]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              {verse.reference}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
