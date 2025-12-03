# Renaissance Visual Novel - Il Cambiavalute di Firenze

## Overview

This is an educational visual novel game set in Renaissance-era Florence, where players take on the role of a money changer (cambiavalute) and learn about historical financial instruments while making narrative choices that affect their prosperity. The game combines historical accuracy with engaging storytelling to teach about the origins of modern banking systems.

The application is built as a full-stack TypeScript web application with a React frontend and Express backend, featuring a visual novel-style interface with period-authentic Renaissance aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool

**UI Component System**: Radix UI primitives with shadcn/ui component library, styled with Tailwind CSS using a custom Renaissance-themed design system

**Typography Strategy**: Google Fonts integration with three distinct typefaces:
- Cinzel for headings and titles (Renaissance serif)
- EB Garamond for body text, dialogue, and narrative content
- Cormorant Garamond for UI labels and metadata

**Design Philosophy**: Reference-based approach drawing from Pentiment and Disco Elysium, prioritizing authentic period aesthetics with tactile interface elements (parchment, leather textures) and reverence for historical detail

**State Management**: React hooks with local state management; game state flows through component props from main App component down to WelcomeScreen, GameScreen, and ResultsScreen

**Game Flow**: Three-phase structure (welcome → playing → results) managed through phase state, with chapter-based narrative progression using choice objects that modify player stats and determine next chapters

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**API Design**: RESTful endpoints for game state persistence:
- POST `/api/game/save` - Save game state
- GET `/api/game/:id` - Retrieve specific game state
- GET `/api/games` - List all game states (for leaderboards/statistics)

**Storage Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`) as default, designed to be swappable with database-backed storage

**Development Server**: Vite dev server with HMR (Hot Module Replacement) integrated into Express middleware for seamless development experience

**Build Process**: Custom build script using esbuild for server bundling with dependency allowlist for optimization, and Vite for client-side bundling

### Data Models

**Game Chapter Structure**: Each chapter contains:
- Narrative text arrays
- Optional dialogue with speaker attribution
- Multiple choice objects with consequences
- Experience and money modifiers
- Next chapter routing
- Optional ending flags

**Game State Persistence**: Tracks current chapter, player resources (experience/money), choice history, and used financial instruments

**Financial Instruments**: Comparison data structure linking Renaissance-era financial concepts to modern equivalents for educational outcomes display

### External Dependencies

**UI Component Library**: Radix UI primitives (@radix-ui/react-*) providing accessible, unstyled component primitives for dialogs, dropdowns, tooltips, etc.

**Styling**: 
- Tailwind CSS for utility-first styling
- PostCSS with Autoprefixer for CSS processing
- Custom CSS variables for Renaissance color palette

**State Management**: @tanstack/react-query for server state management and caching

**Form Handling**: React Hook Form with Zod resolvers for validation

**Database ORM**: Drizzle ORM configured for PostgreSQL with connection to Neon serverless database, though currently using in-memory storage as fallback

**Type Safety**: Zod schemas for runtime validation matching TypeScript interfaces

**Development Tools**:
- tsx for TypeScript execution
- Vite with React plugin and Replit-specific plugins (runtime error overlay, cartographer, dev banner)
- ESBuild for production server bundling

**Google Fonts**: External font loading for Cinzel, EB Garamond, and Cormorant Garamond font families

### Configuration Approach

**Path Aliases**: Configured across TypeScript, Vite, and build tools:
- `@/*` → client source files
- `@shared/*` → shared types between client/server
- `@assets/*` → attached assets directory

**Modular Configuration**: Separate config files for Tailwind, PostCSS, Vite, TypeScript, and Drizzle ORM allowing independent tool management

**Environment-Aware**: Development vs production modes with conditional plugin loading and different build outputs