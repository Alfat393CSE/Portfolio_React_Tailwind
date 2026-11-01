import { motion } from "framer-motion";
import { reveal } from "../../lib/motion";
import { Code2 } from "lucide-react";
import { expertiseGroups } from "../../data/expertise";

export default function Expertise() {
 return <>
        <section
          id="expertise"
          className="container section-space border-section"
        >
          <motion.div {...reveal}>
            <p className="eyebrow section-label">02 / TECHNICAL EXPERTISE</p>
            <div className="section-heading expertise-heading">
              <div><h2>Technologies I Work With</h2><p className="expertise-intro">A toolkit for building, experimenting, and solving meaningful problems.</p></div>
              <span className="expertise-caption"><Code2 size={16} aria-hidden="true"/> DEVELOPMENT &amp; DISCOVERY</span>
            </div>
            <div className="expertise-grid">
              {expertiseGroups.map(({ title, icon: CategoryIcon, description, skills }, index) => (
                <article className={`technology-category ${index === 4 ? 'technology-category-wide' : ''}`} key={title}>
                  <div className="category-heading"><span className="category-icon"><CategoryIcon size={21} aria-hidden="true"/></span><div><h3>{title}</h3><p>{description}</p></div><span className="category-index">0{index + 1}</span></div>
                  <ul className="technology-list">
                    {skills.map(({ name, icon: Icon, color, note }) => <li className="technology-item" key={name} style={{ '--skill-color': color }}><span className="technology-logo"><Icon size={25} aria-hidden="true"/></span><span className="technology-name">{name}{note && <span className="technology-note">{note}</span>}</span></li>)}
                  </ul>
                </article>
              ))}
            </div>
          </motion.div>
        </section>

</>;
}
