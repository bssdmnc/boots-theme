# Boots Theme Overhaul: Design Specification

## 1. Executive Summary
This document defines the comprehensive overhaul for the `boots-theme`. It integrates high-conversion UI patterns for the product page, technical debt cleanup, and a flexible dark mode implementation.

## 2. Homepage Enhancements
*   **CSS Refinement:** Implement spacing and typography improvements via `pearlina-custom.css` to ensure a premium look and mobile-optimized touch targets.
*   **Hero Section:** High-impact banner with clear CTA.
*   **Navigation:** Fast-access category icons (Sneakers, Boots, Loafers, Accessories).
*   **Best-Sellers Grid:** Mobile-first product grid with hover-state gallery views.
*   **Social Proof:** Instagram widget and customer reviews slider.

## 3. Product Page Overhaul (High-Conversion Focus)
*   **Media Gallery:** 6-8 photos including macro/zoom, lifestyle shots, and a 10-15s video-review.
*   **Information Block:**
    *   **Size Selection:** Size buttons with "In-Stock/Out-of-Stock" visual cues.
    *   **Size Guide:** Prominent "Size Chart in cm" link + "Fits true-to-size" indicators.
*   **Conversion Triggers:**
    *   "Buy in 1 Click" (Phone number input).
    *   "Installments" (Mono/Privat integration).
    *   Trust Badges: 14-day return, next-day delivery, pay after inspection.
*   **Specifications Table:** Organized technical specs (Material, Sole, Season, Origin).
*   **Cross-Selling:** Dedicated block for care products (Spray, Shoehorn, Socks).
*   **"Stylist Tip":** Dedicated UI block for styling advice to create a "Wow-effect."

## 4. Technical Implementation & Infrastructure
*   **Dark Mode:** CSS-variable-based `:root` theme system.
*   **Technical Debt:** Immediate remediation of 14 `theme-check` offenses:
    *   Schema translation fixes.
    *   Unused variable cleanup.
    *   Variable name standardization.
*   **Modularization:** Refactoring `main-product.liquid` into small, reusable snippets for maintainability.

## 5. Testing & Validation
*   **Standards:** 0-offense `theme-check` post-implementation.
*   **Performance:** Mobile-first audit ensuring minimal impact on LCP/CLS.
*   **Functional:** Verification of all conversion triggers (Add to Cart, 1-click buy, Installments).
