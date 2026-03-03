export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-[#1a1d23] text-[#E8E6E3] flex flex-col">
      <div className="max-w-4xl mx-auto px-5 py-16 md:py-24 flex-1">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 font-newsreader">
            Delete Account
          </h1>
          <p className="text-[#D4A574] font-inter">Sacred Armor</p>
        </header>

        <hr className="border-t border-[#443A37] mb-8" />

        {/* Content */}
        <article className="prose prose-invert max-w-none">
          <p className="text-[#E8E6E3]/80 leading-relaxed mb-4 font-inter">
            We&rsquo;re sorry to see you go. To permanently delete your Sacred
            Armor account and all associated data &mdash; including your saved
            verses and preferences &mdash; please send us an email using the
            button below.
          </p>
          <p className="text-[#E8E6E3]/80 leading-relaxed font-inter">
            Once your request is received, your account will be deleted within 7
            days. This action is permanent and cannot be undone.
          </p>

          {/* Card */}
          <div className="bg-[#2a2d35] border border-[#443A37] rounded-xl p-6 mt-10 font-inter">
            <p className="text-[#E8E6E3] font-light text-xl mb-2 font-newsreader">
              Contact us to delete your account
            </p>
            <p className="text-[#E8E6E3]/80 mb-0">
              Email:{" "}
              <a
                href="mailto:jnaples90@gmail.com?subject=Account%20Deletion%20Request"
                className="text-[#D4A574] hover:underline"
              >
                jnaples90@gmail.com
              </a>
            </p>
            <a
              href="mailto:jnaples90@gmail.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20Sacred%20Armor%20account%20and%20all%20associated%20data."
              className="inline-block mt-6 px-6 py-3 border border-[#D4A574] rounded-lg text-[#D4A574] hover:bg-[#D4A574] hover:text-[#1a1d23] transition-colors duration-200 text-sm no-underline"
            >
              Send Deletion Request
            </a>
          </div>

          <p className="text-[#E8E6E3]/50 text-sm leading-relaxed mt-6 font-inter">
            Please send your request from the email address associated with your
            account so we can verify your identity before deletion.
          </p>
        </article>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-[#443A37] text-center pb-8">
        <p className="text-[#E8E6E3]/60 text-sm font-inter mb-2">
          Sacred Armor
        </p>
        <p className="text-[#D4A574] text-sm font-inter italic">
          A daily scripture app for spiritual strength and accountability.
        </p>
      </footer>
    </div>
  );
}
