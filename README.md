You are a senior full-stack frontend engineer and UI/UX designer. Build a 
premium, world-class hospital website for "NovaCrest Medical Center" 
— a 1000-bed multi-specialty mega hospital. The site must feel like it belongs 
next to Mayo Clinic or Apollo Hospitals globally.

---

## TECH STACK
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (all animations)
- Three.js or React Three Fiber (3D elements)
- Spline (embed 3D doctor/hospital model via <spline-viewer>)
- Lucide React (icons)
- Google Fonts: "Playfair Display" (headings) + "Inter" (body)

---

## DESIGN SYSTEM

Color Palette:
- Primary: #0A2463 (deep navy — trust, authority)
- Accent: #3DD6F5 (electric cyan — technology, precision)
- Warm: #E8F4FD (light ice blue — clean, clinical)
- Surface: #FFFFFF
- Text: #1A1A2E

Typography:
- Display: Playfair Display, 700 weight, tracked tightly
- Body: Inter, 400/500
- Data/Labels: Inter Mono, caps, letter-spacing 0.1em

Signature Element:
A rotating 3D DNA helix (Three.js) in the hero section that 
responds to mouse position (parallax). The helix glows cyan 
and casts light on nearby text. This is the one unforgettable 
element — keep everything else restrained.

Hover Effects (MUST HAVE):
- Doctor cards: 3D tilt effect (CSS perspective + JS mouse tracking)
- Department cards: lift + glow border on hover
- Service cards: flip animation revealing stats on back
- Navigation links: underline that slides from center
- CTA buttons: shimmer sweep effect on hover
- Stats numbers: count-up animation on scroll-into-view

---

## 6 PAGES (each as a separate route)

### Page 1: / (Home)
Sections:
1. HERO: Full-screen with 3D rotating DNA helix (Three.js). 
   Headline: "Where Science Meets Compassion." Subtext about 
   50+ specialties. Two CTAs: "Book Appointment" + "Emergency: 1800-XXX".
   Floating 3D pill/capsule objects in background.

2. TRUST BAR: Animated counters — 10,000+ Surgeries, 500+ Doctors, 
   25 Years, 98.7% Success Rate. Each stat has a cyan accent.

3. DEPARTMENTS GRID: 12 specialty cards (Cardiology, Neurology, 
   Oncology, Orthopedics, Pediatrics, IVF, etc.). Each card has a 
   3D icon, hover lift + glow.

4. WHY CHOOSE US: Split layout — left is a 3D hospital building model 
   (Spline embed), right is 4 USPs with icons.

5. FEATURED DOCTORS: Horizontal scroll of doctor cards with tilt-on-hover. 
   Photo, name, specialty, years of experience, rating.

6. PATIENT TESTIMONIALS: Card carousel, soft shadows, star ratings.

7. LATEST HEALTH BLOGS: 3-column grid, tag chips, read-time badges.

8. APPOINTMENT CTA SECTION: Deep navy background, large Playfair 
   headline, inline appointment form (Name, Phone, Department, Date).

9. FOOTER: 5-column grid. Logo, quick links, departments, contact, 
   social. Map embed. Emergency hotline in red.

---

### Page 2: /departments
- Hero with animated gradient + title
- Filter tabs: All | Surgical | Medical | Diagnostic | Women's Health
- 16 department cards — each with:
  - Custom 3D icon (CSS/SVG 3D or Spline)
  - Hover: flip card showing doctors count, beds, equipment list
  - "Learn More" button
- On click: expand to show full department detail inline (accordion)

---

### Page 3: /doctors
- Search bar + filter by: Specialty | Language | Availability | Gender
- Doctor grid (3 cols desktop, 1 col mobile)
- Each card: 
  - Photo with subtle 3D tilt hover
  - Name, degree, specialty
  - Available slots badge
  - "Book Now" button (opens modal)
- Doctor profile modal: bio, education, publications, patient reviews, 
  booking calendar

---

### Page 4: /services
- Full-width hero
- 6 featured service blocks alternating left/right layout 
  (image + text + 3D icon)
  Services: Robotic Surgery, Advanced Diagnostics, ICU/Critical Care, 
  Organ Transplant, Cancer Care, Rehabilitation
- Each service: hover reveals stats overlay
- International Patient section: flag icons, language support, 
  visa assistance cards
- Insurance Partners: logo strip with smooth marquee scroll

---

### Page 5: /about
- Mission/Vision hero with parallax scroll (Framer Motion)
- Hospital timeline: horizontal scroll, year markers, milestones
  (1999 Founded → 2005 First Robotic Surgery → 2015 ISO Certified → 
  2024 AI Diagnostics)
- Leadership Team: CEO, Medical Director, CMO — card grid
- Accreditations: NABH, JCI, ISO badges with hover info tooltip
- CSR section: health camps, rural outreach, stats

---

### Page 6: /contact & /appointments (combined)
- Split layout: Left = appointment booking form, Right = contact info
- Appointment form: 
  Name | Email | Phone | Department (dropdown) | 
  Doctor (auto-populated) | Date picker | Time slot grid | 
  Insurance toggle | Message
  Submit → success animation (checkmark + confetti)
- Contact info: address, phone, WhatsApp, map
- Emergency section: pulsing red badge, 24/7 hotline
- Hospital directions: embedded Google Map

---

## GLOBAL COMPONENTS

Navbar:
- Sticky, blur glass effect on scroll
- Logo left, nav links center, "Book Now" CTA right (cyan button)
- Mobile: hamburger → full-screen overlay menu with animated links
- Mega dropdown for Departments (12 items in 3 cols)

Loading Screen:
- Hospital logo animates in, heartbeat line sweeps across, 
  fades out smoothly (1.5s total)

Scroll Progress:
- Thin cyan line at top of page showing scroll %

Accessibility:
- Skip to content link
- ARIA labels on all interactive elements
- Keyboard focus rings visible (cyan)
- prefers-reduced-motion respected for all animations

---

## ANIMATION SPEC (Framer Motion)

- Hero elements: staggered fade-up, 0.1s delay each
- Section entry: viewport-triggered slide-up (y: 40 → 0, opacity: 0→1)
- Doctor card hover: rotateX(-5deg) rotateY(5deg) scale(1.03)
- Stats: useInView + useMotionValue count-up
- Page transitions: shared layout animations between routes
- DNA helix: continuous slow rotation + mouse parallax

---

## RESPONSIVE BREAKPOINTS
- Mobile: 375px (single column, hamburger nav)
- Tablet: 768px (2 col grids)
- Desktop: 1280px (full layout)
- Wide: 1920px (max-width container: 1400px, centered)

---

## OUTPUT FORMAT
Create the following file structure:
/app
  /page.tsx (Home)
  /departments/page.tsx
  /doctors/page.tsx
  /services/page.tsx
  /about/page.tsx
  /contact/page.tsx
/components
  /Navbar.tsx
  /Footer.tsx
  /DoctorCard.tsx
  /DepartmentCard.tsx
  /HeroSection.tsx
  /DNAHelix.tsx (Three.js component)
  /AppointmentForm.tsx
  /LoadingScreen.tsx
/lib
  /data.ts (mock data — doctors, departments, testimonials)

Use TypeScript throughout. All mock data in /lib/data.ts.
No external API calls needed. Use placeholder images from 
unsplash.com or picsum.photos.
