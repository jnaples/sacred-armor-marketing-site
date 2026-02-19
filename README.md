# Sacred Armor Landing Page Setup

## Files Included

1. `homepage.tsx` - Main landing page component
2. `globals.css` - Global styles with font imports
3. `tailwind.config.js` - Tailwind configuration
4. `README.md` - This file

## Setup Instructions

### 1. Create a new Next.js project (if you haven't already)

```bash
npx create-next-app@latest sacred-armor-site
cd sacred-armor-site
```

When prompted:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Import alias: Yes (@/*)

### 2. Replace files

Replace these files in your project:

- Copy `homepage.tsx` content to `app/page.tsx`
- Copy `globals.css` content to `app/globals.css`
- Copy `tailwind.config.js` content to `tailwind.config.js` (root)

### 3. Add placeholder image

Create a folder structure:
```
public/
  images/
    app-screenshot.png
```

Add a screenshot of your app (1080x2340px or similar iPhone dimensions).

Alternatively, replace the Image component with a placeholder div:

```jsx
<div className="w-full h-full bg-[#2a2d35] flex items-center justify-center">
  <p className="text-[#666] font-inter">App Screenshot</p>
</div>
```

### 4. Create privacy policy page

Create `app/privacy-policy/page.tsx`:

```tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#1a1d23] text-[#E8E6E3] px-5 py-16">
      <article className="max-w-3xl mx-auto prose prose-invert">
        {/* Paste your privacy-policy.md content here as JSX */}
      </article>
    </div>
  );
}
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## Mobile Responsive Design

The design is mobile-first and responsive:

- **Mobile (< 768px)**: Single column, centered content
- **Tablet/Desktop (≥ 768px)**: Two-column hero, three-column features

All spacing, text sizes, and layouts automatically adjust.

## Key Features

✅ Matches app design system exactly
✅ Fully responsive (mobile, tablet, desktop)
✅ Optimized fonts (Newsreader + Inter)
✅ Dark mode by default
✅ Fast page loads with Next.js
✅ SEO-friendly
✅ Tailwind CSS for easy customization

## Customization

### Update Download Links

Replace `#` in the `<a>` tags with your actual App Store and Google Play URLs:

```tsx
<a href="https://apps.apple.com/..." ...>
<a href="https://play.google.com/..." ...>
```

### Update Contact Email

The footer links to `jnaples90@gmail.com`. Update if needed.

### Add More Sections

Want testimonials, FAQ, or more features? Add sections between existing ones following the same pattern:

```tsx
<section className="px-5 py-16 md:py-24 bg-[#0f1115]">
  <div className="max-w-6xl mx-auto">
    {/* Your content */}
  </div>
</section>
```

## Need Help?

Contact: jnaples90@gmail.com
# sacred-armor-marketing-site
