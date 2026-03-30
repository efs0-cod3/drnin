# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

Single-page dental clinic website for Nin Dental Clinic (Santo Domingo, DR). Built with React 18 + Vite, styled with vanilla CSS using custom properties, deployed to Netlify.

### Component Structure

`App.jsx` is the root — it owns all form state and handles submission logic. All sections (Navbar, Features, Equipo, Services, Form, Footer, WhatsAppButton) are direct children of App.

Static content is colocated in data files:
- `src/components/featuresData.jsx` — clinic features
- `src/components/servicesData.jsx` — 6 dental services
- `src/components/doctorsData.jsx` — team members

The reusable `Input` component in `src/components/` handles regex-based validation for name, email, and phone fields.

### Form Submission Flow

1. Client-side validation (name: letters/accents only; phone: `XXX-XXX-XXXX` format; email regex)
2. EmailJS sends notification email to clinic (`VITE_EMAIL_*` env vars)
3. SheetDB API POST stores submission in a Google Sheet (CRM)
4. Success modal shown to user

### Environment Variables

```
VITE_EMAIL_SERVICE_ID    # EmailJS service ID
VITE_EMAIL_TEMPLATE_ID   # EmailJS template ID
VITE_EMAIL_PUBLIC_KEY    # EmailJS public key
```

SheetDB API endpoint is hardcoded in `App.jsx`.

### CSS Conventions

Custom properties defined globally: `--greennin`, `--ningrey`, `--dblue`, `--address_color`. No preprocessor — plain CSS files per component. SVG dividers are used between sections for visual separation.
