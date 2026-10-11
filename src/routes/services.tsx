import { createFileRoute } from '@tanstack/react-router';
import { ContactBand, ServiceGrid } from '@/components/site';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/services')({ head: () => pageHead('ہماری خدمات | پروفیسر عامل سلیمان شاہ', 'استخارہ، ازدواجی رہنمائی، گھریلو مسائل، کاروباری معاملات اور آن لائن مشاورت۔'), component: ServicesPage });
function ServicesPage() { return <main><section className="content-page"><div className="eyebrow">OUR SERVICES</div><h1 className="urdu">ہماری خدمات</h1><ServiceGrid /></section><ContactBand /></main>; }