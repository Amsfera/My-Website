import emailjs from '@emailjs/browser';

// EmailJS configuration
// Get these values from your EmailJS dashboard: https://www.emailjs.com/
export const EMAILJS_SERVICE_ID = 'service_acv4oui';
export const EMAILJS_TEMPLATE_ID = 'template_jxusvzq';
export const EMAILJS_PUBLIC_KEY = 'sL4IXhvEKcoFzywB5';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'Connect@amsfera.com',
  };

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
};
