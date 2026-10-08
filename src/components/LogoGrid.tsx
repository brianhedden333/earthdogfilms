import { cn } from "@/lib/utils";
import { clients } from "@/data/site";

interface LogoGridProps {
  // Height class for each cell (130px on Home, 120px on About).
  cellClassName?: string;
  // Extra class per cell, by index. The homepage uses it for staggered reveals.
  cellClass?: (index: number) => string;
}

const LogoGrid = ({ cellClassName = "h-[120px]", cellClass }: LogoGridProps) => (
  <div className="grid grid-cols-3 gap-px border border-line-2 bg-line-2 min-[761px]:grid-cols-6">
    {clients.map((logo, i) => (
      <div
        key={logo.src}
        className={cn("flex items-center justify-center bg-paper-2 px-3 min-[761px]:px-5", cellClassName, cellClass?.(i))}
      >
        {/* Original colour logos, rendered as a single dark tone to match the design. */}
        <img
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          decoding="async"
          className="h-14 w-full object-contain opacity-[0.82] brightness-0"
        />
      </div>
    ))}
  </div>
);

export default LogoGrid;
