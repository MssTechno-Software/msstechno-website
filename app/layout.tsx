import type { Metadata } from "next";
import { fonts } from "@/libs/fonts";
import "@/styles/global.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import AosInitializer from "@/libs/aos";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ScrollTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'MssTechno',
  },
  description: "MssTechno - Custom Software & Cloud Solutions",
  openGraph: {
    title: 'MssTechno',
    description: 'Custom Software & Cloud Solutions',
    url: 'https://themeforest.net/user/spreethemes/portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts} data-theme={process.env.NEXT_PUBLIC_THEME}>
        <Providers>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />

          {/* Modal and Drawer Overlay */}
          <drawer-opener id="drawer-overlay"></drawer-opener>

          {/* AOS Init */}
          <AosInitializer />

          {/* Scroll to Top Button */}
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}
