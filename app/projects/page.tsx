import type { Metadata } from 'next';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import Projects from '@/components/sections/Projects';


const PAGE_TITLE: string = 'Our Projects';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const PageProjects = () => {
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

            {/* Project Cards */}
            <Projects 
                wrapperCls="mt-100 mb-100"
                container="container-fluid"
            />
        </>
    )
}

export default PageProjects;