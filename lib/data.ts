import { Experience } from "./types";
const img = (id:string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
const base: Omit<Experience, "id"|"title"|"category"|"area"|"price"|"duration"|"distance"|"travelMinutes"|"tags"|"indoor"|"authenticity"|"description"> = { provider:"Roamly verified local", image:img("photo-1555396273-367ea4eb4db5"), rating:4.7, reviewCount:180, capacity:12, available:true, open:true, accessibility:["step-free"], touristDensity:35, popularity:62 };
const specs = [
["Sunset Street Food Walk","Food","Bandra",850,90,1.8,15,"food,culture,hidden gem",false,92,"Taste six family-run favourites with a local storyteller."],
["Warli Art & Chai Workshop","Workshop","Kala Ghoda",1200,100,2.6,18,"culture,art,indoor,hidden gem",true,94,"Paint with a Warli artist in a calm heritage studio."],
["Crawford Market Spice Trail","Food","Fort",600,60,3.4,22,"food,culture,market,hidden gem",false,88,"A fast, sensory route through Mumbai's oldest food market."],
["Marine Drive Storytelling","Culture","Churchgate",400,55,2.2,16,"culture,history,walk",false,72,"An easy, sunset-friendly oral history walk."],
["Indie Cinema & Conversation","Culture","Bandra",550,120,1.2,10,"culture,indoor,local",true,76,"Curated Marathi independent cinema with a host discussion."],
["Dharavi Pottery Session","Workshop","Dharavi",950,90,4.3,28,"culture,art,local",true,90,"Hands-on clay session run by a third-generation maker."],
["Monsoon Chocolate Lab","Workshop","Lower Parel",1100,75,3.0,20,"food,indoor,workshop",true,78,"Make truffles and taste bean-to-bar chocolate."],
["Colaba Heritage Photo Walk","Culture","Colaba",700,120,4.8,30,"culture,photography,outdoor",false,82,"Architecture and overlooked stories through old Bombay."],
["Bandra Rooftop Yoga","Wellness","Bandra",500,60,0.9,9,"wellness,outdoor,local",false,68,"Low-impact movement with a sea-breeze view."],
["Koli Seafood Home Dinner","Food","Versova",1450,110,5.2,32,"food,culture,hidden gem",true,97,"A hosted coastal meal and family recipes in a Koli home."],
["Kala Ghoda Gallery Hop","Culture","Fort",0,70,3.1,21,"culture,art,indoor",true,70,"A free curator-led route through independent galleries."],
["Sanjay Gandhi Nature Trail","Nature","Borivali",750,150,9.7,45,"nature,outdoor,adventure",false,75,"Guided forest walk for curious urban explorers."],
["Irani Cafe Breakfast Stories","Food","Fort",350,50,3.5,22,"food,history,hidden gem",true,89,"Breakfast, bun maska, and the city's Persian café heritage."],
["Sufi Music Courtyard","Nightlife","Mahim",650,80,2.7,18,"music,culture,indoor,local",true,91,"An intimate evening concert in a restored courtyard."],
["Chor Bazaar Treasure Hunt","Shopping","Bhendi Bazaar",500,100,4.0,25,"shopping,culture,hidden gem",false,84,"A respectful, clue-led introduction to vintage sellers."],
["Mumbai By Night Cycle","Adventure","Worli",900,135,3.8,24,"adventure,food,outdoor",false,66,"A gentle late-night cycle with snack stops."],
["Tea Blending Atelier","Workshop","Bandra",800,70,1.4,12,"food,workshop,indoor",true,79,"Build a take-home chai blend with a tea sommelier."],
["Pali Hill Design Crawl","Shopping","Bandra",650,75,1.6,14,"shopping,design,local",false,81,"Meet independent designers in their small studios."],
] as const;
export const experiences: Experience[] = Array.from({length:36},(_,i)=>{const s=specs[i%specs.length]; return {...base,id:`exp-${i+1}`,title:i<specs.length?s[0]:`${s[0]} · ${i<24?"Evening edition":"Local pick"}`,category:s[1],area:s[2],price:s[3]+(i>=18?(i%3)*100:0),duration:s[4],distance:s[5]+(i>=18?(i%4)*.35:0),travelMinutes:s[6],tags:s[7].split(","),indoor:s[8],authenticity:s[9],description:s[10],image: img(["photo-1555396273-367ea4eb4db5","photo-1515003197210-e0cd71810b5f","photo-1518105779142-d975f22f1b0a","photo-1529543544282-ea669407fca3"][i%4]),rating:Math.min(4.9,base.rating+(i%3)*.1),reviewCount:base.reviewCount+i*17, capacity: i%7===0?3:12, touristDensity: 25+(i%5)*12};});
