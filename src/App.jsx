import { useEffect, useState, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const profile = {
  heroTag: "Backend Engineer",
  firstName: "Sumayyah",
  lastName: "Apatira",
  bio: "Backend engineer focused on building scalable APIs, distributed systems, authentication and authorization flows, event-driven architectures, real-time services, and data-intensive applications. Experienced with databases, caching, testing, observability, asynchronous processing, and deploying production-ready systems.",
  location: "Lagos, Nigeria · WAT (UTC+1)",
  stackLabel: "Node.js · Python · FastAPI",
  contacts: {
    github: "https://github.com/Summiedev",
    email: "apatirasummie@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumayyah-apatira-b5814224a",
  },
};

const projects = [
  {
    stage: "Stage 0",
    name: "HNG Task 00 — Baseline API",
    description: "A minimal Node.js HTTP server establishing a health check endpoint and project scaffolding. Confirmed environment setup, Vercel deployment, and baseline request handling before the main task sequence.",
    stack: [{ label: "Node.js" }, { label: "Vercel" }, { label: "JavaScript" }],
    contribution: "Set up the project from scratch: Node server, routing, health endpoint, deployment to Vercel.",
    proofText: "github.com/Summiedev/HNG_TASK_00",
    proofHref: "https://github.com/Summiedev/HNG_TASK_00",
  },
  {
    stage: "Stage 1",
    name: "Profile API — Parallel Enrichment Service",
    description: "A serverless API that accepts a name, fires parallel requests to Genderize, Agify, and Nationalize, aggregates results into a unified profile, and persists it to MongoDB. Idempotent by design.",
    stack: [{ label: "Node.js" }, { label: "MongoDB" }, { label: "Vercel Serverless" }, { label: "UUID v7", accent: true }],
    contribution: "Built the full service: parallel external API calls with Promise.all, profile aggregation, MongoDB unique-index-enforced idempotency, UUID v7, CORS, and structured error responses.",
    proofText: "github.com/Summiedev/HNG_TASK_01",
    proofHref: "https://github.com/Summiedev/HNG_TASK_01",
  },
  {
    stage: "Stage 2",
    name: "Insighta Labs — Demographic Query Engine",
    description: "Extended the Task 1 profile store into a full query engine. Supports combined filter + sort + pagination against 2026 seeded profiles, plus a natural-language search endpoint without any AI or LLMs.",
    stack: [{ label: "Node.js" }, { label: "MongoDB Atlas" }, { label: "Vercel" }, { label: "NL Parser", accent: true }, { label: "Rule-based" }],
    contribution: "Wrote the rule-based NL parser (regex + lookup tables), query builder converting parsed params into MongoDB filter + sort objects, seeding pipeline, and paginated endpoints.",
    proofText: "github.com/Summiedev/HNG_TASK_02",
    proofHref: "https://github.com/Summiedev/HNG_TASK_02",
  },
  {
    stage: "Stage 3",
    name: "Insighta Labs+ Backend — Auth & RBAC",
    description: "Production backend adding GitHub OAuth with PKCE, JWT access/refresh token lifecycle, role-based access control (admin vs analyst), versioned API headers, rate limiting, and CSV profile export.",
    stack: [{ label: "Node.js" }, { label: "MongoDB" }, { label: "JWT" }, { label: "OAuth + PKCE", accent: true }, { label: "Vercel" }, { label: "GitHub CI/CD" }],
    contribution: "Built the entire auth system: PKCE flow, token issuance and refresh, logout with server-side revocation, role enforcement middleware, per-role rate limits, and streaming CSV export.",
    proofText: "github.com/Summiedev/insighta-backend",
    proofHref: "https://github.com/Summiedev/insighta-backend",
  },
  {
    stage: "Stage 4",
    name: "Insighta Labs+ Scale — Redis Caching",
    description: "Scaled the existing platform for sustained traffic growth by adding Redis caching, query optimization, and reliability controls without changing Stage 3 auth and RBAC behavior.",
    stack: [{ label: "Node.js" }, { label: "Redis", accent: true }, { label: "MongoDB" }, { label: "Caching" }, { label: "Monitoring" }],
    contribution: "Designed cache-first query paths, added Redis result caching and invalidation, tuned MongoDB indexes, introduced performance logging while keeping auth/RBAC intact.",
    proofText: "github.com/Summiedev/insighta-backend",
    proofHref: "https://github.com/Summiedev/insighta-backend",
  },
  {
    stage: "Stage 5",
    name: "Clinsights API— AI Analysis Pipeline",
    description: "AI-powered lab result interpretation for Nigerian patients. Users upload a lab result image; the system extracts values via OCR, runs them through Gemini AI for interpretation, and delivers results asynchronously via Celery workers.",
    stack: [{ label: "Python" }, { label: "FastAPI" }, { label: "Celery" }, { label: "PostgreSQL" }, { label: "Redis" }, { label: "Gemini AI", accent: true }],
    contribution: "Built the async analysis pipeline: FastAPI upload endpoint, Celery task for OCR + AI interpretation, Alembic migrations, status-polling endpoints, and local development setup.",
    proofText: "github.com/Summiedev/HNG_TASK_05",
    proofHref: "https://github.com/Summiedev/HNG_TASK_05",
  },
  {
    stage: "Stage 8A",
    name: "Append-Only Event Store — Bitcask Pattern",
    description: "A durable HTTP service storing events in an append-only log file with in-memory byte-offset index, modeled on the Bitcask storage engine. No database — the log file is the database. Supports crash recovery via full log replay.",
    stack: [{ label: "Node.js" }, { label: "Bitcask / WAL", accent: true }, { label: "File I/O" }, { label: "In-memory Index" }],
    contribution: "Built the entire store: append-only write path, O(1) read via Map index + byte-range seek, streaming log replay, write queue for concurrent appends, and unicode-correct byte accounting.",
    proofText: "github.com/Summiedev/HNG_TASK_08A",
    proofHref: "https://github.com/Summiedev/HNG_TASK_08A",
  },
  {
    stage: "Stage 6",
    name: "Clinsights API — EventBus & SSE Notifications",
    description: "Real-time notification delivery for the Clinsights pipeline. When a lab result finishes processing, the server pushes an event to the connected client via Server-Sent Events, with no polling.",
    stack: [{ label: "Python" }, { label: "FastAPI" }, { label: "SSE", accent: true }, { label: "Redis Pub/Sub" }, { label: "Async Generators" }, { label: "PostgreSQL" }],
    contribution: "Implemented the EventBus backed by Redis pub/sub, SSE stream endpoint, keepalive pings every 30s, missed-event replay using Last-Event-ID header, and notification preference endpoints.",
    proofText: "github.com/hngprojects/clinical-api",
    proofHref: "https://github.com/hngprojects/clinical-api",
  },
];

const skills = [
  { name: "API Design", detail: "RESTful APIs across Node.js and FastAPI. Versioned endpoints, consistent error shapes, pagination contracts with HATEOAS-style links." },
  { name: "Authentication", detail: "GitHub OAuth 2.0 with PKCE, JWT access + refresh lifecycle with rotation and server-side revocation, RBAC middleware for Insighta Labs+." },
  { name: "Databases", detail: "MongoDB Atlas (native driver, compound indexes, aggregations) and PostgreSQL (asyncpg, Alembic migrations) for analytics and stateful backend workloads." },
  { name: "Background Jobs", detail: "Celery workers with Redis broker for async OCR and AI processing. Named queues, pool configuration, and acks_late for at-least-once delivery." },
  { name: "Real-time / SSE", detail: "Server-Sent Events with async generator pattern, Redis pub/sub EventBus, 30s keepalive pings, Last-Event-ID missed-event replay." },
  { name: "Storage & Durability", detail: "Append-only log design (Bitcask pattern), byte-offset indexing, crash recovery via log replay, concurrent write serialization." },
  { name: "Rate Limiting", detail: "Per-endpoint rate limiting with separate windows for auth (10 req/min) and query (60 req/min), returning 429 with correct headers." },
  { name: "Performance & Caching", detail: "Redis caching for repeated filter/aggregation queries, cache invalidation on profile ingestion, heatmap-based query tuning." },
  { name: "Observability", detail: "Request logging, latency metrics, and query tracing to identify hot queries. Instrumentation guided caching and index decisions." },
  { name: "Testing & Deployment", detail: "Integration test scripts, pytest with pre-commit hooks, GitHub Actions CI/CD (lint → test → build → deploy), and Vercel deployments." },
];

const reflection = [
  "The biggest shift for me during HNG was moving from feature thinking to systems thinking. Early on, I was mostly focused on getting endpoints to work. As I progressed, I started thinking more about what 'working' actually means in real systems — concurrency issues, failure states, and how services behave under load or bad inputs.",
  "I started the program stronger in Node.js, but deliberately pushed myself into Python with FastAPI. That transition wasn't just syntax — it was about learning a different way of structuring APIs, async patterns, and backend architecture. I'm now comfortable building in both ecosystems.",
  "A big part of my learning came from reading system design materials and immediately trying to apply them. Instead of just consuming concepts like caching, auth flows, or scalability patterns, I had to translate them into actual code decisions. That gap between theory and implementation is where most of my growth happened.",
  "Debugging real issues — failing tests, WebSocket/auth edge cases, rate limiting — forced me to think in terms of system behavior instead of isolated functions. I stopped asking only 'does this work?' and started asking 'how does this fail, and what happens when it does?'",
];

const contactLinks = [
  { label: "GitHub", value: "github.com/Summiedev", href: profile.contacts.github, icon: "github" },
  { label: "Email", value: "apatirasummie@gmail.com", href: `mailto:${profile.contacts.email}`, icon: "email" },
  { label: "LinkedIn", value: "sumayyah-apatira", href: profile.contacts.linkedin, icon: "linkedin" },
  { label: "Location", value: "Lagos, Nigeria · WAT", href: null, icon: "location" },
];

// ─── ICONS ───────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}>
    <path d="M4 6l4 4 4-4"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M3 12h18M3 6h18M3 18h18"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
);

// ─── FEATURED DATA ────────────────────────────────────────────────────────────
const featured = {
  title: "Clinical API — SSE Notification System",
  problem: "The clinical AI pipeline processed lab results asynchronously — OCR to Gemini interpretation to storage — taking anywhere from 5 seconds to several minutes. The client was polling GET /cases/{id}/interpretations/latest every few seconds, generating constant database reads with still-delayed feedback. The requirement: push delivery.",
  architecture: "Two decoupled layers: the EventBus (Redis pub/sub) and the SSE endpoint. The pipeline has no knowledge of SSE — it just calls event_bus.publish(user_id, event_type, payload). The SSE endpoint holds a persistent HTTP connection and subscribes to that user's channel via an async generator.",
  endpoints: [
    "GET /notifications/stream — SSE endpoint. Authenticates via Bearer token, subscribes to EventBus, streams events, pings every 30 seconds.",
    "GET /notifications/preferences — returns user notification settings.",
    "PATCH /notifications/preferences — updates notification preferences; pipeline checks this before publishing.",
    "EventBus (app/services/events.py) — Redis pub/sub wrapper. publish() serialises to JSON. subscribe() is an async generator yielding events or None on 30s timeout.",
  ],
  challenge: [
    "SSE connections drop from proxy timeouts, network blips, tab refreshes. When a client reconnects, any events fired while disconnected are gone from Redis. The browser's SSE spec includes a Last-Event-ID header precisely for this.",
    "The solution: every event pushed over SSE includes an id: field set to the Notification record's database UUID, and every event writes a Notification row to PostgreSQL with a delivered_at column. On reconnect, if Last-Event-ID is present, the endpoint replays undelivered notifications from that ID before entering the live subscription loop. Redis handles live delivery; the database handles durability. Neither layer knows about the other's job.",
  ],
};

// ─── STYLES ──────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap');

  :root {
    --bg: #0d0d0f;
    --surface: #141416;
    --surface-2: #1a1a1e;
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.12);
    --text: #e8e6e1;
    --text-2: #a09e99;
    --text-3: #6b6966;
    --accent: #00e5a0;
    --accent-dim: #00c488;
    --accent-glow: rgba(0,229,160,0.12);
    --highlight: #ff6b35;
    --mono: 'DM Mono', monospace;
    --display: 'Syne', sans-serif;
    --serif: 'Instrument Serif', serif;
    --radius: 12px;
    --radius-sm: 6px;
  }

  [data-theme="light"] {
    --bg: #fafaf8;
    --surface: #f3f2ee;
    --surface-2: #ebe9e3;
    --border: rgba(0,0,0,0.08);
    --border-strong: rgba(0,0,0,0.15);
    --text: #1a1814;
    --text-2: #5c5a55;
    --text-3: #9e9c97;
    --accent: #008a5e;
    --accent-dim: #00a870;
    --accent-glow: rgba(0,138,94,0.1);
    --highlight: #d44a1a;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--display);
    font-size: 16px;
    line-height: 1.7;
    overflow-x: hidden;
    transition: background 0.3s, color 0.3s;
  }

  /* ── NAV ── */
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 200;
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .nav-inner {
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 clamp(16px, 4vw, 40px);
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .nav-logo {
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.06em;
    text-decoration: none;
    flex-shrink: 0;
  }

  /* Full nav links — desktop only */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
  }

  .nav-links a {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-2);
    text-decoration: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    transition: color 0.2s, background 0.2s;
    white-space: nowrap;
  }

  .nav-links a:hover {
    color: var(--accent);
    background: var(--accent-glow);
  }

  /* Mobile hamburger — hidden on desktop */
  .nav-burger {
    display: none;
    background: none;
    border: 1px solid var(--border-strong);
    color: var(--text-2);
    padding: 7px 10px;
    border-radius: var(--radius-sm);
    cursor: pointer;
    align-items: center;
    gap: 6px;
    font-family: var(--mono);
    font-size: 11px;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .nav-burger:hover {
    color: var(--accent);
    border-color: var(--accent);
    background: var(--accent-glow);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .theme-btn {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-3);
    background: none;
    border: 1px solid var(--border);
    padding: 6px 12px;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
    white-space: nowrap;
  }

  .theme-btn:hover {
    color: var(--text);
    border-color: var(--border-strong);
  }

  /* Mobile dropdown panel */
  .mobile-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border-strong);
    padding: 8px 0 12px;
    flex-direction: column;
  }

  .mobile-menu.open { display: flex; }

  .mobile-menu a {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text-2);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 11px clamp(16px, 4vw, 40px);
    transition: color 0.2s, background 0.2s;
  }

  .mobile-menu a:hover {
    color: var(--accent);
    background: var(--accent-glow);
  }

  /* ── WRAP ── */
  .wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 clamp(16px, 5vw, 40px);
  }

  /* ── HERO ── */
  .hero {
    padding: clamp(100px, 16vh, 148px) 0 clamp(60px, 10vh, 96px);
    border-bottom: 1px solid var(--border);
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.25em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .hero-eyebrow::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: var(--accent);
  }

  .hero h1 {
    font-family: var(--display);
    font-size: clamp(44px, 9.5vw, 100px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.04em;
    margin-bottom: 28px;
  }

  .hero h1 em {
    font-family: var(--serif);
    font-style: italic;
    color: var(--accent);
    font-weight: 400;
    letter-spacing: -0.02em;
  }

  .hero-bio {
    max-width: 520px;
    color: var(--text-2);
    line-height: 1.8;
    margin-bottom: 36px;
    font-size: 15px;
  }

  .hero-meta {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
  }

  .meta-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text-3);
  }

  .meta-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .meta-dot.orange { background: var(--highlight); }

  /* ── SECTIONS ── */
  .section {
    padding: clamp(56px, 10vh, 80px) 0;
    border-bottom: 1px solid var(--border);
  }

  .sec-head {
    display: flex;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 48px;
  }

  .sec-num {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
    flex-shrink: 0;
  }

  .sec-title {
    font-size: clamp(22px, 4.5vw, 34px);
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .sec-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* ── PROJECT CARDS ── */
  .project-grid { display: grid; gap: 2px; }

  .proj-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid transparent;
    position: relative;
    transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    overflow: hidden;
  }

  /* Desktop: hover to reveal details */
  @media (hover: hover) {
    .proj-card { cursor: pointer; }

    .proj-top {
      padding: clamp(20px, 4vw, 32px);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .proj-stage {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .proj-name {
      font-size: clamp(17px, 2.8vw, 22px);
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .proj-desc {
      font-size: 14px;
      color: var(--text-2);
      line-height: 1.65;
      max-width: 600px;
    }

    .proj-expand {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
      opacity: 0;
    }

    .proj-card:hover .proj-expand {
      max-height: 360px;
      opacity: 1;
    }

    .proj-expand-inner {
      padding: 0 clamp(20px, 4vw, 32px) clamp(20px, 4vw, 28px);
      border-top: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .proj-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-top: 16px;
    }

    .proj-contribution {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.6;
      padding-left: 12px;
      border-left: 2px solid var(--accent-dim);
    }

    .proj-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--text-3);
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: color 0.2s;
    }

    .proj-link:hover { color: var(--accent); }

    .proj-card:hover {
      border-color: var(--border-strong);
      border-left-color: var(--accent);
      background: color-mix(in srgb, var(--surface) 90%, var(--accent) 4%);
      box-shadow: 0 4px 24px rgba(0,0,0,0.2);
    }

    .proj-card:hover .proj-stage { color: var(--accent-dim); }
  }

  /* Mobile: dropdown toggle */
  @media (hover: none), (max-width: 640px) {
    .proj-card { cursor: default; }

    .proj-top {
      padding: clamp(16px, 4vw, 24px);
      display: flex;
      flex-direction: column;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }

    .proj-top-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .proj-stage {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--accent);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .proj-name {
      font-size: clamp(16px, 4vw, 20px);
      font-weight: 700;
      letter-spacing: -0.01em;
      flex: 1;
    }

    .proj-desc {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.6;
    }

    .proj-chevron {
      flex-shrink: 0;
      margin-top: 2px;
      color: var(--text-3);
    }

    .proj-expand {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
      opacity: 0;
    }

    .proj-expand.open {
      max-height: 500px;
      opacity: 1;
    }

    .proj-expand-inner {
      padding: 0 clamp(16px, 4vw, 24px) clamp(16px, 4vw, 20px);
      border-top: 1px solid var(--border);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .proj-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-top: 14px;
    }

    .proj-contribution {
      font-size: 13px;
      color: var(--text-2);
      line-height: 1.6;
      padding-left: 12px;
      border-left: 2px solid var(--accent-dim);
    }

    .proj-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--text-3);
      text-decoration: none;
      letter-spacing: 0.05em;
    }

    .proj-card.open {
      border-left-color: var(--accent);
      background: color-mix(in srgb, var(--surface) 90%, var(--accent) 4%);
    }
  }

  .tag {
    font-family: var(--mono);
    font-size: 10px;
    padding: 3px 9px;
    border: 1px solid var(--border-strong);
    color: var(--text-3);
    letter-spacing: 0.05em;
    border-radius: 3px;
  }

  .tag.accent {
    border-color: var(--accent-dim);
    color: var(--accent);
  }

  /* ── SKILLS ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2px;
  }

  .skill-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid transparent;
    padding: 22px 24px;
    transition: border-color 0.25s, background 0.25s;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .skill-card:hover {
    border-left-color: var(--accent);
    background: var(--surface-2);
  }

  .skill-name {
    font-size: 15px;
    font-weight: 700;
    color: var(--accent);
  }

  .skill-detail {
    font-size: 13px;
    color: var(--text-2);
    line-height: 1.6;
  }

  /* ── FEATURED ── */
  .featured-block {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: clamp(24px, 5vw, 40px);
  }

  .feat-eyebrow {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--accent);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .feat-title {
    font-size: clamp(20px, 4vw, 30px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 32px;
  }

  .feat-section { margin-bottom: 28px; }

  .feat-section h4 {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--accent);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--border);
  }

  .feat-section p {
    font-size: 14px;
    color: var(--text-2);
    line-height: 1.75;
    margin-bottom: 10px;
  }

  .feat-section ul { list-style: none; padding: 0; }

  .feat-section li {
    font-size: 14px;
    color: var(--text-2);
    line-height: 1.7;
    padding: 5px 0 5px 18px;
    position: relative;
  }

  .feat-section li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--accent);
    font-family: var(--mono);
    font-size: 11px;
  }

  /* ── REFLECTION ── */
  .reflection-text {
    max-width: 680px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .reflection-text p {
    font-size: clamp(14px, 2vw, 16px);
    color: var(--text-2);
    line-height: 1.85;
  }

  /* ── CONTACT ── */
  .contact-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
    margin-top: 8px;
  }

  .contact-cta {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-headline {
    font-size: clamp(26px, 5vw, 40px);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  .contact-headline em {
    font-family: var(--serif);
    font-style: italic;
    color: var(--accent);
    font-weight: 400;
  }

  .contact-body {
    font-size: 15px;
    color: var(--text-2);
    line-height: 1.75;
    max-width: 400px;
  }

  .contact-availability {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .avail-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-glow);
    animation: pulse-dot 2s infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 2px var(--accent-glow); }
    50% { box-shadow: 0 0 0 5px transparent; }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .contact-link-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }

  .contact-link-item:hover {
    border-color: var(--accent);
    background: var(--accent-glow);
    transform: translateX(4px);
  }

  .cli-icon {
    width: 38px; height: 38px;
    border-radius: 10px;
    background: var(--surface-2);
    border: 1px solid var(--border-strong);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    flex-shrink: 0;
    transition: background 0.2s;
  }

  .contact-link-item:hover .cli-icon {
    background: color-mix(in srgb, var(--accent) 15%, transparent);
  }

  .cli-text { flex: 1; min-width: 0; }

  .cli-label {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--text-3);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .cli-value {
    font-size: 13px;
    color: var(--text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cli-arrow {
    color: var(--text-3);
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.2s, transform 0.2s;
    font-family: var(--mono);
    font-size: 16px;
    flex-shrink: 0;
  }

  .contact-link-item:hover .cli-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  /* ── FOOTER ── */
  footer {
    padding: clamp(28px, 5vh, 40px) 0;
    text-align: center;
  }

  footer p {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-3);
    letter-spacing: 0.06em;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-burger { display: flex; }
    .nav { position: fixed; }

    .contact-section {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }

  @media (max-width: 560px) {
    .hero h1 { font-size: clamp(38px, 11vw, 56px); }
    .skills-grid { grid-template-columns: 1fr; }
    .sec-head { margin-bottom: 28px; }
  }
`;

// ─── CONTACT ICON MAP ─────────────────────────────────────────────────────────
const iconMap = {
  github: <GithubIcon />,
  email: <EmailIcon />,
  linkedin: <LinkedInIcon />,
  location: <LocationIcon />,
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const isTouchDevice = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <div
      className={`proj-card${open ? " open" : ""}`}
      data-stage={project.stage}
    >
      <div
        className="proj-top"
        onClick={() => {
          if (isTouchDevice || window.innerWidth <= 640) setOpen(o => !o);
        }}
      >
        <div className="proj-top-row">
          <div style={{ flex: 1 }}>
            <div className="proj-stage">{project.stage}</div>
            <h3 className="proj-name">{project.name}</h3>
          </div>
          <span className="proj-chevron" style={{ display: window.innerWidth > 640 ? "none" : undefined }}>
            <ChevronIcon open={open} />
          </span>
        </div>
        <p className="proj-desc">{project.description}</p>
      </div>

      <div className={`proj-expand${open ? " open" : ""}`}>
        <div className="proj-expand-inner">
          <div className="proj-stack">
            {project.stack.map(t => (
              <span key={t.label} className={`tag${t.accent ? " accent" : ""}`}>{t.label}</span>
            ))}
          </div>
          <p className="proj-contribution">{project.contribution}</p>
          <a className="proj-link" href={project.proofHref} target="_blank" rel="noreferrer">
            <ExternalIcon />
            {project.proofText}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Deep Dive", href: "#featured" },
    { label: "Reflection", href: "#learning" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{styles}</style>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">SA.dev</a>

          {/* Desktop full nav */}
          <div className="nav-links">
            {navItems.map(n => <a key={n.href} href={n.href}>{n.label}</a>)}
          </div>

          <div className="nav-right">
            <button className="theme-btn" onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>
              {theme === "dark" ? "☀ Light" : "◑ Dark"}
            </button>
            <button className="nav-burger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Toggle menu">
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`}>
          {navItems.map(n => (
            <a key={n.href} href={n.href} onClick={closeMenu}>{n.label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-eyebrow">{profile.heroTag}</div>
          <h1>
            {profile.firstName}<br />
            <em>{profile.lastName}</em>
          </h1>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-meta">
            <span className="meta-pill">
              <span className="meta-dot" />
              {profile.location}
            </span>
            <span className="meta-pill">
              <span className="meta-dot orange" />
              {profile.stackLabel}
            </span>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section" id="projects">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title">HNG Projects</h2>
            <div className="sec-line" />
          </div>
          <div className="project-grid">
            {projects.map(p => <ProjectCard key={p.name} project={p} />)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title">Backend Skills</h2>
            <div className="sec-line" />
          </div>
          <div className="skills-grid">
            {skills.map(s => (
              <div key={s.name} className="skill-card">
                <div className="skill-name">{s.name}</div>
                <div className="skill-detail">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section" id="featured">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title">Featured Project</h2>
            <div className="sec-line" />
          </div>
          <div className="featured-block">
            <div className="feat-eyebrow">Deep Dive</div>
            <div className="feat-title">{featured.title}</div>

            <div className="feat-section">
              <h4>The Problem</h4>
              <p>{featured.problem}</p>
            </div>
            <div className="feat-section">
              <h4>Architecture</h4>
              <p>{featured.architecture}</p>
            </div>
            <div className="feat-section">
              <h4>Key Endpoints & Modules</h4>
              <ul>{featured.endpoints.map(e => <li key={e}>{e}</li>)}</ul>
            </div>
            <div className="feat-section">
              <h4>Technical Challenge: Missed Event Replay</h4>
              {featured.challenge.map(p => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="section" id="learning">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2 className="sec-title">Learning Reflection</h2>
            <div className="sec-line" />
          </div>
          <div className="reflection-text">
            {reflection.map(p => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="sec-head">
            <span className="sec-num">05</span>
            <h2 className="sec-title">Contact</h2>
            <div className="sec-line" />
          </div>

          <div className="contact-section">
            <div className="contact-cta">
              <h3 className="contact-headline">
                Let's build something <em>reliable</em>
              </h3>
              <p className="contact-body">
                Available for backend roles, contract work, and technical collaboration.
                If you want a reliable API, secure auth stack, or scalable data pipeline — let's connect.
              </p>
              <div className="contact-availability">
                <span className="avail-dot" />
                Open to opportunities
              </div>
            </div>

            <div className="contact-links">
              {contactLinks.map(c => {
                const Wrapper = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={c.label}
                    className="contact-link-item"
                    href={c.href || undefined}
                    target={c.href && !c.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={c.href ? "noreferrer" : undefined}
                  >
                    <div className="cli-icon">{iconMap[c.icon]}</div>
                    <div className="cli-text">
                      <div className="cli-label">{c.label}</div>
                      <div className="cli-value">{c.value}</div>
                    </div>
                    {c.href && <span className="cli-arrow">→</span>}
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>Built with React ❤ · HNG Internship · 2026</p>
        </div>
      </footer>
    </>
  );
}