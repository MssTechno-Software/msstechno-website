import type { Metadata } from 'next';
import { createHandle } from '@/utils/createHandle';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogCategory from '@/components/sections/BlogCategory';

const PAGE_TITLE: string = 'Category';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;
    const handle = createHandle(slug);

    return (
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
            <BlogCategory slug={handle} />
        </>
    )
}

export default Page;