import { MotionConfig } from 'framer-motion';
import { useHashRoute } from '../hooks/useHashRoute';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ProjectDetail } from '../features/projects/components/ProjectDetail';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Expertise from '../components/sections/Expertise';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import Experience from '../components/sections/Experience';
import Research from '../components/sections/Research';
import Contact from '../components/sections/Contact';
import BackToTop from '../components/layout/BackToTop';

export default function App() {
 const route = useHashRoute();
 const [theme, setTheme] = useTheme();
 return <MotionConfig reducedMotion="user">
  {route.startsWith('#/projects/') ? <ProjectDetail slug={route.slice('#/projects/'.length)} theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/> : <>
   <a href="#main" className="skip-link">Skip to content</a>
   <Header route={route} theme={theme} setTheme={setTheme}/>
   <main id="main"><Hero/><About/><Expertise/><FeaturedProjects/><Experience/><Research/><Contact/></main>
   <Footer/>
  </>}
 <BackToTop/>
 </MotionConfig>;
}
