---
name: Squadstorm public website
description: Squadstorm's game identity applied to its landing page and privacy policy.
colors:
  navy-arena: "#0b2038"
  pale-text: "#f4f8ff"
  muted-text: "#bdd0e1"
  divider: "#486781"
  action-orange: "#ffac60"
  action-hover: "#ffc38d"
  action-ink: "#101f33"
  panel-navy: "#193652"
typography:
  display:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(48px, 5.8vw, 76px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "clamp(36px, 4vw, 52px)"
    fontWeight: 700
    lineHeight: 1.08
  title:
    fontFamily: "Barlow Condensed, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.45
  button-label:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1.65
rounded:
  icon: "8px"
  control: "12px"
  campaign: "16px"
spacing:
  paragraph: "16px"
  mobile-gutter: "20px"
  compact-gap: "24px"
  grid-gap: "32px"
  desktop-gutter: "40px"
  column-gap: "60px"
components:
  button-primary:
    backgroundColor: "{colors.action-orange}"
    textColor: "{colors.action-ink}"
    typography: "{typography.button-label}"
    rounded: "{rounded.control}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.action-ink}"
  inline-link:
    textColor: "{colors.action-orange}"
  offline-panel:
    backgroundColor: "{colors.panel-navy}"
---

# Design System: Squadstorm public website

## Overview

**Creative North Star: "Squadstorm's navy arena"**

Squadstorm's navy arena carries through to the website: pale readable text, orange actions, condensed bold headings, and real game imagery. The landing page uses open sections and generous gaps; the privacy page uses the same identity in a narrower reading column.

Scope: the static landing page and privacy policy in this directory. Extracted from `styles.css`, `index.html`, and `privacy.html`; this does not define the game's interface or the parent website.

**Key Characteristics:**
- Real campaign artwork and gameplay captures.
- Navy surfaces, orange actions, and pale text.
- Bold condensed headings with system body text.
- Open sections and restrained interaction.

## Colors

Warm orange signals actions against the game's dark navy world. Frontmatter values are normative.

### Primary
- **Action orange:** primary buttons, emphasized hero wording, availability text, policy links, selection, and focus outlines.
- **Action hover:** the lighter button background on hover.

### Neutral
- **Navy arena:** the page background.
- **Panel navy:** the full-width offline section, providing tonal separation.
- **Pale text:** headings and primary reading text.
- **Muted text:** descriptions, captions, effective date, and footer.
- **Action ink:** dark text on orange surfaces.
- **Divider:** footer and policy-header rules.

## Typography

Headings and the brand use locally bundled Barlow Condensed Bold with system fallbacks. Body copy and controls use the system stack. The condensed type carries the game's direct arcade voice; regular body text keeps explanations and policy paragraphs readable.

The frontmatter records desktop hierarchy. Body paragraphs are capped at (62ch); policy paragraphs at (68ch). Gameplay descriptions use (16px); header links use (15px); footer and supporting section labels use (14px). The policy title uses `clamp(44px, 6vw, 64px)` and policy subheadings use (29px).

At widths up to (600px), the landing title becomes (52px), lead copy (20px), gameplay titles (27px), and gameplay descriptions (15px) with line height (1.55). At widths up to (360px), the landing title becomes (46px) and gameplay titles (25px).

## Layout

The shared wrapper has a maximum width of (1184px), centered with border-box sizing and (40px) horizontal padding. Padding becomes (24px) at (800px), (20px) at (600px), and (16px) at (360px). The privacy wrapper is capped at (820px).

Campaign artwork spans the wrapper. Introduction and offline content use two columns in a (1.12fr / 1fr) ratio with a (60px) gap; at (800px), they become equal columns with a (32px) gap, then stack at (600px). Gameplay uses three equal columns with (32px) gaps, narrowing to (20px) at (800px). At (600px), the three figures stack with (44px) gaps, each pairing its portrait image and caption in equal side-by-side columns with a (20px) gap.

Sections stay spacious: introduction padding (56px / 80px), offline padding (60px), support padding (72px), and gameplay bottom space (84px). Mobile equivalents reduce to (32px / 52px), (44px), (48px), and (52px). Support stacks at (800px). Header navigation remains inline; the Gameplay link is hidden at (600px). Footer navigation wraps naturally.

## Elevation & Depth

There are no shadows. The lighter navy offline band separates content; real artwork supplies visual depth. Thin dividers organize the footer and policy header without enclosing sections in cards.

## Shapes

The brand icon has lightly rounded corners; actions and gameplay images share a medium radius. Campaign artwork uses the largest radius, reducing to the control radius at (600px). Images retain their native proportions. Sections otherwise remain open and rectangular.

## Components

### Buttons

Confident orange anchor controls use the primary tokens, an inline flex layout, and minimum height (52px). Hover lightens the background with a (0.15s ease) transition. All links receive an orange (3px) focus outline offset by (6px). Reduced motion removes the transition. No separate active, disabled, or loading styles are implemented.

### Navigation

The compact header pairs the icon and condensed brand wordmark with un-underlined system links. Link padding is (10px) vertically and desktop navigation gaps are (28px). Hover turns text orange. The footer uses muted, underlined links and the same focus treatment. The skip link appears at the top left when focused.

### Gameplay figures

Three real portrait captures lead into condensed titles and muted descriptions. They have no card surface, border, or shadow. Captures are linked to the full image; keyboard focus is visible around the linked image. Desktop caption space is (24px), with description space (12px); mobile captions align beside images.

### Offline band and policy prose

The offline band uses the panel tone and the introduction's two-column rhythm. Its policy link is orange. Privacy content stays in an open reading column, with (34px) before section headings and (12px) after them; links remain orange and underlined.

## Do's and Don'ts

### Do:
- Do use the existing campaign artwork and actual gameplay captures.
- Do keep headings in Barlow Condensed and explanatory text in the system stack.
- Do preserve visible orange keyboard focus and reduced-motion support.
- Do keep privacy text in the narrower reading column.

### Don't:
- Don't add shadows, floating cards, or decorative gradients to this documented page system.
- Don't crop gameplay captures into decorative tiles; retain their portrait proportions.
- Don't introduce new fonts or accent colors without revisiting the brand commitments.
