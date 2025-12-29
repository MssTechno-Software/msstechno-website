import Logo from "./Logo";
import LogoImage from "@/public/logo.png";
import Social from "./Social";

const FooterBrand = () => {
    return (
        <div
            className="footer-widget footer-widget-brand"
            data-aos="fade-up"
            data-aos-anchor=".footer-top"
        >
            <Logo 
                src={LogoImage.src}
                width={189}
                height={32}
                url="/"
                cls="footer-logo"
                alt="MssTechno logo"
                ariaLabel="MssTechno logo" 
                loading="lazy"
            />
            <p className="text text-16">
                We help startups and enterprises design, build, and scale high‑quality software.. You can customize almost anything in the appearance of your website with only a few
            </p>
            <Social 
                wrapperCls="social-icons"
                aos="fade-up"
                aosAnchor=".footer-top"
            />
        </div>
    )
}

export default FooterBrand;