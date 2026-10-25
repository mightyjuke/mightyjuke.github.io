---
name: Stairs Rush Reloaded — The Deep
description: The game's underground pixel world extended into a clear marketing and privacy site.
colors:
  bg: "#100d25"
  surface: "#1b1636"
  ink: "#fff0fc"
  muted: "#c8b9db"
  pink: "#ff85cb"
  cyan: "#79edf2"
  rule: "#4b3c64"
  pink-hover: "#ffb2df"
  tab-hover: "#251d44"
  download: "#30203d"
  metal: "#c9b8ff"
  wood: "#8ee3ac"
  water: "#7ddafa"
  fire: "#ff9c7d"
  earth: "#e5bf83"
typography:
  display:
    fontFamily: "Pixelify, system-ui, sans-serif"
    fontSize: "clamp(58px, 6.7vw, 96px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Pixelify, system-ui, sans-serif"
    fontSize: "clamp(40px, 4.3vw, 62px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-.025em"
  title:
    fontFamily: "Pixelify, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.5vw, 48px)"
    fontWeight: 600
    lineHeight: 1.05
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.55
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: 1.3
  label:
    fontFamily: "Pixelify, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 500
rounded:
  control: "8px"
  campaign: "12px"
  mobile-icon: "16px"
  download-icon: "28px"
spacing:
  compact: "12px"
  paragraph: "16px"
  control: "22px"
  base: "24px"
  group: "28px"
  row: "32px"
  section: "48px"
  columns: "60px"
  section-wide: "88px"
  gutter: "clamp(20px, 5vw, 72px)"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.pink-hover}"
    textColor: "{colors.bg}"
  navigation:
    textColor: "{colors.ink}"
    padding: "10px 0"
  realm-tab:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "14px 8px"
  realm-tab-selected:
    textColor: "{colors.cyan}"
  support-link:
    textColor: "{colors.ink}"
    padding: "16px 0"
  policy-summary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "24px"
---

# Design System: Stairs Rush Reloaded

## Overview

**Creative North Star: "The Deep"**

The Deep extends the existing underground game world into an artwork-led website. Midnight violet grounds pearl pixel headings, pink actions and cyan navigation accents; generous open sections let the campaign, real gameplay and pilot sprites carry the character.

Pixelify provides the game's voice while Barlow keeps explanatory and policy text comfortable to read. This scoped system belongs to the Stairs Rush Reloaded landing and privacy pages; it does not redefine the developer hub or other games.

**Key Characteristics:**

- Existing game artwork and real gameplay as the visual evidence.
- Open, flat sections with restrained tonal layering.
- Pixel display type paired with readable, locally hosted body type.
- Keyboard-visible controls and responsive reading layouts.

## Colors

The palette comes from the game's underground world; the frontmatter is the normative value reference.

- **Primary — Pink:** primary download actions, the emphasized hero word, brand subtitle and small directional accents. The lighter pink is the button hover state.
- **Secondary — Cyan:** links, selected realm tabs, control arrows and keyboard focus rings.
- **Tertiary — Realm accents:** Metal lavender, Wood green, Water blue, Fire coral and Earth gold identify each realm's mechanic copy.
- **Neutral:** midnight `bg` for the page; violet `surface` for the realm field guide and policy summary; pearl `ink` for headings and primary copy; lavender `muted` for explanatory text; `rule` for dividers. `download` adds a warmer violet section, and `tab-hover` supplies the restrained tab hover fill.

## Typography

Both fonts are local assets: `assets/PixelifySans.ttf` (registered as Pixelify, weights 400–700) and `assets/Barlow-Medium.ttf` (Barlow, weight 500). Both use `font-display: swap` and system sans-serif fallbacks.

Pixelify sets display, section and realm headings, realm labels and pilot names. Barlow handles navigation, actions, descriptions and policy prose. The frontmatter records the desktop roles. Paragraphs cap at (65ch); realm explanations use a tighter measure (32ch), widening to (40ch) on phones.

At (600px) and below, body text becomes (18px), the hero heading (64px), lead copy (22px) and realm tabs (19px). At (360px) and below, the hero becomes (56px) and tabs (18px). Policy headings use a separate hero scale (`clamp(44px, 6vw, 72px)`), with section headings (30px), becoming (28px) on phones. Pilot names use (21px), then (22px) on phones; fine-print notices remain (13–14px).

## Layout

The shared wrapper caps at (1280px), with the fluid `gutter` token. The landing alternates open background and full-width tonal sections. Desktop introduction, section introductions, pilot footer and support use a (1.1fr / 1fr) grid with the `columns` gap. Realm panels pair a portrait image with copy (1fr / 1.1fr, 10% gap); the image caps at (300px). The download block pairs an icon and copy (200px / 1fr, 56px gap) inside a (1000px) cap.

- At (900px) and below: shared column gaps reduce to (32px), pilots move from eight to four columns, realm images cap at (260px), and the download grid narrows.
- Between (601px) and (800px): introduction, section introductions and support stack; the hero line break is removed while its adjacent space remains; realm content stays in two columns with a (28px) gap.
- At (600px) and below: main grids stack; realm images cap at (246px); pilots become two columns; the download icon becomes (88px); the first header navigation item is hidden; footer content wraps. The campaign keeps its full (1024 / 500) aspect ratio.
- At (360px) and below: the header, button and type tighten, while the two-column pilot lineup remains.
- At (1600px) and above: the introduction's bottom spacing expands to (100px).

The privacy page uses the shared shell and a narrower reading wrapper (920px maximum including gutters), with (48px) top and (72px) bottom padding. Its summary box, wrapping section links, section spacing and breakable URLs support long reading on phones. At (600px) and below the top padding becomes (30px) and the summary padding (20px).

## Elevation & Depth

The page relies on tonal section backgrounds, open space and thin dividers. Only gameplay images carry an ambient shadow (`0 18px 50px #09071980`), which separates the portrait capture from the realm background. Buttons and text sections stay flat. The primary button's background transition lasts (.16s ease); reduced-motion preference disables smooth scrolling, transitions and animations.

## Shapes

Gently rounded controls, summary boxes and gameplay screenshots use `control`; the campaign uses `campaign` and reduces to the control radius on phones. The download icon uses the larger icon radius, reducing on phones. Dividers are (1px); the selected realm indicator is (3px). Pilot sprites retain crisp pixel rendering and have no enclosing cards.

## Components

- **Primary action:** pink fill, dark text, (54px) minimum height, inline arrow and compact rounding. Hover uses lighter pink. Links and buttons expose a cyan (3px) focus outline with (6px) offset; the skip link moves into view on focus.
- **Navigation:** a compact app-icon wordmark plus plain text links; the download link receives pink emphasis. Privacy uses the same shell and an explicit return to the game.
- **Realm field guide:** five equal-width native anchor links sit above image-and-copy panels. JavaScript progressively assigns tablist/tab/tabpanel roles, `aria-controls`, `aria-labelledby`, selected state and roving tab stops. Left/Right wrap; Home/End jump; Space activates. The selected hash is preserved; direct hashes select their panel. Without JavaScript all five realm articles remain visible and the anchors scroll to them.
- **Pilot lineup:** eight transparent pixel sprites with centered names and skills. The eight/four/two-column progression preserves readable captions and visual breathing room.
- **Download availability:** the hero includes “Previewing v1.3.5 (47) · Update in testing.” The store block explicitly says the public App Store currently offers an earlier release and Android is in testing. These visible notices distinguish the showcased art from availability.
- **Policy reading:** plain paragraphs and lists, restrained section headings, a tonal summary and wrapping jump navigation. Inline policy links are cyan; URLs may wrap anywhere.
- **Support rows:** full-width text-and-arrow links separated by a thin rule; the arrow is pink and decorative.

The shipping imagery is local: `assets/feature.webp` is the existing campaign; `metal.webp`, `wood.webp`, `water.webp`, `fire.webp` and `earth.webp` are actual version 1.3.5 build 47 gameplay captures (540 × 960). Each gameplay image opens its full asset. The campaign and gameplay WebPs have sibling provenance JSON files. `copper.png`, `moss.png`, `surveyor.png`, `rivet.png`, `cinder.png`, `volt.png`, `aurora.png` and `blush.png` are the pilot lineup (208 × 208). `icon.png` is the shared app icon; `share.png` supplies social metadata. No generated composition establishes this design.

## Do's and Don'ts

### Do:

- Do preserve the campaign image's full proportions and the gameplay screenshots' portrait framing.
- Do use pink for primary actions, cyan for selected tabs and links, and the realm accents for their own mechanic copy.
- Do keep the build-preview note readable beside the hero action and the store-availability explanation beside the store action.
- Do preserve the keyboard tab pattern, skip link, no-JavaScript realm content and reduced-motion behavior.
- Do use locally hosted fonts and existing game assets.

### Don't:

- Don't add a decorative card grid around the open game sections.
- Don't apply pixel fonts to long policy paragraphs or remove the readable body measure.
- Don't imply that the showcased build 47 is already the version offered by the App Store.
- Don't scale the pilot sprites with smoothing or crop away the gameplay controls.
