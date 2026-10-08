import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { site, navLinks } from "@/data/site";

interface HeaderProps {
  // "home" is fixed inside the snap scroller with the scroll progress bar.
  variant?: "home" | "inner";
}

const linkClass = "nav-link inline-flex min-h-[44px] items-center";

// Two stacked copies of the label: the visible one rolls out as the second rolls in on hover.
const Roll = ({ children }: { children: string }) => (
  <span className="nav-roll">
    <span>{children}</span>
    <span aria-hidden="true">{children}</span>
  </span>
);

const Header = ({ variant = "inner" }: HeaderProps) => {
  const { pathname } = useLocation();
  const home = variant === "home";
  const onContact = pathname === "/contact";

  const brandClass = cn(
    "inline-flex items-center font-display leading-none tracking-[-0.01em] text-ink transition-colors hover:text-brand-text",
    home ? "gap-3 text-[22px] sm:text-[26px]" : "gap-3.5 text-[22px] sm:text-[28px]",
  );
  const mark = (
    <img
      src={site.logo}
      alt=""
      width={46}
      height={46}
      className={cn("object-contain", home ? "h-[42px] w-[42px]" : "h-[46px] w-[46px]")}
    />
  );

  return (
    <header
      className={cn(
        home
          ? "fixed inset-x-0 top-0 z-30 bg-paper/[0.86] backdrop-blur-md"
          : "border-b border-line",
      )}
    >
      <div
        className={cn(
          "flex flex-wrap items-center justify-between px-[6vw]",
          home ? "gap-x-4 gap-y-1 py-3.5" : "gap-x-5 gap-y-1 py-[22px]",
        )}
      >
        {home ? (
          <a href="#s-top" className={brandClass}>
            {mark}
            {site.name}
          </a>
        ) : (
          <Link to="/" className={brandClass}>
            {mark}
            {site.name}
          </Link>
        )}

        <nav
          aria-label="Main"
          className={cn("flex flex-wrap items-center text-[15px]", home ? "gap-x-5 sm:gap-x-7" : "gap-x-5 sm:gap-x-8")}
        >
          {navLinks.map((link) => {
            const isAnchor = link.to.startsWith("/#");
            if (isAnchor && home) {
              return (
                <a key={link.to} href={link.to.slice(1)} className={linkClass}>
                  <Roll>{link.label}</Roll>
                </a>
              );
            }
            const active = !isAnchor && (pathname === link.to || pathname.startsWith(`${link.to}/`));
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={cn(linkClass, active && "text-brand-text")}
              >
                <Roll>{link.label}</Roll>
              </Link>
            );
          })}
          <Link
            to="/contact"
            aria-current={onContact ? "page" : undefined}
            className={cn(
              "nav-pill inline-flex min-h-[44px] items-center rounded-full px-[22px]",
              onContact ? "bg-brand text-white [--nav-fill:#1A1917]" : "bg-ink text-paper",
            )}
          >
            <Roll>Contact</Roll>
          </Link>
        </nav>
      </div>
      {home && <div className="progress h-0.5 origin-left scale-x-0 bg-brand" />}
    </header>
  );
};

export default Header;
