import { SectionProps } from "@/types/sectionProps";
import Expertise1 from "@/public/img/homepage/Expertise-1.webp";
import Expertise2 from "@/public/img/homepage/Expertise-2.webp";
import Expertise3 from "@/public/img/homepage/Expertise-3.webp";

export const RecentProjectData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    link: "/projects",
    subheading: "Our Expertise",
    heading: "Delivering Innovation Across Industries",
    text: "We specialize in providing robust, scalable, and secure software solutions that empower businesses to achieve their digital transformation goals.",
    imageList: [
        {
            src: Expertise1.src,
            width: Expertise1.width,
            height: Expertise1.height,
            loading: "lazy",
            alt: "Large image"
        },
        {
            src: Expertise2.src,
            width: Expertise2.width,
            height: Expertise2.height,
            loading: "lazy",
            alt: "Small image"
        },
        {
            src: Expertise3.src,
            width: Expertise3.width,
            height: Expertise3.height,
            loading: "lazy",
            alt: "Small image"
        },
    ],
    block: {
        heading: "Unlocking Potential with Advanced Technology",
        text: "From AI-driven insights to cloud-native architectures, we build systems that drive sustainable growth and efficiency.",
        button: {
            label: "Explore Capabilities",
            href: "/projects",
            type: "secondary"
        }
    },
}