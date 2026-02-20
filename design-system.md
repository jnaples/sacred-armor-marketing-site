# Sacred Armor Design System

## Overview
Sacred Armor is a minimalist Bible verse app with a focus on readability, simplicity, and spiritual peace. The design emphasizes clean typography, subtle contrast, and a calming color palette that works in both light and dark modes.

## Brand Identity

### Voice & Tone
- **Masculine yet peaceful**: Strong, grounded, but not aggressive
- **Scriptural**: Biblical language is welcome ("armor of God", "stand firm")
- **Encouraging**: Supportive without being preachy
- **Minimal**: Let the verses speak; design stays out of the way

### Target Audience
Christian men (18-35) in the NoFap community seeking accountability and spiritual strength through daily scripture.

## Color Palette

### Dark Mode (Default)
```css
--bg-primary: #1a1d23;        /* Main background */
--bg-secondary: #2a2d35;      /* Cards, elevated surfaces */
--border-subtle: #443A37;     /* Card borders, dividers */
--text-primary: #E8E6E3;      /* Body text, headings */
--text-secondary: #D4A574;    /* References, accents, highlights */
--accent-primary: #D4A574;    /* Buttons, icons, CTAs (gold) */
```

### Light Mode
```css
--bg-primary: #E8E3D6;        /* Main background (warm beige) */
--bg-secondary: #F5F1E8;      /* Cards (cream) */
--border-subtle: #F6F0E9;     /* Card borders */
--text-primary: #1a1a1a;      /* Body text, headings */
--text-secondary: #668059;    /* References (muted green) */
--accent-primary: #D4A574;    /* Buttons, icons (gold) */
--text-tertiary: #8B7355;     /* Inactive states (brown) */
```

### Semantic Colors (Mode-independent)
```css
--error: #e74c3c;             /* Destructive actions, errors */
--success: #D4A574;           /* Success states (same as accent) */
--warning: #f39c12;           /* Warnings (if needed) */
```

## Typography

### Font Families
- **Headings/Display**: Newsreader (serif)
- **Body/UI**: Inter (sans-serif)

### Type Scale
```css
/* Display */
--text-display: 36px / Newsreader 600 SemiBold
  Usage: App title, major section headers

/* Heading 1 */
--text-h1: 28px / Newsreader 600 SemiBold
  Usage: Screen titles

/* Heading 2 */
--text-h2: 24px / Newsreader 400 Regular Italic
  Usage: Bible verse text (main content)

/* Body Large */
--text-body-lg: 16px / Inter 400 Regular
  Usage: Form inputs, settings text, body content

/* Body */
--text-body: 14px / Inter 400 Regular
  Usage: Subtitles, descriptions, secondary content

/* Caption */
--text-caption: 14px / Inter 500 Medium
  Usage: Bible references (e.g., "JOHN 3:16")

/* Small */
--text-small: 12px / Inter 400 Regular
  Usage: Footnotes, disclaimers, metadata
```

### Type Guidelines
- **Line height**: 1.5x for body text, 1.4x for headings, 1.5x for verse text
- **Letter spacing**: +2px for uppercase labels (like "PSALM 23:1-2")
- **Text transform**: Uppercase for references and section labels
- **Verse text**: Always italic, centered, generous line-height for readability
- **References**: Always uppercase, medium weight, accent color

## Spacing System

Use an 8px base unit for consistent spacing:

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 20px;
--space-xl: 30px;
--space-2xl: 40px;
--space-3xl: 50px;
```

### Common Patterns
- Card padding: 40px
- Screen padding: 20px horizontal, 60px top
- Button padding: 18px vertical, 40px horizontal
- Input padding: 15px
- Section spacing: 20px between related elements, 30px+ between sections

## Components

### Buttons

#### Primary Button
```css
background: var(--accent-primary);
color: var(--bg-primary);
padding: 18px 40px;
border-radius: 12px;
font: 16px Inter 600 SemiBold;
```
**Usage**: Main CTAs (Sign In, Save Verse, etc.)

#### Destructive Button
```css
background: var(--error);
color: white;
padding: 18px 40px;
border-radius: 15px;
font: 16px Inter 600 SemiBold;
```
**Usage**: Delete actions (Sign Out, Delete Account)

#### Secondary Button (Outlined)
```css
background: transparent;
border: 1px solid var(--error);
color: var(--error);
padding: 18px;
border-radius: 15px;
font: 16px Inter 600 SemiBold;
```
**Usage**: Alternative destructive actions

#### Text Button
```css
background: transparent;
color: var(--accent-primary);
font: 14px Inter 400 Regular;
padding: minimal
```
**Usage**: "Forgot Password?", "Back to Sign In"

### Cards

```css
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: 20px;
padding: 40px;
box-shadow: none; /* We don't use shadows */
```

**Usage**: Verse cards, content containers, settings sections

### Inputs

```css
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: 12px;
padding: 15px;
font: 16px Inter 400 Regular;
color: var(--text-primary);
placeholder-color: #666;
```

**States**:
- Focus: No visible change (rely on native focus indicators)
- Error: Red border

### Icons

- **Size**: 24-28px for interactive icons, 64px for empty states
- **Style**: Outline icons from Ionicons (not filled, except for active states)
- **Color**: Accent color for interactive, text-secondary for inactive

**Examples**:
- `bookmark-outline` / `bookmark` (saved state)
- `sunny-outline` / `moon-outline` (theme toggle)
- `trash-outline` (delete)
- `person-outline` (account)

### Toast Notifications

```css
background: var(--bg-secondary);
border: 1px solid var(--border-subtle);
border-radius: 12px;
padding: 15px;
width: 90%;
position: top (60px offset);
font: 14px Inter 500 Medium;
```

**Auto-dismiss**: 3 seconds

## Layout Patterns

### Screen Layout
```
+----------------------------------+
| Screen Title (28px, top 60px)   |
|                                  |
| Content (20px horizontal pad)    |
|                                  |
|                                  |
+----------------------------------+
| Tab Bar                          |
+----------------------------------+
```

### Verse Card Layout (Home Screen)
```
+----------------------------------+
|                    [bookmark]    |
|          |  (divider)            |
|                                  |
|    "Verse text here..."          |
|       (24px italic)              |
|                                  |
|      REFERENCE (14px caps)       |
+----------------------------------+
```

### Form Layout
```
Title (36px)
Subtitle (14px caps, spacing 50px below)

[Input field]
[Input field]
[Forgot Password?] (right-aligned)

[Primary Button]

[Text link] (centered)
```

## Motion & Interaction

### Gestures
- **Swipe left**: Next verse (spring animation, 100px threshold)
- **Swipe right**: Previous verse (spring animation, 100px threshold)
- **Tap**: Standard button press

### Transitions
- **Spring animation**: Used for swipe gestures (smooth, natural feel)
- **Fade**: Theme transitions (subtle, no jarring changes)
- **Slide**: Modal/sheet entry from bottom

### Loading States
- **Spinner**: Accent color (#D4A574)
- **Position**: Centered on screen
- **No skeleton screens**: Keep it simple

## Accessibility

### Touch Targets
- Minimum: 44x44pt for all interactive elements
- Prefer larger (e.g., full-width buttons) when possible

### Text Contrast
- All text meets WCAG AA standards in both modes
- Dark mode: Light text on dark background (high contrast)
- Light mode: Dark text on light background (high contrast)

### Safe Areas
- Use React Native SafeAreaView for iPhone notch/home indicator
- Tab bar respects safe area insets

## Content Guidelines

### Bible Verses
- Always in italics
- Always centered
- Wrapped in quotation marks
- Reference below verse (never above)
- References always uppercase

### Microcopy
- **Confirmations**: "Verse saved to collection" (not "Success!")
- **Errors**: Specific, actionable (e.g., "Password must be at least 6 characters")
- **Empty states**: Encouraging, not just factual ("No saved verses yet" + "Tap the bookmark icon on verses to save them")

### Error Messages
- Be specific: "Invalid email format" not "Error"
- Offer solution when possible
- No technical jargon (no "401 Unauthorized")

## Design Principles

1. **Scripture First**: The verse is the hero. Everything else supports it.
2. **Minimal Friction**: Swiping to see new verses should feel effortless.
3. **Masculine Calm**: Strong colors, clean lines, but peaceful and centered.
4. **No Distractions**: No ads, no notifications, no gamification. Just scripture.
5. **Respectful of Content**: Bible text is sacred. Design with reverence.

## File Organization (for web)

```
/styles
  /tokens
    colors.css
    typography.css
    spacing.css
  /components
    button.css
    card.css
    input.css
  global.css

/components
  Button/
    Button.tsx
    Button.module.css
  Card/
    Card.tsx
    Card.module.css
```

## Web-Specific Notes

When building the website (privacy policy page, marketing site, etc.):

- Use Next.js with CSS Modules or Tailwind
- Match the app's color system exactly
- Use the same fonts (Newsreader + Inter from Google Fonts)
- Keep layouts simple and content-focused
- Responsive: Mobile-first, tablet/desktop just wider
- No animations on web (keep it simple and fast)

## Examples

### Homepage/Marketing (if needed)
- Large hero with app screenshot
- "Put on the full armor of God" tagline
- Simple feature list (3-4 max)
- Download buttons (App Store, Google Play)
- Footer with Privacy Policy link

### Privacy Policy Page
- Clean typography (Inter 16px body)
- Generous line-height (1.6)
- Max width: 700px
- Headings: Newsreader 28px
- Dark background (#1a1d23) for consistency

---

**This design system should be treated as a living document. Update it as the product evolves.**
