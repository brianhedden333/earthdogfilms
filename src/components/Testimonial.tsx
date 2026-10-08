import { cn } from "@/lib/utils";

interface TestimonialProps {
  text: string;
  who: string;
  className?: string;
}

// Card-style quote. The large pull quotes on Home and Contact are set inline on those pages.
const Testimonial = ({ text, who, className }: TestimonialProps) => (
  <figure className={cn("m-0 rounded-md border border-line bg-white p-8", className)}>
    <blockquote className="m-0 text-[17px] leading-[1.65] text-ink-2">“{text}”</blockquote>
    <figcaption className="mt-5 text-sm font-medium">{who}</figcaption>
  </figure>
);

export default Testimonial;
