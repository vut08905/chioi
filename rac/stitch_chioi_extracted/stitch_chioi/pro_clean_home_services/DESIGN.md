---
name: Pro-Clean Home Services
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
  secondary: '#895032'
  on-secondary: '#ffffff'
  secondary-container: '#feb28e'
  on-secondary-container: '#794226'
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
  on-secondary-fixed-variant: '#6d391d'
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
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-padding: 16px
  stack-gap: 12px
---

## Brand & Style

This design system is built to evoke trust, warmth, and the refreshing feeling of a pristine home. The brand personality is professional yet approachable, balancing the high-energy of productivity with the serene calm of a clean environment.

The style is **Modern Tactile**, characterized by soft elevations and organic shapes. It leverages a warm color palette and generous whitespace to create an interface that feels breathable and premium. The use of depth and soft gradients ensures the mobile experience feels "touchable" and intuitive, moving away from flat design toward a more sophisticated, layered aesthetic.

## Colors

The palette is rooted in sunset tones and clean neutrals. 

- **Primary Gradient:** Used for main actions and brand moments to signify energy and high-quality service.
- **Background:** A tinted off-white (#fcf9f8) that reduces eye strain and feels more "homely" than pure white.
- **Light Orange:** Utilized for secondary containers and active states to maintain brand warmth without the intensity of the gradient.
- **Warning System:** High-visibility yellow is reserved for scheduling conflicts or important service alerts, utilizing a soft background with a crisp high-contrast border.

## Typography

This design system utilizes **Be Vietnam Pro** exclusively to maintain a clean, contemporary, and local-friendly feel. 

- **Headlines:** Use tighter letter-spacing and heavier weights to establish a strong visual hierarchy.
- **Body Text:** Set with generous line-heights to ensure legibility during quick mobile interactions.
- **Labels:** Small caps are used sparingly for category tags or secondary metadata to provide contrast against standard body text.

## Layout & Spacing

The layout follows a **Fluid Mobile-First Grid** with a standard 16px (md) margin on all screen edges. 

- **Rhythm:** An 8px linear scale governs all spatial relationships.
- **Stacking:** Vertical content blocks should maintain a 12px or 16px gap to ensure the UI doesn't feel cluttered.
- **Safe Areas:** Elements never touch the screen edge; cards and containers are always inset with consistent padding to maintain the "premium app" feel.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

- **Level 0 (Floor):** The background color (#fcf9f8).
- **Level 1 (Cards):** White surfaces with a very soft, diffused shadow (Blur: 15px, Y: 4px, Opacity: 4% Black) and a 1px subtle border in `Light Orange`.
- **Level 2 (Floating/Active):** Slightly more pronounced shadows to indicate interactable elements like "Book Now" floating buttons.
- **Backdrop:** Semi-transparent blurs are used for navigation bars to maintain context of the scroll position.

## Shapes

The shape language is defined by **High Radii** and **Pill Shapes**.

- **Standard Containers:** All cards and content blocks use a 16px (rounded-lg) corner radius to evoke a soft, friendly aesthetic.
- **Interactive Elements:** Buttons, chips, and input fields utilize a full pill-shape (32px+) to signify touchability.
- **Icons:** Should follow a rounded-cap style, avoiding sharp edges to match the overall UI softness.

## Components

### Buttons & Chips
- **Primary Button:** Pill-shaped, featuring the Primary Orange Gradient with white text and a soft orange shadow.
- **Secondary Button:** Pill-shaped, using `Light Orange` background with `Secondary Brand` text color.
- **Chips:** Small pill shapes used for service categories (e.g., "Deep Clean", "Kitchen"). Use `Light Orange` for unselected and `Primary Gradient` for selected states.

### Input Fields
- **Search & Forms:** White backgrounds with 16px rounded corners. Borders are invisible unless focused, at which point a 1.5px `Primary Orange` stroke appears.

### Cards
- **Service Cards:** Utilize Level 1 elevation. Images within cards should inherit the 16px top-corner radius. Use generous padding (16px) inside the card for text and pricing information.

### Selection Controls
- **Checkboxes/Radios:** Circular (pill-based) even for checkboxes to maintain the organic flow. When active, they fill with the Primary Gradient and a white checkmark.

### Specialty Components
- **Service Progress Tracker:** A horizontal pill-shaped bar that uses the gradient to show completion status for active cleaning sessions.
- **Provider Profile:** Circular avatars with a 2px `Light Orange` ring.