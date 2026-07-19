import type { Project } from "@/components/project-card";
import certMbkm from "@/assets/cert-mbkm-msib.pdf.asset.json";
import certClaudePlatform from "@/assets/cert-claude-platform-101.pdf.asset.json";
import certClaudeCode from "@/assets/cert-claude-code-101.pdf.asset.json";
import certAgents from "@/assets/cert-agents-workflows.pdf.asset.json";
import certAppliedAi from "@/assets/cert-applied-ai-foundations.pdf.asset.json";
import certWadhwani from "@/assets/cert-wadhwani.pdf.asset.json";

export const profile = {
  name: "Ivan Conanta",
  role: "Mobile & Applied Computer Vision Engineer",
  location: "Tegal, Indonesia",
  email: "ivanconanta360@gmail.com",
  phone: "+62 838-6160-5734",
  github: "https://github.com/Ivan8Conan",
  positioning:
    "Informatics graduate focused on shipping on-device machine learning to mobile. Built and deployed a real-time pose-estimation Android app to the Google Play Store using a MediaPipe pipeline optimized for edge inference.",
};

export const metrics: { value: string; label: string }[] = [
  { value: "86.7%", label: "Classification accuracy" },
  { value: "3–7 ms", label: "On-device inference" },
  { value: "21,813", label: "Frames trained" },
  { value: "1", label: "App shipped to Play Store" },
];

export const competencies: { group: string; items: string[] }[] = [
  {
    group: "Mobile Development",
    items: ["Flutter", "Dart", "Android Development", "Java", "JavaFX"],
  },
  {
    group: "AI & Computer Vision",
    items: [
      "Machine Learning",
      "Computer Vision",
      "Pose Estimation",
      "MediaPipe",
      "Edge-Device Inference Optimization",
    ],
  },
  {
    group: "Backend & Infrastructure",
    items: [
      "Firebase Realtime Database",
      "Firebase Cloud Storage",
      "Firebase Cloud Messaging",
      "MySQL",
      "SQLite",
      "PHP",
    ],
  },
  {
    group: "Languages & Web",
    items: ["Python", "Java", "HTML", "CSS", "JavaScript"],
  },
];

export type Experience = {
  role: string;
  org: string;
  program?: string;
  timeframe: string;
  subtitle?: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Undergraduate Researcher — Thesis Project",
    org: "Universitas Kristen Duta Wacana",
    timeframe: "2026",
    subtitle:
      "Real-Time Deadlift Movement Correction System Based on Lightweight Pose Estimation on Edge Device",
    bullets: [
      "Architected a real-time mobile pipeline that analyzes deadlift form using a Lightweight Pose Estimation model built on MediaPipe, reaching 86.7% classification accuracy with a Gradient Boosting classifier (Early Stopping).",
      "Optimized the inference path to a stable 3–7 ms on-device latency per frame, enabling continuous real-time feedback without server round-trips.",
      "Curated and trained on a dataset of 191 video sequences (21,813 extracted frames) covering correct and faulty deadlift variants.",
      "Deployed the application to production on the Google Play Store under Faculty of Information Technology (FTI UKDW).",
      "Delivered an official Intellectual Property Rights Certificate (Sertifikat Hak Cipta) for the published application.",
    ],
    stack: ["Flutter", "Dart", "MediaPipe", "Gradient Boosting", "Python", "Android"],
  },
  {
    role: "Android Mobile Developer",
    org: "MojadiApp",
    program: "MSIB Batch 7 (MBKM)",
    timeframe: "2024",
    subtitle: "Tastivo — Food & Beverage E-Commerce Mobile Application",
    bullets: [
      "Engineered Tastivo, an F&B e-commerce mobile app, using Flutter/Dart on the client and Firebase as the backend ecosystem.",
      "Integrated Firebase Realtime Database and Firebase Cloud Messaging to synchronize product and cart state and deliver push notifications.",
      "Implemented a full CRUD shopping-cart module and a category-based product filter across the catalog.",
      "Built a password-reset flow backed by Firebase Storage as part of the authentication module.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Firebase Realtime Database",
      "Firebase Cloud Messaging",
      "Firebase Storage",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "mydeadliftcoach",
    title: "MyDeadliftCoach",
    role: "Solo build · Thesis · Published on Google Play Store",
    year: "2026",
    stack: ["Flutter", "Dart", "MediaPipe", "Gradient Boosting", "Python", "Android"],
    bullets: [
      "Real-time deadlift form correction using a Lightweight Pose Estimation pipeline running fully on-device.",
      "86.7% classification accuracy (Gradient Boosting with Early Stopping) at 3–7 ms per-frame inference latency.",
      "Trained on a curated dataset of 191 video sequences and 21,813 extracted frames.",
    ],
    outcome: "Deployed to Google Play Store · Intellectual Property Rights Certificate granted",
  },
  {
    slug: "tastivo",
    title: "Tastivo",
    role: "MSIB Batch 7 · Android Mobile Developer at MojadiApp",
    year: "2024",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Realtime Database",
      "Firebase Cloud Messaging",
      "Firebase Storage",
    ],
    bullets: [
      "F&B e-commerce mobile app with realtime product and cart synchronization via Firebase Realtime Database.",
      "Push notification layer using Firebase Cloud Messaging and a category-based product filter across the catalog.",
      "Full CRUD shopping-cart module and a Firebase Storage-backed password-reset flow in the auth module.",
    ],
  },
  {
    slug: "concert-ticket-booking",
    title: "Concert Ticket Booking Platform",
    role: "Team project · Owned booking-detail module end-to-end",
    year: "2023",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    bullets: [
      "Full-stack ticketing platform covering authentication, location / genre / date-filtered search, and interactive seat selection.",
      "CRUD booking-management module with payment handling on top of a MySQL data layer.",
      "Individually owned the ticket-booking detail page end-to-end — frontend (HTML/CSS) and PHP backend CRUD logic.",
    ],
  },
  {
    slug: "memby",
    title: "MEMBY — Subscription Management Desktop App",
    role: "Team project · Owned backend and data layer",
    year: "2023",
    stack: ["Java", "JavaFX", "FXML", "MySQL"],
    bullets: [
      "Java/JavaFX (FXML) desktop application for tracking paid-subscription lifecycles.",
      "MySQL-backed CRUD data layer with an automated reminder mechanism triggered near subscription expiry dates.",
      "Individually owned the backend layer — CRUD operations and MySQL database integration.",
    ],
  },
];

export const education = [
  {
    school: "Universitas Kristen Duta Wacana",
    degree: "S.Kom, Informatika (Computer Science)",
    timeframe: "2022 – 2026",
    detail:
      "Thesis: Real-Time Deadlift Movement Correction System Based on Lightweight Pose Estimation on Edge Device.",
    coursework: "Mobile Application Programming (Android), Machine Learning.",
  },
  {
    school: "SMA Negeri 1 Tegal",
    degree: "Sains (MIPA)",
    timeframe: "2019 – 2022",
    detail: "Tegal, Indonesia.",
    coursework: undefined as string | undefined,
  },
];

export type Certification = {
  title: string;
  file?: { url: string; type: "image" | "pdf" };
};

export const certifications: Certification[] = [
  {
    title:
      "Intellectual Property Rights Certificate (Hak Cipta Kekayaan Intelektual) — MyDeadliftCoach App, 2026.",
  },
  {
    title: "MBKM MSIB Batch 7 — Android Mobile Developer at MojadiApp, 2024.",
    file: { url: certMbkm.url, type: "pdf" },
  },
  {
    title: "Anthropic Academy — Claude Platform 101, July 2026.",
    file: { url: certClaudePlatform.url, type: "pdf" },
  },
  {
    title: "Anthropic Academy — Claude Code 101, July 2026.",
    file: { url: certClaudeCode.url, type: "pdf" },
  },
  {
    title: "OpenAI Academy — Agents & Workflows, July 2026.",
    file: { url: certAgents.url, type: "pdf" },
  },
  {
    title: "OpenAI Academy — Applied AI Foundations, July 2026.",
    file: { url: certAppliedAi.url, type: "pdf" },
  },
  {
    title: "Effective Workplace Skills — Wadhwani Foundation via UKDW, Dec 2024.",
    file: { url: certWadhwani.url, type: "pdf" },
  },
];

export const activities = [
  "Coordinator, Equipment & Security Division — Vihara Vidyaloka Buddhist Ceremonies (Waisak, Kathina Dana, Magha Puja), 2022–2023.",
  "Staff, Household Affairs Division — Vidyasena Vihara Vidyaloka, 2022–2023.",
  "Committee Member, Equipment & Security Division — FTI FEST × NVIDIA Event, 2024.",
];

export type ProjectChallenge = {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  tradeoff: string;
  outcome: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  duration: string;
  status: string;
  team: string;
  role: string;
  problem: string[];
  solution: string[];
  contributions: string[];
  systemDesign: string[];
  techStack: { name: string; note: string }[];
  features: { name: string; note: string }[];
  challenges: ProjectChallenge[];
  metrics?: { value: string; label: string }[];
  results: string[];
  lessons: string[];
  future: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  mydeadliftcoach: {
    slug: "mydeadliftcoach",
    title: "MyDeadliftCoach",
    tagline: "Real-time deadlift form correction on-device using lightweight pose estimation.",
    year: "2026",
    duration: "4 months",
    status: "Published — Google Play Store",
    team: "Solo build (Individual)",
    role: "End-to-end engineer — data, ML, mobile, UX",
    problem: [
      "Gym beginners struggle to learn deadlift technique safely without a personal trainer.",
      "Existing correction systems are limited, lab-bound, or rely on external IoT sensors.",
      "Target user: beginner lifters who cannot afford a personal trainer and need offline, on-device coaching.",
    ],
    solution: [
      "Real-time posture detection + correction on mobile using MediaPipe Pose (lightweight pose estimation) and an ML classifier.",
      "Inclusive Terminal Feedback: high-contrast visual + Bahasa Indonesia Text-to-Speech delivered right after each repetition.",
      "Fully on-device (no cloud, no IoT) — low latency, low power, privacy-preserving.",
    ],
    contributions: [
      "Architected the end-to-end system: dataset collection, feature engineering, model training, mobile compute optimization, frontend, and local database.",
      "Built the pose-keypoint extraction, biomechanics calculation (knee/hip/back angles), Isolate-based ML classification, FSM Gatekeeper, and SQLite modules.",
      "Decapsulated the Gradient Boosting model from Python (.pkl) into native Dart if-else logic to remove the TensorFlow Lite interpreter dependency.",
      "Applied Welford's algorithm to reduce feature-extraction memory complexity from O(n) to O(1).",
      "Solo build: preprocessed 21,813 frames, converted models, designed UI/UX, ran hardware performance profiling.",
    ],
    systemDesign: [
      "Fully serverless (offline) architecture running entirely on the edge device.",
      "Data flow: camera frame → Gatekeeper FSM → MediaPipe Pose keypoints → Welford spatio-temporal feature extraction → ML classifier on Isolate → Terminal Feedback (text + TTS) → SQLite log.",
      "UI rendered on the Main Thread; ML compute runs concurrently on a Background Thread via message passing. SQLite uses Cascade Delete rules.",
    ],
    techStack: [
      {
        name: "Flutter",
        note: "Cross-platform UI + Isolate multithreading to prevent UI freezing.",
      },
      {
        name: "Dart (Native)",
        note: "AOT-compiled native ML execution — lowest memory latency, no interpreter overhead.",
      },
      {
        name: "MediaPipe Pose",
        note: "Lightweight pose estimation stable on mid-range ARM smartphones.",
      },
      {
        name: "Gradient Boosting",
        note: "Ensemble classifier — superior on high-variability non-linear tabular data.",
      },
      {
        name: "Python (Scikit-Learn, NumPy)",
        note: "Data acquisition, preprocessing, augmentation analysis, initial model training.",
      },
      {
        name: "SQLite",
        note: "Local micro RDBMS (<1 MB) for session metadata and performance tracking, no background process.",
      },
    ],
    features: [
      {
        name: "Real-time Biomechanical Analysis",
        note: "Detects 2 fatal errors (rounded back, knees over toes) per NSCA standards.",
      },
      {
        name: "Auto Side-Detection & Side Locking",
        note: "Locks dominant side automatically to prevent coordinate disorientation mid-rep.",
      },
      {
        name: "Adaptive Frame Throttling",
        note: "Dynamic FPS modulation (6 FPS idle / 20 FPS active) to conserve battery.",
      },
      {
        name: "Inclusive Terminal Feedback",
        note: "High-contrast visual + Bahasa Indonesia TTS, ≤15 words per prompt.",
      },
      {
        name: "Offline Performance Tracking",
        note: "Comprehensive session history logged locally with no internet dependency.",
      },
    ],
    challenges: [
      {
        title: "Memory Leak Risk — temporal feature extraction",
        problem:
          "Stacking every frame's keypoints to compute mean/std produced O(n) memory complexity.",
        cause: "Conventional time-series approach held the full repetition in memory.",
        solution: "Implemented Welford's algorithm for single-pass variance calculation.",
        tradeoff:
          "Required tighter mathematical precision in code architecture vs. library primitives.",
        outcome:
          "Memory complexity dropped to O(1). Dart Heap RAM fell 52% — from 27.7 MB peak to 13.2 MB.",
      },
      {
        title: "CPU load & UI freezing",
        problem:
          "Gradient Boosting classification queued on the CPU and briefly froze the render loop.",
        cause: "ML logic ran on the Main Thread alongside camera frame rendering.",
        solution:
          "Decapsulated the .pkl model into native Dart and delegated it to a Background Isolate.",
        tradeoff: "Increased async state management and inter-thread message-passing complexity.",
        outcome: "UI freezing eliminated. CPU render latency stabilized at 3–7 ms per frame.",
      },
      {
        title: "Thermal throttling",
        problem: "Device overheated during use, forcing the OS to throttle the CPU.",
        cause: "High camera resolution + raw 60 FPS inference with no pacing.",
        solution:
          "Designed a Finite State Machine as a Gatekeeper controlling Adaptive Frame Throttling + Frame Skipping via IDLE/ACTIVE states.",
        tradeoff:
          "Risk of losing temporal context if frame-skipping isn't calibrated at motion peaks.",
        outcome:
          "Battery usage -5%. Total device temp rise capped at 11.1 °C (31.8 → 42.9 °C) — cooler than the stock camera app.",
      },
    ],
    metrics: [
      { value: "86.7%", label: "Test accuracy (Gradient Boosting, Early Stop)" },
      { value: "3–7 ms", label: "Per-frame inference latency" },
      { value: "13.2 MB", label: "Optimized RAM footprint (Dart Heap)" },
      { value: "+11.1 °C", label: "Max thermal rise over 30-min session" },
    ],
    results: [
      "Reached TKT Level 8 (Technology Readiness Level).",
      "Thesis completed and validated by Universitas Kristen Duta Wacana (UKDW).",
      "Successfully detected fatal biomechanical posture errors during on-device real-time testing.",
    ],
    lessons: [
      "Edge AI Inference: converting ML models to native instructions dramatically reduces latency and interpreter overhead.",
      "Memory Optimization: incremental computation (Welford) is the key to preventing memory leaks in mobile environments.",
      "Hardware Profiling: optimization is not only algorithmic — it means governing hardware metrics (thermal, battery).",
      "Data Bubble Effect: pure spatial visual augmentation on pose-estimation systems induces feature redundancy (decision boundary distortion).",
    ],
    future: [
      "Personalized Feedback: regression on posture severity to produce dynamic instructions per deviation degree.",
      "Emergency Abort Intervention: hybrid system that interrupts with real-time voice 'STOP!' when back curvature crosses an injury threshold.",
      "Gamification Logic: user-level progression based on aggregated session effectiveness ratings from SQLite.",
      "Cloud Backup Sync: Firebase-based backup for session history while keeping the core offline-first architecture intact.",
    ],
  },
  tastivo: {
    slug: "tastivo",
    title: "Tastivo",
    tagline: "Real-time F&B e-commerce mobile app for UMKM digitalization.",
    year: "2024",
    duration: "4 months (MSIB Batch 7)",
    status: "Prototype / MVP",
    team: "Team (Group 4)",
    role: "Back-end Developer / Android Mobile Developer",
    problem: [
      "Limited market reach for UMKM food & beverage businesses.",
      "High user mobility demanding on-demand food ordering without visiting the venue.",
      "Target users: general smartphone consumers + UMKM culinary entrepreneurs.",
    ],
    solution: [
      "Mobile e-commerce app split into two clients: User app + Admin app.",
      "Product search, wishlist, shopping cart, and centralized catalog management.",
      "Real-time sync so both interfaces stay consistent instantly.",
    ],
    contributions: [
      "Designed and managed the Back-End as a Service (BaaS) architecture on Firebase for transactional and auth data.",
      "Built the full shopping-cart CRUD module, product sync layer, push-notification layer, and password-reset flow in the auth module.",
      "Chose Firebase Realtime Database as the single source of truth for catalog + cart to avoid Admin/User data latency.",
      "Individually owned: database implementation, asset storage, Cloud Messaging integration, and secure reset-password backend logic.",
    ],
    systemDesign: [
      "Client-BaaS architecture: two Flutter clients (User + Admin) connect directly to Firebase cloud infrastructure.",
      "Data flow: UI action (cart add / catalog edit) → Flutter CRUD op → Firebase Realtime DB → broadcast back to all connected clients.",
      "Admin app manages catalog CRUD; User app consumes catalog, drives cart transactions, and persists Order History.",
    ],
    techStack: [
      {
        name: "Flutter",
        note: "Cross-platform UI with Stateless + Stateful widgets for dynamic interfaces.",
      },
      { name: "Dart", note: "Primary language for mobile app logic." },
      {
        name: "Firebase Realtime Database",
        note: "Real-time catalog + shopping-cart sync between User and Admin clients.",
      },
      { name: "Firebase Cloud Messaging", note: "Push notification layer for users." },
      { name: "Firebase Storage", note: "Product image storage + password-reset flow assets." },
    ],
    features: [
      {
        name: "Real-time Cart & Product Sync",
        note: "Immediate sync for cart state and catalog updates.",
      },
      {
        name: "Admin Dashboard",
        note: "Dedicated app for store owners to monitor transactions and CRUD products.",
      },
      {
        name: "Secure Authentication",
        note: "Login, Register, Forgot Password with single-use link + expiration.",
      },
      {
        name: "Smart Product Filtering",
        note: "Category-based search and filtering across the catalog.",
      },
      { name: "Wishlist & Order History", note: "Save favorites and track past transactions." },
    ],
    challenges: [
      {
        title: "Real-time data synchronization",
        problem:
          "Prevent race conditions and cart/stock mismatch when multiple users interact simultaneously with admin edits.",
        cause: "A traditional relational DB would introduce client-side latency.",
        solution:
          "Implemented a JSON structure on Firebase Realtime Database for products and cart modules.",
        tradeoff: "Requires tight NoSQL schema discipline to avoid Firebase bandwidth blow-up.",
        outcome: "Cart and catalog update on-screen within milliseconds of any change.",
      },
      {
        title: "Secure password recovery",
        problem:
          "Build a Forgot Password flow that resists third-party exploitation without adding friction for real users.",
        cause: "Identity must be verified without an active login session.",
        solution: "Email-based flow issuing a single-use link with an expiration time.",
        tradeoff: "Requires access to the registered inbox and a stable internet connection.",
        outcome: "Users reset passwords safely and account takeover risk is mitigated.",
      },
    ],
    results: [
      "Delivered as MVP; presented as the final report for MSIB Batch 7 at MojadiApp.",
      "Source code documented and hosted on a GitHub repository.",
    ],
    lessons: [
      "NoSQL & BaaS: mastered NoSQL schema design and Firebase-based real-time sync.",
      "Authentication Management: understood security flow for registration, login, and password recovery.",
      "Waterfall Methodology: hands-on team experience across analysis, design, implementation, and testing phases.",
    ],
    future: [
      "Payment Gateway Integration: GoPay / OVO / DANA via Midtrans or Xendit.",
      "Google Play Store Deployment: code hardening and commercial release.",
      "Local Caching: offline mode so users can browse the catalog without connectivity.",
    ],
  },
  "concert-ticket-booking": {
    slug: "concert-ticket-booking",
    title: "Concert Ticket Booking Platform",
    tagline: "Full-stack web platform for concert discovery, seat selection, and booking.",
    year: "2023",
    duration: "4 months (1 semester)",
    status: "Prototype",
    team: "Team (Group 4)",
    role: "Full-Stack Developer — end-to-end owner of the Ticket-Booking Detail module",
    problem: [
      "No efficient platform for fans to search, filter, and book concert tickets with an intuitive interface.",
      "Target user: music fans and prospective concertgoers who need convenient online ticket purchase.",
    ],
    solution: [
      "Full-stack web platform with auth, event search + filters (location / genre / date), and interactive seat selection.",
      "Traditional web architecture (HTML/CSS/JS front-end + PHP/MySQL back-end) for reliable CRUD and persistent transactional data.",
    ],
    contributions: [
      "Designed and implemented the ticket-booking detail page end-to-end.",
      "Built the Concert Detail module (detail.php) and Booking module (pemesanan.php).",
      "Used Prepared Statements on PHP for concert lookups (SELECT * FROM konser WHERE id = ?) to prevent SQL Injection.",
      "Owned frontend HTML/CSS for concert detail visualization and backend PHP for MySQL data access + booking form structure.",
    ],
    systemDesign: [
      "Client-Server architecture: browser client ↔ Apache/PHP server ↔ MySQL DBMS.",
      "Data flow: user picks concert → client sends ID via URL (detail.php?id=X) → PHP reads MySQL → user submits booking form → PHP validates and persists to MySQL.",
      "Frontend HTML/JS renders info dynamically from PHP-supplied DB data (artist, schedule, seat availability).",
    ],
    techStack: [
      {
        name: "HTML / CSS / JavaScript",
        note: "Interface structure, styling, and DOM manipulation (dropdowns, form validation).",
      },
      {
        name: "PHP",
        note: "Server-side scripting for business logic, session auth (session_start()), and UI↔DB bridging.",
      },
      { name: "MySQL", note: "Relational DB for users, concert catalog, and booking history." },
    ],
    features: [
      {
        name: "Dynamic Event Catalog",
        note: "Concert list pulled from DB with image, schedule, location, price.",
      },
      {
        name: "Filtered Search System",
        note: "Filter by keyword and genre (Pop, Rock, Jazz) and more.",
      },
      {
        name: "Secure Authentication",
        note: "Login/register using password_hash() + password_verify().",
      },
      {
        name: "Detailed Booking Module",
        note: "Event details + interactive booking form with seat-type selection.",
      },
    ],
    challenges: [
      {
        title: "SQL Injection vulnerability mitigation",
        problem: "Prevent DB manipulation when users hit detail pages via a GET id URL parameter.",
        cause: "Injecting $_GET['id'] directly into SQL is exploitable.",
        solution:
          "Implemented Prepared Statements (prepare(), bind_param(), execute()) in PHP↔MySQL calls.",
        tradeoff: "More code lines and complexity vs. raw queries.",
        outcome: "DB integrity preserved; only validated integer input is processed.",
      },
    ],
    results: [
      "Prototype ticket-booking app delivered with stable CRUD functionality.",
      "Source code well-documented and hosted publicly on GitHub.",
    ],
    lessons: [
      "Monolithic Architecture: traditional PHP + MySQL full-stack flow, from simple routing to session management.",
      "Web Security Practices: password hashing and SQL Injection prevention with prepared statements.",
      "UI/UX Development: translating interaction needs into functional booking forms and catalog navigation.",
    ],
    future: [
      "Payment Gateway Integration (e.g. Midtrans) for automated transactions instead of simulation.",
      "Advanced Seating Algorithm: seat-lock during checkout to prevent double booking.",
      "Framework Migration: move native PHP to Laravel for scalability and better routing.",
    ],
  },
  memby: {
    slug: "memby",
    title: "MEMBY — Subscription Management Desktop App",
    tagline: "Java/JavaFX desktop app for tracking paid-subscription lifecycles.",
    year: "2023",
    duration: "4 months (1 semester)",
    status: "Prototype",
    team: "Team (Group 4)",
    role: "Backend Developer — sole owner of backend and data layer",
    problem: [
      "Users forget about active paid subscriptions and get charged for unwanted auto-renewals.",
      "Target user: professionals and students subscribed to multiple digital services (Netflix, Spotify, software, magazines, etc.).",
    ],
    solution: [
      "Java + JavaFX (FXML) desktop app with subscription CRUD backed by MySQL.",
      "Automated reminder mechanism triggered near expiry dates to prevent unintended auto-renewal.",
    ],
    contributions: [
      "Individually owned the design, development, and maintenance of the backend + data layer.",
      "Built the DAO module, Subscription CRUD module, and MySQL Integration module.",
      "Used JDBC + Prepared Statements to execute CRUD safely (no SQL Injection).",
      "Owned all backend logic, MySQL queries, UI↔DB data flow, and the relational schema for the subscriptions table.",
    ],
    systemDesign: [
      "2-Tier Desktop architecture (Client ↔ Database): JavaFX client talks directly to MySQL via a Java Service/DAO layer.",
      "Data flow: user input on FXML UI → Java Controller → DAO backend → JDBC INSERT/UPDATE → MySQL persistence → TableView refresh.",
      "FXML separates view from Java Controllers; backend fetches expiry dates and triggers automated reminders as due dates approach.",
    ],
    techStack: [
      { name: "Java", note: "Primary OOP language for business logic and backend systems." },
      {
        name: "JavaFX (FXML)",
        note: "Declarative desktop GUI framework separating design from code logic.",
      },
      {
        name: "MySQL",
        note: "Relational DB for persistent subscription data (service name, billing cycle, expiry dates).",
      },
    ],
    features: [
      {
        name: "Subscription Lifecycle CRUD",
        note: "Full CRUD to add, view, edit, and remove subscription entries.",
      },
      {
        name: "Automated Expiry Reminder",
        note: "Reminder triggers when expiry date approaches the current date.",
      },
      {
        name: "Dashboard Tracking",
        note: "Centralized visual dashboard to track all paid subscriptions.",
      },
    ],
    challenges: [
      {
        title: "Automated reminder execution without UI freeze",
        problem:
          "Trigger reminders from MySQL date data without blocking the JavaFX Application Thread.",
        cause: "Continuous date-diff checks or synchronous DB queries would block the UI thread.",
        solution:
          "Background task / concurrency for the DB query + Platform.runLater() to surface UI notifications safely.",
        tradeoff: "Slightly more complex thread management to avoid ConcurrencyException.",
        outcome: "Reminders fire smoothly near due dates while the UI stays responsive.",
      },
    ],
    results: [
      "MVP prototype ran stably and demonstrated the full subscription lifecycle tracking flow.",
      "Source code collaboratively managed by a 4-person team on GitHub.",
    ],
    lessons: [
      "Database Integration (JDBC): bridging a standalone desktop app to relational MySQL via the JDBC driver.",
    ],
    future: [],
  },
};
