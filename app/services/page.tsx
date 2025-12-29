import type { Metadata } from 'next';
import { PricingPlan2Data } from '@/data/sections/pricingPlan2Data';
import { TeamSlider2Data } from '@/data/sections/teamSlider2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import Services from '@/components/sections/Services';
import PricingPlan from '@/components/sections/PricingPlan';
import TeamSlider from '@/components/sections/TeamSlider';

const PAGE_TITLE: string = 'Our Service';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const PageServices = () => {
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

            {/* Service Cards */}
            <Services
                wrapperCls="mt-100"
                container="container"
            />

            {/* Pricing Plan */}
            <PricingPlan data={PricingPlan2Data} />

            {/* Our Team */}
            <TeamSlider 
                data={TeamSlider2Data} 
                pagination={true}
            />
        </>
    )
}

export default PageServices;