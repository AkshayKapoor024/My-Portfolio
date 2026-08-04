"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About",      href: "#aboutme" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Certs",      href: "#certifications" },
  { label: "Contact",    href: "#contactme" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open,  setOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        transition:"all 0.3s ease",
        background: solid ? "rgba(6,6,8,0.88)" : "transparent",
        backdropFilter: solid ? "blur(20px)" : "none",
        borderBottom: solid ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}>
        <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px", height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ width:28, height:28, borderRadius:7, background:"var(--indigo)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", fontWeight:600, color:"#fff", letterSpacing:"-0.02em" }}>AK</span>
            </span>
            <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"0.88rem", fontWeight:600, color:"var(--g1)", letterSpacing:"0.01em" }}>
              akshay<span style={{ color:"var(--indigo)" }}>.</span>dev
            </span>
          </a>

          {/* Desktop links */}
          <nav style={{ display:"flex", alignItems:"center", gap:2 }} className="nav-desktop">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                padding:"6px 13px", borderRadius:7, fontSize:"0.82rem", fontWeight:500,
                color:"var(--g1)", textDecoration:"none", transition:"color 0.15s, background 0.15s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.color="var(--white)";e.currentTarget.style.background="rgba(255,255,255,0.04)";}}
                onMouseLeave={e=>{e.currentTarget.style.color="var(--g1)";e.currentTarget.style.background="transparent";}}
              >{l.label}</a>
            ))}
            <a href="#contactme" className="btn btn-p" style={{ marginLeft:12, textDecoration:"none", padding:"8px 18px", fontSize:"0.82rem" }}>
              Hire Me
            </a>
          </nav>

          {/* Burger */}
          <button onClick={()=>setOpen(!open)} style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"none" }} className="nav-burger">
            <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display:"block", width:20, height:1.5, background:"var(--g1)", borderRadius:1,
                  transition:"transform 0.2s, opacity 0.2s",
                  transform: open ? (i===0?"rotate(45deg) translate(4px,5px)": i===2?"rotate(-45deg) translate(3px,-5px)":"none") : "none",
                  opacity: open && i===1 ? 0 : 1,
                }}/>
              ))}
            </div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:0.16}}
            style={{ position:"fixed", top:60, left:0, right:0, zIndex:99, background:"rgba(6,6,8,0.97)", borderBottom:"1px solid var(--border)", backdropFilter:"blur(24px)", padding:"20px 28px", display:"flex", flexDirection:"column", gap:4 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
                style={{ padding:"11px 0", borderBottom:"1px solid var(--border)", fontSize:"0.95rem", fontWeight:500, color:"var(--g1)", textDecoration:"none" }}>
                {l.label}
              </a>
            ))}
            <a href="#contactme" onClick={()=>setOpen(false)} className="btn btn-p" style={{ marginTop:10, justifyContent:"center", textDecoration:"none" }}>Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){ .nav-desktop{display:none!important} .nav-burger{display:block!important} }
      `}</style>
    </>
  );
}
