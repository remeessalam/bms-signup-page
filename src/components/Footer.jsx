import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="flex backdrop-blur-sm flex-col gap-4 md:items-center bg-black justify-center py-[4rem] text-white mt-14 border-t border-gray-800/70">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 w-full flex md:flex-row flex-col items-start justify-between gap-7">
        <img src={logo} alt="logo" className="h-[5rem] object-contain" />
        <div className="flex flex-col gap-3">
          <h5 className="font-light tracking-wide uppercase">Contact</h5>
          <ul className="flex flex-col gap-1 text-sm text-white/80 font-light">
            <li>
              <a
                href="tel:+919790035747"
                className="flex items-center gap-1 link"
              >
                <BiPhone className="text-xl" />{" "}
                <span className="text-">+919790035747</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:ceo@boostmysites.com"
                className="flex items-center gap-1 link"
              >
                <CgMail className="text-xl" />{" "}
                <span className="text-">ceo@boostmysites.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h5 className="font-light tracking-wide uppercase">useful links</h5>
          <ul className="flex flex-col gap-1 text-sm text-white/80 font-light">
            {[
              {
                id: 2,
                title: "Start Your AI Company",
                path: "/ai-expert",
              },
              {
                id: 3,
                title: "Start Your Ecommerce Company",
                path: "https://boostmysites.store",
              },
              {
                id: 1,
                title: "Services and Pricing",
                path: "/services",
              },
              {
                id: 4,
                title: "Contact Us",
                path: "/ai-expert/contact",
              },
              {
                id: 5,
                title: "Privacy Policy",
                path: "/privacy-policy",
              },
            ].map((item) => (
              <li key={item.id}>
                <div
                  //   to={item.path}
                  //   referrerPolicy="no-referrer"
                  //   target={item.path.startsWith("http") ? "_blank" : "_self"}
                  className="link"
                >
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="mt-2 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/boostmysitescom"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/boostmysites"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/boostmysites"
              target="_blank"
              rel="noreferrer"
              className="w-[2.5rem] h-[2.5rem] text-xl hover:-translate-y-1 transition-all duration-300 p-3 rounded-full border border-white/40 flex justify-center items-center"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-[2rem] border-t border-white/30 w-full mt-[1rem]">
        <p className="text-sm text-white/80 font-light text-center">
          © 2024 BoostMySites. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
