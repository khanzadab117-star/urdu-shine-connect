import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpLeft, BookOpen, BriefcaseBusiness, HeartHandshake, House, Menu, MessageCircle, MoonStar, Phone, Sparkles, Users, Video, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site, services } from '@/lib/site-content';

export function ContactButtons({ call = true }: { call?: boolean }) {
  return <div className="contact-buttons"><Button variant="whatsapp" size="lg" asChild><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> <span className="urdu">WhatsApp پر رابطہ کریں</span></a></Button>{call && <Button size="lg" asChild><a href={site.call}><Phone /><span className="urdu">ابھی کال کریں</span></a></Button>}</div>;
}
const nav = [{ to: '/', text: 'ہوم', english: 'Home' }, { to: '/services', text: 'خدمات', english: 'Services' }, { to: '/about', text: 'ہمارے بارے میں', english: 'About' }, { to: '/contact', text: 'رابطہ کریں', english: 'Contact' }] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="topbar"><span>قرآن و سنت کی روشنی میں روحانی رہنمائی</span><a href={site.call} dir="ltr"><Phone size={12} /> {site.phone}</a></div><header className="site-header"><div className="header-inner"><Link to="/" className="brand"><span className="brand-symbol"><MoonStar /></span><div><div className="brand-urdu urdu">{site.name}</div><div className="brand-english">{site.english}</div></div></Link><nav className="desktop-nav">{nav.map(n => <Link key={n.to} to={n.to} activeProps={{ className: 'nav-active' }} activeOptions={{ exact: true }}><span className="urdu">{n.text}</span><small>{n.english}</small></Link>)}</nav><Button variant="goldOutline" asChild className="header-contact"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /><span>WhatsApp</span></a></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="urdu">{n.text}</Link>)}</nav>}</header></>;
}
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span />{eyebrow}<span /></div><h2 className="urdu">{title}</h2>{description && <p className="urdu">{description}</p>}</div>;
}
const serviceIcons = [MoonStar, HeartHandshake, House, Users, BriefcaseBusiness, Video];
export function ServiceGrid() {
  return <div className="service-grid">{services.map((name, i) => { const Icon = serviceIcons[i] ?? BookOpen; return <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="service-card" key={name}><Icon /><h3 className="urdu">{name}</h3><span className="service-link urdu">مشاورت کے لیے رابطہ کریں <ArrowUpLeft size={16} /></span></a>; })}</div>;
}
export function ContactBand() {
  return <section className="contact-band"><Sparkles size={24} /><h2 className="urdu">رہنمائی کے لیے پہلا قدم اٹھائیں</h2><p className="urdu">اپنے معاملے پر بات کرنے کے لیے ہم سے رابطہ کریں۔</p><ContactButtons /></section>;
}
export function Footer() {
  return <><footer><div className="footer-main"><Link to="/" className="footer-brand"><MoonStar /><span className="urdu">{site.name}</span></Link><nav>{nav.map(n => <Link key={n.to} to={n.to} className="urdu">{n.text}</Link>)}</nav><a href={site.call} dir="ltr"><Phone size={15} />{site.phone}</a></div><div className="footer-bottom"><span>© 2026 {site.english}</span><span className="urdu">اسلامی روحانی رہنمائی اور مشاورت</span></div></footer><Button variant="whatsapp" size="icon" asChild className="floating-whatsapp"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp"><MessageCircle /></a></Button></>;
}