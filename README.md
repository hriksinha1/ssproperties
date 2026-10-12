# SSProperty - Real Estate Landing Page

A single-page real-estate landing website built with React 19, TypeScript, Vite 8, and Tailwind CSS v4.3.

## Project Architecture

- **Framework**: React 19 + TypeScript 7 + Vite 8
- **Styling**: Tailwind CSS v4.3 using CSS-first configuration in `src/index.css` (`@theme`, `@utility`).
- **Typography**: Bebas Neue (display headings) and Inter (weights 400, 500, 600) loaded via Google Fonts in `index.html`.
- **Icons**: Lucide React and verified official inline SVGs for social media links.
- **Section Order & Anchors**:
  1. Hero (`#hero`) with overlaid header and overlapping search panel
  2. Featured Listings (`#properties`)
  3. Services & Guidance (`#about`)
  4. Lifestyle & Categories (`#lifestyle`)
  5. Testimonials (`#testimonials`)
  6. Guides & Articles (`#blog`)
  7. Frequently Asked Questions (`#faq`)
  8. Contact & Conversion CTA (`#contact`)
  9. Footer

## Configuration & Content Management

All global site constants are centralized in `src/config/site.ts`:

- `BRAND_NAME`: Set to `"SSProperty"`.
- `SAMPLE_CONTENT`: Set to `true` by default while inventory and testimonials are illustrative samples. When set to `false`, sample banners are removed, and sections without real data automatically hide cleanly.
- `WHATSAPP_URL`: Set to `"https://wa.me/918282878287"` (SSProperty WhatsApp with India international prefix `+91`).
- `WHATSAPP_DISPLAY`: Set to `"+91 82828 78287"`.
- `SOCIAL_LINKS`: Links to verified Facebook, Instagram, LinkedIn, and WhatsApp channels (`sspropertykol`).
- `CONTACT_INFO`: Business address set to `"Kolkata, West Bengal, India"`.
- `CURRENCY_CODE` & `CURRENCY_LOCALE`: Localized to `"INR"` / `"en-IN"` with Lakh (`₹98 Lakh`) and Crore (`₹2.15 Cr`) formatting.
- `AREA_UNIT`: Default `"sq. ft."`.

## Environment Variables

Defined in `.env.example`:
- `VITE_FORM_ENDPOINT`: (Optional) URL for POSTing contact form inquiries to a custom backend or CRM webhook. If omitted, the form automatically formats the inquiry and opens a WhatsApp conversation.
- `VITE_NEWSLETTER_ENDPOINT`: (Optional) URL for newsletter submissions. If omitted, a direct WhatsApp update button is displayed.

## Vercel Deployment Instructions

1. **Push to GitHub**:
   - `git init`
   - `git add .`
   - `git commit -m "Configure SSProperty real-estate landing page"`
   - `git push -u origin main`

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and create a new project from your repository.
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Node.js Version**: Node >= 20.19 or >= 22.12
