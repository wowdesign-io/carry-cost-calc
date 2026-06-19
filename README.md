# Carry Cost Calculator — wowdesign.io

Self-injecting JavaScript widget for the wowdesign.io carry cost calculator. Hosted here and served via jsDelivr CDN — Webflow never needs to be touched to ship updates.

## What it does

3-step lead capture flow:

1. **Calculator form** — construction loan, interest rate, months saved, monthly burn
2. **Lead gate** — first name + work email (required before results show)
3. **Results** — financial breakdown + "Book a 30-min demo" CTA

On submit: fires a Make.com webhook → creates/updates Resend contact → triggers `calculator.lead` automation → 3-email nurture sequence (instant, +3 days, +7 days).

## Webflow embed

```html
<div id="wwd-calc-root"></div>
<script src="https://cdn.jsdelivr.net/gh/wowdesign-io/carry-cost-calc@main/carry-cost-calculator.js" defer></script>
```

## Updating

Edit `carry-cost-calculator.js` → commit → push to `main`. jsDelivr serves the update automatically.

If changes don't appear immediately, purge the CDN cache:
```
https://purge.jsdelivr.net/gh/wowdesign-io/carry-cost-calc@main/carry-cost-calculator.js
```

## Calculation logic

```
monthly_carry   = (loan × rate%) ÷ 12
interest_saved  = monthly_carry × months_saved
ops_saved       = burn × months_saved
total_saved     = interest_saved + ops_saved
monthly_erosion = total_saved ÷ months_saved
roi_multiplier  = total_saved ÷ 45,000
```

## Stack

- **Widget:** Vanilla JS, self-injecting (no framework, no build step)
- **CDN:** jsDelivr → GitHub
- **Webhook:** Make.com (us2) — scenario ID 5438516
- **CRM/Email:** Resend — audience `Calculator Leads`, automation `Calculator Lead Nurture`
- **Booking CTA:** cal.com/wowdesign/book-a-demo
