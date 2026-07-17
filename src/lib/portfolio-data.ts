import type { Project } from "@/components/project-card";

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
    stack: [
      "Flutter",
      "Dart",
      "MediaPipe",
      "Gradient Boosting",
      "Python",
      "Android",
    ],
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
    title: "MyDeadliftCoach",
    role: "Solo build · Thesis · Published on Google Play Store",
    year: "2026",
    stack: [
      "Flutter",
      "Dart",
      "MediaPipe",
      "Gradient Boosting",
      "Python",
      "Android",
    ],
    bullets: [
      "Real-time deadlift form correction using a Lightweight Pose Estimation pipeline running fully on-device.",
      "86.7% classification accuracy (Gradient Boosting with Early Stopping) at 3–7 ms per-frame inference latency.",
      "Trained on a curated dataset of 191 video sequences and 21,813 extracted frames.",
    ],
    outcome:
      "Deployed to Google Play Store · Intellectual Property Rights Certificate granted",
  },
  {
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
    title:
      "MBKM MSIB Batch 7 — Android Mobile Developer at MojadiApp, 2024.",
  },
  {
    title:
      "Anthropic Academy — Claude Platform 101, Claude Code 101, July 2026.",
  },
  {
    title:
      "OpenAI Academy — Agents & Workflows, Applied AI Foundations, July 2026.",
  },
  {
    title:
      "Effective Workplace Skills — Wadhwani Foundation via UKDW, Dec 2024.",
  },
];

export const activities = [
  "Coordinator, Equipment & Security Division — Vihara Vidyaloka Buddhist Ceremonies (Waisak, Kathina Dana, Magha Puja), 2022–2023.",
  "Staff, Household Affairs Division — Vidyasena Vihara Vidyaloka, 2022–2023.",
  "Committee Member, Equipment & Security Division — FTI FEST × NVIDIA Event, 2024.",
];