
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