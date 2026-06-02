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
    stage: 'Stage 4',
    name: 'Insighta Labs+ Scale — Performance & Redis Caching',
    description:
      'Scaled the existing platform for sustained traffic growth by adding Redis caching, query optimization, and reliability controls without changing the Stage 3 auth and RBAC behavior.',
    stack: [
      { label: 'Node.js' },
      { label: 'Redis', accent: true },
      { label: 'MongoDB' },
      { label: 'Caching' },
      { label: 'Monitoring' },
      { label: 'Single-region Cloud' },
    ],
    contribution:
      'Designed cache-first query paths for repeated filter and aggregation patterns, added Redis result caching and invalidation, tuned MongoDB indexes for large profile sets, introduced performance logging, and kept auth/RBAC intact while reducing database load.',
    proofText: 'github.com/Summiedev/insighta-backend (scale design)',
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
    name: 'Clinsights API — EventBus & SSE Notifications',
    description:
      'Real-time notification delivery for the Clinsights pipeline. When a lab result finishes processing, the server pushes an event to the connected client immediately via Server-Sent Events — no polling. Part of a larger Stage 6 system alongside a fault-tolerant pipeline and WebSocket chat.',
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
      'Designed RESTful APIs across Node.js (Vercel serverless) and Python (FastAPI). Built versioned endpoints, consistent error shapes, and pagination contracts with HATEOAS-style links.',
  },
  {
    name: 'Authentication',
    detail:
      'GitHub OAuth 2.0 with PKCE, JWT access + refresh token lifecycle with rotation and server-side revocation, role-based access control (admin/analyst), and per-request auth middleware for Insighta Labs+ Backend.',
  },
  {
    name: 'Databases',
    detail:
      'MongoDB Atlas (native driver, compound indexes, bulk writes, aggregations) and PostgreSQL (async via asyncpg, Alembic migrations, indexed foreign keys) for analytics and stateful backend workloads.',
  },
  {
    name: 'Background Jobs',
    detail:
      'Celery workers with Redis broker for async OCR and AI processing. Separate named queues, pool configuration for Windows/Linux, and acks_late for at-least-once delivery in the Clinsights pipeline.',
  },
  {
    name: 'Real-time / SSE',
    detail:
      'Server-Sent Events endpoint with async generator pattern, Redis pub/sub EventBus, 30-second keepalive pings, Last-Event-ID missed-event replay, and clean request.is_disconnected() handling for Clinsights notifications.',
  },
  {
    name: 'Storage & Durability',
    detail:
      'Append-only log design (Bitcask pattern), byte-offset indexing, crash recovery via log replay, concurrent write serialization, and unicode-correct byte accounting.',
  },
  {
    name: 'Rate Limiting',
    detail:
      'Per-endpoint rate limiting with separate windows for auth (10 req/min) and query (60 req/min) endpoints, returning 429 responses with the correct rate-limit headers.',
  },
  {
    name: 'Performance & Caching',
    detail:
      'Optimized slow query paths and reduced DB pressure using Redis caching for repeated filter/aggregation queries, cache invalidation on profile ingestion, and heatmap-based query tuning.',
  },
  {
    name: 'System Design & Scaling',
    detail:
      'Designed the platform for hundreds to thousands of queries per minute with single-region reliability, read-heavy cache layering, and maintainable growth without microservice complexity.',
  },
  {
    name: 'Observability',
    detail:
      'Added request logging, latency metrics, and query tracing to identify hot queries and slow paths. The instrumentation guided caching and index decisions.',
  },
  {
    name: 'Testing & Deployment',
    detail:
      'Integration test scripts against live endpoints, pytest setup with pre-commit hooks, GitHub Actions CI/CD pipeline (lint → test → build → deploy), and Vercel serverless deployments.',
  },
  {
    name: 'Logging',
    detail:
      'Structured per-request logging (method, endpoint, status, latency) and pipeline audit trails tracking event type, provider, duration, attempt, and error.',
  },
];

export const contactIntro =
  'I’m available for backend roles, contract work, and technical collaboration. If you want a reliable API, secure auth stack, or scalable data pipeline, let’s connect and make it happen.';

export const stage4 = {
  title: 'Stage 4 — Scale Insighta Labs+',
  summary:
    'Scaled the existing Insighta Labs+ backend without changing Stage 3 auth, RBAC, CLI, or web portal behavior. Focused on query performance, cache hit rate, database load reduction, and single-region reliability for read-heavy traffic.',
  requirements: [
    'Keep Stage 3 features intact: GitHub OAuth, RBAC, CLI, web portal, CSV export.',
    'Support hundreds to low thousands of queries per minute with near-interactive latency.',
    'Reduce database load by caching repeated query results and hot filter patterns.',
    'Provide clear observability for query latency and cache effectiveness.',
    'Maintain simple, maintainable architecture with managed services where appropriate.',
  ],
  decisions: [
    'Add Redis as a read-through cache for repeated query results, with a TTL for short-lived data and explicit invalidation on profile ingestion.',
    'Keep the existing API surface unchanged while routing repeated queries through a cache layer before MongoDB.',
    'Use managed Redis and a single-region deployment to reduce operational complexity.',
    'Instrument query latency and cache hit rate instead of building a complex distributed system.',
  ],
  tradeoffs: [
    'Cache invalidation is kept simple and conservative; stale data is possible for a short window but is acceptable for read-heavy analytics.',
    'This design is optimized for single-region traffic and does not address global distribution or cross-region failover.',
    'The system increases operational dependence on Redis availability, so Redis monitoring becomes a first-class reliability requirement.',
  ],
};

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
  'The biggest shift for me during HNG was moving from feature thinking to systems thinking. Early on, I was mostly focused on getting endpoints to work. As I progressed, I started thinking more about what “working” actually means in real systems — concurrency issues, failure states, and how services behave under load or bad inputs.',
  
  'I started the program stronger in Node.js, but along the way I deliberately pushed myself into Python with FastAPI. That transition wasn’t just syntax — it was about learning a different way of structuring APIs, async patterns, and backend architecture. I’m now comfortable building in both ecosystems, even if I still move faster in Node.',
  
  'A big part of my learning came from reading system design materials and immediately trying to apply them in real implementation work. Instead of just consuming concepts like caching, auth flows, or scalability patterns, I had to translate them into actual code decisions in the HNG codebase. That gap between theory and implementation is where most of my growth happened.',
  
  'Working through authentication and session-related issues made me realize how many decisions sit underneath “simple login.” Things like refresh token handling, middleware structure, and security trade-offs taught me that backend systems are really about consistency and explicit design choices, not convenience.',
  
  'Debugging real issues like failing tests, WebSocket/auth edge cases, and rate limiting forced me to think in terms of system behavior instead of isolated functions. I stopped asking only “does this work?” and started asking “how does this fail, and what happens when it does?”',
  
  'Overall, HNG pushed me from someone who can build backend features to someone who is actively learning how to design and reason about backend systems — and not just implement them blindly.'
];

export const contactLinks = [
  { label: 'GitHub', value: 'github.com/Summiedev', href: profile.contacts.github },
  { label: 'Email', value: profile.contacts.email, href: `mailto:${profile.contacts.email}` },
  { label: 'Location', value: profile.location },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/sumayyah-apatira-b5814224a', href: profile.contacts.linkedin },
];
