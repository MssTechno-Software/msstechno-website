import { SectionProps } from "@/types/sectionProps";
import Section2Image from '@/public/img/homepage/section-2.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "Our Company",
    heading: "Engineering Digital Excellence",
    text: "We empower businesses of all sizes to thrive by building robust software solutions that drive innovation and scale.",
    button: {
        label: "More About Us",
        href: "/about-us",
        type: "primary"
    },
    image: {
        src: Section2Image.src,
        width: Section2Image.width,
        height: Section2Image.height,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Scalable Architecture Design"
        },
        {
            text: "Cutting-edge Technology Stack"
        },
        {
            text: "Agile Development Methodology"
        }
    ]
}
