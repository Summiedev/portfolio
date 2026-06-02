export const profile = {
  heroTag: 'Backend Engineer · HNG Internship',
  firstName: 'Sumayyah',
  lastName: 'Apatira',
  bio:
    'I build backend systems — APIs, auth flows, async pipelines, real-time infrastructure. During HNG I worked across Node.js and Python stacks, shipping everything from serverless query engines to append-only storage implementations and SSE notification delivery for a clinical AI product.',
  location: 'Lagos, Nigeria · WAT (UTC+1)',
  stackLabel: 'Node.js · Python · FastAPI',
  contacts: {
    github: 'https://github.com/Summiedev',
    email: 'apatirasummie@email.com',
    linkedin: 'https://www.linkedin.com/in/sumayyah-apatira-b5814224a',
  },
};

export const projects = [
  {
    stage: 'Stage 0',
    name: 'HNG Task 00 — Baseline API',
    description:
      'A minimal Node.js HTTP server establishing a health check endpoint and project scaffolding. Confirmed environment setup, Vercel deployment, and baseline request handling before the main task sequence.',
    stack: [
      { label: 'Node.js' },
      { label: 'Vercel' },
      { label: 'JavaScript' },
    ],
    contribution:
      'Set up the project from scratch: Node server, routing, health endpoint, deployment to Vercel.',
    proofText: 'github.com/Summiedev/HNG_TASK_00',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_00',
  },
  {
    stage: 'Stage 1',
    name: 'Profile API — Parallel Enrichment Service',
    description:
      'A serverless API that accepts a name, fires parallel requests to Genderize, Agify, and Nationalize, aggregates the results into a unified profile, and persists it to MongoDB. Idempotent by design — submitting the same name twice returns the existing record.',
    stack: [
      { label: 'Node.js' },
      { label: 'MongoDB' },
      { label: 'Vercel Serverless' },
      { label: 'UUID v7', accent: true },
    ],
    contribution:
      'Built the full service: parallel external API calls with Promise.all, profile aggregation logic, MongoDB unique-index-enforced idempotency, UUID v7 generator, CORS handling, and structured error responses across all edge cases (missing data, external API failure, method restrictions).',
    proofText: 'github.com/Summiedev/HNG_TASK_01 · hng-task-01-flame.vercel.app',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_01',
  },
  {
    stage: 'Stage 2',
    name: 'Insighta Labs — Demographic Query Engine',
    description:
      'Extended the Task 1 profile store into a full query engine. Supports combined filter + sort + pagination against 2026 seeded profiles, plus a natural-language search endpoint that parses plain-English queries into MongoDB filter objects without any AI or LLMs.',
    stack: [
      { label: 'Node.js' },
      { label: 'MongoDB Atlas' },
      { label: 'Vercel' },
      { label: 'NL Parser', accent: true },
      { label: 'Rule-based' },
    ],
    contribution:
      'Wrote the rule-based natural language parser (regex + lookup tables — gender detection, age keyword mapping, country/nationality detection), the query builder that converts parsed parameters into MongoDB filter + sort objects, the seeding pipeline, and the full set of filtered/sorted/paginated endpoints.',
    proofText: 'github.com/Summiedev/HNG_TASK_02 · hng-task-02.vercel.app',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_02',
  },
  {
    stage: 'Stage 3',
    name: 'Insighta Labs+ Backend — Auth & RBAC',
    description:
      'Production backend adding GitHub OAuth with PKCE, JWT access/refresh token lifecycle, role-based access control (admin vs analyst), versioned API headers, rate limiting, structured request logging, and CSV profile export. Consumed by both the CLI and the web portal.',
    stack: [
      { label: 'Node.js' },
      { label: 'MongoDB' },
      { label: 'JWT' },
      { label: 'OAuth + PKCE', accent: true },
      { label: 'Vercel' },
      { label: 'GitHub CI/CD' },
    ],
    contribution:
      'Built the entire auth system: GitHub OAuth PKCE flow, token issuance and refresh (access 3 min TTL, refresh 5 min TTL with rotation), logout with server-side revocation, role enforcement middleware, versioned API headers, per-role rate limits (10 req/min auth, 60 req/min query), structured request logging, and streaming CSV export for admin users.',
    proofText: 'github.com/Summiedev/insighta-backend · insighta-backend.pxxl.click',
    proofHref: 'https://github.com/Summiedev/insighta-backend',
  },
  {
    stage: 'Stage 5',
    name: 'Clinical Lab Insight — AI Analysis Pipeline',
    description:
      'AI-powered lab result interpretation for Nigerian patients. Users upload a lab result image; the system extracts values via OCR, runs them through Gemini AI for interpretation, and delivers results asynchronously via Celery workers. Includes doctor second-opinion workflows.',
    stack: [
      { label: 'Python' },
      { label: 'FastAPI' },
      { label: 'Celery' },
      { label: 'PostgreSQL' },
      { label: 'Redis' },
      { label: 'Gemini AI', accent: true },
      { label: 'Alembic' },
    ],
    contribution:
      'Built the async analysis pipeline: FastAPI upload endpoint, Celery task for OCR + AI interpretation, Alembic migrations, status-polling endpoints, and local development setup (venv, environment config, worker startup). Set up the Celery worker queue configuration and Redis broker integration.',
    proofText: 'github.com/Summiedev/HNG_TASK_05',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_05',
  },
  {
    stage: 'Stage 8A',
    name: 'Append-Only Event Store — Bitcask Pattern',
    description:
      'A durable HTTP service that stores events in an append-only log file with an in-memory byte-offset index, modeled on the Bitcask storage engine. No database — the log file is the database. Supports crash recovery via full log replay on startup.',
    stack: [
      { label: 'Node.js' },
      { label: 'Bitcask / WAL', accent: true },
      { label: 'File I/O' },
      { label: 'In-memory Index' },
      { label: 'Byte-offset Seeks' },
    ],
    contribution:
      'Built the entire store: append-only write path with byte-offset tracking, O(1) read via Map index + fs.read byte-range seek, streaming log replay for crash recovery, write queue to serialize concurrent appends, and correct unicode byte accounting using Buffer.byteLength (not string .length). Documented the WAL and Bitcask concepts and trade-offs.',
    proofText: 'github.com/Summiedev/HNG_TASK_08A',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_08A',
  },
  {
    stage: 'Stage 6',
    name: 'Clinical API — EventBus & SSE Notifications',
    description:
      'Real-time notification delivery for the clinical AI pipeline. When a lab result finishes processing, the server pushes an event to the connected client immediately via Server-Sent Events — no polling. Part of a larger Stage 6 system alongside a fault-tolerant pipeline and WebSocket chat.',
    stack: [
      { label: 'Python' },
      { label: 'FastAPI' },
      { label: 'SSE', accent: true },
      { label: 'Redis Pub/Sub' },
      { label: 'Async Generators' },
      { label: 'PostgreSQL' },
    ],
    contribution:
      'Implemented the EventBus class backed by Redis pub/sub, the SSE stream endpoint (Bearer auth, async generator, clean disconnect handling), keepalive comment pings every 30 seconds to survive proxy timeouts, missed-event replay using Last-Event-ID header against persisted Notification records, and notification preference endpoints (GET/PATCH /notifications/preferences).',
    proofText: 'github.com/hngprojects/clinical-api (contributor: Summiedev)',
    proofHref: 'https://github.com/hngprojects/clinical-api',
  },
];

export const skills = [
  {
    name: 'API Design',
    detail:
      'Designed RESTful APIs across Node.js (Vercel serverless) and Python (FastAPI). Built versioned endpoints, consistent error shapes, pagination contracts with HATEOAS links. Projects: Task 01, 02, 03, 05, 06.',
  },
  {
    name: 'Authentication',
    detail:
      'GitHub OAuth 2.0 with PKCE, JWT access + refresh token lifecycle with rotation and server-side revocation, role-based access control (admin/analyst), per-request auth middleware. Project: Insighta Labs+ Backend (Stage 3).',
  },
  {
    name: 'Databases',
    detail:
      'MongoDB Atlas (native driver, compound indexes, bulk writes, aggregations) and PostgreSQL (async via asyncpg, Alembic migrations, indexed foreign keys). Projects: Task 01–03 (Mongo), Task 05–06 (Postgres).',
  },
  {
    name: 'Background Jobs',
    detail:
      'Celery workers with Redis broker for async OCR + AI processing. Separate named queues, pool configuration for Windows/Linux, acks_late for at-least-once delivery. Project: Clinical Lab Insight (Stage 5).',
  },
  {
    name: 'Real-time / SSE',
    detail:
      'Server-Sent Events endpoint with async generator pattern, Redis pub/sub EventBus, 30-second keepalive pings, Last-Event-ID missed-event replay, clean request.is_disconnected() handling. Project: Clinical API SSE (Stage 6).',
  },
  {
    name: 'Storage & Durability',
    detail:
      'Append-only log design (Bitcask pattern), byte-offset indexing, crash recovery via log replay, concurrent write serialization, unicode-correct byte accounting. Project: Event Store (Stage 8A).',
  },
  {
    name: 'Rate Limiting',
    detail:
      'Per-endpoint rate limiting with separate windows for auth (10 req/min) and query (60 req/min) endpoints, 429 responses with correct headers. Project: Insighta Labs+ Backend (Stage 3).',
  },
  {
    name: 'Testing & Deployment',
    detail:
      'Integration test scripts against live endpoints, pytest setup with pre-commit hooks, GitHub Actions CI/CD pipeline (lint → test → build → deploy), Vercel serverless deployments. Projects: Task 03, 05.',
  },
  {
    name: 'Logging',
    detail:
      'Structured per-request logging (method, endpoint, status, latency). Pipeline audit log with full event history per case (event type, provider, duration, attempt, error). Projects: Task 03, Stage 6.',
  },
];

export const featured = {
  title: 'Clinical API — SSE Notification System',
  problem:
    'The clinical AI pipeline processed lab results asynchronously — OCR, then Gemini interpretation, then storage. The pipeline could finish anywhere from 5 seconds to several minutes later. The client had no way to know. It was polling GET /cases/{id}/interpretations/latest every few seconds, generating constant database reads and still delivering delayed feedback. The requirement was push delivery: when the pipeline finishes, the client knows immediately.',
  architecture:
    'The design uses two decoupled layers: the EventBus (Redis pub/sub) and the SSE endpoint. The pipeline has no knowledge of SSE — it just calls event_bus.publish(user_id, event_type, payload). The SSE endpoint holds a persistent HTTP connection and subscribes to that user\'s channel via an async generator.',
  flowDiagram:
    'Client opens GET /notifications/stream\n │\n │  (pipeline finishes — calls event_bus.publish)\n │\n ▼\nEventBus.publish → Redis channel f"events:{user_id}"\n │\n ▼\nEventBus.subscribe (async generator) → yields deserialized event\n │\n ▼\nSSE endpoint → writes "event: interpretation_ready\ndata: {...}\n\n"\n │\n ▼\nClient receives push notification immediately',
  endpoints: [
    'GET /notifications/stream — SSE endpoint. Authenticates via Bearer token, subscribes to EventBus, streams events as they arrive, pings every 30 seconds.',
    'GET /notifications/preferences — Returns the user\'s notification settings (e.g. notify_on_complete flag).',
    'PATCH /notifications/preferences — Updates notification preferences. The pipeline checks this before publishing.',
    'EventBus (app/services/events.py) — Redis pub/sub wrapper. publish() serialises to JSON and pushes to channel. subscribe() is an async generator yielding events or None on 30-second timeout (for keepalive handling upstream).',
  ],
  challenge: [
    'SSE connections drop — proxy timeouts, network blips, tab refreshes. When a client reconnects, any events fired while it was disconnected are gone from Redis. The browser\'s SSE spec includes a Last-Event-ID header precisely for this.',
    'The solution required two things working together: every event pushed over SSE includes an id: field set to the Notification record\'s database UUID, and every event also writes a Notification row to PostgreSQL with a delivered_at column. On reconnect, if Last-Event-ID is present, the endpoint queries for undelivered notifications created after that ID and replays them before entering the live subscription loop. The Redis pub/sub handles live delivery; the database handles durability and replay. Neither layer knows about the other\'s job.',
  ],
};

export const reflection = [
  'The biggest shift for me during HNG was moving from feature thinking to systems thinking. Early stages were about making things work. Later stages were about understanding what "work" actually means under concurrent load, network failures, and process restarts.',
  'Task 08A made this concrete. Before it, I thought of databases as external services you connect to. Building the event store from scratch — tracking byte offsets, streaming log replay, serialising concurrent writes into a queue — showed me what a database is actually doing underneath. The WAL pattern, Bitcask, log-structured storage: these stopped being interview terms and became mental models I actually use.',
  'The SSE work on the clinical API was the first time I built a genuinely stateful server feature. Getting async generators right, handling disconnects cleanly, and figuring out the replay problem — those required understanding the whole request lifecycle, not just the happy path. I learned to design for the edges first.',
  'The auth system in Stage 3 taught me that security is a series of explicit decisions, not a default. PKCE matters. Token rotation matters. Centralised middleware matters — not scattering role checks across every handler. Every shortcut I considered and rejected made the resulting code more trustworthy.',
  'Technically, I came in stronger on Node.js and left also comfortable with the Python async ecosystem — FastAPI, asyncpg, Celery, Alembic. I\'m slower in Python than in Node.js but I know the patterns now. That was the gap I wanted to close.',
];

export const contactLinks = [
  { label: 'GitHub', value: 'github.com/Summiedev', href: profile.contacts.github },
  { label: 'Email', value: profile.contacts.email, href: `mailto:${profile.contacts.email}` },
  { label: 'Location', value: profile.location },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/sumayyah-apatira-b5814224a', href: profile.contacts.linkedin },
];
