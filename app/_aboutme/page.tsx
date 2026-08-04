"use client";
import { motion } from "framer-motion";

const facts = [
  { label:"Degree",     value:"B.Tech CSE · 9.35 CGPA" },
  { label:"College",    value:"ADGIPS, Delhi" },
  { label:"Graduation", value:"2027" },
  { label:"Location",   value:"Delhi, India" },
];

const focus = [
  { area:"Full Stack Web",   detail:"MERN · Next.js · Production Systems" },
  { area:"Machine Learning", detail:"Scikit-learn · TensorFlow · Pandas" },
  { area:"Deep Learning",    detail:"Tensorflow · CNNs · Transformers" },
  { area:"Generative AI",    detail:"LangChain · LangGraph · RAG" },
  { area:"Agentic AI",       detail:"Multi-agent · HITL · Orchestration" },
  { area:"Cloud & DevOps",   detail:"AWS EC2/ECR · Docker · Pipelines" },
];

const fade = (i: number) => ({
  initial:{ opacity:0, y:18 },
  whileInView:{ opacity:1, y:0 },
  viewport:{ once:true },
  transition:{ delay: i * 0.07, duration:0.42 },
});

export default function AboutMe() {
  return (
    <section id="aboutme" style={{ background:"var(--bg2)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header row */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:24, alignItems:"flex-start", justifyContent:"space-between", marginBottom:60 }}>
          <div>
            <div className="tag" style={{ marginBottom:18 }}>About Me</div>
            <motion.h2 {...fade(0)} className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
              Who I Am
            </motion.h2>
          </div>
          {/* Quick facts */}
          <motion.div {...fade(1)} style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
            {facts.map(f => (
              <div key={f.label} style={{ background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:10, padding:"10px 16px" }}>
                <div className="mono" style={{ fontSize:"0.62rem", color:"var(--g2)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>{f.label}</div>
                <div style={{ fontSize:"0.85rem", fontWeight:600, color:"var(--white)" }}>{f.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="divider" style={{ marginBottom:56 }}/>

        {/* 2-col: bio + expertise */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:56 }}>

          {/* Bio */}
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
            <motion.p {...fade(0)} style={{ color:"var(--g1)", fontSize:"0.97rem", lineHeight:1.78, margin:0 }}>
              I'm a BTech Computer Science student who fell headfirst into web development and never looked back.
              What started as building simple websites evolved into shipping <strong style={{ color:"var(--white)", fontWeight:600 }}>production-grade full-stack systems</strong> with real-time features, authentication, and scalable architectures.
            </motion.p>
            <motion.p {...fade(1)} style={{ color:"var(--g1)", fontSize:"0.97rem", lineHeight:1.78, margin:0 }}>
              Alongside web development, I've gone deep into <strong style={{ color:"var(--white)", fontWeight:600 }}>AI and Machine Learning</strong> — from classical ML algorithms to building multi-agent LLM workflows with LangGraph, RAG pipelines, and agentic systems that actually do meaningful work autonomously.
            </motion.p>
            <motion.p {...fade(2)} style={{ color:"var(--g1)", fontSize:"0.97rem", lineHeight:1.78, margin:0 }}>
              I care about code that is clean, maintainable, and optimized for real-world constraints — not just academic experiments. I'm actively looking for roles where I can contribute at the intersection of <strong style={{ color:"var(--white)", fontWeight:600 }}>AI engineering and full-stack development</strong>.
            </motion.p>

            {/* Quote */}
            <motion.blockquote {...fade(3)} style={{
              margin:"8px 0 0", padding:"18px 22px",
              borderLeft:"2px solid var(--indigo)",
              background:"var(--indigo-dim)", borderRadius:"0 10px 10px 0",
            }}>
              <p style={{ margin:0, fontSize:"0.92rem", color:"var(--white)", fontWeight:500, lineHeight:1.65, fontStyle:"italic" }}>
                "Always building something — from a pixel-perfect UI to a multi-agent orchestration pipeline."
              </p>
            </motion.blockquote>
          </div>

          {/* Expertise grid */}
          <div>
            <div className="mono" style={{ fontSize:"0.68rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:20 }}>Expertise</div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {focus.map((f, i) => (
                <motion.div key={i} {...fade(i)} className="card" style={{ padding:"13px 18px", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"default" }}>
                  <span style={{ fontWeight:600, fontSize:"0.88rem", color:"var(--white)" }}>{f.area}</span>
                  <span className="mono" style={{ fontSize:"0.66rem", color:"var(--g2)" }}>{f.detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
