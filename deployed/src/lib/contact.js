export function validateContact(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

export async function submitContact(values, recipient, endpoint) {
  const target = endpoint || `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
  const isFormSubmit = new URL(target, window.location.origin).hostname === 'formsubmit.co';
  const submission = { name: values.name.trim(), email: values.email.trim(), subject: values.subject.trim(), message: values.message.trim() };
  let payload = submission;
  if (isFormSubmit) {
    // Named fields become labeled rows in FormSubmit's email template.
    // Preserve message paragraphs and keep user input out of HTML markup.
    const subject = submission.subject.replace(/[\r\n]+/g, ' ');
    const sender = submission.name.replace(/[\r\n]+/g, ' ');
    payload = {
      'Full Name': submission.name,
      'Email Address': submission.email,
      'Enquiry Subject': submission.subject,
      Message: submission.message,
      'Submitted At': `${new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'long', timeStyle: 'short', timeZone: 'Asia/Dhaka',
      }).format(new Date())} (Bangladesh Standard Time, UTC+06:00)`,
      Source: 'Alfat Tasnim Hasan — Portfolio Contact Form',
      _subject: `[Portfolio Enquiry] ${subject} | ${sender}`,
      _replyto: submission.email,
      _template: 'table',
    };
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('Message submission failed');
    if (isFormSubmit) {
      const result = await response.json();
      if (/activat|confirm your email|verify your email/i.test(result.message || '')) return { delivered: false, activationRequired: true };
      if (result.success !== true && result.success !== 'true') throw new Error('Message submission was not accepted');
    }
    return { delivered: true };
  } finally { clearTimeout(timeout); }
}
