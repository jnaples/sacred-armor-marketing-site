"use client";

import { useEffect, useState } from "react";
import NavBar from "@/app/components/NavBar";
import VerseCard from "@/app/components/VerseCard";
import { createClient } from "@/lib/supabase";
import toast from "react-hot-toast";

type SavedVerse = {
  id: string;
  verse_id: string;
  verse: {
    id: string;
    reference: string;
    text: string;
  };
};

export default function SavedVersesPage() {
  const [verses, setVerses] = useState<SavedVerse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("Not logged in.");
        setLoading(false);
        return;
      }

      const { data, error: queryError } = await supabase
        .from("saved_verses")
        .select("id, verse_id, verse:verses(id, reference, text)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (queryError) {
        setError(queryError.message);
      } else {
        setVerses(
          (data ?? []).map((item) => ({
            ...item,
            verse: Array.isArray(item.verse) ? item.verse[0] : item.verse,
          })),
        );
      }
      setLoading(false);
    }
    load();
  }, []);

  async function handleUnsave(savedVerseId: string) {
    const supabase = createClient();
    await supabase.from("saved_verses").delete().eq("id", savedVerseId);
    setVerses((prev) => prev.filter((v) => v.id !== savedVerseId));
    toast("Verse unsaved.");
  }

  return (
    <div className="min-h-screen bg-dark-background text-[#E8E6E3]">
      <NavBar />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h1 className="font-newsreader text-4xl font-light md:text-6xl">
            Saved Verses
          </h1>
        </div>

        {loading ? (
          <p className="text-center font-inter text-[#E8E6E3]/50">Loading...</p>
        ) : error ? (
          <p className="text-center font-inter text-red-400">{error}</p>
        ) : verses.length === 0 ? (
          <p className="text-center font-inter text-[#E8E6E3]/50">
            No saved verses yet. Bookmark verses from the{" "}
            <a href="/dashboard" className="text-dark-accent underline">
              Verses
            </a>{" "}
            page.
          </p>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-6">
            {verses.map((item) => (
              <VerseCard
                key={item.id}
                verse={{
                  text: item.verse.text,
                  reference: item.verse.reference,
                }}
                isSaved={true}
                onSave={() => handleUnsave(item.id)}
                className="w-full align-top"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
