# 🐾 PawCare Veterinary Clinic — Website

A complete, premium, responsive website for a local veterinary clinic, built with **HTML5, CSS3, and Vanilla JavaScript** (no frameworks).

---

## 📁 Project Structure

```
pawcare/
├── index.html          → Home page
├── about.html           → About / clinic story / mission / vision / values
├── services.html        → All services + FAQ
├── doctors.html         → Veterinarian profiles
├── appointment.html     → Appointment booking form
├── gallery.html         → Filterable image gallery + lightbox
├── contact.html         → Contact details, map, contact form
├── style.css            → Single global stylesheet (all pages)
├── js/
│   └── script.js        → Single global JavaScript file (all pages)
└── images/               → (placeholder folder — currently using Unsplash URLs)
```


---

## 🚀 How to Run It

### Option 1 — Just open it
1. Unzip the project.
2. Double-click `index.html` — it opens directly in your browser, fully styled.
3. Make sure you're connected to the internet (fonts, icons, and images load from Google Fonts / Bootstrap Icons / Unsplash CDNs).

### Option 2 — VS Code + Live Server (recommended while editing)
1. Open the `pawcare` folder in VS Code (`File → Open Folder`).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
4. It opens at `http://127.0.0.1:5500/index.html` and auto-refreshes on save.


---

## 🎨 Design System

| Token | Light Mode | Dark Mode ("Gold & Black Spark") |
|---|---|---|
| Primary | `#1F3C88` (Navy) | `#D4AF37` (Gold) |
| Secondary | `#4CAF50` (Green) | `#FFD700` (Bright Gold) |
| Accent | `#FFD166` (Warm Yellow) | `#FFD166` |
| Background | `#F8FAFC` | `#0A0A0A` (Black) |
| Font | Poppins (Google Fonts) | Poppins |
| Icons | Bootstrap Icons | Bootstrap Icons |

Toggle dark mode using the 🌙/☀️ icon in the navbar — your preference is saved automatically (localStorage) and persists across pages.

---

## ✨ Features Included

- Fully responsive (mobile-first) design across all 7 pages
- Sticky, transparent-to-solid navbar with mobile hamburger menu
- Full-screen hero section with CTA + emergency call button
- Animated statistics counters
- Featured services, Why Choose Us, testimonials sections
- Dark mode toggle (Gold & Black theme)
- Scroll-reveal animations (fade-up on scroll)
- Floating WhatsApp button + floating Emergency Call button
- Back-to-top button
- Loading screen on page load
- FAQ accordion (services page)
- Newsletter subscription with validation + toast message
- Appointment booking form — fully validated (name, pet info, phone, email, date, time, reason) with success popup
- Contact form — validated with success popup
- Filterable gallery with lightbox image viewer
- Google Maps embed (Kakinada location)
- Doctor profile cards with socials
- Modern gradient buttons + hover animations throughout
- Clean, commented, organized code (no duplication, semantic HTML)

---

## 🛠️ Customizing

| What you want to change | Where to edit |
|---|---|
| Clinic address / phone / email | Search & replace in each `.html` file's footer + relevant page (`contact.html`, `appointment.html`) |
| Colors / theme | CSS variables at the top of `style.css` (`:root` and `body.dark-mode`) |
| Doctor info / photos | `doctors.html` |
| Services offered | `services.html` |
| Gallery images | `gallery.html` — replace `src` URLs in `.gallery-item` blocks |
| WhatsApp number | `js`-linked `href="https://wa.me/91XXXXXXXXXX"` in every page's floating button section |
| Emergency phone number | `href="tel:+91XXXXXXXXXX"` in every page's floating button section |
| Form behavior | `js/script.js` — see `initAppointmentForm()` and `initContactForm()` |

Currently, form submissions only show a success popup (no backend) — to actually receive bookings/messages, you'll need to connect the forms to a backend service (e.g., Formspree, EmailJS, or your own server).

---

## 📦 Tech Used

- HTML5 (semantic markup)
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (organized into reusable functions, no jQuery)
- [Bootstrap Icons](https://icons.getbootstrap.com/) (via CDN)
- [Google Fonts – Poppins](https://fonts.google.com/specimen/Poppins)
- Unsplash (placeholder images — replace with real clinic photos before going live)

---

## 📝 Before Going Live (Checklist)

- [ ] Replace all Unsplash placeholder images with real clinic/doctor/pet photos
- [ ] Update phone numbers, email, and address with real details
- [ ] Connect appointment & contact forms to a real backend or form service
- [ ] Update Google Maps embed with your exact clinic coordinates
- [ ] Add a real favicon
- [ ] Test on multiple devices and browsers

---

Made with ❤️ for pet lovers and to the one who genuinely care for pets — PawCare Veterinary Clinic.
