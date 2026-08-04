"use client";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/sendEmail", { name, email, message });
      toast.success("Message sent!", { position:"bottom-right" });
      setName(""); setEmail(""); setMessage("");
    } catch {
      toast.error("Failed to send.", { position:"bottom-right" });
    } finally { setLoading(false); }
  };

  return (
    <section id="contactme" style={{ background:"var(--bg)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{ marginBottom:56 }}>
          <div className="tag" style={{ marginBottom:18 }}>Contact</div>
          <h2 className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
            Let's Build Together
          </h2>
        </motion.div>

        <div className="divider" style={{ marginBottom:56 }}/>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:48 }}>

          {/* Left */}
          <motion.div initial={{opacity:0,x:-18}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.45}} style={{ display:"flex", flexDirection:"column", gap:28 }}>
            <p style={{ color:"var(--g1)", fontSize:"0.97rem", lineHeight:1.75, margin:0 }}>
              Open to full-time roles, contract projects, and interesting collaborations. If you have something to build — I'd love to be part of it.
            </p>

            {/* Contact details */}
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { label:"Email",    val:"work.akshaykapoor24@gmail.com", href:"mailto:work.akshaykapoor24@gmail.com" },
                { label:"Location", val:"Shahdara, Delhi, India",         href:null },
                { label:"Phone",    val:"+91 9818624070",                  href:"tel:+919818624070" },
              ].map(item=>(
                <div key={item.label}>
                  <div className="mono" style={{ fontSize:"0.62rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:5 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ color:"var(--white)", fontSize:"0.88rem", fontWeight:600, textDecoration:"none", transition:"color 0.15s" }}
                        onMouseEnter={e=>e.currentTarget.style.color="var(--indigo)"}
                        onMouseLeave={e=>e.currentTarget.style.color="var(--white)"}
                      >{item.val}</a>
                    : <span style={{ color:"var(--white)", fontSize:"0.88rem", fontWeight:600 }}>{item.val}</span>
                  }
                </div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div className="mono" style={{ fontSize:"0.62rem", color:"var(--g2)", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:12 }}>Connect</div>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                {[
                  { label:"GitHub",   href:"https://github.com/AkshayKapoor024" },
                  { label:"LinkedIn", href:"https://www.linkedin.com/in/kapoorakshay24" },
                  { label:"Portfolio",href:"https://akshaydev-beryl.vercel.app" },
                ].map(s=>(
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn btn-g"
                    style={{ textDecoration:"none", fontSize:"0.78rem", padding:"8px 16px" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form initial={{opacity:0,x:18}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.45}}
            onSubmit={handleSubmit}
            style={{ background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:16, padding:"32px", display:"flex", flexDirection:"column", gap:20 }}
          >
            {[
              { label:"Name",  type:"text",  val:name,    set:setName,  ph:"Your name" },
              { label:"Email", type:"email", val:email,   set:setEmail, ph:"your@email.com" },
            ].map(f=>(
              <div key={f.label}>
                <label className="mono" style={{ display:"block", fontSize:"0.62rem", color:"var(--g2)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>{f.label}</label>
                <input type={f.type} value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} className="field" required/>
              </div>
            ))}
            <div>
              <label className="mono" style={{ display:"block", fontSize:"0.62rem", color:"var(--g2)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:8 }}>Message</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell me about your project or opportunity..." className="field" rows={5} style={{ resize:"none" }} required/>
            </div>
            <button type="submit" disabled={loading} className="btn btn-p"
              style={{ justifyContent:"center", opacity:loading?0.55:1, cursor:loading?"not-allowed":"pointer" }}>
              {loading
                ? <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation:"spin-slow 0.9s linear infinite" }}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>Sending…</>
                : <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></>
              }
            </button>
          </motion.form>
        </div>
      </div>
      <style>{`@keyframes spin-slow{to{transform:rotate(360deg)}}`}</style>
      <Toaster richColors position="bottom-right"/>
    </section>
  );
}
