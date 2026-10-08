import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CTABandProps {
  title: string;
  cta: string;
  text?: string;
  secondary?: { label: string; to: string };
  // "split" puts the headline and button on one row (Portfolio); "center" stacks them (About).
  layout?: "split" | "center";
}

const CTABand = ({ title, cta, text, secondary, layout = "split" }: CTABandProps) => {
  const center = layout === "center";
  return (
    <section
      className={cn(
        "bg-ink px-[6vw] text-paper",
        center
          ? "py-[96px] text-center min-[761px]:py-[140px]"
          : "flex flex-wrap items-center justify-between gap-10 py-[88px] min-[761px]:py-[120px]",
      )}
    >
      <h2
        className={cn(
          "m-0 font-display font-normal leading-none",
          center ? "mx-auto max-w-[900px] text-[clamp(48px,6vw,92px)]" : "text-[clamp(44px,5vw,76px)]",
        )}
      >
        {title}
      </h2>
      {text && <p className="mx-auto mb-0 mt-6 max-w-[620px] text-[19px] leading-[1.55] text-ink-dim">{text}</p>}
      <div className={cn("flex flex-wrap gap-4", center && "mt-10 justify-center")}>
        <Link
          to="/contact"
          className="inline-flex min-h-[44px] items-center rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-text"
        >
          {cta}
        </Link>
        {secondary && (
          <Link
            to={secondary.to}
            className="inline-flex min-h-[44px] items-center rounded-full border border-[#5A5853] px-8 py-4 text-base text-paper transition-colors hover:border-paper"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTABand;
