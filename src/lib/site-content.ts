import banner from '@/assets/spiritual-banner-en.jpg';
import marriage from '@/assets/marriage-en.jpg';
import family from '@/assets/family-en.jpg';
import consultation from '@/assets/consultation-en.jpg';
import guidance from '@/assets/guidance.jpg';

export const site = { name: 'Professor Aamil Suleman Shah', tagline: 'Islamic Spiritual Guidance', phone: '0092 305 7739398', call: 'tel:+923057739398', whatsapp: 'https://wa.me/923057739398', banner };
export const features = [
  { title: 'Spiritual Guidance', label: 'IN THE LIGHT OF QURAN & SUNNAH', image: guidance, description: 'Contact us for guidance and consultation on the important matters of your life, in the light of the Quran and Sunnah.' },
  { title: 'Istikhara & Life Decisions', label: 'ISTIKHARA', image: marriage, description: 'Receive Istikhara and spiritual consultation for marriage proposals, relationships and other important life decisions.' },
  { title: 'Marriage & Family Guidance', label: 'MARRIAGE & FAMILY', image: family, description: 'Get in touch for consultation on marital matters, household disagreements and relationship concerns.' },
  { title: 'Online Consultation', label: 'ONLINE CONSULTATION', image: consultation, description: 'Wherever you are, discuss your situation by phone or WhatsApp and receive guidance.' },
];
export const services = ['Istikhara', 'Marriage Guidance', 'Household Problems', 'Relationship Consultation', 'Business Guidance', 'Online Consultation'];
export function pageHead(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
