import { motion } from "framer-motion";
import { reveal } from "../../lib/motion";
import { ArrowUpRight, Layers, GraduationCap, MapPin, BriefcaseBusiness, BookOpen } from "lucide-react";
import portrait from "../../assets/images/Alfat_Image.jpeg";
import cv from "../../assets/documents/Alfat_Tasnim_Hasan_CV.pdf";

export default function About() {
 return <>
        <section id="about" className="container section-space">
          <p className="eyebrow section-label">01 / ABOUT ME</p>
          <motion.div
            {...reveal}
            className="about-layout"
          >
            <article className="about-profile">
              <div className="about-photo"><img src={portrait} alt="Alfat Tasnim Hasan" loading="lazy" /></div>
              <div className="about-profile-body">
                <h3>Alfat Tasnim Hasan</h3>
                <p className="about-designation">Software Developer</p>
                <p className="about-employer">Nexogs Systems Ltd.</p>
                <p className="about-tenure">Apr 2026 – Present</p>
                <div className="about-facts">
                  <div><MapPin size={17} aria-hidden="true"/><dl><dt>Location</dt><dd>Dhaka, Bangladesh</dd></dl></div>
                  <div><GraduationCap size={19} aria-hidden="true"/><dl><dt>Education</dt><dd>B.Sc. in Computer Science and Engineering</dd><dd className="about-university">Stamford University Bangladesh · 2022–2025</dd></dl></div>
                </div>
              </div>
            </article>
            <div className="about-copy">
              <p className="about-kicker">DEVELOPMENT MEETS DISCOVERY</p>
              <h2>A Little About Me</h2>
              <p>
                I’m <strong>Alfat Tasnim Hasan</strong>, a Computer Science and
                Engineering graduate from Stamford University Bangladesh.
                I combine hands-on software development with a research-driven
                approach to solving practical problems.
              </p>
              <p>
                As a <strong>Software Developer at Nexogs Systems Ltd.</strong>,
                I build and deploy full-stack MERN applications, design databases,
                integrate APIs, and optimize performance. I enjoy connecting
                thoughtful interfaces with reliable, scalable systems.
              </p>
              <p>
                As a part-time <strong>Research Assistant</strong> under Anika
                Rahman at Stamford University Bangladesh, I explore machine
                learning, deep learning, and explainable AI. My contributions
                include IEEE publications and the DELSFBS student dataset —
                work that reflects my passion for practical, user-focused technology.
              </p>
              <div className="about-focus" aria-label="Areas of focus"><span>Full-Stack Development</span><span>Machine Learning</span><span>Explainable AI</span></div>
              <a href={cv} download className="text-link">
                Get to know my background <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
          <div className="about-achievements">
            {[
              { icon: GraduationCap, label: 'Academic CGPA', value: '3.78 / 4.00', detail: 'B.Sc. in CSE · Stamford University Bangladesh' },
              { icon: BookOpen, label: 'Research Contributions', value: 'Publications & Data', detail: 'IEEE publications and DELSFBS dataset contributions' },
              { icon: BriefcaseBusiness, label: 'Development Experience', value: 'Software Developer', detail: 'Professional MERN development at Nexogs Systems Ltd.' },
              { icon: Layers, label: 'Technical Focus', value: 'Full-Stack & ML', detail: 'MERN, Flask, machine learning, and explainable AI' },
            ].map(({ icon: Icon, label, value, detail }, index) => <motion.article {...reveal} transition={{ duration: 0.45, delay: index * 0.07 }} className="achievement-card" key={label}><div className="achievement-icon"><Icon size={21} aria-hidden="true"/></div><h3>{label}</h3><p className="achievement-value">{value}</p><p className="achievement-detail">{detail}</p></motion.article>)}
          </div>
        </section>

</>;
}
