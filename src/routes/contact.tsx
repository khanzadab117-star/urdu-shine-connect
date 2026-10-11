import { createFileRoute } from '@tanstack/react-router';
import { MoonStar } from 'lucide-react';
import { ContactButtons } from '@/components/site';
import { pageHead, site } from '@/lib/site-content';
export const Route = createFileRoute('/contact')({ head: () => pageHead('رابطہ کریں | پروفیسر عامل سلیمان شاہ', 'روحانی مشاورت کے لیے 0092 305 7739398 پر کال کریں یا واٹس ایپ کے ذریعے رابطہ کریں۔'), component: ContactPage });
function ContactPage() { return <main className="content-page"><div className="eyebrow">GET IN TOUCH</div><h1 className="urdu">رابطہ کریں</h1><div className="contact-details"><MoonStar /><h2 className="urdu">{site.name}</h2><p className="urdu">مشاورت کے لیے فون یا واٹس ایپ پر رابطہ کریں۔</p><a className="phone-large" href={site.call} dir="ltr">{site.phone}</a><ContactButtons /></div></main>; }