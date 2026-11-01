import { motion } from "framer-motion";
import { reveal } from "../../lib/motion";

import { ProjectGallery } from "../../features/projects/components/ProjectGallery";

export default function FeaturedProjects() {
 return <>
        <section
          id="projects"
          className="container section-space border-section"
        >
          <motion.div {...reveal}>
            <p className="eyebrow section-label">03 / FEATURED PROJECTS</p>
            <h2>Some Things I've Built</h2>
            <p className="expertise-intro">A selection of real-world applications and research-driven projects.</p>
            <ProjectGallery/>
          </motion.div>
        </section>

</>;
}
