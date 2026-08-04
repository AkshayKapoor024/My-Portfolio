"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const roles = [
  "Full Stack Developer",
  "MERN & Next.js Engineer",
  "Machine Learning Engineer",
  "Generative AI Builder",
  "Agentic AI Architect",
];

function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="resume-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="resume-modal"
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{ position:"absolute", top:16, right:16, background:"var(--bg4)", border:"1px solid var(--border2)", borderRadius:8, width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"var(--g1)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <div style={{ marginBottom:24 }}>
            <div className="tag" style={{ marginBottom:14 }}>Download Resume</div>
            <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"1.3rem", color:"var(--white)", margin:0, letterSpacing:"-0.02em" }}>Choose your version</h3>
            <p style={{ color:"var(--g1)", fontSize:"0.83rem", margin:"8px 0 0" }}>Select the resume tailored to the role you're hiring for.</p>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            <a
              href="/Resume_Full_Stack.pdf"
              download="Akshay_Kapoor_FullStack.pdf"
              className="btn btn-g"
              style={{ justifyContent:"space-between", padding:"16px 20px", borderRadius:12, textDecoration:"none" }}
            >
              <div style={{ display:"flex", flexDirection:"column", gap:4, alignItems:"flex-start" }}>
                <span style={{ fontWeight:700, fontSize:"0.95rem", color:"var(--white)" }}>Full Stack Developer</span>
                <span className="mono" style={{ fontSize:"0.68rem", color:"var(--g2)" }}>MERN · Next.js · Node.js · REST APIs</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--indigo)" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>

            <a
              href="/Resume_AI_Engineer.pdf"
              download="Akshay_Kapoor_AI_Engineer.pdf"
              className="btn btn-p"
              style={{ justifyContent:"space-between", padding:"16px 20px", borderRadius:12, textDecoration:"none" }}
            >
              <div style={{ display:"flex", flexDirection:"column", gap:4, alignItems:"flex-start" }}>
                <span style={{ fontWeight:700, fontSize:"0.95rem" }}>AI / ML Engineer</span>
                <span className="mono" style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.6)" }}>LangChain · LangGraph · CrewAI · RAG</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="hero" style={{ minHeight:"100vh", background:"var(--bg)", position:"relative", overflow:"hidden", display:"flex", alignItems:"center" }}>

      {/* Mesh blobs */}
      <div className="mesh" aria-hidden>
        <div className="mesh-blob" style={{ width:600, height:600, top:"-15%", right:"-10%", background:"radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)", animation:"float-slow 9s ease-in-out infinite" }}/>
        <div className="mesh-blob" style={{ width:400, height:400, bottom:"5%", left:"-5%", background:"radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)", animation:"float-slow 12s ease-in-out infinite reverse" }}/>
        {/* Grid lines */}
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.025 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div style={{ position:"relative", zIndex:10, maxWidth:1160, margin:"0 auto", padding:"80px 28px 60px", width:"100%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:40, alignItems:"center" }} className="hero-grid">

          {/* LEFT — text content */}
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>

            {/* Status badge */}
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5}} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
              <div className="status-dot"/>
              <span className="mono" style={{ fontSize:"0.7rem", color:"var(--g1)", letterSpacing:"0.12em" }}>AVAILABLE FOR OPPORTUNITIES · DELHI, INDIA</span>
            </motion.div>

            {/* Name */}
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.55,delay:0.07}}
              className="display"
              style={{ fontSize:"clamp(3.2rem,7.5vw,6.5rem)", lineHeight:1.0, color:"var(--white)", margin:"0 0 20px" }}>
              Akshay<br/>
              <span style={{ color:"var(--indigo)" }}>Kapoor</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.28}} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
              <span className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.1em" }}>~/role</span>
              <span style={{ width:1, height:12, background:"var(--g3)" }}/>
              <span className="mono" style={{ fontSize:"0.95rem", color:"var(--indigo)", fontWeight:500 }}>
                <Typewriter words={roles} loop typeSpeed={55} deleteSpeed={28} delaySpeed={2200} cursor cursorStyle="_"/>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.4}}
              style={{ color:"var(--g1)", fontSize:"1rem", lineHeight:1.72, maxWidth:500, margin:"0 0 36px" }}>
              I build <strong style={{ color:"var(--white)", fontWeight:600 }}>scalable web systems</strong> and{" "}
              <strong style={{ color:"var(--white)", fontWeight:600 }}>agentic AI pipelines</strong> that solve real problems.
              From a MERN backend to a LangGraph multi-agent workflow — I ship things that work in production.
            </motion.p>

            {/* CTA Row */}
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.5}} style={{ display:"flex", gap:12, flexWrap:"wrap", marginBottom:44 }}>
              <a href="#projects" className="btn btn-p" style={{ textDecoration:"none" }}>
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
              <button onClick={()=>setShowResume(true)} className="btn btn-g">
                Download CV
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </button>
              <a href="#contactme" className="btn btn-g" style={{ textDecoration:"none" }}>Contact</a>
            </motion.div>

            {/* Social row */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.65}} style={{ display:"flex", gap:12, alignItems:"center" }}>
              {[
                { label:"GitHub",   href:"https://github.com/AkshayKapoor024" },
                { label:"LinkedIn", href:"https://www.linkedin.com/in/kapoorakshay24" },
                { label:"Email",    href:"mailto:work.akshaykapoor24@gmail.com" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:"var(--g2)", textDecoration:"none", transition:"color 0.15s" }}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--indigo)"}
                  onMouseLeave={e=>e.currentTarget.style.color="var(--g2)"}
                >{s.label}</a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — profile photo */}
          <motion.div initial={{opacity:0,scale:0.93,x:30}} animate={{opacity:1,scale:1,x:0}} transition={{duration:0.65,delay:0.2}} className="hero-photo" style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:20 }}>

            {/* Photo block */}
            <div style={{ position:"relative" }}>
              {/* Outer decorative ring */}
              <div style={{
                position:"absolute", inset:-2, borderRadius:24,
                background:"linear-gradient(135deg, var(--indigo) 0%, transparent 60%)",
                zIndex:0, opacity:0.6,
              }}/>
              <div className="profile-ring" style={{ position:"relative", zIndex:1, width:280, height:340 }}>
                <img
                  src="/profile.jpeg"
                  alt="Akshay Kapoor"
                  style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
                />
                {/* Overlay gradient at bottom */}
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:100, background:"linear-gradient(to top, var(--bg) 0%, transparent 100%)", zIndex:2 }}/>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y:[0,-6,0] }}
                transition={{ repeat:Infinity, duration:3.5, ease:"easeInOut" }}
                style={{
                  position:"absolute", top:-16, right:-20, zIndex:10,
                  background:"var(--bg3)", border:"1px solid var(--indigo-ring)",
                  borderRadius:10, padding:"8px 14px",
                  display:"flex", alignItems:"center", gap:8,
                  boxShadow:"0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="status-dot" style={{ width:6, height:6 }}/>
                <span className="mono" style={{ fontSize:"0.65rem", color:"var(--indigo)" }}>Available</span>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y:[0,6,0] }}
                transition={{ repeat:Infinity, duration:4, ease:"easeInOut", delay:1 }}
                style={{
                  position:"absolute", bottom:20, left:-24, zIndex:10,
                  background:"var(--bg3)", border:"1px solid var(--border2)",
                  borderRadius:10, padding:"10px 14px",
                  boxShadow:"0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <div className="mono" style={{ fontSize:"0.62rem", color:"var(--g2)", marginBottom:3 }}>Experience</div>
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"0.88rem", fontWeight:700, color:"var(--white)" }}>3 years</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume modal */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <style>{`
        @media(max-width:860px){
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}
