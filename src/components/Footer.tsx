import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

interface FooterProps {
  // "dark" sits inside the homepage's final charcoal section.
  variant?: "light" | "dark";
  border?: boolean;
}

const pages = [
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Footer = ({ variant = "light", border = false }: FooterProps) => {
  const dark = variant === "dark";
  const year = new Date().getFullYear();
  const linkClass = cn(
    "inline-flex min-h-[44px] items-center transition-colors",
    dark ? "hover:text-paper" : "hover:text-brand-text",
  );

  return (
    <footer
      className={cn(
        "flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm",
        dark
          ? "border-t border-[#34322E] py-4 text-[#A3A098]"
          : "px-[6vw] py-7 text-ink-4",
        !dark && border && "border-t border-line",
      )}
    >
      <span>
        {dark ? `© ${year} ${site.name} · Boulder, CO` : `© ${year} ${site.name}. All rights reserved.`}
      </span>
      <span className="flex flex-wrap gap-x-6">
        {pages.map((p) => (
          <Link key={p.to} to={p.to} className={linkClass}>
            {p.label}
          </Link>
        ))}
        {dark && (
          <>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Facebook
            </a>
          </>
        )}
      </span>
    </footer>
  );
};

export default Footer;
