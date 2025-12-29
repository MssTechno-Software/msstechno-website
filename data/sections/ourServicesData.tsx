import { SectionProps } from "@/types/sectionProps";
import BackgroundImage from '@/public/img/homepage/contact-bg.webp';

export const OurServicesData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: BackgroundImage.src,
        width: BackgroundImage.width,
        height: BackgroundImage.height,
        alt: "Service background image",
        loading: "lazy"
    },
    subheading: "Our Services",
    heading: "Grow client base to boost business",
    button: {
        label: "More Services",
        href: "/services",
        type: "primary"
    },
}