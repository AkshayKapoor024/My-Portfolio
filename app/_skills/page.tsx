"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Skill { name: string; icon: string; }
interface Category { key: string; label: string; items: Skill[]; }

const categories: Category[] = [
  { key:"languages", label:"Languages", items:[
    { name:"Python",     icon:`${D}/python/python-original.svg` },
    { name:"JavaScript", icon:`${D}/javascript/javascript-original.svg` },
    { name:"TypeScript", icon:`${D}/typescript/typescript-original.svg` },
    { name:"Java",       icon:`${D}/java/java-original.svg` },
    { name:"C",          icon:`${D}/c/c-original.svg` },
    { name:"C++",        icon:`${D}/cplusplus/cplusplus-original.svg` },
  ]},
  { key:"frontend", label:"Frontend", items:[
    { name:"React.js",   icon:`${D}/react/react-original.svg` },
    { name:"Next.js",    icon:`${D}/nextjs/nextjs-original.svg` },
    { name:"HTML5",      icon:`${D}/html5/html5-original.svg` },
    { name:"CSS3",       icon:`${D}/css3/css3-original.svg` },
    { name:"Tailwind",   icon:`${D}/tailwindcss/tailwindcss-original.svg` },
    { name:"Bootstrap",  icon:`${D}/bootstrap/bootstrap-original.svg` },
    { name:"Streamlit",  icon:`${D}/streamlit/streamlit-original.svg` },
  ]},
  { key:"backend", label:"Backend", items:[
    { name:"Node.js",    icon:`${D}/nodejs/nodejs-original.svg` },
    { name:"Express.js", icon:`${D}/express/express-original.svg` },
    { name:"FastAPI",    icon:`${D}/fastapi/fastapi-original.svg` },
    { name:"Flask",      icon:`${D}/flask/flask-original.svg` },
    { name:"Socket.io",  icon:`${D}/socketio/socketio-original.svg` },
    { name:"Redis",      icon:`${D}/redis/redis-original.svg` },
  ]},
  { key:"databases", label:"Databases", items:[
    { name:"MongoDB",    icon:`${D}/mongodb/mongodb-original.svg` },
    { name:"SQL / MySQL",icon:`${D}/mysql/mysql-original.svg` },
    { name:"SQLite",     icon:`${D}/sqlite/sqlite-original.svg` },
    { name:"Firebase",   icon:`${D}/firebase/firebase-original.svg` },
  ]},
  { key:"tools", label:"Tools & Cloud", items:[
    { name:"Git",        icon:`${D}/git/git-original.svg` },
    { name:"GitHub",     icon:`${D}/github/github-original.svg` },
    { name:"Docker",     icon:`${D}/docker/docker-original.svg` },
    { name:"AWS",        icon:`${D}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    { name:"Postman",    icon:`${D}/postman/postman-original.svg` },
    { name:"Selenium",   icon:`${D}/selenium/selenium-original.svg` },
  ]},
];

const aiStack: Skill[] = [
  { name:"LangChain",    icon:`${D}/python/python-original.svg` },
  { name:"LangGraph",    icon:`${D}/python/python-original.svg` },
  { name:"CrewAI",       icon:`${D}/python/python-original.svg` },
  { name:"PyTorch",      icon:`${D}/pytorch/pytorch-original.svg` },
  { name:"TensorFlow",   icon:`${D}/tensorflow/tensorflow-original.svg` },
  { name:"Scikit-learn", icon:`${D}/scikitlearn/scikitlearn-original.svg` },
  { name:"Pandas",       icon:`${D}/pandas/pandas-original.svg` },
  { name:"NumPy",        icon:`${D}/numpy/numpy-original.svg` },
  { name:"NLTK",         icon:`${D}/python/python-original.svg` },
  { name:"Pinecone",     icon:`${D}/python/python-original.svg` },
  { name:"ChromaDB",     icon:`${D}/python/python-original.svg` },
  { name:"FAISS",        icon:`${D}/python/python-original.svg` },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" style={{ background:"var(--bg2)", padding:"96px 0", borderTop:"1px solid var(--border)" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 28px" }}>

        {/* Header */}
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} style={{ marginBottom:56 }}>
          <div className="tag" style={{ marginBottom:18 }}>Tech Stack</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:20, alignItems:"flex-end", justifyContent:"space-between" }}>
            <h2 className="display" style={{ fontSize:"clamp(2rem,5vw,3.2rem)", color:"var(--white)", margin:0 }}>
              Skills & Tools
            </h2>
            <p style={{ color:"var(--g1)", fontSize:"0.88rem", maxWidth:380, margin:0, lineHeight:1.65 }}>
              Technologies I use day-to-day to build web apps and AI systems.
            </p>
          </div>
        </motion.div>

        <div className="divider" style={{ marginBottom:40 }}/>

        {/* Tab row */}
        <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:32 }}>
          {categories.map((cat, i) => (
            <button key={cat.key} onClick={()=>setActive(i)} className={`cat-tab${active===i?" active":""}`}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills pills */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.18}}
            style={{ display:"flex", flexWrap:"wrap", gap:9, marginBottom:64 }}
          >
            {categories[active].items.map((sk, i) => (
              <motion.div key={sk.name}
                initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:i*0.04}}
                className="chip"
              >
                <img src={sk.icon} alt={sk.name} width={17} height={17} style={{ flexShrink:0 }}
                  onError={e=>{ (e.target as HTMLImageElement).style.display="none"; }}
                />
                {sk.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* AI / ML Stack highlight block */}
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
          <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
            <div className="tag">AI / ML Stack</div>
            <div style={{ flex:1, height:1, background:"var(--border)" }}/>
            <span className="mono" style={{ fontSize:"0.65rem", color:"var(--indigo)", background:"var(--indigo-dim)", border:"1px solid var(--indigo-ring)", borderRadius:6, padding:"3px 10px" }}>
              Actively Growing
            </span>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
            {aiStack.map((sk, i) => (
              <motion.div key={sk.name}
                initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:i*0.04}}
                className="chip chip-ai"
              >
                <img src={sk.icon} alt={sk.name} width={15} height={15}
                  onError={e=>{ (e.target as HTMLImageElement).style.display="none"; }}
                />
                {sk.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
