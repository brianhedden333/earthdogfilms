import { FormEvent, MouseEvent, ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceRow from "@/components/ServiceRow";
import ProjectCard from "@/components/ProjectCard";
import ProjectPlayer from "@/components/ProjectPlayer";
import { FieldError, Honeypot, fieldClass, isEmail, labelClass } from "@/components/FormFields";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { site, Project } from "@/data/site";
import {
  contentDay,
  contentFaqs,
  contentPage,
  contentSteps,
  featureKey,
  featuredWork,
  formatPrice,
  included,
  lowestMonthly,
  notIncluded,
  planTerms,
  plans,
  Feature,
} from "@/data/contentPlans";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email", string>>;

const eyebrow = "text-[13px] uppercase tracking-[0.12em]";
const sectionClass = "scroll-mt-6 px-[6vw] py-[88px] min-[761px]:py-[120px]";
const h2Class = "m-0 font-display text-[clamp(44px,4.6vw,68px)] font-normal leading-[1.02]";
const primaryButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-colors hover:bg-brand-text";
const outlineButton =
  "inline-flex min-h-[48px] items-center justify-center rounded-full border border-ink px-8 py-4 text-base text-ink transition-colors hover:bg-ink hover:text-paper";
const textLink =
  "inline-flex min-h-[44px] items-center border-b border-ink text-[15px] transition-colors hover:border-brand-text hover:text-brand-text";

const planOptions = [
  ...plans.map((p) => `${p.name} – ${formatPrice(p.monthly)}/mo`),
  `${contentDay.name} – ${formatPrice(contentDay.price)} one time`,
  "Not sure yet",
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contentFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Every "book a call" button. Points at the inquiry form until contentPage.bookingUrl is a scheduling link.
const BookLink = ({
  className,
  children,
  label,
  onClick,
}: {
  className: string;
  children: ReactNode;
  label?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const external = !contentPage.bookingUrl.startsWith("#");
  return (
    <a
      href={contentPage.bookingUrl}
      onClick={onClick}
      aria-label={label}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
};

// The "ready-to-post pieces" line leads with a larger, medium-weight count.
const FeatureText = ({ feature }: { feature: Feature }) =>
  typeof feature === "string" ? (
    <>{feature}</>
  ) : (
    <span>
      <strong className="text-[17px] font-medium">{feature.strong}</strong>
      {feature.rest}
    </span>
  );

const SectionHeading = ({ kicker, title, id }: { kicker: string; title: string; id?: string }) => (
  <Reveal>
    <div className={`mb-5 text-brand-text ${eyebrow}`}>{kicker}</div>
    <h2 id={id} className={h2Class}>
      {title}
    </h2>
  </Reveal>
);

const validate = (data: FormData): Errors => {
  const errors: Errors = {};
  const value = (key: string) => String(data.get(key) ?? "").trim();
  if (!value("name")) errors.name = "Please enter your name.";
  if (!value("email")) errors.email = "Please enter your email address.";
  else if (!isEmail(value("email"))) errors.email = "Please enter a valid email address.";
  return errors;
};

const Content = () => {
  const { hash } = useLocation();
  const [playing, setPlaying] = useState<Project | null>(null);
  const [plan, setPlan] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const successRef = useRef<HTMLDivElement>(null);

  // Deep links such as /content#pricing from a pitch email.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // Honeypot: real visitors never see or fill this field. Drop the submission quietly.
    if (data.get("_gotcha")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          brand: data.get("brand"),
          website: data.get("website"),
          plan: data.get("plan"),
          message: data.get("message"),
          source: "Content Plans page",
          _subject: `Content plan call request from ${data.get("name")}`,
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title="Monthly video content for brands | Earth Dog Films"
        description={`Commercial-quality short-form video every month from one batched shoot day. Plans from ${formatPrice(lowestMonthly)}/mo.`}
        canonical="/content"
        structuredData={faqStructuredData}
      />
      <Header />
      <Breadcrumbs />

      <main>
        {/* 1. Hero */}
        <section className="px-[6vw] pb-[88px] pt-16 min-[761px]:pb-[120px] min-[761px]:pt-[104px]">
          <div className={`load-fade mb-6 text-brand-text ${eyebrow} [--load-delay:0s]`}>Monthly content plans</div>
          <h1 className="m-0 max-w-[1100px] font-display text-[clamp(52px,7.4vw,120px)] font-normal leading-[0.95] tracking-[-0.02em]">
            <span className="load-line">
              <span className="load-up">
                Commercial-quality video, <em className="text-brand">every month.</em>
              </span>
            </span>
          </h1>
          <p className="load-fade m-0 mt-8 max-w-[640px] text-xl leading-[1.55] text-ink-3">
            One shoot day. A month of polished short-form video for your brand — directed by a filmmaker, not churned
            out by an agency.
          </p>
          <div className="load-fade mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 [--load-delay:0.55s]">
            <BookLink className={primaryButton}>{contentPage.cta}</BookLink>
            <a href="#pricing" className={textLink}>
              See pricing ↓
            </a>
          </div>
        </section>

        {/* 2. Featured work */}
        <section aria-labelledby="work-heading" className={cn(sectionClass, "pt-0 min-[761px]:pt-0")}>
          <div className="border-t border-line pt-[72px] min-[761px]:pt-[96px]">
            <SectionHeading kicker="Featured work" title="Made like a commercial." id="work-heading" />
            <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(min(280px,100%),1fr))] gap-x-8 gap-y-14">
              {featuredWork.map((p, i) => (
                <Reveal key={p.slug} delay={i * 90}>
                  <ProjectCard project={p} onPlay={setPlaying} imageWrapClassName="reveal-img" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How it works */}
        <section aria-labelledby="how-heading" className={cn(sectionClass, "bg-paper-2")}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 min-[761px]:gap-16">
            <SectionHeading kicker="How it works" title="One shoot day. A month of video." id="how-heading" />
            <div className="min-[761px]:col-span-2">
              {contentSteps.map((s, i) => (
                <Reveal key={s.num} delay={i * 90}>
                  <ServiceRow {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Pricing */}
        <section id="pricing" aria-labelledby="pricing-heading" className={sectionClass}>
          <SectionHeading kicker="Pricing" title="Monthly plans." id="pricing-heading" />
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.id} delay={i * 90} className="flex">
                <article
                  aria-labelledby={`plan-${p.id}`}
                  className={cn(
                    "relative flex w-full flex-col rounded-lg border p-8 min-[761px]:p-10",
                    p.popular ? "border-ink bg-ink text-paper" : "border-line bg-white",
                  )}
                >
                  {p.popular && (
                    <span className="absolute right-6 top-6 rounded-full bg-brand px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 id={`plan-${p.id}`} className="m-0 font-display text-[36px] font-normal leading-none">
                    {p.name}
                  </h3>
                  <p className="m-0 mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-[clamp(56px,5vw,72px)] leading-none">{formatPrice(p.monthly)}</span>
                    <span className={p.popular ? "text-ink-dim" : "text-ink-4"}>/mo</span>
                  </p>
                  <ul className="m-0 mb-8 mt-8 flex list-none flex-col p-0">
                    {p.features.map((f) => (
                      <li
                        key={featureKey(f)}
                        className={cn(
                          "flex gap-3 border-t py-3.5 text-base leading-[1.5]",
                          p.popular ? "border-[#34322E]" : "border-line",
                        )}
                      >
                        <Check
                          aria-hidden="true"
                          className={cn("mt-[3px] h-[18px] w-[18px] shrink-0", p.popular ? "text-brand-on-dark" : "text-brand-text")}
                        />
                        <FeatureText feature={f} />
                      </li>
                    ))}
                  </ul>
                  <BookLink
                    onClick={() => setPlan(planOptions[i])}
                    label={`Book a call about the ${p.name} plan`}
                    className={cn(
                      "mt-auto w-full",
                      p.popular
                        ? primaryButton
                        : "inline-flex min-h-[48px] items-center justify-center rounded-full bg-ink px-8 py-4 text-base text-paper transition-colors hover:bg-brand-text",
                    )}
                  >
                    Book a call
                  </BookLink>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="m-0 mt-8 text-center text-base text-ink-3">{planTerms}</p>
          </Reveal>
        </section>

        {/* 5. One-time Content Day */}
        <section aria-labelledby="day-heading" className={cn(sectionClass, "bg-paper-2")}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-12 min-[761px]:gap-16">
            <SectionHeading kicker="Not ready for a monthly plan?" title="Start with a Content Day." id="day-heading" />
            <Reveal delay={120} className="min-[761px]:col-span-2">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-[clamp(56px,5vw,72px)] leading-none">{formatPrice(contentDay.price)}</span>
                <span className="text-lg text-ink-3">one time</span>
              </div>
              <ul className="m-0 mt-8 flex max-w-[620px] list-none flex-col p-0">
                {contentDay.features.map((f) => (
                  <li key={featureKey(f)} className="flex gap-3 border-t border-line-2 py-3.5 text-base leading-[1.5]">
                    <Check aria-hidden="true" className="mt-[3px] h-[18px] w-[18px] shrink-0 text-brand-text" />
                    <FeatureText feature={f} />
                  </li>
                ))}
              </ul>
              <p className="m-0 mt-6 max-w-[620px] font-display text-[clamp(24px,2.2vw,30px)] leading-[1.25]">{contentDay.note}</p>
              <BookLink
                onClick={() => setPlan(planOptions[plans.length])}
                label={`Book a call about a ${contentDay.name}`}
                className={cn(outlineButton, "mt-8")}
              >
                Book a call
              </BookLink>
            </Reveal>
          </div>
        </section>

        {/* 6. Included / not included */}
        <section aria-labelledby="scope-heading" className={sectionClass}>
          <SectionHeading kicker="Scope" title="What’s included, and what’s not." id="scope-heading" />
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-x-16 gap-y-12">
            {[
              { title: "Included", items: included, Icon: Check, iconClass: "text-brand-text" },
              { title: "Not included", items: notIncluded, Icon: Minus, iconClass: "text-ink-4" },
            ].map(({ title, items, Icon, iconClass }, i) => (
              <Reveal key={title} delay={i * 120}>
                <h3 className="m-0 font-display text-[32px] font-normal leading-none">{title}</h3>
                <ul className="m-0 mt-6 flex list-none flex-col p-0">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3 border-t border-line-2 py-3.5 text-base leading-[1.5] text-ink-2">
                      <Icon aria-hidden="true" className={cn("mt-[3px] h-[18px] w-[18px] shrink-0", iconClass)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 7. FAQ */}
        <section aria-labelledby="faq-heading" className={cn(sectionClass, "bg-paper-2")}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 min-[761px]:gap-16">
            <SectionHeading kicker="FAQ" title="Questions, answered." id="faq-heading" />
            <Reveal delay={120} className="min-[761px]:col-span-2">
              <Accordion type="single" collapsible className="border-b border-line-2">
                {contentFaqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`faq-${i}`} className="border-b-0 border-t border-line-2">
                    <AccordionTrigger className="min-h-[44px] gap-6 py-6 text-left font-display text-[clamp(24px,2.2vw,30px)] font-normal leading-[1.2] hover:text-brand-text hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="max-w-[720px] pb-7 text-base leading-[1.6] text-ink-3">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* 8. Closing CTA + inquiry form */}
        <section id="book" aria-labelledby="book-heading" className="scroll-mt-6 bg-ink px-[6vw] pt-[88px] text-paper min-[761px]:pt-[120px]">
          <div className="flex flex-wrap gap-14 pb-[88px] min-[761px]:gap-20 min-[761px]:pb-[120px]">
            <Reveal className="min-w-0 flex-[1_1_360px]">
              <h2 id="book-heading" className="m-0 font-display text-[clamp(48px,6vw,92px)] font-normal leading-none">
                Let’s make your brand’s next month of video.
              </h2>
              <p className="m-0 mt-6 max-w-[460px] text-[19px] leading-[1.55] text-ink-dim">
                Tell us a little about your brand and we’ll be in touch to set up a 15-minute intro call.
              </p>
              {!contentPage.bookingUrl.startsWith("#") && (
                <BookLink className={cn(primaryButton, "mt-10")}>{contentPage.cta}</BookLink>
              )}
            </Reveal>

            <Reveal delay={120} className="min-w-0 flex-[1.3_1_480px]">
              <div className="rounded-lg bg-white p-6 text-ink min-[761px]:p-12">
                {status === "sent" ? (
                  <div ref={successRef} tabIndex={-1} role="status" className="py-10 outline-none">
                    <h3 className="m-0 font-display text-[clamp(36px,4vw,52px)] font-normal leading-none">
                      Thank you. <em className="text-brand">Message sent.</em>
                    </h3>
                    <p className="m-0 mt-6 max-w-[460px] text-lg leading-[1.6] text-ink-3">
                      We’ve got your note and will email you to find a time for the call.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 min-h-[44px] border-b border-ink pb-0.5 text-[15px] transition-colors hover:border-brand-text hover:text-brand-text"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-x-6 gap-y-7 min-[761px]:grid-cols-2">
                    <label className={labelClass}>
                      Name
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "content-name-error" : undefined}
                        className={fieldClass}
                      />
                      <FieldError id="content-name-error" message={errors.name} />
                    </label>
                    <label className={labelClass}>
                      Email
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "content-email-error" : undefined}
                        className={fieldClass}
                      />
                      <FieldError id="content-email-error" message={errors.email} />
                    </label>
                    <label className={labelClass}>
                      Brand
                      <input type="text" name="brand" autoComplete="organization" className={fieldClass} />
                    </label>
                    <label className={labelClass}>
                      Website
                      <input type="text" name="website" inputMode="url" autoComplete="url" placeholder="yourbrand.com" className={fieldClass} />
                    </label>
                    <label className={`${labelClass} col-span-full`}>
                      Which plan interests you?
                      <select name="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className={fieldClass}>
                        <option value="">Select a plan</option>
                        {planOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={`${labelClass} col-span-full`}>
                      <span>
                        Message <span className="font-normal text-ink-4">(optional)</span>
                      </span>
                      <textarea name="message" rows={4} className={`${fieldClass} resize-y`} />
                    </label>

                    <Honeypot />

                    {status === "error" && (
                      <p role="alert" className="col-span-full m-0 text-[15px] text-brand-text">
                        Something went wrong sending your message. Please try again in a moment.
                      </p>
                    )}

                    <div className="col-span-full flex flex-wrap items-center justify-between gap-5">
                      <span className="text-sm text-ink-4">We reply to every inquiry.</span>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="min-h-[48px] rounded-full bg-brand px-9 py-4 text-base font-medium text-white transition-colors hover:bg-brand-text disabled:opacity-60"
                      >
                        {status === "sending" ? "Sending…" : contentPage.cta}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
          <Footer variant="dark" />
        </section>
      </main>

      <ProjectPlayer project={playing} onClose={() => setPlaying(null)} />
    </div>
  );
};

export default Content;
