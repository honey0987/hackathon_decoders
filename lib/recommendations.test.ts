import { describe, expect, it } from "vitest";
import { experiences } from "./data";
import { feasibility, recommend } from "./recommendations";
import { TravelerContext } from "./types";
const ctx:TravelerContext={budget:1500,timeAvailable:120,groupSize:4,interests:["food"],maxDistance:6,accessibility:["step-free"],isRaining:false,travelerType:"family",strictBudget:true};
describe("feasibility engine",()=>{
 it("counts outbound + experience + return time",()=>{const e={...experiences[0],duration:70,travelMinutes:20,price:300};const f=feasibility(e,ctx);expect(f.totalMinutes).toBe(110);expect(f.feasible).toBe(true)});
 it("rejects experiences beyond current window",()=>{const e={...experiences[0],duration:120,travelMinutes:20};expect(feasibility(e,ctx).blockers).toContain("Doesn’t fit your current schedule")});
 it("returns only viable capacity, distance and time results",()=>{for(const r of recommend(experiences,ctx)){expect(r.experience.capacity).toBeGreaterThanOrEqual(4);expect(r.feasibility.totalMinutes).toBeLessThanOrEqual(120)}});
});
