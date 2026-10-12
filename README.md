# Architron - Luxury Real Estate Landing Page

A single-page architectural real-estate landing page built with React, Vite, and Tailwind CSS, featuring a calming pale-green canvas (`#F3F9EE`), high-contrast typography (Bebas Neue & Inter), and an image-led layout.

## Project Structure

```
.
├── .env.example
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── config/
    │   └── site.ts
    ├── data/
    │   ├── articles.ts
    │   ├── categories.ts
    │   ├── faqs.ts
    │   ├── footerLinks.ts
    │   ├── images.ts
    │   ├── listings.ts
    │   ├── services.ts
    │   └── testimonials.ts
    └── components/
        ├── cards/
        │   ├── ArticleCard.tsx
        │   ├── CategoryCard.tsx
        │   ├── FeaturedPropertyMini.tsx
        │   ├── HelpPanel.tsx
        │   └── PropertyCard.tsx
        ├── layout/
        │   ├── Footer.tsx
        │   ├── Header.tsx
        │   ├── MobileNav.tsx
        │   └── NewsletterForm.tsx
        ├── sections/
        │   ├── Articles.tsx
        │   ├── ContactCTA.tsx
        │   ├── FAQ.tsx
        │   ├── FeaturedListings.tsx
        │   ├── Hero.tsx
        │   ├── LifestyleCategories.tsx
        │   ├── PersonalizedService.tsx
        │   └── PropertySearch.tsx
        └── ui/
            ├── AvatarStack.tsx
            ├── Badge.tsx
            ├── Button.tsx
            ├── Chip.tsx
            ├── CircleIconButton.tsx
            ├── Input.tsx
            ├── SectionHeading.tsx
            └── SmartImage.tsx
```

## Vercel Deployment Instructions

1. **Push to GitHub**:
   - Initialize git (if not already): `git init`
   - Stage all files: `git add .`
   - Commit: `git commit -m "Initial commit of Architron real estate landing page"`
   - Push to your GitHub repository: `git remote add origin <your-repo-url>` and `git push -u origin main`.

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** -> **Project**.
   - Select your GitHub repository.

3. **Project Configuration Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   - `VITE_FORM_ENDPOINT` (Optional): URL of your backend or CRM form submission webhook/API.

5. **Deploy**:
   - Click **Deploy**. Vercel will build the project and output a preview/production domain.

## Design Tokens & Typography

- **Display Font**: `Bebas Neue` (400 weight, uppercase, font-synthesis: none)
- **Secondary Font**: `Inter` (400, 500, 600 weights)
- **Colors**:
  - `--bg-page`: `#F3F9EE` (pale green canvas)
  - `--bg-tint`: `#E8F5DE` (soft rounded footer, cards, help panel)
  - `--accent`: `#C8EFAE` (primary buttons, active tabs, highlight states)
  - `--accent-strong`: `#A9E18A` (accent hover)
  - `--ink`: `#0E170E` (headings, dark buttons, text)
  - `--ink-muted`: `#566356` (secondary descriptions, metadata)
  - `--border`: `#DCE8D5`
