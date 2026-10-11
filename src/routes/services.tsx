import { createFileRoute } from '@tanstack/react-router';
import { ContactBand, ServiceGrid } from '@/components/site';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/services')({ head: () => pageHead('Our Services | Professor Aamil Suleman Shah', 'Istikhara, marriage guidance, household problems, relationship and business guidance, and online consultation.'), component: ServicesPage });
function ServicesPage() { return <main><section className="content-page"><div className="eyebrow">OUR SERVICES</div><h1 className="display">Our Services</h1><ServiceGrid /></section><ContactBand /></main>; }
