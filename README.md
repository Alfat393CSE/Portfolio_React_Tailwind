# Alfat Tasnim Hasan ? Portfolio

Vercel deployment copy and step-by-step instructions: [deployed/README.md](deployed/README.md). Select `deployed` as the Root Directory when importing the full repository. This is an independent snapshot; make deployment edits inside `deployed/src/`.


A responsive React portfolio built with Vite, Tailwind CSS v4, Framer Motion, Lucide, and React Icons.

## Getting started

Install dependencies with `npm ci`, then run `npm run dev`.

Use `npm run build` for a production build and `npm run preview` to serve it locally. Production output is `dist/`. Dependencies, build output, and the local npm cache are ignored by Git.

## Project structure

```text
src/
??? app/                         # App composition and route selection
??? assets/
?   ??? documents/               # Downloadable CV
?   ??? images/                  # Original portrait
??? components/
?   ??? layout/                  # Header and footer
?   ??? sections/                # Individual portfolio sections
??? data/                        # Navigation, skills, projects, roles, publications
??? features/
?   ??? projects/
?       ??? components/          # Gallery, detail view, visuals, and links
??? hooks/                       # Theme persistence and hash navigation
??? lib/                         # Shared motion configuration
??? styles/                      # Base styles and section stylesheets
?   ??? index.css                # Tailwind and ordered CSS imports
??? main.jsx                     # React entry point
```

## Editing guide

- Edit portfolio sections in `src/components/sections/`.
- Update structured content in `src/data/`.
- Edit project views in `src/features/projects/components/`.
- Change theme tokens in `src/styles/base.css` and section styling in its matching stylesheet. Keep the import order in `styles/index.css` to preserve the cascade. `about-layout.css` contains the final profile and achievement layout.
- Replace the portrait or CV in `src/assets/`; Vite fingerprints imported assets for production.
- Use PascalCase for components and the `use` prefix for hooks. Keep content collections separate from rendering and behavior.
- Verify changes with `npm run build`. No test runner is currently configured.

## Navigation and behavior

Dedicated project pages use shareable hash routes such as `#/projects/jmds`, supporting refresh and browser history without hosting rewrites. Section links use anchors such as `#about`. The header tracks the active section and provides an accessible mobile menu. Theme selection persists locally; animations respect reduced-motion preferences.

## Content provenance

Professional details come from the supplied CV. The gallery includes five CV-backed projects with category filters; backend filtering includes full-stack projects with backend contributions. Project thumbnails are labeled illustrations rather than screenshots. Missing source repositories and model metrics are not fabricated. Publications link to DOI records and Google Scholar title searches; full author lists were not supplied. Contact currently opens the supplied CV.

Research Projects & Activities was removed as requested; research interests and publications remain.

## Contact form

Contact information is centralized in `src/data/contact.js`. Add a verified Scholar profile there when available.

The form submits directly through FormSubmit to the email in `src/data/contact.js`. No email application is opened. The first submission triggers a one-time activation email: confirm the recipient address in that email, then resubmit the form. Check spam if the activation email is missing. Serve the portfolio through Vite or a hosted HTTP(S) site rather than opening index.html directly.

Messages include the visitor's name, email, subject, and message, with their email set as Reply-To. Success is shown only when the service accepts the submission; inbox receipt is not independently verified. To use a different service, set `VITE_CONTACT_ENDPOINT` in `.env.local` and restart Vite or rebuild. The endpoint must accept JSON and support CORS. No secret keys belong in VITE_ variables.

FormSubmit documentation: https://formsubmit.co/ and https://formsubmit.co/ajax-documentation

## Interactive features

Smooth section navigation, persistent themes, scroll reveals, project filters, dedicated project pages, and the responsive navbar remain available. A floating back-to-top button appears after scrolling. Animations respect reduced-motion preferences.

The public repository showcase and interactive terminal have been removed. GitHub profile links remain available in the hero, contact section, and footer.
