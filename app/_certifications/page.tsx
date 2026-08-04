"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const slides = [
  { src:"/DSA.jpg",                 caption:"Data Structures & Algorithms in Java", tag:"CS Fundamentals" },
  { src:"/DataScience.jpg",         caption:"Data Science Certification",            tag:"Data Science" },
  { src:"/MERN.jpg",                caption:"MERN Stack Development",               tag:"Full Stack" },
  { src:"/ML DL Certificate.jpeg",  caption:"Machine Learning & Deep Learning",     tag:"AI / ML" },
  { src:"/GEN_AI Certificate.jpg",  caption:"Generative AI",                        tag:"Gen AI" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ background:"var(--bg2)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{ marginBottom:48 }}>
          <div className="tag" style={{ marginBottom:18 }}>Certifications</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:16, alignItems:"center", justifyContent:"space-between" }}>
            <h2 className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
              Verified Credentials
            </h2>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {slides.map(s=>(
                <span key={s.tag} className="mono" style={{ fontSize:"0.65rem", padding:"4px 10px", borderRadius:4, border:"1px solid var(--indigo-ring)", color:"var(--indigo)", background:"var(--indigo-dim)" }}>{s.tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="divider" style={{ marginBottom:44 }}/>

        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <Swiper loop modules={[Autoplay]} autoplay={{ delay:0, disableOnInteraction:false }} speed={5500} slidesPerView={1}>
            {slides.map((slide,i)=>(
              <SwiperSlide key={i}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:18, padding:"0 8px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <span className="mono" style={{ fontSize:"0.65rem", color:"var(--indigo)", background:"var(--indigo-dim)", border:"1px solid var(--indigo-ring)", borderRadius:4, padding:"3px 9px" }}>{slide.tag}</span>
                    <span style={{ color:"var(--g3)" }}>·</span>
                    <span style={{ fontSize:"0.92rem", fontWeight:600, color:"var(--white)" }}>{slide.caption}</span>
                  </div>
                  <div style={{ border:"1px solid var(--border)", borderRadius:14, overflow:"hidden", background:"var(--bg3)", boxShadow:"0 24px 64px rgba(0,0,0,0.4)" }}>
                    <img src={slide.src} alt={slide.caption} style={{ display:"block", maxHeight:460, width:"auto", maxWidth:"100%" }}/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
