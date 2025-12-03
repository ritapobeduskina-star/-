# Design Guidelines: Renaissance Visual Novel - Il Cambiavalute di Firenze

## Design Approach

**Selected Framework:** Reference-Based - Pentiment + Disco Elysium + Museum Exhibition Design
**Justification:** Narrative-driven experience where historical authenticity and atmospheric immersion are paramount. Drawing from Obsidian's Pentiment for period-accurate medieval aesthetics, Disco Elysium for text-heavy dialogue presentation, and museum design principles for educational content display.

**Core Principles:**
- Authentic period aesthetics over modern polish
- Text as centerpiece - typography carries the experience
- Tactile, tangible interface elements (parchment, leather, marble)
- Reverence for historical detail without sacrificing playability

## Typography System

**Font Stack:** 
- Primary: Cinzel (Google Fonts) for headings, game title, chapter markers - weights 400, 600, 700
- Body: EB Garamond (Google Fonts) for all dialogue, narration, choices - weights 400, 500, 600
- UI Elements: Cormorant Garamond for labels, stats, metadata - 500, 600 weight
- Numbers: Cormorant SC (small caps) for currency amounts, dates

**Hierarchy:**
- Game title: text-5xl to text-6xl Cinzel 700
- Chapter/location headers: text-3xl Cinzel 600
- Dialogue text: text-lg to text-xl EB Garamond 400, leading-relaxed
- Choice buttons: text-base EB Garamond 500
- Stats/UI labels: text-sm Cormorant uppercase tracking-wider
- Results comparison text: text-base EB Garamond 400

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12 (p-4, gap-6, py-8, m-12)
- Screen padding: px-8 py-12 for main content areas
- Component spacing: p-6 for dialogue boxes, p-8 for major panels
- Choice button gaps: space-y-4 between options
- Border ornamental spacing: p-12 around decorative frames

**Viewport Strategy:**
- Welcome screen: Full viewport (min-h-screen) with centered content
- Game screen: Fixed structure - top stats bar (h-20), main dialogue area (flex-1), bottom choice panel (auto-height)
- Results screen: Scrollable full-page layout with sections

## Component Library

### Welcome Screen
**Layout:** Centered single-column (max-w-4xl)
- Ornamental border frame wrapping entire content (Renaissance manuscript border pattern)
- Game title prominently centered with decorative flourish underneath
- Subtitle text beneath title: "Una Storia di Finanza e Fortuna"
- Primary action button: "Inizia il Viaggio" (large, ornate)
- Secondary menu: Credits, Settings (smaller text links below)

### Game Screen (Primary Interface)

**Top Status Bar (sticky):** 
- Left: Player name/title in decorative cartouche
- Center: Current chapter/location
- Right: Two stat indicators with icons - Florins (coin icon + amount) and Reputazione (star icon + level)
- Height: h-20, subtle bottom border

**Main Dialogue Panel:**
- Center-aligned container (max-w-3xl) with parchment texture treatment
- Speaker name (if NPC): text-xl Cinzel 600, small decorative line underneath
- Dialogue text: text-lg to text-xl leading-relaxed, text-justify, generous padding (p-8 to p-12)
- Narrative text: Italicized when appropriate
- Maximum 15-20 lines visible before needing scroll

**Choice Panel (bottom):**
- Full-width container with inset styling (appears recessed into interface)
- 2-4 choice buttons stacked vertically (space-y-4)
- Each choice: Full-width rounded-lg button with left-aligned text, height h-16 to h-20
- Choice text: Multi-line supported, text-base EB Garamond
- Consequence hint: text-xs italic below choice text (e.g., "Risky but profitable")
- Right-aligned choice indicators: Small icons showing stat impacts (coin +/-, reputation arrow)

**Side Elements (desktop only):**
- Left margin: Decorative manuscript illumination (fixed position)
- Right margin: Small historical note tooltip that appears contextually

### Progress/Stats Detailed View (Modal/Overlay)
- Centered panel (max-w-2xl) with ornate border
- Section headers: "Il Tuo Registro" (Your Ledger)
- Two-column layout: Left (financial stats), Right (reputation/achievements)
- Each stat line: Label + decorative separator + Value, using tabular numbers
- Transaction history: Scrollable list with date, description, amount change

### Final Results Screen

**Header Section:**
- Full-width centered title: "La Fine del Viaggio"
- Player's final standing/title earned (text-2xl Cinzel)
- Total wealth and reputation summary

**Results Grid (two-column on desktop):**
- Left column: Player's journey statistics - key decisions made, wealth accumulated, relationships formed
- Right column: Historical context cards

**Educational Comparison Section:**
- Section header: "Dagli Strumenti del Passato al Presente"
- Card grid layout (2 columns on desktop, single on mobile)
- Each card: Renaissance instrument (top) → Modern equivalent (bottom)
- Examples: "Lettera di Cambio → Wire Transfer", "Libro Mastro → Blockchain Ledger"
- Card structure: Icon/illustration + term + brief description (text-sm)

**Replay/Share Actions:**
- Bottom section with two primary buttons: "Ricomincia" and "Condividi Risultati"

### Settings/Pause Menu
- Modal overlay (max-w-lg)
- Options: Text speed slider, Audio volume, Language selection, Return to main menu
- Clean list layout with toggle switches and sliders

## Images

**Welcome Screen:**
- Large atmospheric background: Renaissance Florence skyline with Duomo, Palazzo Vecchio (full-viewport, subtle overlay for text readability)
- Decorative manuscript border overlay (PNG with transparency)

**Game Screen:**
- Subtle parchment/vellum texture as background (tiled seamlessly)
- Character portraits (circular vignette style, 200x200px) appear left-aligned when NPCs speak
- Decorative corner flourishes (Renaissance scrollwork)

**Results Screen:**
- Small illustrative icons for each financial instrument comparison (64x64px)
- Optional: Period-accurate woodcut-style illustrations for major achievements

**Contextual Images:**
- Location establishing shots (Mercato Vecchio, Medici Palace) fade in when locations change
- Historical document reproductions for key story moments

## Accessibility
- High contrast text-to-background ratios (readable over parchment texture)
- Keyboard navigation: Tab through choices, Enter to select, Esc to pause
- Screen reader: All choices announced with consequence hints
- Font size adjustment in settings (affects all text uniformly)
- Skip dialogue option for replays

## Animations
**Minimal, period-appropriate:**
- Screen transitions: Cross-fade (400ms) between scenes
- Dialogue text: Gentle fade-in per paragraph (300ms), no typewriter effect
- Choice hover: Subtle lift transform (2px) + slight shadow depth (150ms)
- Stat changes: Number increment animation when values change (500ms)
- Modal entry: Fade + scale from 0.95 (250ms)
- No scroll-based or parallax effects