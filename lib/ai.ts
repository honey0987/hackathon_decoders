import { TravelerContext } from "./types";
export function parseTravelIntent(query:string): Partial<TravelerContext> {
 const q=query.toLowerCase(); const hours=q.match(/(\d+(?:\.5)?)\s*(hour|hr)/)?.[1]; const money=q.match(/(?:₹|rs\.?\s?)(\d[\d,]*)/)?.[1]?.replace(",","");
 return { timeAvailable:hours?Math.round(+hours*60):undefined, budget:money?+money:undefined, isRaining:/rain|raining|indoor/.test(q)||undefined, travelerType:/family|parents|kids/.test(q)?"family":/couple|partner/.test(q)?"couple":undefined, interests:[...(["food","culture","art","music","shopping","nature"] as const).filter(x=>q.includes(x)), ...(q.includes("local")||q.includes("authentic")?["hidden gem"]:[]) ] };
}
