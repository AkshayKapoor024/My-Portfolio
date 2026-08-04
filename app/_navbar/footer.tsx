"use client";

export default function Footer() {
  const navLinks = ["About","Experience","Skills","Projects","Certifications","Contact"];
  return (
    <footer style={{ background:"var(--bg)", borderTop:"1px solid var(--border)", padding:"44px 0" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:24, marginBottom:32 }}>
          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:4 }}>
              <span style={{ width:26, height:26, borderRadius:6, background:"var(--indigo)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span className="mono" style={{ fontSize:"0.65rem", fontWeight:700, color:"#fff" }}>AK</span>
              </span>
              <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:"0.95rem", color:"var(--white)" }}>akshay<span style={{ color:"var(--indigo)" }}>.</span>dev</span>
            </div>
            <div className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.08em" }}>Full Stack · AI/ML Developer · Delhi, India</div>
          </div>

          {/* Nav */}
          <nav style={{ display:"flex", flexWrap:"wrap", gap:20 }}>
            {navLinks.map(l=>(
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontSize:"0.8rem", color:"var(--g2)", textDecoration:"none", transition:"color 0.15s" }}
                onMouseEnter={e=>e.currentTarget.style.color="var(--white)"}
                onMouseLeave={e=>e.currentTarget.style.color="var(--g2)"}
              >{l}</a>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            {[
              { label:"GH", href:"https://github.com/AkshayKapoor024" },
              { label:"LI", href:"https://www.linkedin.com/in/kapoorakshay24" },
            ].map(s=>(
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="mono"
                style={{ width:32, height:32, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:6, border:"1px solid var(--border)", background:"var(--bg3)", fontSize:"0.62rem", color:"var(--g1)", textDecoration:"none", transition:"border-color 0.15s,color 0.15s" }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor="var(--indigo-ring)"; e.currentTarget.style.color="var(--indigo)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--border)"; e.currentTarget.style.color="var(--g1)"; }}
              >{s.label}</a>
            ))}
            <a href="#hero"
              style={{ marginLeft:8, padding:"6px 14px", borderRadius:6, border:"1px solid var(--indigo-ring)", background:"var(--indigo-dim)", fontSize:"0.75rem", color:"var(--indigo)", textDecoration:"none", fontFamily:"'JetBrains Mono',monospace", display:"flex", alignItems:"center", gap:5, transition:"background 0.15s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(99,102,241,0.18)"}
              onMouseLeave={e=>e.currentTarget.style.background="var(--indigo-dim)"}
            >↑ Top</a>
          </div>
        </div>

        <div className="divider"/>

        <div style={{ marginTop:24, display:"flex", justifyContent:"center" }}>
          <span className="mono" style={{ fontSize:"0.65rem", color:"var(--g2)", letterSpacing:"0.06em" }}>
            © 2026 Akshay Kapoor · Built with Next.js & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
