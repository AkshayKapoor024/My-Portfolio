"use client";
import { motion } from "framer-motion";
import { experiences, ExperienceSchema } from "./Data";

export default function Experience() {
  return (
    <section id="experience" style={{ background:"var(--bg)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{ marginBottom:56 }}>
          <div className="tag" style={{ marginBottom:18 }}>Experience</div>
          <h2 className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
            Where I've Worked
          </h2>
        </motion.div>

        <div className="divider" style={{ marginBottom:48 }}/>

        {/* Cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {experiences.map((exp: ExperienceSchema, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i * 0.12, duration:0.45 }}
              className="card"
              style={{ padding:"28px 32px", position:"relative", overflow:"hidden" }}
            >
              {/* Active indicator bar */}
              {exp.current && (
                <div style={{ position:"absolute", top:0, left:0, bottom:0, width:3, background:"var(--green)", borderRadius:"3px 0 0 3px" }}/>
              )}

              <div style={{ display:"flex", flexWrap:"wrap", gap:16, justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                {/* Left info */}
                <div>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:6, flexWrap:"wrap" }}>
                    <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1.1rem", color:"var(--white)", margin:0 }}>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(52,211,153,0.1)", border:"1px solid rgba(52,211,153,0.3)", borderRadius:999, padding:"3px 10px" }}>
                        <div className="status-dot" style={{ width:5, height:5 }}/>
                        <span className="mono" style={{ fontSize:"0.62rem", color:"var(--green)" }}>Current</span>
                      </span>
                    )}
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap" }}>
                    <span style={{ fontWeight:600, fontSize:"0.9rem", color:"var(--indigo)" }}>{exp.company}</span>
                    <span style={{ color:"var(--g3)" }}>·</span>
                    <span style={{ fontSize:"0.82rem", color:"var(--g2)" }}>{exp.location}</span>
                  </div>
                </div>

                {/* Right — duration + type */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
                  <span className="mono" style={{ fontSize:"0.72rem", color:"var(--g1)", background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:6, padding:"4px 10px" }}>
                    {exp.duration}
                  </span>
                  <span className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)" }}>{exp.type}</span>
                </div>
              </div>

              {/* Bullets */}
              <ul style={{ margin:0, padding:0, listStyle:"none", display:"flex", flexDirection:"column", gap:8 }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <span style={{ flexShrink:0, marginTop:7, width:4, height:4, borderRadius:"50%", background:"var(--indigo)" }}/>
                    <span style={{ color:"var(--g1)", fontSize:"0.87rem", lineHeight:1.65 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
