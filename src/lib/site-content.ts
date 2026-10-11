import banner from '@/assets/spiritual-banner.jpeg.asset.json';
import marriage from '@/assets/marriage.png.asset.json';
import family from '@/assets/family.png.asset.json';
import consultation from '@/assets/consultation.png.asset.json';
import guidance from '@/assets/guidance.jpg';

export const site = { name: 'پروفیسر عامل سلیمان شاہ', english: 'Professor Aamil Suleman Shah', phone: '0092 305 7739398', call: 'tel:+923057739398', whatsapp: 'https://wa.me/923057739398', banner: banner.url };
export const features = [
  { title: 'اسلامی روحانی رہنمائی', label: 'SPIRITUAL GUIDANCE', image: guidance, description: 'زندگی کے اہم معاملات میں قرآن و سنت کی روشنی میں رہنمائی اور مشاورت کے لیے رابطہ کریں۔' },
  { title: 'استخارہ اور اہم فیصلے', label: 'ISTIKHARA & LIFE DECISIONS', image: marriage.url, description: 'رشتوں اور زندگی کے اہم فیصلوں کے بارے میں استخارہ اور روحانی مشاورت حاصل کریں۔' },
  { title: 'ازدواجی اور گھریلو مسائل', label: 'MARRIAGE & FAMILY', image: family.url, description: 'ازدواجی معاملات، گھریلو اختلافات اور رشتوں سے متعلق مسائل پر مشاورت کے لیے رابطہ کریں۔' },
  { title: 'آن لائن روحانی مشاورت', label: 'ONLINE CONSULTATION', image: consultation.url, description: 'جہاں بھی ہوں، فون یا واٹس ایپ کے ذریعے اپنے معاملے پر بات کریں اور رہنمائی حاصل کریں۔' },
];
export const services = ['استخارہ', 'ازدواجی رہنمائی', 'گھریلو مسائل', 'رشتوں سے متعلق مشاورت', 'کاروباری معاملات میں رہنمائی', 'آن لائن مشاورت'];
export function pageHead(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}