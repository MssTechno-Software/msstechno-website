import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/homepage/whychooseus.webp";
import Icons from "@/components/Icons";

export const WhyChooseUsData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        width: WhyChooseUsImage.width,
        height: WhyChooseUsImage.height,
        loading: "lazy",
        alt: "Promotion image"
    },
    subheading: "Why Choose Us",
    heading: "Empowering Businesses with Scalable Solutions",
    text: "We leverage cutting-edge technology and deep industry expertise to deliver software that drives real business value. From startups to enterprises, we are your trusted partner in digital innovation.",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Winning />,
            title: "Agile Development <br /> Process",
            text: "Rapid iteration and flexibility to meet evolving needs.",
        },
        {
            icon: <Icons.Support />,
            title: "Dedicated <br /> Expert Team",
            text: "Experienced professionals committed to your success.",
        },
    ],
    counterData: [
        {
            number: 250,
            suffix: "+",
            title: "Projects Delivered",
            aos: "fade-up",
            aosDelay: 20,
        },
        {
            number: 150,
            suffix: "+",
            title: "Happy Clients",
        },
        {
            number: 10,
            suffix: "+",
            title: "Years Experience",
        },
    ],
}