# Roamly — Local & Experiences

## Concrete MVP architecture

**Stack:** Next.js App Router + React 19 + TypeScript + CSS design system. The demo uses a typed repository of Mumbai experiences and a mock AI/maps/weather layer, so it is deterministic without keys. Browser storage is the MVP persistence boundary. Production adapters belong behind `lib/ai`, `lib/providers`, and a Prisma/PostgreSQL repository.

```text
Natural language / demo controls
        ↓ AIService.parseTravelIntent (mock, replaceable)
Structured TravelerContext → candidate retrieval → hard constraints
        ↓                                     ↓
 itinerary conflict + travel/duration feasibility  infeasible alternatives
        ↓
 weighted scoring + transparent reason generation → ranked cards / itinerary
```

## Data model (production)

`User 1—* ItineraryItem *—1 Experience`, `User *—* Experience` through `SavedExperience`, `Provider 1—* Experience`, `Experience 1—* Review`. `Experience` owns geo coordinates, price per person, duration, capacity, tags, opening/availability, accessibility, authenticity/locality and tourist-density scores. Add `AvailabilitySlot` for real inventory. Suggested Postgres indexes: experience geo/city/category, availability start/end, itinerary user/start.

## Scoring

Hard filters remove unavailable, capacity-incompatible, inaccessible, over-distance, over-budget (strict), closed, conflicting, or time-infeasible experiences. Feasible results score: interests 27%, time slack 16%, location/travel 14%, budget 12%, availability 9%, group 6%, accessibility 5%, rating confidence 5%, local authenticity 4%, context/weather 2%. Interest and feasibility intentionally dominate rating: a 4.9-star activity that cannot fit should never win.

## Run

Install Node LTS and npm, then run `npm install`, `npm run dev`, and open `http://localhost:3000`. Test the engine with `npm test`. The present shell's npm installation is unavailable, so dependencies could not be installed/verified here.

## 3-minute demo

1. Start with the preset: 3 hours, ₹1,500, family of 3, food/culture/hidden gems.
2. Run “Find experiences”; point out the candidate pipeline and feasibility reasons.
3. Add the food walk to the itinerary.
4. Click **Only 90 min**; watch results re-rank/flag time fit.
5. Click **Rain started**; indoor alternatives rise immediately.
6. Open Provider view for demand, segments, and Saturday-evening availability suggestion.

See `docs/architecture.md` for API, schema, feature boundary, and delivery plan.
