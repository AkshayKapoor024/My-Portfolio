"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectSchema, projectsData } from "./Data";

const tags: string[] = ["All", "AI / Agentic", "Full Stack", "Real-time"];

const tagMap: Record<string, string[]> = {
  "All": [],
  "AI / Agentic":  ["SynthMarket-AI 📈", "Vantaguard 🛡️"],
  "Full Stack":    ["CodeArena", "Schedulo"],
  "Real-time":     ["CodeArena"],
};

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [modal, setModal] = useState<projectSchema | null>(null);

  const filtered = activeTag === "All"
    ? projectsData
    : projectsData.filter(p => tagMap[activeTag]?.includes(p.title));

  return (
    <section id="projects" style={{ background:"var(--bg)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{ marginBottom:48 }}>
          <div className="tag" style={{ marginBottom:18 }}>Projects</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:20, alignItems:"flex-end", justifyContent:"space-between" }}>
            <h2 className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
              Featured Work
            </h2>
            <p style={{ color:"var(--g1)", fontSize:"0.88rem", maxWidth:360, margin:0, lineHeight:1.65 }}>
              Real applications built with production constraints in mind.
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:40 }}>
          {tags.map(t => (
            <button key={t} onClick={()=>setActiveTag(t)} className={`cat-tab${activeTag===t?" active":""}`}>{t}</button>
          ))}
        </div>

        {/* Project cards grid */}
        <motion.div layout style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:20 }}>
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, scale:0.95 }}
                transition={{ delay:i*0.08, duration:0.38 }}
                onClick={()=>setModal(p)}
                className="card"
                style={{ cursor:"pointer", overflow:"hidden", display:"flex", flexDirection:"column" }}
              >
                {/* Thumbnail */}
                <div style={{ width:"100%", height:190, overflow:"hidden", position:"relative" }}>
                  <img src={p.thumbnail} alt={p.title}
                    style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.4s ease" }}
                    onMouseEnter={e=>{ (e.target as HTMLImageElement).style.transform="scale(1.05)"; }}
                    onMouseLeave={e=>{ (e.target as HTMLImageElement).style.transform="scale(1)"; }}
                  />
                  {/* Dark overlay at bottom */}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, height:70, background:"linear-gradient(to top, var(--bg3), transparent)" }}/>
                </div>

                {/* Body */}
                <div style={{ padding:"20px 22px 22px", display:"flex", flexDirection:"column", gap:12, flex:1 }}>
                  <div>
                    <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1.05rem", color:"var(--white)", margin:"0 0 6px" }}>{p.title}</h3>
                    <p style={{ color:"var(--g1)", fontSize:"0.82rem", lineHeight:1.6, margin:0 }}>{p.shortDescription.slice(0,110)}…</p>
                  </div>

                  {/* Tech tags */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {p.techStack.slice(0,4).map((t,j) => (
                      <span key={j} className="mono" style={{ fontSize:"0.65rem", padding:"3px 8px", borderRadius:4, border:"1px solid var(--border)", color:"var(--g2)" }}>{t}</span>
                    ))}
                    {p.techStack.length > 4 && <span className="mono" style={{ fontSize:"0.65rem", color:"var(--indigo)" }}>+{p.techStack.length-4}</span>}
                  </div>

                  {/* Footer row */}
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"auto", paddingTop:8, borderTop:"1px solid var(--border)" }}>
                    <span style={{ fontSize:"0.78rem", color:"var(--indigo)", fontWeight:600 }}>View Details</span>
                    <div style={{ display:"flex", gap:10 }}>
                      <a href={p.codeLink} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                        style={{ color:"var(--g2)", transition:"color 0.15s", lineHeight:0 }}
                        onMouseEnter={e=>e.currentTarget.style.color="var(--white)"}
                        onMouseLeave={e=>e.currentTarget.style.color="var(--g2)"}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                      <a href={p.liveLink} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                        style={{ color:"var(--g2)", transition:"color 0.15s", lineHeight:0 }}
                        onMouseEnter={e=>e.currentTarget.style.color="var(--white)"}
                        onMouseLeave={e=>e.currentTarget.style.color="var(--g2)"}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {modal && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.18}}
            style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(3,3,6,0.85)", backdropFilter:"blur(20px)", display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}
            onClick={()=>setModal(null)}
          >
            <motion.div
              initial={{scale:0.95,opacity:0,y:24}} animate={{scale:1,opacity:1,y:0}} exit={{scale:0.95,opacity:0}}
              transition={{duration:0.22}}
              onClick={e=>e.stopPropagation()}
              style={{ width:"100%", maxWidth:740, maxHeight:"92vh", overflowY:"auto", background:"var(--bg3)", border:"1px solid var(--border2)", borderRadius:18 }}
            >
              {/* Thumbnail */}
              <div style={{ width:"100%", height:260, overflow:"hidden", borderRadius:"18px 18px 0 0" }}>
                <img src={modal.thumbnail} alt={modal.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              </div>

              <div style={{ padding:"28px 32px" }}>
                {/* Title row */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:20 }}>
                  <div>
                    <h2 className="display" style={{ fontSize:"1.55rem", color:"var(--white)", margin:"0 0 6px" }}>{modal.title}</h2>
                    <p style={{ color:"var(--g1)", fontSize:"0.83rem", margin:0 }}>{modal.shortDescription}</p>
                  </div>
                  <button onClick={()=>setModal(null)}
                    style={{ flexShrink:0, background:"var(--bg4)", border:"1px solid var(--border)", borderRadius:8, width:34, height:34, cursor:"pointer", color:"var(--g1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>

                <div className="divider" style={{ marginBottom:22 }}/>

                {/* Overview */}
                <div style={{ marginBottom:20 }}>
                  <div className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:8 }}>Overview</div>
                  <p style={{ fontSize:"0.86rem", color:"var(--g1)", lineHeight:1.72, margin:0 }}>{modal.overview}</p>
                </div>

                {/* Problem / Solution */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 }}>
                  {[{label:"Problem",color:"var(--g2)",bg:"var(--bg4)",border:"var(--border)",text:modal.problem},{label:"Solution",color:"var(--indigo)",bg:"var(--indigo-dim)",border:"var(--indigo-ring)",text:modal.solution}].map(b=>(
                    <div key={b.label} style={{ background:b.bg, border:`1px solid ${b.border}`, borderRadius:10, padding:"14px 16px" }}>
                      <div className="mono" style={{ fontSize:"0.62rem", color:b.color, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>{b.label}</div>
                      <p style={{ fontSize:"0.81rem", color:"var(--g1)", lineHeight:1.65, margin:0 }}>{b.text}</p>
                    </div>
                  ))}
                </div>

                {/* Key features */}
                <div style={{ marginBottom:20 }}>
                  <div className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:10 }}>Key Features</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                    {modal.keyFeatures.map((f,i)=>(
                      <span key={i} style={{ fontSize:"0.77rem", padding:"5px 11px", borderRadius:6, border:"1px solid var(--border)", color:"var(--g1)", background:"var(--bg4)" }}>{f}</span>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div style={{ marginBottom:26 }}>
                  <div className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:10 }}>Stack</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {modal.techStack.map((t,i)=>(
                      <span key={i} className="mono" style={{ fontSize:"0.7rem", padding:"4px 10px", borderRadius:5, border:"1px solid var(--indigo-ring)", color:"var(--indigo)", background:"var(--indigo-dim)" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display:"flex", gap:12 }}>
                  <a href={modal.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-g" style={{ flex:1, justifyContent:"center", textDecoration:"none" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a>
                  <a href={modal.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-p" style={{ flex:1, justifyContent:"center", textDecoration:"none" }}>
                    Live Demo
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
