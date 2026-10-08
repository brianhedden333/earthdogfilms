import { cn } from "@/lib/utils";

interface ServiceRowProps {
  num: string;
  title: string;
  desc: string;
  className?: string;
}

const ServiceRow = ({ num, title, desc, className }: ServiceRowProps) => (
  <div
    className={cn(
      "grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-x-6 gap-y-2 border-t border-line-2 py-[26px]",
      "min-[761px]:grid-cols-[48px_minmax(0,1fr)_minmax(0,1.4fr)]",
      className,
    )}
  >
    <span className="text-[13px] text-ink-4">{num}</span>
    <h3 className="font-display text-[30px] font-normal leading-[1.1]">{title}</h3>
    <p className="col-start-2 text-base leading-[1.6] text-ink-3 min-[761px]:col-start-3">{desc}</p>
  </div>
);

export default ServiceRow;
