---
name: Vibrant Admin
colors:
  surface: '#fff8f5'
  surface-dim: '#ead6c9'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e9'
  surface-container: '#ffeadd'
  surface-container-high: '#f9e4d7'
  surface-container-highest: '#f3dfd1'
  on-surface: '#241912'
  on-surface-variant: '#564334'
  inverse-surface: '#3a2e25'
  inverse-on-surface: '#ffede3'
  outline: '#897362'
  outline-variant: '#ddc1ae'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#ff8c00'
  on-primary-container: '#623200'
  inverse-primary: '#ffb77d'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#00658f'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b5fc'
  on-tertiary-container: '#004360'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#c7e7ff'
  tertiary-fixed-dim: '#85cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6c'
  background: '#fff8f5'
  on-background: '#241912'
  surface-variant: '#f3dfd1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  status-badge:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  page-margin: 1rem
  stack-gap: 1rem
  card-padding: 1.25rem
  inline-gutter: 0.75rem
  section-padding: 2rem
---

## Brand & Style

The design system is engineered for high-performance administration, focusing on clarity, urgency, and professional reliability. The aesthetic follows a **Modern Corporate** style with a focus on high-energy interactions driven by a vibrant primary accent. It balances utility with a sophisticated visual layer to prevent "dashboard fatigue" during extended use.

The user experience should feel fast and authoritative. We utilize a "clean-room" approach: maximum white space to reduce cognitive load, punctuated by purposeful color pops that direct the user’s attention to actionable data and critical system statuses.

## Colors

The primary driver is **Vibrant Orange (#FF8C00)**, used exclusively for primary actions, active navigation states, and progress indicators. This is contrasted against a deep **Charcoal Secondary (#1F2937)** used for text and iconography to ensure high legibility.

The neutral palette is biased toward cool grays to keep the interface feeling crisp. **Gray-50** serves as the primary canvas background, while **Gray-100** and **Gray-200** define the boundaries of cards and input fields. 

Status colors are saturated and distinct:
- **Success (Green):** Positive growth, completed tasks, system healthy.
- **Warning (Amber):** Pending actions, approaching limits.
- **Critical (Red):** System errors, failed transactions, immediate attention required.

## Typography

This design system utilizes a dual-sans-serif pairing to distinguish between data visualization and interface navigation. 

**Manrope** is used for headings and numerical data displays (KPIs). Its slightly wider proportions and modern geometric construction make large figures feel impactful.

**Inter** is the workhorse for all functional UI elements, body text, and labels. It is chosen for its exceptional legibility at small sizes and its neutral, systematic tone. All labels for secondary information should use `label-caps` in uppercase to create clear visual hierarchy against body text.

## Layout & Spacing

This design system employs a **Fluid Grid** model optimized for mobile-first administration. The base unit is 4px, but the primary rhythm follows an 8px increment (0.5rem).

- **Margins:** A consistent 16px (1rem) margin is applied to the left and right of the viewport.
- **Vertical Rhythm:** Components are stacked with 16px gaps. Grouped sections (like a collection of cards) are separated by 32px of vertical whitespace.
- **Safe Areas:** Ensure the bottom navigation bar accounts for the device safe area (e.g., iPhone Home Indicator) with an additional 8px of internal top padding for the icons.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal layering. 

- **Surface Layer (Level 0):** Background uses `#F9FAFB`.
- **Card Layer (Level 1):** White cards (`#FFFFFF`) use a very soft, diffused shadow: `0px 4px 12px rgba(0, 0, 0, 0.05)`. This creates a subtle lift without feeling heavy.
- **Floating Layer (Level 2):** Bottom navigation bars and modals use a more pronounced shadow: `0px -2px 10px rgba(0, 0, 0, 0.08)` to indicate they sit above the primary scroll content.

Borders should be used sparingly, primarily as a 1px solid stroke in `Gray-100` for cards to define edges on high-brightness screens.

## Shapes

The shape language is consistently **Rounded**, reflecting a modern and accessible software feel.

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Large Cards:** 1rem (16px) corner radius for a softer, more distinct container appearance.
- **Status Badges:** Use a fully rounded (pill) style to distinguish them from interactive buttons.
- **Search Bars:** Should utilize the pill shape (2rem) to create a clear functional distinction from form inputs.

## Components

### Buttons
- **Primary:** Solid vibrant orange with white text. High emphasis.
- **Secondary:** Transparent background with an orange border and orange text.
- **Ghost:** Gray-600 text, no background or border, used for low-priority actions.

### Cards
Cards are the primary data container. They must include a `card-padding` of 20px. Headers within cards should use `headline-md` and can optionally include a "View All" ghost button in the top right.

### Status Badges
Badges use a "Soft Fill" style: a 10% opacity version of the status color for the background, and the 100% solid color for the text (e.g., Success badge is light green background with dark green text).

### Bottom Navigation
The navigation bar is fixed to the bottom, featuring a white background and a subtle top border.
- **Active State:** Icon and label colored in Vibrant Orange.
- **Inactive State:** Icon and label in Gray-400.
- **Interaction:** Include a 4px orange top-bar "indicator" above the active icon for additional visual feedback.

### Input Fields
Inputs use a white background with a 1px `Gray-200` border. On focus, the border transitions to `Primary Orange` with a 2px outer glow (10% primary color opacity). Labels sit 8px above the input field in `label-caps` style.