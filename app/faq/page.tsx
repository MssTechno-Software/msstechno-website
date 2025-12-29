import type { Metadata } from 'next';

import { FaqWithContactFormData } from '@/data/sections/faqWithContactFormData';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import FaqWithContactForm from '@/components/sections/FaqWithContactForm';


const PAGE_TITLE: string = 'FAQS';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const Faq = () => {
    return(
        <>
            {/* Breadcrumb Banner */}
            <BreadcrumbBanner 
                title={PAGE_TITLE}
                image={{
                    src: "/img/banner/hero-1.webp",
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Banner Image",
                    loading: "eager"
                }}
            />

            {/* FAQ */}
            <FaqWithContactForm data={FaqWithContactFormData} />
        </>
    )
}

export default Faq;