import { createFileRoute } from '@tanstack/react-router';
import { MoonStar } from 'lucide-react';
import { ContactButtons } from '@/components/site';
import { pageHead, site } from '@/lib/site-content';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact Us | Professor Aamil Suleman Shah', 'Call 0092 305 7739398 or contact us on WhatsApp for spiritual consultation.'), component: ContactPage });
function ContactPage() { return <main className="content-page"><div className="eyebrow">GET IN TOUCH</div><h1 className="display">Contact Us</h1><div className="contact-details"><MoonStar /><h2 className="display">{site.name}</h2><p>Contact us by phone or WhatsApp for consultation.</p><a className="phone-large" href={site.call} dir="ltr">{site.phone}</a><ContactButtons /></div></main>; }
