import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Freelancer Dashboard", href: "/freelancer-dashboard" },
      { name: "Client Dashboard", href: "/client-dashboard" },
      { name: "Freelancer Directory", href: "/freelancer-directory" },
      { name: "About us", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help & Support", href: "/help-support" },
      { name: "Blog", href: "/blog" },
      { name: "Styleguide", href: "/styleguide" },
      { name: "Licenses", href: "/licenses" },
      { name: "Instructions", href: "/instructions" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-coal text-white ">
      <div className="max-w-7xl mx-auto  py-12 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">LOGO</h2>
            <p className="mb-4">
              <strong>Location</strong>
              <br />
              Windhoek, Namibia
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-base text-gray-400 text-center">
            Copyright © Skillhive
          </p>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
