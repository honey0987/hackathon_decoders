# MVP engineering decisions

## User flows
- **Traveller:** describe a need → inspect intent chips → ranked feasible cards → save/add itinerary → tighten time/budget or rain context → immediate recalculation.
- **Provider:** view listing demand, audience segments, requested price band and supply recommendation. Listing CRUD is the next bounded increment.

## API contract
- `POST /api/ai/query` `{query}` → partial `TravelerContext` intent.
- `POST /api/recommendations` `TravelerContext` → `{results: Recommendation[]}`.
- Planned persistence endpoints: `GET/POST /api/experiences`, `GET /api/experiences/:id`, `GET/POST/PATCH /api/itinerary`, `GET/POST /api/saved`, `GET /api/providers/:id/analytics`.

`POST /api/recommendations` accepts `{ budget, timeAvailable, groupSize, interests, maxDistance, accessibility, isRaining, travelerType, strictBudget }`; each result returns the experience, 0–100 `match`, `feasibility` (door-to-door minutes, slack, blockers), weighted breakdown, and user-readable reasons. The provided production-ready relational schema is in `prisma/schema.prisma`.

## MVP versus later
**Now:** feasibility, adaptive ranking, explanations, itinerary conflict guard, 36 seeded offerings, provider insight dashboard, mock location/weather/AI. **Later:** Clerk auth, Prisma/Postgres, Mapbox adapter, live weather/provider availability, embedding retrieval, booking/payment and provider CRUD.

## Risks and mitigations
- Live data/API failures: provider interfaces and deterministic mock fallback.
- AI extraction errors: editable structured controls and transparent parsed intent.
- False feasibility: conservative travel buffer and explicit demo-data label.
- Scope: traveler loop is polished before provider operations.
