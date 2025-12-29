import type { Metadata } from 'next';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import PrivacyPolicySection from '@/components/sections/PrivacyPolicy';

const PAGE_TITLE: string = 'Privacy Policy';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const Privacy = () => {
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

            {/* Privacy Policy */}
            <PrivacyPolicySection />
        </>
    )
}

export default Privacy;