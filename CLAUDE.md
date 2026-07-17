# Peixoto Terraplenagem — Codebase Documentation

**Last Updated:** July 17, 2026

---

## 1. Project Overview

This is a corporate website for **Peixoto Terraplenagem**, a Brazilian earthwork and civil engineering company specializing in terrain moving services (corte, aterro, compactação, abertura de acessos).

- **Type**: Institutional/Marketing website
- **Language**: Portuguese (Brazilian)
- **Live URL**: https://www.peixototerraplenagem.com.br/
- **Audience**: Business-to-business (B2B); construction and civil engineering professionals
- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript (no frameworks, no build tools)

---

## 2. Technology Stack & Architecture

### Language & Frameworks
- **No JavaScript frameworks** (no React, Vue, Svelte)
- **No CSS preprocessors** (plain CSS3 with custom properties)
- **No build pipeline** (vanilla HTML/CSS/JS)
- **No package manager dependencies** (self-hosted fonts, no npm)

### Key Libraries & Tools
- **None**. The entire site is pure web standards.
- Self-hosted **Montserrat** font (WOFF2, 3 weights: 400, 700, 900)
- Native `IntersectionObserver` for scroll-reveal animations
- FormData API for form handling

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first: baseline 375px viewport
- Progressive enhancement: if JS disabled, forms still validate server-side; scroll-reveal degrades to instant visibility
- Accessibility: WCAG 2.1 AA compliance target (ARIA labels, semantic HTML, focus-visible)

---

## 3. Project Structure

```
/home/user/Projetos/
├── index.html              # Main institutional page
├── privacidade.html        # Privacy policy page
│
├── css/
│   └── styles.css          # Single monolithic stylesheet (~800+ lines)
│       ├── Custom properties (color, spacing, radius)
│       ├── Typography system (h1–h3, .kicker, .small)
│       ├── Layout utilities (.container, .section, .grid)
│       ├── Component styles (.btn, .form, .card, etc.)
│       └── Responsive breakpoints (mobile-first, scales at 768px+)
│
├── js/
│   └── main.js             # Single file for all interactivity (~155 lines)
│       ├── Mobile menu toggle + keyboard close (ESC)
│       ├── Scroll-reveal (IntersectionObserver + .reveal/.is-visible)
│       ├── Form validation (required fields, email regex, LGPD checkbox)
│       └── Form submission states (disabled, "Enviando...", success message)
│
├── assets/
│   ├── favicon.svg         # Brand symbol in SVG
│   └── simbolo.svg         # Logo/symbol alternative
│
├── fonts/
│   ├── montserrat-400.woff2
│   ├── montserrat-700.woff2
│   └── montserrat-900.woff2
│
└── .git/                   # Version control
```

---

## 4. Design System & Branding

### Color Palette
All colors validated for WCAG AA contrast (see CSS variables in `styles.css` lines 32–48).

| Token | HEX | Usage | Contrast (white) |
|-------|-----|-------|------------------|
| `--marrom` | #71411A | Logo, primary buttons, headings, footer | 10.85 |
| `--marrom-hover` | #5A3413 | Hover state for primary buttons | 10.85+ |
| `--verde` | #738C33 | Icons, rules, accents (never button bg + white) | 5.71 |
| `--verde-texto` | #5F742A | Green for text on light backgrounds | 5.23 |
| `--verde-btn` | #627A2E | Secondary button background | 4.84 |
| `--ocre` | #CF8833 | Visual call-outs (labels, filets, numbers) | 5.40 |
| `--cinza` | #333333 | Body text | 12.63 |
| `--fundo-alt` | #FAF9F7 | Alternating section backgrounds | — |
| `--linha` | #E5E5E5 | Borders and separators | — |

### Typography
- **Font Family**: Montserrat (400, 700, 900 weights)
- **Base Size**: 18px on body; scales responsively
- **Headings**: h1 (34px mobile → 48px desktop), h2 (27px → 36px), h3 (22px → 28px)
- **Line Height**: 1.6 for body, 1.15 for headings
- **Max Width**: 65ch for paragraphs (readability)

### Spacing
- **Mobile margins**: `--margem-lateral: 24px`
- **Section gaps**: `--gap-secao: 72px` (mobile) → 120px (desktop)
- **Border radius**: --raio-card: 12px, --raio-botao: 10px, --raio-campo: 8px

---

## 5. Key Components & Patterns

### Header
- **File**: `index.html` lines 70–128
- Sticky navigation (fixed positioning)
- Brand logo + nav links + WhatsApp CTA button (mobile visible)
- Mobile hamburger menu (toggles `.is-open` class)
- Closes on link click, ESC key, or outside click
- ARIA labels for accessibility

### Forms
- **Location**: `index.html` (section #contato)
- **Validation** (js/main.js lines 54–153):
  - Required fields: nome, telefone, cidade
  - Email regex validation: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - LGPD checkbox (consentimento): must be checked
  - Real-time error clearing (on user input)
- **Submit States**:
  - Default: "Solicitar Orçamento"
  - Sending: "Enviando..." (button disabled)
  - Success: "Pedido registrado..." (message in green)
  - Error: Highlights invalid fields in red

### Scroll-Reveal Animation
- **File**: js/main.js lines 36–52
- Elements with `.reveal` class fade in + slide up when scrolled into view
- Uses `IntersectionObserver` (threshold 0.12, bottom margin -40px)
- Respects `prefers-reduced-motion` (instant visibility if enabled)
- Adds `.is-visible` class when triggered

### SEO & Schema.org
- **Structured Data**: Local Business schema in `<script type="application/ld+json">` (index.html lines 44–64)
- **Meta Tags**: 
  - Canonical URL
  - og:title, og:description, og:locale (pt_BR)
  - theme-color, description
- **Self-Hosted Fonts**: Preloaded via `<link rel="preload">` for performance

---

## 6. CSS Architecture

### Naming Convention
Uses a **modified BEM approach** (Block–Element–Modifier):
- **Block**: `.header`, `.nav`, `.btn`, `.form`, `.card`
- **Element**: `.header__inner`, `.nav__link`, `.btn__icon`
- **Modifier**: `.btn--primary`, `.btn--outline`, `.section--alt`, `.is-open`, `.has-error`, `.is-visible`

### Organization (styles.css)
1. **Font faces** (lines 7–28): @font-face declarations for Montserrat
2. **Variables** (lines 30–58): CSS custom properties for colors, spacing, radius
3. **Reset/Base** (lines 60–87): Box-sizing, scroll behavior, focus-visible
4. **Typography** (lines 89–107): h1–h3, .kicker, .small
5. **Layout** (lines 109–131): .container, .section, .rule
6. **Components**: .btn, .nav, .form, .card (organized by visual hierarchy)
7. **Utilities**: .visually-hidden, .text-center, etc.
8. **Responsive**: Media queries at 768px, 1024px, 1440px (mobile-first)

### Key Utilities
- `.visually-hidden`: Screen-reader-only content (a11y skip link)
- `.container`: Max-width 1440px, centered, padding
- `.section`: Vertical rhythm (var(--gap-secao))
- `.reveal / .is-visible`: Scroll-reveal animation trigger

---

## 7. JavaScript Interactivity

### Entry Point
- **File**: js/main.js
- **Size**: ~155 lines
- **Approach**: IIFE (Immediately Invoked Function Expression) with "use strict"

### Modules (as of current version)

#### 1. Mobile Menu (lines 9–34)
```javascript
// Toggles .is-open on mobile menu
// Closes on link click, ESC key
// Updates aria-expanded, aria-label
```
- Targets: `.hamburger` button, `#mobile-menu` element
- Events: click, keydown (ESC)
- Side effects: Updates ARIA attributes

#### 2. Scroll-Reveal (lines 36–52)
```javascript
// IntersectionObserver-based fade-in/slide-up on scroll
// Respects prefers-reduced-motion
// Fallback for older browsers
```
- Targets: all `.reveal` elements
- Adds: `.is-visible` class when in view
- Respects: Motion preference (reduces animation if disabled)

#### 3. Form Validation (lines 54–153)
```javascript
// Real-time validation; prevents submission on error
// Validates: nome, telefone, cidade (required)
//            email (regex)
//            consent checkbox (LGPD)
// UX: Highlights invalid fields, focuses first error
```
- Targets: `#form-orcamento`
- Functions:
  - `validEmail()`: Email regex checker
  - `validate()`: Runs all validations
  - `setFieldError()`: Toggles .has-error class
- **Note**: Backend integration required (see lines 131–144 comment)

---

## 8. Placeholders to Replace Before Launch

The HTML contains templated placeholders (marked with `<span class="ph">` or `[PLACEHOLDER]`):

| Placeholder | Location | Purpose |
|-------------|----------|---------|
| `[CIDADE/UF]` | index.html + meta tags | City/state where company is based |
| `[REGIÃO]` | index.html | Service area (e.g., "Vale do Paraíba") |
| `[ANO]` | Schema.org foundingDate | Company founding year |
| `550000000000` | WhatsApp links | **Replace ALL with real phone** (55+DDD+number) |
| `[E-MAIL]` | Schema.org, forms | Contact email |
| `[@INSTAGRAM]` | Social links | Instagram handle |
| `[CNPJ]` | Business info section | CNPJ number |
| `[DD/MM/AAAA]` | privacidade.html | Privacy policy date |
| `.ph-img` / `.hero__media` | Asset comments | Hero images (replace with WebP) |

**Search index.html for all `.ph` classes and `[PLACEHOLDER]` tokens** to complete before deployment.

---

## 9. Form Backend Integration

**Currently**: Form validation is frontend-only; submission simulates success (900ms delay).

**Next Step**: Choose one backend option (briefing section 11):

### Option A: Netlify Forms
```html
<!-- Add to <form>: data-netlify="true" -->
<input type="hidden" name="form-name" value="orcamento">
<!-- Remove preventDefault, let native submit work -->
```

### Option B: Formspree / Web3Forms
```javascript
fetch(form.action, {
  method: "POST",
  body: new FormData(form),
  headers: { Accept: "application/json" }
})
```

### Option C: Google Apps Script
```javascript
// POST to published Web App URL
// Script writes to Sheet, sends WhatsApp notification
fetch("https://script.google.com/macros/d/[ID]/usercontent", ...)
```

**⚠️ WARNING**: Do not deploy to production without connecting backend — form submissions will be lost.

---

## 10. Development Workflow & Git

### Branch Strategy
- **Current branch**: `claude/claude-md-documentation-qz7kwy`
- **Main branch**: Track latest stable version
- Commits follow conventional format: short, descriptive messages in Portuguese or English

### Recent Commits
```
f792454 Reconstrói site institucional da Peixoto Terraplenagem seguindo o briefing
4e79309 Update: Change color scheme to green theme
bb3196c Initial commit: Create institutional website for terraplenagem company
99527df Cria site institucional para empresa de terraplenagem
```

### Deployment
- **Static hosting**: Netlify, Vercel, or GitHub Pages (no build step required)
- **CDN**: Recommended for assets (favicon, fonts may be cached)
- **Performance**: Self-hosted fonts ensure zero external dependencies

---

## 11. Accessibility & Performance

### Accessibility Checklist
- ✅ Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`)
- ✅ ARIA labels on interactive elements (buttons, menus, form fields)
- ✅ Focus-visible outlines (3px solid marrom)
- ✅ Keyboard navigation (ESC to close menu, Tab to cycle)
- ✅ Color contrast validated (WCAG AA for all text)
- ✅ Skip link for screen readers (`.visually-hidden`)
- ✅ Alt text on images (to be completed during image replacement)
- ✅ Form labels associated with inputs
- ⚠️ **To-do**: Add aria-describedby for error messages
- ⚠️ **To-do**: Verify video captions (if media added)

### Performance Optimization
- **Self-hosted fonts**: WOFF2 + font-display: swap (no layout shift)
- **Preload**: Critical font weights preloaded via `<link rel="preload">`
- **No dependencies**: Zero npm install time, no bundler overhead
- **Lazy loading**: Consider adding `loading="lazy"` to below-fold images
- **CSS**: Single stylesheet (no HTTP requests after parse)
- **JS**: Single file (~155 lines), vanilla (no parse/eval overhead)
- **Meta**: Viewport configured for mobile-first (375px baseline)

### Core Web Vitals Targets
- **LCP**: <2.5s (optimize hero image size, preload fonts)
- **FID**: <100ms (JS is minimal; should pass easily)
- **CLS**: <0.1 (avoid layout shifts; fonts preloaded)

---

## 12. Common Tasks & Solutions

### Add a New Section
1. Copy a `.section` block in HTML (index.html)
2. Add class `.section--alt` if you want alternating background
3. Use `.container` for max-width + padding
4. Add `.reveal` class to elements for scroll animation
5. Update nav links in `<header>` if adding new anchor

### Modify Colors
1. Edit CSS custom properties (styles.css lines 32–48)
2. Test contrast ratio: use a WCAG contrast checker
3. If changing green/ocre, re-validate button combinations
4. Avoid using green for button background + white text (4.84 ratio, borderline)

### Update Hero Images
1. Replace `.hero__media` / `.ph-img` blocks with `<img src="path/image.webp" alt="...">`
2. Use WebP format (smaller file size, modern browser support)
3. Provide 2x srcset for high-DPI screens: `srcset="image.webp 1x, image@2x.webp 2x"`
4. Set explicit width/height to prevent CLS

### Add a New Page
1. Copy `privacidade.html` structure
2. Keep `.header` consistent (same CSS class, nav link)
3. Import `css/styles.css` for consistent styling
4. Use same document structure: `<header>`, `<main>`, `<footer>`

### Test Mobile Menu
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Click hamburger icon
4. Verify `.is-open` class on `#mobile-menu`
5. Close via link click, ESC key, or menu button again

---

## 13. Debugging & Troubleshooting

### Issue: Scroll-reveal not triggering
- Check if element has `.reveal` class
- Verify IntersectionObserver support (modern browsers only)
- Check browser console for JS errors
- Try lowering threshold or adjusting `rootMargin` in observer options (line 50)

### Issue: Form not submitting
- Open DevTools Console (check for errors)
- Verify form `id="form-orcamento"` exists
- Check that backend URL is configured (currently undefined; see section 9)
- Test validation: ensure all required fields are filled
- Check LGPD checkbox; it's required to submit

### Issue: Colors look wrong
- Verify hex values in CSS match the intended palette
- Check if browser is in dark mode (CSS doesn't have dark theme overrides)
- Test with DevTools color picker
- Ensure font-smoothing: `-webkit-font-smoothing: antialiased` is not overridden

### Issue: Mobile menu stuck open
- Press ESC key (close on Escape is built-in)
- Check if event listener is attached (js/main.js line 20)
- Verify `.is-open` class is being toggled (DevTools Elements panel)

---

## 14. AI Assistant Guidelines

### When Modifying HTML
- Preserve semantic structure (`<section>`, `<article>`, `<nav>`)
- Keep ARIA labels and attributes
- Don't remove `.reveal` classes (used for scroll animation)
- Maintain skip-link functionality (`<a class="visually-hidden" href="#conteudo">`)
- Test after changes with keyboard (Tab, Enter, ESC)

### When Modifying CSS
- Use CSS custom properties for repeated values
- Follow mobile-first approach (base styles first, media queries after)
- Maintain contrast ratios (WCAG AA minimum 4.5:1 for text)
- Avoid custom scrollbars (harm UX on some devices)
- Test at 375px, 768px, and 1440px breakpoints

### When Modifying JavaScript
- Use vanilla API only (no jQuery, no frameworks)
- Keep IIFE structure for scope isolation
- Add `"use strict"` at function start
- Use `const`/`let` (no `var`)
- Comment non-obvious logic (e.g., why -40px rootMargin on observer)
- Test form validation: empty, invalid email, unchecked LGPD

### Deployment Checklist
- [ ] All `[PLACEHOLDER]` tokens replaced (site-wide)
- [ ] WhatsApp number updated in all links (550000000000 → real)
- [ ] Hero images replaced with WebP (favicon.svg, simbolo.svg OK)
- [ ] Privacy policy date updated (privacidade.html)
- [ ] Form backend connected (section 9)
- [ ] Meta tags reviewed (title, description, og:*)
- [ ] Links tested (internal anchors, external URLs, mailto/tel/wa.me)
- [ ] Mobile menu tested (open/close, keyboard)
- [ ] Form tested (validation, submission, success state)
- [ ] Fonts loaded (no FOUT; preload working)
- [ ] Lighthouse audit run (>90 on all metrics)
- [ ] Wave accessibility audit run (zero errors)

---

## 15. References & Resources

### Tools & Standards
- **Validation**: [W3C HTML Validator](https://validator.w3.org/), [WAVE Accessibility](https://wave.webaim.org/)
- **Performance**: [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/)
- **Design**: [Figma](https://figma.com/) (if available), color checker [Contrast Ratio](https://www.contrastchecker.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (for alternatives to Montserrat)

### Further Reading
- [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 16. Contact & Support

- **Repository**: [guilhermeopaixao2-arch/Projetos](https://github.com/guilhermeopaixao2-arch/Projetos)
- **Live Site**: https://www.peixototerraplenagem.com.br/
- **Owner Email**: guilhermeopaixao2@gmail.com

---

**Document Version**: 1.0 | **Last Updated**: July 17, 2026 | **Maintained by**: Claude Code
