export const profile = {
  name: 'Sumayyah Abdullahi',
  title: 'Backend Engineer',
  bio:
    'I build backend systems that are meant to survive real traffic, real failure modes, and real product pressure. During HNG I was also reading system design books and turning the ideas into working code, which pushed me to think more carefully about auth, query paths, caching, storage, and reliability instead of just making endpoints pass tests.',
  location: 'Lagos, Nigeria',
  timezone: 'WAT (UTC+1)',
  stack: ['Node.js', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL'],
  contacts: {
    github: 'https://github.com/Summiedev',
    email: 'sumayyahabdullahi@email.com',
    linkedin: 'https://www.linkedin.com/in/sumayyah-abdullahi',
  },
};

export const projects = [
  {
    stage: 'Stage 0',
    name: 'HNG Task 00 - Baseline API',
    description:
      'A minimal Node.js HTTP server that established the health check endpoint, basic routing, and deployment baseline before the rest of the internship tasks.',
    stack: ['Node.js', 'JavaScript', 'Vercel'],
    contribution:
      'Set up the project from scratch, implemented the request handler, exposed the health endpoint, and deployed the service to Vercel.',
    proofLabel: 'GitHub',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_00',
    proofText: 'github.com/Summiedev/HNG_TASK_00',
  },
  {
    stage: 'Stage 1',
    name: 'Profile API - Parallel Enrichment Service',
    description:
      'A serverless API that accepts a name, calls Genderize, Agify, and Nationalize in parallel, aggregates the response, and stores the result in MongoDB with idempotent behavior.',
    stack: ['Node.js', 'MongoDB', 'Vercel Serverless', 'UUID v7'],
    contribution:
      'Built the full service: Promise.all-based enrichment calls, aggregation logic, unique-index-backed deduplication, UUID generation, CORS handling, and structured error responses.',
    proofLabel: 'GitHub + Demo',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_01',
    proofText: 'github.com/Summiedev/HNG_TASK_01',
  },
  {
    stage: 'Stage 2',
    name: 'Insighta Labs - Demographic Query Engine',
    description:
      'Extended the profile store into a query engine with filter, sort, and pagination support plus a rule-based natural language search endpoint.',
    stack: ['Node.js', 'MongoDB Atlas', 'Vercel', 'Rule-based parser'],
    contribution:
      'Wrote the parser and query builder, seeded the dataset, and implemented the filtered, sorted, and paginated endpoints without using an LLM.',
    proofLabel: 'GitHub + Demo',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_02',
    proofText: 'github.com/Summiedev/HNG_TASK_02',
  },
  {
    stage: 'Stage 3',
    name: 'Insighta Labs+ Backend - Auth and RBAC',
    description:
      'A production backend with GitHub OAuth PKCE, JWT access and refresh tokens, role-based access control, rate limiting, logging, and CSV export.',
    stack: ['Node.js', 'MongoDB', 'JWT', 'OAuth PKCE', 'GitHub Actions'],
    contribution:
      'Built the auth system end to end: token lifecycle, refresh rotation, revocation, middleware for roles, per-route rate limits, request logging, and admin export flow.',
    proofLabel: 'GitHub + Demo',
    proofHref: 'https://github.com/Summiedev/insighta-backend',
    proofText: 'github.com/Summiedev/insighta-backend',
  },
  {
    stage: 'Stage 5',
    name: 'Clinical Lab Insight - AI Analysis Pipeline',
    description:
      'A FastAPI service that processes uploaded lab results asynchronously using OCR, Gemini analysis, PostgreSQL, Redis, and Celery workers.',
    stack: ['Python', 'FastAPI', 'Celery', 'PostgreSQL', 'Redis', 'Alembic'],
    contribution:
      'Built the upload endpoint, task queue, status polling, migrations, and the local worker setup used to process OCR and AI interpretation jobs.',
    proofLabel: 'GitHub',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_05',
    proofText: 'github.com/Summiedev/HNG_TASK_05',
  },
  {
    stage: 'Stage 6',
    name: 'Clinical API - EventBus and SSE Notifications',
    description:
      'Real-time notification delivery for the clinical pipeline using Server-Sent Events, Redis pub/sub, and PostgreSQL-backed replay for missed events.',
    stack: ['Python', 'FastAPI', 'SSE', 'Redis Pub/Sub', 'PostgreSQL'],
    contribution:
      'Implemented the EventBus, the authenticated SSE endpoint, keepalive pings, disconnect handling, and replay logic using Last-Event-ID.',
    proofLabel: 'GitHub',
    proofHref: 'https://github.com/hngprojects/clinical-api',
    proofText: 'github.com/hngprojects/clinical-api',
  },
  {
    stage: 'Stage 8A',
    name: 'Append-Only Event Store - Bitcask Pattern',
    description:
      'A durable HTTP service that stores events in an append-only log file with an in-memory byte-offset index and crash recovery via log replay.',
    stack: ['Node.js', 'File I/O', 'Bitcask', 'Write-ahead log'],
    contribution:
      'Built the append-only write path, O(1) reads through byte-offset seeks, concurrent write serialization, and replay-based recovery on startup.',
    proofLabel: 'GitHub',
    proofHref: 'https://github.com/Summiedev/HNG_TASK_08A',
    proofText: 'github.com/Summiedev/HNG_TASK_08A',
  },
];

export const skills = [
  {
    name: 'API Design',
    detail:
      'RESTful endpoints with predictable request and response shapes, pagination contracts, and a rule-based query model for analyst workflows. Evidence: HNG Task 01, Insighta Labs, and Clinical API work.',
  },
  {
    name: 'Authentication',
    detail:
      'GitHub OAuth PKCE, JWT access/refresh rotation, token revocation, and centralized role enforcement. Evidence: Insighta Labs+ auth backend.',
  },
  {
    name: 'Databases',
    detail:
      'MongoDB Atlas with compound indexes and aggregation pipelines, plus PostgreSQL with async access and Alembic migrations. Evidence: HNG tasks and the clinical pipelines.',
  },
  {
    name: 'Background Jobs',
    detail:
      'Celery workers with Redis broker for async OCR and AI pipelines, including queue configuration and status polling. Evidence: clinical lab AI pipeline.',
  },
  {
    name: 'Real-time Delivery',
    detail:
      'SSE notifications backed by Redis pub/sub, keepalive pings, and event replay for disconnected clients. Evidence: Clinical API notifications.',
  },
  {
    name: 'Query Performance',
    detail:
      'Targeted indexes, pagination, cached query results, and a read-heavy service design. Evidence: Insighta Labs query engine and scaling design.',
  },
  {
    name: 'Storage and Durability',
    detail:
      'Append-only log design, byte-offset indexes, crash recovery by replay, and durable write serialization. Evidence: append-only event store.',
  },
  {
    name: 'Rate Limiting',
    detail:
      'Route-specific request limits with consistent 429 behavior for auth and query endpoints. Evidence: Insighta Labs backend.',
  },
  {
    name: 'Testing and Deployment',
    detail:
      'Integration checks, Python tooling, GitHub Actions pipelines, and Vercel deployments. Evidence: multiple HNG tasks and backend services.',
  },
  {
    name: 'Logging',
    detail:
      'Structured request logging and audit trails with enough context to debug failures after the fact. Evidence: Insighta Labs and clinical service logs.',
  },
];

export const insightaDeepDive = {
  title: 'Insighta Labs+ backend design',
  problem:
    'Insighta Labs+ had to stop behaving like a simple API playground and start behaving like a real platform: one backend shared safely by a browser portal and a CLI, with auth, rate limiting, query caching, and a low-cost path for growing analytic load.',
  endpoints: [
    'GET /auth/start - start the GitHub PKCE flow for browser or CLI sign-in.',
    'POST /auth/callback - exchange GitHub code for JWT access and refresh tokens.',
    'POST /profiles/search - parse structured filters, run cached queries, and return paginated results.',
    'GET /admin/export - authenticated CSV export with RBAC checks.',
    'GET /notifications/stream - SSE subscription for live event delivery and replay.',
  ],
  architecture: [
    'Browser portal and CLI both authenticate with GitHub PKCE, but the backend issues the platform tokens.',
    'Auth middleware validates JWTs, enforces roles, and applies rate limiting before business logic.',
    'The query service uses the primary database as source of truth and adds a read cache for repeated analyst queries.',
    'Batch ingestion updates the store separately from the read path, keeping writes from slowing frequent searches.',
    'Log and audit trails capture every auth, query, and export request for visibility in production-like conditions.',
  ],
  challenge:
    'The biggest challenge was making the same backend support two client patterns without weakening security: browser sessions needed HTTP-only cookies and CSRF-safe flows, while the CLI needed refreshable credentials stored locally. I solved it by centralizing auth in one token service, using short-lived access tokens, refresh rotation, and a consistent RBAC middleware layer for both clients.',
  decisions: [
    'Use short-lived tokens plus refresh rotation to reduce the blast radius of leaked credentials.',
    'Centralize auth and RBAC so browser and CLI traffic share the same policy surface.',
    'Keep the web portal session state in HTTP-only cookies to avoid client-side token storage.',
    'Add a small query cache for common filters and paginated analytics to reduce repeated database work.',
    'Prefer a single region and simple operational model over premature distributed complexity.',
    'Treat system design ideas as hypotheses: keep what improves the product and discard what does not.',
  ],
  tradeoffs: [
    'Caching makes repeated queries faster but requires careful invalidation after batch writes.',
    'Short token lifetimes improve security but increase refresh traffic and expiry handling complexity.',
    'A single-region design is simpler, but it does not provide global failover or multi-region latency optimization.',
    'Targeted indexing helps the common query paths, but not every possible ad hoc analytics pattern.',
  ],
};

export const reflection = [
  'The biggest shift during HNG was moving from feature thinking to systems thinking. I was reading about those ideas in books, but the internship is where they stopped being abstract. Early stages were about making things work; later stages were about what happens under concurrency, retries, reconnects, and restarts.',
  'Stage 8A made storage concrete. Tracking byte offsets, replaying a log, and serializing concurrent writes showed me how durable systems actually behave under the hood, and why the textbook version of a design still needs careful implementation choices.',
  'The SSE work taught me to design for disconnects and replay before worrying about the happy path. That changed how I think about long-lived connections and made me more deliberate about failure handling.',
  'The auth backend pushed me to treat security as explicit decisions: PKCE, refresh rotation, revocation, and centralized middleware were all deliberate choices rather than afterthoughts. Reading about them helped, but implementing them made the lessons stick.',
  'I left HNG stronger in Node.js and much more comfortable in Python async stacks such as FastAPI, Celery, asyncpg, and Alembic, but the bigger change was confidence: I now trust myself to take a system design idea, pressure-test it, and build it into something real.',
];

export const contactLinks = [
  { label: 'GitHub', value: 'github.com/Summiedev', href: profile.contacts.github },
  { label: 'Email', value: profile.contacts.email, href: `mailto:${profile.contacts.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/sumayyah-abdullahi', href: profile.contacts.linkedin },
  { label: 'Location', value: `${profile.location} - ${profile.timezone}` },
];

export const submissionNote = {
  stack:
    'React, Vite, JavaScript, and a custom CSS system using theme variables, grid layouts, and reusable sections.',
  intent:
    'The portfolio is meant to show backend depth quickly: what I built, how I secured it, how I would scale it without overengineering, and how I learned to turn system design reading into practical engineering decisions.',
};