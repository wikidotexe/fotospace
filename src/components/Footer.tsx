import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <FaStar className="text-foreground min-w-fit w-7 h-7" />
            <h3 className="manrope text-xl font-semibold text-foreground relative top-[3px] cursor-pointer">{siteDetails.siteName}</h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">{footerDetails.subheading}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          {footerDetails.email && (
            <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">
              Email: {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-foreground">
              Phone: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link href={footerDetails.socials[platformName]} key={platformName} aria-label={platformName}>
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      <div
        className="md:text-center text-foreground-accent px-6"
        style={{ marginTop: "4rem" }} // bisa disesuaikan: 2rem, 2.5rem, dll
      >
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved - PT Teknologi Kreasi Digital.</p>
      </div>
    </footer>
  );
};

export default Footer;
