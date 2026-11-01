import { motion } from "framer-motion";
import { reveal } from "../../lib/motion";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiCplusplus, SiCss, SiTailwindcss, SiJavascript, SiPython } from "react-icons/si";
import { ArrowUpRight, ArrowDown, Download, Code2, Layers, Microscope, Github, Linkedin, GraduationCap, Mail } from "lucide-react";
import portrait from "../../assets/images/Alfat_Image.jpeg";
import cv from "../../assets/documents/Alfat_Tasnim_Hasan_CV.pdf";

export default function Hero() {
 return <>
        <section id="home" className="hero container">
          <motion.div {...reveal} className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Open to Opportunities
            </div>
            <h1>
              Hi, I'm <span className="accent-text">Alfat Tasnim Hasan.</span>
            </h1>
            <p className="hero-title">Software Developer &amp; Research Enthusiast.</p>
            <p className="hero-description">
              I build scalable web applications and explore intelligent solutions
              through software engineering and machine learning. From MERN and
              Flask applications to explainable AI, I turn ideas into practical,
              user-focused experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work <ArrowUpRight size={18} />
              </a>
              <a href={cv} download="Alfat_Tasnim_Hasan_CV.pdf" className="secondary-button">
                Download My CV <Download size={17} />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href="https://github.com/Alfat393CSE" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" title="GitHub"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/alfat-tasnim-hasan-a7384b271" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)" title="LinkedIn"><Linkedin size={20}/></a>
              <span className="unavailable-social" tabIndex={0} aria-label="Google Scholar profile not provided in CV" title="Google Scholar profile not provided in CV"><GraduationCap size={22}/><span className="social-tooltip">Google Scholar link coming soon</span></span>
              <a href="mailto:alfattasnimhasan@gmail.com" aria-label="Email Alfat Tasnim Hasan" title="alfattasnimhasan@gmail.com"><Mail size={20}/></a>
              <span className="social-caption">Let's connect</span>
            </div>
          </motion.div>
          <motion.div
            {...reveal}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="portrait-composition"
          >
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={portrait} alt="Alfat Tasnim Hasan" />
              <div className="portrait-shade" />
            </div>
            <div className="tech-labels" role="list" aria-label="Technology stack">
              {[
                { name: 'React', icon: SiReact, color: '#61dafb' },
                { name: 'Node.js', icon: SiNodedotjs, color: '#75bb60' },
                { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
                { name: 'Express.js', icon: SiExpress, color: 'var(--text)' },
                { name: 'C++', icon: SiCplusplus, color: '#659ad2' },
                { name: 'CSS', icon: SiCss, color: '#528fea' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
                { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
                { name: 'Python', icon: SiPython, color: '#e5bd59' },
              ].map(({ name, icon: Icon, color }, index) => (
                <span key={name} role="listitem" aria-label={name} title={name} className={`tech-label tech-label-${index}`} style={{ '--tech-color': color, '--orbit-delay': `${-(index / 9) * 45}s`, '--orbit-position': `${(index / 9) * 100}%` }}>
                  <Icon size={25} aria-hidden="true" />
                </span>
              ))}
            </div>
            <span className="code-decoration" aria-hidden="true">{'</>'}</span>
          </motion.div>
          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>
        <div className="discipline-strip">
          <div className="container flex flex-wrap items-center justify-between gap-5">
            <span>
              <Code2 size={18} /> SOFTWARE DEVELOPMENT
            </span>
            <i>✳</i>
            <span>
              <Layers size={18} /> FULL-STACK THINKING
            </span>
            <i>✳</i>
            <span>
              <Microscope size={18} /> RESEARCH & EXPLORATION
            </span>
          </div>
        </div>

</>;
}
