import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from "lucide-react";


import { roles } from "../../data/experience";
export default function Experience() {
  return <section id="experience" className="container section-space border-section">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
      <p className="eyebrow section-label">04 / PROFESSIONAL EXPERIENCE</p>
      <h2>My Professional Journey</h2>
      <p className="expertise-intro">Building software, growing through collaboration, and exploring new ideas through research.</p>
    </motion.div>
    <ol className="experience-timeline">{roles.map(({ title, company, url, start, startLabel, end, endLabel, current, type, icon: Icon, overview, responsibilities, technologies, contributions, contributionLabel }) => <li className="experience-row" key={title}>
      <div className="experience-date"><span className="experience-date-range"><time dateTime={start}>{startLabel}</time><span aria-hidden="true"> — </span><span className="sr-only"> to </span>{end ? <time dateTime={end}>{endLabel}</time> : <span>{endLabel}</span>}</span><span className="experience-type">{type}</span>{current && <span className="experience-current"><span/> Current role</span>}</div>
      <span className="experience-node" aria-hidden="true"><Icon size={18}/></span>
      <motion.article className="experience-card" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .45 }}>
        <header className="experience-card-heading"><div><h3>{title}</h3><a href={url} target="_blank" rel="noopener noreferrer" className="experience-company">{company}<ArrowUpRight size={14} aria-hidden="true"/></a></div><span className="experience-location"><MapPin size={13} aria-hidden="true"/> Dhaka, Bangladesh</span></header>
        <p className="experience-overview">{overview}</p>
        <h4>Main responsibilities</h4><ul className="experience-responsibilities">{responsibilities.map(item => <li key={item}>{item}</li>)}</ul>
        <h4>Technologies & practices</h4><ul className="experience-technologies">{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        {contributions && <div className="experience-contributions"><h4>{contributionLabel}</h4><div>{contributions.map(({ name, href, external }) => <a href={href} key={name} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{name}<ArrowUpRight size={13} aria-hidden="true"/></a>)}</div></div>}
      </motion.article>
    </li>)}</ol>
  </section>;
}
