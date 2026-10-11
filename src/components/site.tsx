import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, BookOpen, BriefcaseBusiness, HeartHandshake, House, Menu, MessageCircle, MoonStar, Phone, Sparkles, Users, Video, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site, services } from '@/lib/site-content';

export function ContactButtons({ call = true }: { call?: boolean }) {
  return <div className="contact-buttons"><Button variant="whatsapp" size="lg" asChild><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /> <span>Contact Us on WhatsApp</span></a></Button>{call && <Button size="lg" asChild><a href={site.call}><Phone /><span>Call Now</span></a></Button>}</div>;
}
const nav = [{ to: '/', text: 'Home' }, { to: '/services', text: 'Services' }, { to: '/about', text: 'About' }, { to: '/contact', text: 'Contact Us' }] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  return <><div className="topbar"><span>Spiritual guidance in the light of the Quran and Sunnah</span><a href={site.call} dir="ltr"><Phone size={12} /> {site.phone}</a></div><header className="site-header"><div className="header-inner"><Link to="/" className="brand"><span className="brand-symbol"><MoonStar /></span><div><div className="brand-name display">{site.name}</div><div className="brand-english">{site.tagline}</div></div></Link><nav className="desktop-nav">{nav.map(n => <Link key={n.to} to={n.to} activeProps={{ className: 'nav-active' }} activeOptions={{ exact: true }}><span>{n.text}</span></Link>)}</nav><Button variant="goldOutline" asChild className="header-contact"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle /><span>WhatsApp</span></a></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.text}</Link>)}</nav>}</header></>;
}
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span />{eyebrow}<span /></div><h2 className="display">{title}</h2>{description && <p>{description}</p>}</div>;
}
const serviceIcons = [MoonStar, HeartHandshake, House, Users, BriefcaseBusiness, Video];
export function ServiceGrid() {
  return <div className="service-grid">{services.map((name, i) => { const Icon = serviceIcons[i] ?? BookOpen; return <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="service-card" key={name}><Icon /><h3 className="display">{name}</h3><span className="service-link">Contact for consultation <ArrowUpRight size={16} /></span></a>; })}</div>;
}
export function ContactBand() {
  return <section className="contact-band"><Sparkles size={24} /><h2 className="display">Take the First Step Towards Guidance</h2><p>Contact us to discuss your situation.</p><ContactButtons /></section>;
}
export function Footer() {
  return <><footer><div className="footer-main"><Link to="/" className="footer-brand"><MoonStar /><span className="display">{site.name}</span></Link><nav>{nav.map(n => <Link key={n.to} to={n.to}>{n.text}</Link>)}</nav><a href={site.call} dir="ltr"><Phone size={15} />{site.phone}</a></div><div className="footer-bottom"><span>© 2026 {site.name}</span><span>Islamic spiritual guidance and consultation</span></div></footer><Button variant="whatsapp" size="icon" asChild className="floating-whatsapp"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp"><MessageCircle /></a></Button></>;
}
