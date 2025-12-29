import "@/styles/header.css";
import Logo from "./Logo";
import LogoImage from "@/public/logo.png";
import NavBar from "./menus/NavBar";
import HeaderActions from "./HeaderActions";
import StickyHeader from "./StickyHeader";

const Header = () => {
  return (
    <StickyHeader
      wrapperCls="header-1 header-floating"
      container="container-fluid"
      stickyType='always'
    >
      <div className="header-grid">
        {/* Logo */}
        <Logo
          src={LogoImage.src}
          width={142}
          height={24}
          url="/"
          cls="header-logo"
          alt="MssTechno logo"
          ariaLabel="MssTechno logo"
          loading="eager"
        />

        {/* Nav Bar */}
        <NavBar />

        {/* Header Actions */}
        <HeaderActions />
      </div>
    </StickyHeader>
  )
}

export default Header;