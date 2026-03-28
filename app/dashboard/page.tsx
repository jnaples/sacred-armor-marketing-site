"use client";

import { useEffect, useState } from "react";
import VerseCard from "@/app/components/VerseCard";
import NavBar from "@/app/components/NavBar";
import { createClient } from "@/lib/supabase";
import toast from "react-hot-toast";

type Verse = {
  id: string;
  text: string;
  reference: string;
};

export default function DashboardPage() {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);

      const [{ data: versesData }, { data: savedData }] = await Promise.all([
        supabase.from("verses").select("id, text, reference"),
        supabase.from("saved_verses").select("verse_id").eq("user_id", user.id),
      ]);

      setVerses(versesData ?? []);
      setSavedIds(new Set((savedData ?? []).map((s) => s.verse_id)));
      setLoading(false);
    }
    load();
  }, []);

  async function handleSave(verse: Verse) {
    if (!userId) return;
    const supabase = createClient();

    if (savedIds.has(verse.id)) {
      await supabase
        .from("saved_verses")
        .delete()
        .eq("user_id", userId)
        .eq("verse_id", verse.id);
      setSavedIds((prev) => {
        const next = new Set(prev);
        next.delete(verse.id);
        return next;
      });
      toast("Verse removed from saved.");
    } else {
      await supabase.from("saved_verses").insert({
        user_id: userId,
        verse_id: verse.id,
      });
      setSavedIds((prev) => new Set(prev).add(verse.id));
      toast.success("Verse saved!", {
        icon: <span style={{ color: "#DE9D36" }}>✓</span>,
      });
    }
  }

  return (
    <div className="min-h-screen bg-dark-background text-[#E8E6E3]">
      <NavBar />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 flex w-full flex-col items-center gap-3 text-center">
          <h1 className="font-newsreader text-4xl font-light md:text-6xl">
            Transform Into the New You
          </h1>
          <p className="font-inter text-sm uppercase tracking-[2px] text-dark-accent md:text-base">
            powerful verses to guide you daily
          </p>
        </div>

        {loading ? (
          <p className="text-center font-inter text-[#E8E6E3]/50">Loading...</p>
        ) : (
          <div className="flex w-full flex-col items-center gap-6">
            {verses.map((verse) => (
              <VerseCard
                key={verse.id}
                verse={{ text: verse.text, reference: verse.reference }}
                isSaved={savedIds.has(verse.id)}
                onSave={() => handleSave(verse)}
                className="w-full items-start align-top"
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
