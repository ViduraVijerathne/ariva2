import {useEffect,useMemo,useRef,useState} from "react";
import {destinations,packages,type Destination} from "../data";
import "./VibeStory.css";
type Vibe=Destination["region"];
const vibes:Vibe[]=["Highlands","Heritage","Wildlife","Coast"];
const photos:Record<string,string>={
"Ella":"https://images.unsplash.com/photo-1704797389230-100a9bbb5b73?auto=format&fit=crop&w=1800&q=82",
"Tissamaharama & Yala":"https://images.unsplash.com/photo-1773745953874-6a6ecd0703b1?auto=format&fit=crop&w=1800&q=82",
};
const vibeImages:Record<Vibe,string>={
Highlands:photos.Ella,
Heritage:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
Wildlife:photos["Tissamaharama & Yala"],
Coast:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
};
type Props={chosenLocations:string[];onToggleLocation:(name:string)=>void;onOpenPlanner:()=>void};
function useProgress(ref:React.RefObject<HTMLElement|null>){
 const [value,setValue]=useState(0);
 useEffect(()=>{
  let frame=0;
  const update=()=>{frame=0;const node=ref.current;if(!node)return;const r=node.getBoundingClientRect();setValue(Math.min(.999,Math.max(0,-r.top/Math.max(1,r.height-innerHeight))))};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update)};
  update();window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule);
  return()=>{window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);cancelAnimationFrame(frame)};
 },[ref]);return value;
}
export function VibeStory({chosenLocations,onToggleLocation,onOpenPlanner}:Props){
 const [selected,setSelected]=useState<Vibe[]>([]);
 const [started,setStarted]=useState(false);
 const [cursor,setCursor]=useState(0);
 const stage=useRef<HTMLElement|null>(null);
 const travel=useProgress(stage);
 const matching=useMemo(()=>destinations.filter(d=>!selected.length||selected.includes(d.region)),[selected]);
 const current=matching[Math.min(cursor,matching.length-1)];
 const vibeToggle=(v:Vibe)=>{setSelected(s=>s.includes(v)?s.filter(x=>x!==v):[...s,v]);setCursor(0)};
 const begin=()=>{setStarted(true);setCursor(0);requestAnimationFrame(()=>document.getElementById("vibe-stage")?.scrollIntoView({behavior:"smooth"}))};
 const next=()=>{if(cursor+1<matching.length){setCursor(c=>c+1);document.getElementById("vibe-stage")?.scrollIntoView({behavior:"smooth"})}else{onOpenPlanner()}};
 const goBack=()=>{setStarted(false);requestAnimationFrame(()=>document.getElementById("destinations")?.scrollIntoView({behavior:"smooth"}))};
 const image=current?(photos[current.name]||current.image):vibeImages.Coast;
 const slide=Math.min(4,Math.floor(travel*5));
 return <section className="vibe-world" id="destinations">
   <div className="vibe-intro">
    <span className="eyebrow">THE ISLAND IS YOURS</span><h2>Find your <em>somewhere.</em></h2>
    <p>What kind of Sri Lanka speaks to you? Choose one or more moods — or skip and discover them all.</p>
    <div className="vibe-choices" role="group" aria-label="Choose your travel vibes">
      {vibes.map(v=><button type="button" key={v} className={selected.includes(v)?"is-picked":""} aria-pressed={selected.includes(v)} onClick={()=>vibeToggle(v)}>
        <img src={vibeImages[v]} loading="lazy" alt={v+" travel atmosphere"} />
        <span className="vibe-choice-overlay"/><span className="vibe-choice-name">{v}</span><span className="vibe-choice-icon">{selected.includes(v)?"✓":"+"}</span>
       </button>)}
    </div>
    <p className="vibe-count">{selected.length?selected.join(" + "):"All four vibes available"} · {matching.length} destinations</p>
    <div className="vibe-actions"><button type="button" className="gold-button" onClick={begin}>{selected.length?"Explore my vibes":"Explore all destinations"} ↗</button><button type="button" className="outline-button" onClick={()=>{setSelected([]);setCursor(0);begin()}}>Skip selection</button></div>
   </div>
   {started&&current&&<>
    <div className="vibe-toolbar"><button type="button" onClick={goBack}>← Change vibes</button><span>DESTINATION {cursor+1} / {matching.length}</span><button type="button" onClick={next}>{cursor===matching.length-1?"Finish":"Next destination →"}</button></div>
    <section ref={stage} id="vibe-stage" className="vibe-stage" aria-label={current.name+" scroll story"}>
      <div className="vibe-sticky">
       <div className="vibe-photo" role="img" aria-label={current.name+" destination photography"} style={{backgroundImage:`url("${image}")`,transform:`scale(${1.05+travel*.12}) translate3d(0,${-travel*3}%,0)`}}/>
       <div className="vibe-shade"/>
       {slide===0&&<div className="vibe-story-content"><span className="eyebrow">{current.region.toUpperCase()} / THE ARRIVAL</span><h3>Welcome to<br/><em>{current.name}.</em></h3><p>A place to discover at your own rhythm. Your next chapter starts here.</p></div>}
       {slide===1&&<div className="vibe-story-content"><span className="eyebrow">CHAPTER ONE / THE EXPERIENCES</span><h3>Live the<br/><em>extraordinary.</em></h3><div className="vibe-story-items">{current.activities.slice(0,7).map((a,i)=><span key={a}><b>{String(i+1).padStart(2,"0")}</b> {a}</span>)}</div></div>}
       {slide===2&&<div className="vibe-story-content"><span className="eyebrow">CHAPTER TWO / STAY A LITTLE LONGER</span><h3>Rest, in<br/><em>your own way.</em></h3><div className="vibe-story-items">{current.stays.map(s=><span key={s}>↗ {s}</span>)}</div><p>Suggested accommodation; availability and suitability require confirmation.</p></div>}
       {slide===3&&<div className="vibe-story-content"><span className="eyebrow">CHAPTER THREE / WELLNESS</span><h3>Time to<br/><em>restore.</em></h3><div className="vibe-story-items">{current.wellness.map(s=><span key={s}>✧ {s}</span>)}</div></div>}
       {slide===4&&<div className="vibe-story-content vibe-tiers"><span className="eyebrow">CHAPTER FOUR / YOUR WAY TO TRAVEL</span><h3>Choose your<br/><em>comfort.</em></h3><div className="vibe-tier-grid">{packages.map(p=><article key={p.name}><strong>{p.name}</strong><p>{p.features.map(s=><span key={s}>✓ {s}</span>)}</p></article>)}</div></div>}
       <div className="vibe-stage-foot"><span>SCROLL TO UNFOLD THE STORY ↓</span><span>0{slide+1} / 05</span></div><div className="vibe-stage-progress"><span style={{width:`${travel*100}%`}}/></div>
      </div>
    </section>
    <div className="vibe-decision"><span className="eyebrow">THE DECISION IS YOURS</span><h3>Does <em>{current.name}</em><br/>belong in your story?</h3><p>Save this destination to your journey, or continue exploring. You can always return later.</p><div className="vibe-actions"><button className="gold-button" type="button" onClick={()=>{if(!chosenLocations.includes(current.name))onToggleLocation(current.name);next()}}>{chosenLocations.includes(current.name)?"Already in my journey ✓":"Yes, add to my journey +"}</button><button className="outline-button" type="button" onClick={next}>Not this time →</button></div><div className="vibe-selection-summary">{chosenLocations.length} destination{chosenLocations.length===1?"":"s"} in your journey <button type="button" onClick={onOpenPlanner}>View my itinerary ↗</button></div></div>
   </>}
  </section>;
}
