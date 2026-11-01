import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";


import { publications, interests } from "../../data/research";
import { reveal } from "../../lib/motion";
export default function Research() {
  return <section id="research" className="container section-space border-section">
    <motion.div {...reveal}><p className="eyebrow section-label">05 / RESEARCH & PUBLICATIONS</p><h2>Research & Academic Contributions</h2><p className="expertise-intro">Exploring how data, intelligent models, and software can address practical problems.</p></motion.div>
    <div className="research-subsection"><div className="research-subheading"><span>A</span><div><h3>Research Interests</h3><p>The questions and disciplines that guide my exploration.</p></div></div><div className="research-interests">{interests.map(({ name, icon: Icon, detail }) => <article key={name}><span className="research-interest-icon"><Icon size={21} aria-hidden="true"/></span><h4>{name}</h4><p>{detail}</p></article>)}</div></div>
    <div className="research-subsection"><div className="research-subheading"><span>B</span><div><h3>Publications</h3><p>Published work spanning student data, mental health, and explainable AI.</p></div><span className="research-count">03 PUBLICATIONS</span></div>
      <div className="publication-list">{publications.map((paper, index) => <motion.article {...reveal} className="publication-card" key={paper.id}>
        <div className="publication-index"><BookOpen size={23} aria-hidden="true"/><span>0{index + 1}</span></div><div className="publication-content"><div className="publication-meta"><span>{paper.type}</span><time dateTime={paper.year}>{paper.year}</time></div><h4>{paper.title}</h4><p className="publication-authors">Full author list is not provided in the CV; see the publisher record.</p><p className="publication-venue">{paper.venue}</p><p className="publication-abstract">{paper.abstract}</p><ul className="research-keywords" aria-label="Research keywords">{paper.keywords.map(keyword => <li key={keyword}>{keyword}</li>)}</ul><div className="publication-links"><a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="project-demo">Read Paper <ArrowUpRight size={15}/></a><a href={`https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}`} target="_blank" rel="noopener noreferrer" className="publication-scholar"><GraduationCap size={17}/> Google Scholar search <ArrowUpRight size={13}/></a></div><p className="publication-doi">DOI: {paper.doi}</p></div>
      </motion.article>)}</div>
    </div>
  </section>;
}
