import type { Metadata } from 'next';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import TermsConditionSection from '@/components/sections/TermsCondition';

const PAGE_TITLE: string = 'Terms & Conditions';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const TermsCondition = () => {
    return(
        <>
            {/* Breadcrumb Banner  */}
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
            
            {/* Page */}
            <TermsConditionSection />
        </>
    )
}

export default TermsCondition;