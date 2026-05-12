---
name: Warm Professionalism
colors:
  surface: '#fff8f6'
  surface-dim: '#ecd6cc'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#ffeae1'
  surface-container-high: '#fae4da'
  surface-container-highest: '#f4ded5'
  on-surface: '#241914'
  on-surface-variant: '#584238'
  inverse-surface: '#3b2e28'
  inverse-on-surface: '#ffede6'
  outline: '#8b7266'
  outline-variant: '#dfc0b3'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff7e36'
  on-primary-container: '#642600'
  inverse-primary: '#ffb693'
  secondary: '#a04100'
  on-secondary: '#ffffff'
  secondary-container: '#ff8849'
  on-secondary-container: '#6b2900'
  tertiary: '#006780'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b1da'
  on-tertiary-container: '#003f4f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a3000'
  tertiary-fixed: '#b8eaff'
  tertiary-fixed-dim: '#52d5ff'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004d61'
  background: '#fff8f6'
  on-background: '#241914'
  surface-variant: '#f4ded5'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar_width: 240px
  container_padding: 32px
  gutter: 24px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 24px
---

## Brand & Style

The design system is anchored in a philosophy of "Warm Professionalism." It moves away from the cold, clinical nature of traditional enterprise SaaS by utilizing a palette inspired by natural earth tones and organic warmth. The target audience consists of content managers and administrators who require a high-efficiency workspace that remains visually soothing during long periods of use.

The aesthetic blends **Modern Corporate** structure with **Tactile** softness. This is achieved through the use of extra-large corner radii (XL) and diffused, ambient shadows that suggest physical layers without the harshness of high-contrast borders. The result is a clean, professional CMS that feels approachable, dependable, and sophisticated.

## Colors

The color strategy uses a base of "Light Cream Grey" to reduce eye strain and provide a more premium feel than pure white. 

- **Primary & Primary Dark:** Used for call-to-action elements, active states in the sidebar, and critical interactive components.
- **Background & Surface:** The contrast between the cream-grey background and the pure white surfaces creates a clear sense of containment for data-heavy views.
- **Typography:** Deep chocolate tones replace standard grays to maintain the warm aesthetic while ensuring AAA accessibility standards for legibility.
- **Accents:** An extremely light primary tint (#FFF2EB) is used for subtle hover states and secondary button backgrounds to maintain brand cohesion without overwhelming the user.

## Typography

This design system utilizes **Be Vietnam Pro** across all levels to maintain a contemporary and friendly tone. 

- **Headlines:** Use tighter letter-spacing and heavier weights to create strong visual anchors on dashboard pages.
- **Body Text:** Standardized at 16px for primary readability, with a 14px variant for secondary data and sidebar labels.
- **Labels:** Small, uppercase labels with increased tracking are used for "Pill-style" badges and category headers to provide clear hierarchy in dense information environments.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The sidebar remains at a fixed 240px, while the main content area utilizes a fluid grid that expands to fill the viewport, maintaining generous 32px outer margins.

- **Grid:** A 12-column system is used for dashboard widgets, with 24px gutters to allow the "XL" border radii enough breathing room to be visually distinct.
- **Sidebar:** A vertical orientation that remains persistent on desktop. On tablet, it collapses into an icon-only rail or a hidden drawer.
- **Rhythm:** Vertical spacing is strictly 8px-based (8, 16, 24, 32) to ensure a consistent vertical cadence across the entire application.

## Elevation & Depth

Depth in the design system is communicated through **Ambient Shadows** and surface-on-surface layering.

- **Level 0 (Background):** The Light Cream Grey base.
- **Level 1 (Cards/Sidebar):** Pure white surface with a "Soft" shadow (Y: 4px, Blur: 20px, 4% Opacity of Text Primary).
- **Level 2 (Dropdowns/Modals):** Pure white surface with a more pronounced shadow (Y: 12px, Blur: 32px, 8% Opacity of Text Primary) to indicate temporary overlay.

The "XL" border radius is the primary differentiator for elevation, making every card feel like a distinct, tangible module.

## Shapes

The shape language is defined by the "Rounded" preset, specifically leaning into the "XL" range for primary containers.

- **Cards & Main Containers:** Use a 24px (1.5rem) border radius to create the "XL" aesthetic.
- **Buttons & Inputs:** Use a 12px (0.75rem) border radius to balance the cards while remaining professional.
- **Badges & Tags:** Use a fully rounded (Pill) style to distinguish them from interactive buttons.
- **Stat Icons:** Use a perfect circle (50% radius) for the background of icons within stat cards.

## Components

### Sidebar
The vertical navigation features a 240px width. Active states are indicated by a subtle background tint of the Primary color and a 4px vertical "indicator" on the left edge. Icons are centered within a 24px frame.

### Stat Cards
Containers using the XL radius. They include a large title-sm value and a label-md description. To the left or top, a 48px circular background in a 10% opacity version of the icon's color (e.g., Orange, Green, or Blue) houses the primary icon.

### Data Tables
Tables should not have vertical borders. Rows are striped using the Background color (#F8F5F3) on even rows. Headers use the `label-bold` type style with a bottom border of 1px.

### Status Badges
Pill-shaped elements using the `label-md` type style. They feature a light background tint and a dark text color of the same hue (e.g., Success = Green tint / Green text).

### Buttons
- **Primary:** Solid #FF7E36 with white text. 
- **Secondary:** Transparent background with #FF7E36 border and text. 
- **Subtle:** #FFF2EB background with #FF7E36 text.

### Inputs
Standard fields use the 12px radius with a 1px border (#584238 at 20% opacity). Focus states transition the border to #FF7E36 with a 2px soft outer glow.