import { ArrowUp, Github, Linkedin, GraduationCap, Mail } from 'lucide-react';
import { links, sectionId } from '../../data/navigation';
import { contact } from '../../data/contact';

export default function Footer() {
  const socials = [{ label: 'GitHub', href: contact.github, icon: Github }, { label: 'LinkedIn', href: contact.linkedin, icon: Linkedin }, { label: 'Google Scholar', href: contact.scholar, icon: GraduationCap }, { label: 'Email', href: `mailto:${contact.email}`, icon: Mail }];
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><a href="#home" className="brand-name" aria-label="Alfat home">ALFAT<span>.</span></a><p className="footer-tagline">Software Developer | Research Explorer</p></div><div className="footer-socials" aria-label="Social profiles">{socials.map(({ label, href, icon: Icon }) => href ? <a key={label} href={href} aria-label={label} title={label} {...(href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}><Icon size={18}/></a> : <span key={label} className="footer-social-unavailable" title="Google Scholar profile link not yet provided" aria-label="Google Scholar profile unavailable"><Icon size={19}/></span>)}</div></div>
    <nav className="footer-navigation" aria-label="Footer navigation">{links.map(label => <a key={label} href={`#${sectionId(label)}`}>{label}</a>)}</nav>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Alfat Tasnim Hasan. All rights reserved.</p><a href="#home" className="footer-back-top">Back to top <ArrowUp size={15}/></a></div>
    <p className="footer-credit">Designed &amp; Developed by Alfat Tasnim Hasan.</p>
  </div></footer>;
}
