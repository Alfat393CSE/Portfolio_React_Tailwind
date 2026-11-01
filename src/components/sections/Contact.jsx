import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, GraduationCap, MapPin, Send, LoaderCircle, CheckCircle2, CircleAlert } from 'lucide-react';
import { reveal } from '../../lib/motion';
import { contact } from '../../data/contact';
import { submitContact, validateContact } from '../../lib/contact';

const emptyForm = { name: '', email: '', subject: '', message: '' };
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();
const fields = [
  { name: 'name', label: 'Full Name', placeholder: 'Your full name', autoComplete: 'name', maxLength: 100 },
  { name: 'email', label: 'Email Address', placeholder: 'you@example.com', autoComplete: 'email', type: 'email', maxLength: 254 },
  { name: 'subject', label: 'Subject', placeholder: 'What would you like to discuss?', maxLength: 180 },
  { name: 'message', label: 'Message', placeholder: 'Tell me about your project, research, or idea…', maxLength: 5000 },
];

export default function Contact() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const pending = useRef(false);
  const form = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending.current) return;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length) {
      form.current.elements.namedItem(Object.keys(nextErrors)[0])?.focus();
      return;
    }
    pending.current = true;
    setLoading(true);
    try {
      const { delivered } = await submitContact(values, contact.email, endpoint);
      setStatus({ type: delivered ? 'success' : 'info', message: delivered ? 'Thank you! Your message has been accepted for email delivery.' : 'Email delivery is awaiting the site owner’s confirmation. Please contact me directly by email for now.' });
      if (delivered) setValues(emptyForm);
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be submitted. Please try again or email me directly. Your message is still here.' });
    } finally {
      setLoading(false);
      pending.current = false;
    }
  }

  const items = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'Alfat Tasnim Hasan', href: contact.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'Alfat393CSE', href: contact.github, icon: Github },
    { label: 'Google Scholar', value: contact.scholar ? 'View research profile' : 'Profile link coming soon', href: contact.scholar, icon: GraduationCap },
    { label: 'Location', value: contact.location, icon: MapPin },
  ];

  return <section id="contact" className="container section-space border-section">
    <motion.div {...reveal}><p className="eyebrow section-label">06 / LET'S CONNECT</p><h2>Let's Build Something Together.</h2><p className="contact-intro">Have an interesting project, research opportunity, or collaboration in mind? I'd love to hear from you.</p></motion.div>
    <div className="contact-layout">
      <motion.div {...reveal} className="contact-information"><h3>A conversation is a great place to start.</h3><p>Connect with me through the channels below, or share your idea using the form.</p><ul>{items.map(({ label, value, href, icon: Icon }) => <li key={label}><span className="contact-info-icon"><Icon size={20} aria-hidden="true"/></span><div><span className="contact-info-label">{label}</span>{href ? <a href={href} {...(href.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}<ArrowUpRight size={14} aria-hidden="true"/></a> : <span className="contact-info-value">{value}</span>}</div></li>)}</ul></motion.div>
      <motion.form {...reveal} ref={form} className="contact-form" noValidate onSubmit={handleSubmit} aria-busy={loading}>
        <h3>Send a message</h3><p className="contact-form-note">All fields are required. Your message will be sent directly to my inbox.</p>
        <div className="contact-fields">{fields.map(({ name, label, ...props }) => <div className={`contact-field ${name === 'subject' || name === 'message' ? 'contact-field-wide' : ''}`} key={name}><label htmlFor={`contact-${name}`}>{label}<span aria-hidden="true"> *</span></label>{name === 'message' ? <textarea {...props} id={`contact-${name}`} name={name} rows={6} minLength={10} required value={values[name]} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} onChange={event => { setValues({ ...values, [name]: event.target.value }); setErrors({ ...errors, [name]: undefined }); setStatus(null); }}/> : <input {...props} id={`contact-${name}`} name={name} required value={values[name]} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `contact-${name}-error` : undefined} onChange={event => { setValues({ ...values, [name]: event.target.value }); setErrors({ ...errors, [name]: undefined }); setStatus(null); }}/>} {errors[name] && <p className="contact-field-error" id={`contact-${name}-error`}>{errors[name]}</p>}</div>)}</div>
        <button type="submit" className="primary-button contact-submit" disabled={loading}>{loading ? <><LoaderCircle className="contact-spinner" size={17}/>Sending…</> : <>Send Message <Send size={16}/></>}</button>
        {status && <div className={`contact-status contact-status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>{status.type === 'error' ? <CircleAlert size={18}/> : status.type === 'success' ? <CheckCircle2 size={18}/> : <Mail size={18}/>}<p>{status.message}</p></div>}
      </motion.form>
    </div>
  </section>;
}
