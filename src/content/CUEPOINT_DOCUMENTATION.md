# CuePoint - Comprehensive Technical Documentation

> **Smart assessments, right on cue.**

CuePoint is a Canvas LMS-integrated assessment platform featuring rich interactive question types, AI-powered authoring and grading, advanced psychometric analytics, and enterprise-grade multi-tenancy support.

---

## Table of Contents

1. [Technology Stack](#1-technology-stack)
2. [Project Structure](#2-project-structure)
3. [Backend Architecture](#3-backend-architecture)
   - [Database Schema & Multi-Tenancy](#31-database-schema--multi-tenancy)
   - [Database Connection Pool](#32-database-connection-pool)
   - [API Endpoints](#33-api-endpoints)
   - [Grading Engine](#34-grading-engine)
   - [AI Integration](#35-ai-integration)
   - [LTI 1.3 & Canvas Integration](#36-lti-13--canvas-integration)
   - [Psychometrics & Analytics](#37-psychometrics--analytics)
   - [Mastery Learning & Learning Objectives](#38-mastery-learning--learning-objectives)
   - [Data Import/Export](#39-data-importexport)
4. [Security Architecture](#4-security-architecture)
   - [Middleware](#41-middleware)
   - [Rate Limiting](#42-rate-limiting)
   - [Input Validation](#43-input-validation)
   - [HTTP Security Headers](#44-http-security-headers)
   - [Authentication & Authorization](#45-authentication--authorization)
5. [Frontend Architecture](#5-frontend-architecture)
   - [Pages & Routing](#51-pages--routing)
   - [Components](#52-components)
   - [State Management](#53-state-management)
   - [Styling](#54-styling)
6. [Data Models](#6-data-models)
7. [Configuration & Environment](#7-configuration--environment)
8. [Database Migrations](#8-database-migrations)
9. [Key Features Summary](#9-key-features-summary)

---

## 1. Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **Language** | TypeScript | 5.9.3 |
| **Frontend** | React | 19.2.4 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **UI Primitives** | Radix UI (Dialog, Dropdown, Select, Switch, Tabs, Tooltip, Label) | Latest |
| **Icons** | Lucide React | 0.564.0 |
| **Database** | PostgreSQL via `pg` | 8.18.0 |
| **Authentication** | NextAuth.js + Canvas OAuth + LTI 1.3 | 4.24.13 |
| **AI** | Anthropic Claude SDK | 0.78.0 |
| **Math Editor** | MathLive | 0.109.0 |
| **Code Editor** | CodeMirror + `@uiw/react-codemirror` | 6.x |
| **LaTeX Rendering** | KaTeX | 0.16.28 |
| **Drag & Drop** | React DnD + HTML5 Backend | 16.0.1 |
| **Spreadsheets** | SheetJS (xlsx) | 0.18.5 |
| **XML Parsing** | fast-xml-parser | 5.5.6 |
| **ZIP** | JSZip | 3.10.1 |
| **Component Variants** | Class Variance Authority (CVA) | 0.7.1 |
| **Validation** | Zod | 4.3.6 |
| **Rate Limiting** | rate-limiter-flexible | 10.0.1 |
| **JWT Verification** | jose | 6.2.2 |
| **Build** | npm, PostCSS, Autoprefixer | — |

---

## 2. Project Structure

```
src/
├── app/                              # Next.js App Router
│   ├── api/                          # REST API endpoints
│   │   ├── admin/                    #   Institution & platform management
│   │   ├── ai/                       #   AI generation, grading, insights, speech-to-latex
│   │   ├── analytics/                #   Assessment & usage analytics
│   │   ├── assessments/              #   Assessment CRUD
│   │   ├── assessment-groups/        #   Assessment group CRUD and item management
│   │   ├── auth/                     #   NextAuth.js handlers
│   │   ├── demo/                     #   Demo login (no-Canvas fallback)
│   │   ├── grades/                   #   Grade management & Canvas sync
│   │   ├── lti/                      #   LTI 1.3 login, launch, JWKS
│   │   ├── mastery/                  #   Mastery analytics & recomputation
│   │   ├── objectives/               #   Learning objectives CRUD & mapping
│   │   ├── qti/                      #   QTI 2.1 import/export
│   │   ├── questions/                #   Question CRUD & import
│   │   ├── students/                 #   Course-scoped roster via NRPS
│   │   └── submissions/              #   Submission lifecycle
│   ├── assess/[assessmentId]/        # Student assessment-taking interface
│   ├── dashboard/                    # Instructor dashboard pages
│   │   ├── assessments/              #   Assessment list, builder, editor
│   │   ├── assessment-groups/        #   Assessment groups list, create, edit
│   │   ├── questions/                #   Question bank management
│   │   ├── students/                 #   Roster & performance
│   │   └── analytics/                #   Institutional usage analytics
│   ├── admin/                        # Institution administration
│   ├── lti/                          # LTI launch & deep linking pages
│   └── lti-error/                    # LTI error handling page
│
├── middleware.ts                      # Centralized security middleware
│
├── components/                       # React components
│   ├── ui/                           # Reusable UI primitives (Radix-based)
│   ├── questions/                    # Question type renderers & builders
│   ├── editor/                       # STEM content editor (MathLive, CodeMirror)
│   ├── layout/                       # Header, sidebar, navigation
│   └── katex-renderer.tsx            # LaTeX rendering component
│
├── lib/                              # Core business logic & utilities
│   ├── db.ts                         # PostgreSQL connection pool
│   ├── ai.ts                         # Claude AI integration
│   ├── auth.ts                       # Session extraction & role-based authorization
│   ├── grading.ts                    # Auto-grading engine
│   ├── lti.ts                        # LTI 1.3 implementation
│   ├── lti-keys.ts                   # JWT signing & verification keys
│   ├── mastery.ts                    # Mastery learning computation engine
│   ├── psychometrics.ts              # Item analysis & reliability
│   ├── rate-limit.ts                 # IP-based rate limiting (general & AI tiers)
│   ├── tenant.ts                     # Multi-tenancy schema isolation
│   ├── validation.ts                 # Zod request body validation schemas
│   ├── question-import.ts            # CSV/Excel import parser
│   ├── nonce-cleanup.ts              # LTI nonce expiry cleanup
│   ├── demo-data.ts                  # Demo content for fallback mode
│   ├── utils.ts                      # General utilities
│   └── qti/                          # QTI 2.1 export/import modules
│
├── types/                            # TypeScript type definitions
│   └── index.ts                      # All domain models (~460 lines)
│
└── db/migrations/                    # SQL schema migrations
    ├── 001_initial_schema.sql
    ├── 002_enhanced_data_collection.sql
    ├── 003_lti_advantage_services.sql
    ├── 004_oauth_and_registration.sql
    ├── 005_multi_tenancy.sql
    ├── 006_mastery_learning.sql
    └── 007_assessment_groups.sql

docs/                                 # Technical documentation
mockups/                              # Static HTML mockups of CuePoint assessments
                                      # embedded inside Canvas pages/assignments
```

---

## 3. Backend Architecture

### 3.1 Database Schema & Multi-Tenancy

CuePoint uses PostgreSQL with **schema-per-tenant isolation** for multi-tenancy.

#### Public Schema (Shared)

These tables exist in the `public` schema and are shared across all tenants:

| Table | Purpose |
|-------|---------|
| `institutions` | Tenant registry — name, slug, domain, settings, status |
| `lti_platforms` | Canvas LMS platform registrations |
| `lti_nonces` | LTI nonce replay prevention (10-min TTL) |

#### Tenant Schema (Isolated per Institution)

Each institution gets its own PostgreSQL schema (e.g., `tenant_acme_university`) containing:

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `users` | Canvas user profiles | `canvas_user_id`, `email`, `name`, `role` (instructor/student/ta/admin) |
| `courses` | Canvas course records | `canvas_course_id`, `name`, `code`, `term_id` |
| `course_enrollments` | User-course membership | `user_id`, `course_id`, `role`, `canvas_enrollment_id` |
| `assessments` | Quizzes/exams with settings | `course_id`, `creator_id`, `title`, `settings` (JSONB), `status`, `total_points` |
| `questions` | All 14 question types | `assessment_id`, `question_bank_id`, `type`, `body`, `data` (JSONB), `points`, `order` |
| `assessment_groups` | Bundles of assessments that share one Canvas gradebook entry | `course_id`, `creator_id`, `title`, `ags_lineitem_url`, `total_max_points` |
| `assessment_group_items` | Assessments contained in a group with weights | `group_id`, `assessment_id`, `sort_order`, `weight` |
| `question_banks` | Reusable question libraries | `course_id`, `creator_id`, `name`, `tags` |
| `submissions` | Student assessment attempts | `assessment_id`, `student_id`, `attempt_number`, `status`, `total_score`, `time_spent_seconds` |
| `question_responses` | Per-question response detail | `submission_id`, `question_id`, `answer` (JSONB), `score`, `time_spent_seconds`, `response_changes` |
| `response_events` | Granular interaction tracking | `submission_id`, `question_id`, `event_type`, `answer_value`, `timestamp` |
| `usage_events` | Institutional usage analytics | `user_id`, `course_id`, `event_type`, `metadata` (JSONB) |
| `lti_launch_contexts` | AGS/NRPS endpoints per course | `course_id`, `platform_id`, `ags_lineitems_url`, `nrps_context_memberships_url` |
| `lti_access_tokens` | OAuth2 token cache for grade passback | `platform_id`, `access_token`, `expires_at` |
| `lti_oidc_states` | OIDC callback state verification | `state`, `nonce`, `platform_id`, `expires_at` |

#### Schema Isolation Logic (`src/lib/tenant.ts`)

- Tenant resolution from session, LTI launch data, or institution slug
- Every database query is scoped via `SET search_path = tenant_<slug>, public`
- Schema creation/migration handled automatically on institution provisioning

### 3.2 Database Connection Pool

**File**: `src/lib/db.ts`

Serverless-optimized PostgreSQL connection pooling:

| Setting | Serverless | Local |
|---------|-----------|-------|
| Max connections | 5 | 20 |
| Idle timeout | 10 seconds | 30 seconds |
| Connection timeout | 5 seconds | 5 seconds |
| SSL | Required (production) | Disabled |

**Features**:
- Automatic retry on transient connection errors
- Support for single-query and transactional operations
- Tenant-scoped queries via `SET search_path` before each operation

### 3.3 API Endpoints

All API routes are implemented as Next.js App Router route handlers under `src/app/api/`.

#### Assessments (`/api/assessments`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/assessments` | List assessments with pagination, filtering, question counts |
| `POST` | `/api/assessments` | Create a new draft assessment |
| `PUT` | `/api/assessments/[id]` | Update title, settings, status, etc. |
| `DELETE` | `/api/assessments` | Soft or hard delete with cascading cleanup |

#### Questions (`/api/questions`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/questions` | List questions by assessment or bank, filter by type |
| `POST` | `/api/questions` | Create a question with type-specific data payload |
| `PUT` | `/api/questions` | Update any question field |
| `DELETE` | `/api/questions` | Bulk delete with automatic `total_points` recalculation |
| `POST` | `/api/questions/import` | Import questions from CSV/Excel with validation |

#### Assessment Groups (`/api/assessment-groups`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/assessment-groups` | List assessment groups for a course |
| `POST` | `/api/assessment-groups` | Create a new group (single Canvas gradebook entry) |
| `PUT` | `/api/assessment-groups/[id]` | Update title, description, or weights |
| `DELETE` | `/api/assessment-groups/[id]` | Delete group without touching member assessments |
| `POST` | `/api/assessment-groups/[id]/items` | Add an assessment to the group with weight |
| `DELETE` | `/api/assessment-groups/[id]/items` | Remove an assessment from the group |

Assessment groups bundle multiple assessments into a single Canvas gradebook
line item. The composite score is the weighted sum of each member assessment's
score, using per-item weights stored on `assessment_group_items`.

#### Submissions (`/api/submissions`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/submissions` | List submissions filtered by assessment, student, or status |
| `POST` | `/api/submissions` | Start a new attempt **or** submit with auto-grading |

**Submission flow on submit**:
1. Auto-grades all questions in parallel
2. Persists per-question responses and response events
3. Records usage events
4. Fire-and-forget: syncs grade to Canvas via AGS

#### Analytics (`/api/analytics`)

| Method | Path / Query | Description |
|--------|-------------|-------------|
| `GET` | `?assessmentId=X` | Assessment summary (scores, psychometrics, distributions) |
| `GET` | `?assessmentId=X&report=item_scores` | Student-by-question scores matrix (CSV exportable) |
| `GET` | `?assessmentId=X&report=responses` | Response frequency distributions |
| `GET` | `?courseId=X` | Course-level analytics rollup |
| `GET` | `?usage=true` | Institutional monthly usage trends |

#### Grades (`/api/grades`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/grades?assessmentId=X` | List all student scores for an assessment |
| `POST` | `/api/grades` | Manually trigger Canvas grade sync for a submission |

#### AI (`/api/ai`)

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/ai/generate` | Generate questions from a topic/context |
| `POST` | `/api/ai/generate-assessment` | Generate a full assessment with questions |
| `POST` | `/api/ai/grade` | AI semantic grading for open-ended responses |
| `POST` | `/api/ai/insights` | Analytics summary & content improvement recommendations |
| `POST` | `/api/ai/student-insights` | At-risk student identification |
| `POST` | `/api/ai/ask` | Q&A over assessment data |
| `POST` | `/api/ai/extract-text` | OCR text extraction from uploaded documents |
| `POST` | `/api/ai/speech-to-latex` | Transcribe voice input and convert spoken math to LaTeX |
| `POST` | `/api/ai/validate-key` | Verify Anthropic API key |

#### LTI 1.3 (`/api/lti`)

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/lti/login` | OIDC authentication initiation |
| `POST` | `/api/lti/launch` | ID token validation, user provisioning, session setup |
| `POST` | `/api/lti/callback` | OIDC callback handler |
| `GET` | `/api/lti/jwks` | JSON Web Key Set for platform signature verification |
| `POST` | `/api/lti/registration` | Dynamic tool registration with Canvas |
| `POST` | `/api/lti/deep-link` | Resource link creation for Canvas embedding |
| `GET` | `/api/lti/roster` | Roster sync via NRPS (Names & Role Provisioning) |
| `GET` | `/api/lti/warmup` | Cold-start optimization endpoint |

#### Students (`/api/students`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/students?courseId=X` | Course-scoped student roster (uses LTI session context; falls back to NRPS) |

#### Demo (`/api/demo`)

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/demo/login` | Demo-mode login for testing the instructor/student experience without a Canvas LTI launch |

#### Admin (`/api/admin`)

| Method | Path | Description |
|--------|------|-------------|
| `GET/POST` | `/api/admin/institutions` | Institution (tenant) CRUD |
| `GET/POST` | `/api/admin/platforms` | LTI platform registration management |
| `POST` | `/api/admin/nonce-cleanup` | Cleanup expired LTI nonces |

#### QTI (`/api/qti`)

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/qti/export` | Export assessment/bank/questions as QTI 2.1 zip package |
| `POST` | `/api/qti/import` | Import QTI 2.1 package, extract and create questions |

#### Learning Objectives (`/api/objectives`)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/objectives?courseId=X` | List objectives for a course (optionally filter by `questionId` or `assessmentId`) |
| `POST` | `/api/objectives` | Create a learning objective **or** map a question to an objective |
| `PUT` | `/api/objectives` | Update an existing learning objective |
| `DELETE` | `/api/objectives` | Delete an objective **or** remove a question-objective mapping |

#### Mastery (`/api/mastery`)

| Method | Path / Query | Description |
|--------|-------------|-------------|
| `GET` | `?courseId=X` | Course-level mastery summary (per-objective mastery rates) |
| `GET` | `?courseId=X&studentId=Y` | Individual student mastery detail across all objectives |
| `GET` | `?courseId=X&report=students` | All students' mastery data for a course |
| `GET` | `?courseId=X&report=csv` | CSV export of all students' mastery data |
| `POST` | `/api/mastery` | Trigger mastery recomputation for a student after grading |

### 3.4 Grading Engine

**File**: `src/lib/grading.ts`

The grading engine supports all 14 question types with both rule-based and AI-powered grading.

#### Auto-Grading Rules by Question Type

| Question Type | Grading Method | Partial Credit |
|--------------|---------------|----------------|
| **Multiple Choice** | Exact match on selected option | No — all or nothing |
| **True/False** | Boolean comparison | No — all or nothing |
| **Multiple Select** | `(correct_selected - incorrect_selected) / total_correct` | Yes — proportional |
| **Submit and Compare** (short answer) | No auto-grading — student compares their answer to the accepted answers after submission | N/A — self-review |
| **Numerical** | Value within tolerance (absolute or percentage) | No — within tolerance or not |
| **Matching** | Per-pair comparison | Optional — points per correct pair |
| **Ordering** | Sequence position check | Optional — points per correct position |
| **Open-Ended** | AI rubric-based grading | Yes — rubric-based scoring |
| **File Upload** | Manual review required | N/A — instructor graded |
| **Fill in the Blank** | Per-blank exact/case-insensitive match | Yes — proportional to correct blanks |
| **Essay** | AI rubric-based grading with word count guardrails | Yes — rubric-based scoring |
| **Categorization** | Per-item category comparison | Yes — proportional to correct placements |
| **Math Expression** | Symbolic equivalence or numeric evaluation against accepted LaTeX expressions | No — equivalent or not |
| **Layered** | Primary MCQ graded by exact match; authored follow-up (MCQ or short answer) contributes points based on `triggerOn` and `points` | Yes — sum of primary + follow-up |

#### Grading Modes

The assessment-level `gradingMode` controls how the final score is computed:

| Mode | Behavior |
|------|----------|
| `accuracy` (default) | Per-question correctness using the rules above |
| `completion` | Full points awarded if a non-empty answer is provided and all questions are answered |
| `attempted` | Full points awarded per question if any answer was attempted |

Instructors can also enable `allowCheckAnswer` so students may verify a single answer before final submission without affecting the recorded score.

#### AI Grading (Server-Side Only)

- Uses Anthropic Claude for semantic grading
- **Open-ended**: Rubric-based scoring with structured feedback (strengths, areas for improvement)
- **Short answer semantic**: Fallback when exact/fuzzy match fails; evaluates semantic similarity
- Lazy-loaded Anthropic SDK (not bundled in client-side code)
- Score range: 0 to `maxPoints` based on rubric alignment

#### Per-Question Response Tracking

Each graded response records:
- Answer value and correctness
- Numeric score and max possible score
- Auto-generated or manual feedback string
- Time spent on the question
- Number of response changes
- First/last answered timestamps

### 3.5 AI Integration

**File**: `src/lib/ai.ts`

**Model**: `claude-sonnet-4-20250514` | **Max Tokens**: 2048–4000 (varies by task)

#### AI Features

**1. Question Generation**
- **Input**: Topic, desired question types (array), count (max 10), difficulty level, optional context
- **Output**: JSON array of fully-formed questions with type-specific answer configurations
- Supports LaTeX notation in question bodies via `\( ... \)` delimiters

**2. Assessment Generation**
- Generates a complete assessment: title, description, instructions, time limit, settings
- Includes generated questions with suggested max attempts, shuffle flags

**3. Open-Ended Grading**
- **Input**: Rubric, sample answer, student response
- **Output**: Structured result — numeric score, text feedback, list of strengths, areas for improvement

**4. Short Answer Semantic Grading**
- Triggered when exact/fuzzy match fails
- Evaluates semantic similarity between student answer and accepted answers
- Binary correct/incorrect decision

**5. Analytics Insights**
- Generates assessment health summaries
- Flags questions that are too easy or too hard
- Provides content improvement recommendations
- Identifies response patterns

**6. Student Insights**
- At-risk student identification (low scores, inactivity patterns)
- Top performer highlights
- Class-wide intervention recommendations

**7. Document Text Extraction**
- OCR from uploaded documents (PDFs, images)
- Returns extracted text for use as context in question generation

### 3.6 LTI 1.3 & Canvas Integration

**File**: `src/lib/lti.ts`

#### OIDC Login Flow

```
Canvas                          CuePoint
  │                                │
  ├─── POST /api/lti/login ───────►│  (iss, login_hint, client_id)
  │                                │
  │◄── Redirect to Canvas auth ───┤  (generates nonce + state)
  │                                │
  ├─── Redirect with ID token ───►│  POST /api/lti/launch
  │                                │  (validates JWT, provisions user)
  │                                │
  │◄── Redirect to dashboard ─────┤  (session established)
```

#### Deep Linking Flow

```
Instructor in Canvas              CuePoint
  │                                │
  ├─── LTI deep link launch ─────►│  POST /api/lti/launch
  │                                │  (detects deep linking message type)
  │◄── Redirect to picker ────────┤  /lti/deep-link
  │                                │
  │    Instructor selects          │
  │    assessment                  │
  │                                │
  ├─── Submit selection ──────────►│  POST /api/lti/deep-link
  │                                │  (creates LtiResourceLinkResponse)
  │◄── Resource link to Canvas ───┤
  │                                │
  │    Assessment embedded         │
  │    as Canvas content item      │
```

#### AGS (Assignment & Grade Services)

- Stores `ags_lineitem_url` per assessment during LTI launch
- `syncGradeForSubmission()`: POSTs score to Canvas gradebook as a percentage
- OAuth2 token caching with automatic expiry and refresh
- Fire-and-forget pattern for non-blocking grade sync

#### NRPS (Names & Role Provisioning Services)

- Roster sync: fetches all course members from Canvas
- Updates user roles and enrollment status in CuePoint
- Endpoint stored in `lti_launch_contexts` table

#### Security Measures

- JWT signature verification against Canvas JWKS endpoints
- Nonce replay protection (stored in DB, 10-minute expiry, cleanup job)
- OIDC state verification in callback flow
- CSP `frame-ancestors` header for secure Canvas embedding

### 3.7 Psychometrics & Analytics

**File**: `src/lib/psychometrics.ts`

#### Assessment-Level Metrics

| Metric | Description |
|--------|-------------|
| **Completion Rate** | Percentage of students who submitted |
| **Average Score** | Mean total score across all submissions |
| **Median Score** | Median total score across all submissions |
| **Score Distribution** | Histogram with 6 bins (0–16%, 17–33%, 34–50%, 51–67%, 68–84%, 85–100%) |
| **Cronbach's Alpha** | Internal consistency reliability coefficient |
| **Average Time Spent** | Mean time across all submissions |
| **Median Time Spent** | Median time across all submissions |

#### Item-Level Metrics (Per Question)

| Metric | Description |
|--------|-------------|
| **Correct Rate** | Proportion of students answering correctly |
| **Average Score** | Mean score for the item |
| **Discrimination Index** | Upper 27% correct rate minus lower 27% correct rate; range [-1, +1] |
| **Point-Biserial Correlation** | Correlation between item score and total test score |
| **Response Frequencies** | Distribution of answer choices with percentages |
| **Common Wrong Answers** | Most frequent incorrect responses |
| **Average Time Spent** | Mean time students spend on the item |

#### Report Formats

| Report | Format | Description |
|--------|--------|-------------|
| **Summary** | JSON | Full analytics with psychometric measures |
| **Item Scores** | Tabular (CSV exportable) | Students x Questions score matrix |
| **Responses** | JSON | Per-question answer frequency distributions |
| **Course Rollup** | JSON | Aggregated analytics across all assessments in a course |
| **Usage Trends** | JSON | Monthly institutional usage (students, teachers, courses, attempts) |

### 3.8 Mastery Learning & Learning Objectives

**Files**: `src/lib/mastery.ts`, `src/app/api/objectives/route.ts`, `src/app/api/mastery/route.ts`

CuePoint supports standards-aligned mastery learning with per-student progress tracking across learning objectives.

#### Database Tables

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `learning_objectives` | Course-level learning outcomes | `course_id`, `title`, `standard_code`, `taxonomy_level`, `mastery_threshold`, `min_assessments`, `parent_id` |
| `question_objectives` | Many-to-many mapping of questions to objectives | `question_id`, `objective_id`, `weight` |
| `student_mastery` | Cached mastery state snapshots per student per objective | `student_id`, `objective_id`, `correct_rate`, `assessments_counted`, `mastered`, `mastered_at` |

#### Learning Objectives

- **Standards alignment**: Optional `standard_code` field (e.g., `CCSS.MATH.CONTENT.HSA.REI.B.3`)
- **Bloom's taxonomy**: `taxonomy_level` — remember, understand, apply, analyze, evaluate, create
- **Hierarchical**: Objectives can have a `parent_id` for nested objective trees
- **Configurable thresholds**: `mastery_threshold` (default 70%) and `min_assessments` (minimum distinct assessments before mastery is determined)
- **Weighted mapping**: Questions can be mapped to objectives with a `weight` value

#### Mastery Computation Engine (`src/lib/mastery.ts`)

| Function | Description |
|----------|-------------|
| `recomputeStudentMastery(studentId, assessmentId)` | Aggregates correctness across all graded submissions for objectives linked to the assessment; upserts `student_mastery` snapshots |
| `getStudentMastery(studentId, courseId)` | Returns per-objective mastery detail for a single student |
| `getCourseMasterySummary(courseId)` | Course-level view: mastery rates and average correct rates per objective |
| `getAllStudentsMastery(courseId)` | Bulk view of all students' mastery across all objectives |

**Mastery determination**: A student masters an objective when `correctRate >= masteryThreshold` AND `assessmentsCounted >= minAssessments`.

**Auto-trigger**: `recomputeStudentMastery()` is called fire-and-forget after every submission grading in `/api/submissions`.

#### Mastery Data Types

```typescript
interface ObjectiveMastery {
  objectiveId: string;
  objectiveTitle: string;
  standardCode: string | null;
  taxonomyLevel: string | null;
  masteryThreshold: number;
  minAssessments: number;
  correctCount: number;
  totalCount: number;
  correctRate: number;
  assessmentsCounted: number;
  mastered: boolean;
  masteredAt: string | null;
}

interface StudentMasteryResult {
  studentId: string;
  studentName: string;
  objectives: ObjectiveMastery[];
  overallMasteryRate: number;  // percentage of objectives mastered
}

interface CourseMasterySummary {
  objectiveId: string;
  objectiveTitle: string;
  standardCode: string | null;
  taxonomyLevel: string | null;
  masteryThreshold: number;
  totalStudents: number;
  masteredCount: number;
  masteryRate: number;
  averageCorrectRate: number;
}
```

### 3.9 Data Import/Export

#### CSV/Excel Import (`src/lib/question-import.ts`)

**Supported Formats**: CSV, XLSX, XLS

**Column Schema**:

| Column | Required | Description |
|--------|----------|-------------|
| `type` | Yes | Question type (multiple_choice, true_false, short_answer, etc.) |
| `title` | Yes | Question title |
| `body` | Yes | Question body (supports HTML/LaTeX) |
| `points` | No | Point value (default: 1) |
| `difficulty` | No | easy, medium, hard |
| `explanation` | No | Explanation shown after answer |
| `hint` | No | Hint text |
| `tags` | No | Comma-separated tags |

**Type-Specific Columns**:
- `option_1` through `option_8` — answer choices for MC/MS
- `correct_answer` — correct option index or text
- `tolerance` — numeric tolerance value
- `tolerance_type` — absolute or percentage

**Validation**: Per-row error reporting with detailed messages.

#### QTI 2.1 (`src/lib/qti/`)

**Export**:
- Questions → XML manifest + assessment items
- Full QTI 2.1 compliance with metadata
- Packaged as ZIP file via JSZip

**Import**:
- Accepts QTI 2.1 ZIP packages
- Parses XML using fast-xml-parser
- Extracts assessments and individual questions
- Maps QTI question types to CuePoint types

---

## 4. Security Architecture

CuePoint implements defense-in-depth security with centralized middleware, rate limiting, input validation, and HTTP security headers.

### 4.1 Middleware

**File**: `src/middleware.ts`

All `/api/*` requests pass through centralized middleware that enforces security in the following order:

```
Request → Middleware (all /api/*)
  ├─ 1. Admin Bearer Token Check (/api/admin/*)
  │    └─ Validates Authorization: Bearer <token> against ADMIN_SECRET env var
  │    └─ Returns 401 if invalid; 503 if not configured in production
  │
  ├─ 2. Rate Limiting (all /api/*)
  │    └─ Selects tier: "ai" for /api/ai/*, "general" for all others
  │    └─ Returns 429 with Retry-After header if exceeded
  │
  ├─ 3. Session Validation (protected routes)
  │    └─ Skips public routes: /api/lti/*, /api/auth/*
  │    └─ Validates cookies: iat_user_id, iat_user_role
  │    └─ Returns 401 if missing or invalid
  │
  └─ 4. Logging & Response Time
       └─ Attaches X-Response-Time header
       └─ Dev-mode request logging: [METHOD] /path → STATUS (Xms)
```

### 4.2 Rate Limiting

**File**: `src/lib/rate-limit.ts`

IP-based rate limiting using `rate-limiter-flexible` with in-memory storage:

| Tier | Limit | Scope | Applied To |
|------|-------|-------|------------|
| **General** | 60 requests/minute | Per IP | All `/api/*` routes |
| **AI** | 10 requests/minute | Per IP | `/api/ai/*` endpoints |

- Client IP extracted from `x-forwarded-for` → `x-real-ip` → `"unknown"`
- 429 responses include `Retry-After`, `X-RateLimit-Limit`, `X-RateLimit-Remaining` headers

### 4.3 Input Validation

**File**: `src/lib/validation.ts`

Zod schema-based validation for all API request bodies. Key schemas:

| Schema | Validated Fields |
|--------|-----------------|
| `createAssessmentSchema` | courseId (UUID), title (1–500 chars), description (max 5000), status enum |
| `createQuestionSchema` | type enum, title (1–1000), body (max 50000), points (0–1000), tags, difficulty |
| `submissionSchema` | assessmentId, studentId, action ("start"\|"submit"), answers, timing data |
| `aiGenerateSchema` | topic (1–500), questionTypes array, count (1–10), difficulty, context |
| `aiGradeSchema` | questionTitle, rubric, studentAnswer, maxPoints (0–1000) |
| `aiAskSchema` | question (1–5000 chars) |
| `createInstitutionSchema` | name (1–200), slug (regex validated), domain, contactEmail, logoUrl |
| `createObjectiveSchema` | courseId, title, taxonomyLevel (Bloom's enum), masteryThreshold (0–100) |
| `createQuestionObjectiveSchema` | questionId, objectiveId, weight (0–100) |
| `gradesSyncSchema` | submissionId (UUID) |

All schemas use `validateBody()` helper for consistent 400 error responses with field-level messages.

### 4.4 HTTP Security Headers

Configured in `next.config.ts` for all responses:

| Header | Value |
|--------|-------|
| **Content-Security-Policy** | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; font-src 'self' https://cdn.jsdelivr.net; img-src 'self' data: blob:; connect-src 'self' https://api.anthropic.com; frame-ancestors 'self' ${LTI_PLATFORM_URL}` |
| **Strict-Transport-Security** | `max-age=63072000; includeSubDomains; preload` |
| **X-Content-Type-Options** | `nosniff` |
| **X-Frame-Options** | `SAMEORIGIN` |
| **Referrer-Policy** | `strict-origin-when-cross-origin` |
| **Permissions-Policy** | `camera=(), microphone=(), geolocation=()` |
| **X-DNS-Prefetch-Control** | `off` |

### 4.5 Authentication & Authorization

**File**: `src/lib/auth.ts`

Session-based authentication using httpOnly cookies set during LTI launch:

| Cookie | Purpose |
|--------|---------|
| `iat_user_id` | Authenticated user ID |
| `iat_user_role` | User role (instructor, student, ta) |
| `iat_course_id` | Current course context |

**Route Protection Matrix**:

| Access Level | Routes |
|-------------|--------|
| **Public** (no auth) | `/api/lti/*`, `/api/auth/*` |
| **Session required** (any role) | `GET` on assessments, questions, submissions, grades, analytics |
| **Instructor/TA required** | All `POST`/`DELETE` on assessments, questions; all `/api/ai/*` endpoints |
| **Admin bearer token** | All `/api/admin/*` endpoints |

Helper functions: `getSession()`, `requireSession()`, `requireRole()`

---

## 5. Frontend Architecture

### 5.1 Pages & Routing

CuePoint uses the Next.js App Router with the following page structure:

#### Instructor Dashboard

| Route | Page | Description |
|-------|------|-------------|
| `/dashboard` | Dashboard Home | Assessment list, recent activity, stats cards |
| `/dashboard/assessments/new` | Assessment Builder | Create assessment with AI generation, import, bank picker |
| `/dashboard/assessments/[id]/edit` | Assessment Editor | Full-featured editing with question management |
| `/dashboard/assessments/[id]` | Assessment Analytics | Summary stats, item analysis, student scores |
| `/dashboard/assessment-groups` | Assessment Groups | List, create, and edit multi-assessment groups with per-item weights |
| `/dashboard/questions` | Question Banks | Browse, create, manage reusable question libraries |
| `/dashboard/students` | Student Roster | Class roster and student performance dashboard |
| `/dashboard/analytics` | Usage Analytics | Institutional-level usage trends and metrics |

#### Student Interface

| Route | Page | Description |
|-------|------|-------------|
| `/assess/[assessmentId]` | Assessment Taking | Question navigation, timer, answer input, submit, results |

**Student assessment-taking features**:
- Question navigation (previous/next or all-at-once display mode)
- Countdown timer display
- Type-specific answer input components
- Hint visibility (when enabled by instructor)
- Submit confirmation dialog
- Results display with score and feedback (per assessment settings)

#### LTI Pages

| Route | Page | Description |
|-------|------|-------------|
| `/lti/deep-link` | Deep Link Picker | Assessment selection for Canvas embedding |
| `/lti-error` | Error Page | User-friendly error display for LTI launch failures |

#### Admin

| Route | Page | Description |
|-------|------|-------------|
| `/admin` | Admin Panel | Institution management, platform registration |

### 5.2 Components

#### UI Primitives (`src/components/ui/`)

Reusable, accessible components built on Radix UI:

| Component | Description |
|-----------|-------------|
| `Button` | Styled button with CVA variants |
| `Card` | Content container with header/body/footer |
| `Input` | Text input with label and error states |
| `Textarea` | Multi-line text input |
| `Select` | Radix-based dropdown select |
| `Badge` | Status/tag badges |
| `Modal` | Radix Dialog wrapper |
| `Toast` | Notification toast messages |
| `ConfirmDialog` | Confirmation modal for destructive actions |
| `DateTimeInput` | Date and time picker |
| `StatCard` | Dashboard statistics card |
| `Switch` | Radix toggle switch |
| `Tabs` | Radix tabbed interface |
| `Tooltip` | Radix hover tooltips |
| `Dropdown` | Radix dropdown menu |
| `Label` | Form label component |

#### Question Components (`src/components/questions/`)

**Renderers** — Display questions to students:

| Component | Question Type |
|-----------|--------------|
| `multiple-choice.tsx` | Single-answer multiple choice with radio buttons |
| `multiple-select.tsx` | Multi-answer with checkboxes, optional selection limits |
| `true-false.tsx` | Boolean true/false selection |
| `short-answer.tsx` | Submit and Compare text input — student self-compares against accepted answers after submission |
| `numerical-input.tsx` | Number input with optional unit label |
| `matching.tsx` | Pair-matching with drag-and-drop |
| `ordering.tsx` | Sequence ordering with drag-and-drop |
| `open-ended.tsx` | Rich text area with word/character count |
| `file-upload.tsx` | Multi-file upload with type/size restrictions |
| `fill-blank.tsx` | Inline fill-in-the-blank with per-blank matching |
| `essay.tsx` | Long-form essay with word count and AI rubric grading |
| `categorization.tsx` | Drag items into categories |
| `math-expression.tsx` | MathLive editor with symbolic/numeric equivalence checking and voice-to-LaTeX |
| `layered.tsx` | Primary MCQ with authored follow-up (MCQ or short answer) triggered by the selected option |

**question-renderer.tsx** — Central dispatcher that renders the correct component based on `question.type`.

**Builders** — Question authoring for instructors:

| Component | Description |
|-----------|-------------|
| `question-builder.tsx` | Full question creation/editing form with AI generation integration |
| `question-import.tsx` | CSV/Excel/QTI file upload and parsing interface |
| `question-bank-picker.tsx` | Browse and select questions from reusable libraries |

#### Editor Components (`src/components/editor/`)

Rich STEM content editing:

| Feature | Technology | Description |
|---------|-----------|-------------|
| Math editing | MathLive | WYSIWYG math editor with live LaTeX preview |
| Code editing | CodeMirror | Syntax-highlighted code editor (Python + more) |
| Chemistry | MathLive | Chemistry notation support via MathLive |
| LaTeX rendering | KaTeX | Display-quality math rendering in read mode |

#### Layout Components (`src/components/layout/`)

| Component | Description |
|-----------|-------------|
| `header.tsx` | Logo, breadcrumbs, user menu with role display |
| `sidebar.tsx` | Navigation links (dashboard, assessments, questions, analytics, settings) |

#### KaTeX Renderer (`src/components/katex-renderer.tsx`)

- Renders LaTeX expressions in question bodies and feedback
- Uses KaTeX for high-quality math typesetting

### 5.3 State Management

CuePoint uses **React hooks** for state management without external state libraries:

| Pattern | Usage |
|---------|-------|
| `useState` | Local component state (form data, UI toggles) |
| `useEffect` | Data fetching, side effects, subscriptions |
| `useCallback` | Memoized event handlers |
| `useRef` | DOM references (editors, timers) |
| `useParams` | URL route parameters (assessment ID, etc.) |
| `useRouter` | Programmatic navigation |
| `useSearchParams` | URL query string state |

**Demo Mode Fallback**: When API is unavailable, the application falls back to in-memory demo data from `src/lib/demo-data.ts`, enabling development and demonstration without a database connection.

### 5.4 Styling

| Technology | Purpose |
|-----------|---------|
| **Tailwind CSS 4.1** | Utility-first CSS framework for all styling |
| **Class Variance Authority (CVA)** | Component variant management (button sizes, colors, states) |
| **Radix UI** | Accessible, unstyled headless UI primitives |
| **Lucide React** | 560+ consistent SVG icons |
| **clsx** | Conditional CSS class merging |

---

## 6. Data Models

All TypeScript types are defined in `src/types/index.ts`.

### Core Entities

#### User
```typescript
interface User {
  id: string;
  canvasUserId: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: "instructor" | "student" | "ta" | "admin";
  createdAt: string;
  updatedAt: string;
}
```

#### Course
```typescript
interface Course {
  id: string;
  canvasCourseId: string;
  name: string;
  code: string;
  termId?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### Assessment
```typescript
interface Assessment {
  id: string;
  courseId: string;
  creatorId: string;
  title: string;
  description?: string;
  instructions?: string;
  settings: AssessmentSettings;
  status: "draft" | "published" | "archived";
  questions: Question[];
  totalPoints: number;
  canvasAssignmentId?: string;
  createdAt: string;
  updatedAt: string;
}
```

#### AssessmentSettings
```typescript
interface AssessmentSettings {
  timeLimit?: number;                // minutes
  maxAttempts: number;
  shuffleQuestions: boolean;
  shuffleAnswers: boolean;
  showFeedback: "immediate" | "after_submit" | "after_due_date" | "never";
  showScore: "immediate" | "after_submit" | "after_due_date" | "never";
  feedbackStages?: FeedbackStage[];  // Fine-grained multi-stage feedback
  allowPartialCredit: boolean;
  questionDisplayMode?: "one_at_a_time" | "all_at_once";
  syncToGradebook?: boolean;
  includeFeedbackInPassback?: boolean;
  requireManualReview?: boolean;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}
```

#### Question (14 types)
```typescript
type QuestionType =
  | "multiple_choice" | "multiple_select" | "true_false"
  | "short_answer" | "numerical" | "matching"
  | "ordering" | "open_ended" | "file_upload"
  | "fill_blank" | "essay" | "categorization"
  | "math_expression" | "layered";

interface Question {
  id: string;
  assessmentId?: string;
  questionBankId?: string;
  type: QuestionType;
  title: string;
  body: string;             // Rich text / HTML with LaTeX
  data: QuestionData;       // Type-specific answer configuration
  points: number;
  explanation?: string;
  hint?: string;
  difficulty?: "easy" | "medium" | "hard";
  tags: string[];
  metadata: {
    latex?: boolean;
    chemistry?: boolean;
    hasImage?: boolean;
    hasDiagram?: boolean;
    hasCode?: boolean;
    aiGenerated?: boolean;
  };
  order: number;
  createdAt: string;
  updatedAt: string;
}
```

#### Type-Specific Question Data

| Type | Data Interface | Key Fields |
|------|---------------|------------|
| Multiple Choice | `MultipleChoiceData` | `options[]` (id, text, isCorrect, feedback), `shuffleOptions` |
| Multiple Select | `MultipleSelectData` | `options[]`, `minSelections`, `maxSelections`, `shuffleOptions` |
| True/False | `TrueFalseData` | `correctAnswer: boolean` |
| Submit and Compare (short answer) | `ShortAnswerData` | `acceptedAnswers[]`, `caseSensitive`, `exactMatch`, feedback strings |
| Numerical | `NumericalData` | `correctAnswer`, `tolerance`, `toleranceType` (absolute/percentage), `unit` |
| Matching | `MatchingData` | `pairs[]` (left, right), `shufflePairs` |
| Ordering | `OrderingData` | `items[]` (text, correctPosition) |
| Open-Ended | `OpenEndedData` | `rubric`, `sampleAnswer`, `maxLength` |
| File Upload | `FileUploadData` | `allowedTypes[]`, `maxFileSizeMB`, `maxFiles`, `rubric`, `instructions` |
| Fill in the Blank | `FillBlankData` | `segments[]` (text and blank markers), `acceptedAnswers` per blank, `caseSensitive` |
| Essay | `EssayData` | `rubric`, `sampleAnswer`, `minWords`, `maxWords`, AI-graded |
| Categorization | `CategorizationData` | `categories[]`, `items[]` (text, correctCategoryId) |
| Math Expression | `MathExpressionData` | `acceptedExpressions[]` (LaTeX), `evaluationMode` (symbolic/numeric), `tolerance` |
| Layered | `LayeredData` | Primary `options[]`, per-option follow-up (`type`, `body`, `triggerOn`, `points`) |

#### Submission
```typescript
interface Submission {
  id: string;
  assessmentId: string;
  studentId: string;
  attemptNumber: number;
  status: "in_progress" | "submitted" | "graded";
  answers: SubmissionAnswer[];
  totalScore: number;
  maxScore: number;
  startedAt: string;
  submittedAt?: string;
  gradedAt?: string;
  gradedBy?: string;
  timeSpentSeconds?: number;
}
```

#### QuestionResponse
```typescript
interface QuestionResponse {
  id: string;
  submissionId: string;
  questionId: string;
  answer: unknown;
  isCorrect?: boolean;
  score: number;
  maxScore: number;
  feedback?: string;
  autoGraded: boolean;
  timeSpentSeconds: number;
  responseChanges: number;
  firstAnsweredAt?: string;
  lastChangedAt?: string;
  gradedAt?: string;
}
```

#### ResponseEvent
```typescript
type ResponseEventType =
  | "answer_selected" | "answer_changed" | "answer_cleared"
  | "question_viewed" | "question_left" | "hint_viewed";

interface ResponseEvent {
  submissionId: string;
  questionId: string;
  eventType: ResponseEventType;
  answerValue?: unknown;
  timestamp: string;
}
```

### Analytics Types

```typescript
interface AssessmentAnalytics {
  assessmentId: string;
  totalSubmissions: number;
  completionRate: number;
  averageScore: number;
  medianScore: number;
  scoreDistribution: { range: string; count: number }[];
  questionAnalytics: QuestionAnalytics[];
  cronbachAlpha?: number;
  averageTimeSpent?: number;
  medianTimeSpent?: number;
}

interface QuestionAnalytics {
  questionId: string;
  questionTitle: string;
  totalAttempts: number;
  correctRate: number;
  averageScore: number;
  commonWrongAnswers: { answer: string; count: number }[];
  averageTimeSpent: number;
  discriminationIndex?: number;
  pointBiserial?: number;
  responseFrequencies?: { answer: string; count: number; percentage: number }[];
}
```

### LTI Types

```typescript
interface LTILaunchData {
  iss: string; sub: string; aud: string; exp: number; iat: number; nonce: string;
  name: string; email: string; roles: string[];
  contextId: string; contextTitle: string;
  resourceLinkId: string; resourceLinkTitle: string;
  customParams: Record<string, string>;
  agsEndpoint?: { lineitemUrl: string; lineitemsUrl: string; scope: string[] };
  nrpsEndpoint?: { contextMembershipsUrl: string; serviceVersions: string[] };
}

interface Institution {
  id: string; name: string; slug: string; domain?: string;
  settings: Record<string, unknown>; logoUrl?: string; contactEmail?: string;
  status: "active" | "suspended" | "pending";
  schemaName: string;
  createdAt: string; updatedAt: string;
}
```

### API Response Types

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
```

---

## 7. Configuration & Environment

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/cuepoint

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<random-secret>

# Canvas OAuth
CANVAS_BASE_URL=https://your-canvas-instance.instructure.com
CANVAS_CLIENT_ID=<canvas-developer-key-id>
CANVAS_CLIENT_SECRET=<canvas-developer-key-secret>

# LTI 1.3
LTI_PLATFORM_URL=https://your-canvas-instance.instructure.com
LTI_CLIENT_ID=<lti-client-id>
LTI_DEPLOYMENT_ID=<lti-deployment-id>
LTI_TOOL_LOGIN_URL=https://your-domain.com/api/lti/login
LTI_TOOL_REDIRECT_URL=https://your-domain.com/api/lti/launch

# Anthropic AI
ANTHROPIC_API_KEY=sk-ant-...

# Admin (required in production)
ADMIN_SECRET=<random-secret-for-admin-api>
```

### Next.js Configuration (`next.config.ts`)

- **CSP Headers**: `frame-ancestors` set to allow Canvas LMS domains for embedding
- **Server External Packages**: `pg` marked as server-only (not bundled for client)
- **TypeScript**: Strict mode enabled

### TypeScript Configuration (`tsconfig.json`)

- **Target**: ES2017
- **Strict Mode**: Enabled
- **Path Alias**: `@/*` maps to `./src/*`

### Scripts (`package.json`)

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server |
| `build` | `next build` | Production build |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint |
| `db:migrate` | `node src/db/migrate.js` | Run database migrations |

---

## 8. Database Migrations

Migrations live in `src/db/migrations/` and are applied by the runner at
`src/db/migrate.js` (exposed as `npm run db:migrate`).

| Migration | Description |
|-----------|-------------|
| `001_initial_schema.sql` | Core tables: users, courses, enrollments, assessments, questions, submissions, question responses |
| `002_enhanced_data_collection.sql` | Response events, usage events, question banks, enhanced tracking fields |
| `003_lti_advantage_services.sql` | LTI launch contexts, AGS/NRPS endpoint storage, access tokens |
| `004_oauth_and_registration.sql` | OIDC states, nonce management, dynamic registration support |
| `005_multi_tenancy.sql` | Institutions table, tenant schema isolation, schema management utilities |
| `006_mastery_learning.sql` | Learning objectives, question-objective mapping, student mastery tracking |
| `007_assessment_groups.sql` | Assessment groups and group items for bundling multiple assessments behind a single Canvas gradebook entry |

### Runner (`src/db/migrate.js`)

The runner connects via `DATABASE_URL`, auto-loading `.env` if present, and
tracks applied migrations in `public.schema_migrations`, keyed by
`(filename, schema_name)`. Each migration runs inside its own transaction
with `SET LOCAL search_path` so unqualified DDL lands in the target schema.
Running twice is a no-op, and checksum drift is surfaced as a warning rather
than silently re-applied.

**Scope directive.** Because 001–006 were written against the flat public
schema and 005 also bakes the tenant-relevant subset into the
`create_tenant_schema()` plpgsql template, migrations declare which schemas
they apply to with a header comment:

```sql
-- @scope: public    -- public schema only (default)
-- @scope: tenants   -- each tenant schema only
-- @scope: all       -- both public and every tenant
```

`001_initial_schema.sql` through `006_mastery_learning.sql` are implicitly
`public`. `007_assessment_groups.sql` is tagged `all` and uses
`IF NOT EXISTS` throughout so it's safe to re-apply.

**Common invocations**:

| Command | Effect |
|---------|--------|
| `npm run db:migrate` | Apply pending migrations to `public` |
| `npm run db:migrate -- --status` | Show applied vs. pending for `public` |
| `npm run db:migrate -- --dry-run` | Print what would run, execute nothing |
| `npm run db:migrate -- --baseline` | Record all migrations as applied without running them (adoption path for existing DBs) |
| `npm run db:migrate -- --schema=tenant_acme` | Apply in-scope migrations to a specific schema (search_path scoped) |
| `npm run db:migrate -- --tenants` | After `public`, iterate every `schema_name` in `public.institutions` and apply `tenants`/`all`-scoped migrations to each |

---

## 9. Key Features Summary

### Question Authoring
- 14 question types: Multiple Choice, Multiple Select, True/False, Submit and Compare (short answer), Numerical, Matching, Ordering, Open-Ended, File Upload, Fill in the Blank, Essay, Categorization, Math Expression, and Layered (primary MCQ with authored follow-up)
- Rich STEM content editor with MathLive (math), CodeMirror (code), and chemistry notation
- Voice dictation to LaTeX in math editors (speech-to-latex AI endpoint)
- AI-powered question generation from topics or uploaded documents
- Reusable question banks per course
- CSV/Excel/QTI 2.1 import and export with template download
- Per-option feedback for multiple choice questions

### Assessment Grouping
- Assessment groups bundle multiple assessments into a single Canvas gradebook line item
- Configurable per-assessment weights with composite scoring
- Dashboard pages for group CRUD and item management
- Deleting a group does not delete the member assessments

### Assessment Configuration
- Multiple attempts with configurable limits
- Time limits with countdown timer
- Due dates with availability windows
- Question and answer shuffling
- Fine-grained feedback visibility (immediate, after submit, after due date, after grading, never)
- Partial credit support
- Question display modes (one-at-a-time or all-at-once)
- Grade passback to Canvas gradebook

### Grading
- Instant auto-grading for objective question types
- AI semantic grading for open-ended and essay questions (rubric-based)
- Grading modes: `accuracy` (default), `completion`, or `attempted`
- Optional "Check Answer" flow so students can self-verify one answer before submission without affecting the recorded score
- Per-question response tracking with time and change history
- Numerical tolerance ranges (absolute and percentage)
- Symbolic/numeric equivalence checking for math expression questions
- Manual review workflow for file uploads

### Analytics & Psychometrics
- Score distributions and completion rates
- Item difficulty and discrimination analysis
- Point-biserial correlation
- Cronbach's Alpha reliability
- At-risk student identification (AI-powered)
- Response frequency distributions
- CSV export for all reports
- Institutional usage trends

### Canvas LMS Integration
- LTI 1.3 authentication (SSO via OIDC)
- Grade passback via Assignment & Grade Services (AGS), including composite scoring for assessment groups
- Course-scoped student roster via Names & Role Provisioning Services (NRPS) using LTI session context
- Deep linking for inline Canvas embedding
- Dynamic tool registration
- Role-based access control (instructor, student, TA, admin)
- Demo login mode for testing the instructor/student experience without a Canvas LTI launch
- Static HTML mockups in `mockups/` showing the tool embedded in Canvas pages, assignments, feedback, and analytics views

### Mastery Learning
- Course-level learning objectives with standards alignment (e.g., Common Core codes)
- Bloom's taxonomy classification (remember, understand, apply, analyze, evaluate, create)
- Hierarchical objective trees with parent-child relationships
- Configurable mastery thresholds and minimum assessment requirements
- Automatic mastery recomputation after every grading event
- Per-student mastery tracking across objectives
- Course-level mastery summary and CSV export
- Weighted question-to-objective mapping

### Security
- Centralized middleware with admin bearer token, rate limiting, and session validation
- IP-based rate limiting: 60 req/min general, 10 req/min for AI endpoints
- Zod schema validation on all API request bodies
- HTTP security headers: HSTS, CSP, X-Content-Type-Options, Permissions-Policy
- Role-based access control (instructor, student, TA, admin)
- JWT signature verification for LTI tokens via jose/JWKS

### Enterprise Features
- Multi-tenancy with schema-per-institution isolation
- Institution management with status control (active, suspended, pending)
- Serverless-optimized database connection pooling
- Demo mode for development and demonstrations
- LTI nonce replay protection and automated cleanup
