import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogList from '@/components/sections/BlogList';

const PAGE_TITLE: string = 'Our Blog';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const Blog = () => {
    return(
        <>
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
            <BlogList cls="mt-100 mb-100" />
        </>
    )
}

export default Blog;