import type { Metadata } from 'next';

import { ImageTextData } from '@/data/sections/imageTextData';
import { WhyChooseUsGridBgData } from '@/data/sections/whyChooseUsGridBgData';
import { TeamSliderData } from '@/data/sections/teamSliderData';
import { TestimonialData } from '@/data/sections/testimonialData';
import { Faq2Data } from '@/data/sections/faq2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ImageText from '@/components/sections/ImageText';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import TeamSlider from '@/components/sections/TeamSlider';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';


const PAGE_TITLE: string = 'About Us';
export const metadata: Metadata = {
    title: PAGE_TITLE,
}


const About = () => {
    return (
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

            {/* Image Text */}
            <ImageText data={ImageTextData} />



            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridBgData} />

            {/* Our Team */}
            <TeamSlider
                data={TeamSliderData}
                pagination={true}
            />

            {/* Testimonials */}
            <Testimonials data={TestimonialData} />

            {/* FAQ */}
            <Faq data={Faq2Data} />
        </>
    )
}

export default About;