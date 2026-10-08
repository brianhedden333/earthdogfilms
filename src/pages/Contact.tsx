import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site, testimonials, projectTypes, budgetRanges } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const labelClass = "flex flex-col gap-2 text-sm font-medium";
// Border is a step darker than the mockup's #CFCDC5 so field edges meet the 3:1 contrast minimum.
const fieldClass =
  "min-h-[48px] w-full rounded-md border border-[#908E86] bg-paper px-4 py-3.5 text-base font-normal text-ink placeholder:text-ink-4 aria-[invalid=true]:border-brand-text";
const dtClass = "text-[13px] uppercase tracking-[0.12em] text-ink-4";

const validate = (data: FormData): Errors => {
  const errors: Errors = {};
  const value = (key: string) => String(data.get(key) ?? "").trim();
  if (!value("name")) errors.name = "Please enter your name.";
  if (!value("email")) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email"))) errors.email = "Please enter a valid email address.";
  if (!value("message")) errors.message = "Please tell us a little about your project.";
  return errors;
};

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <span id={id} className="text-sm font-normal text-brand-text">
      {message}
    </span>
  ) : null;

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const successRef = useRef<HTMLDivElement>(null);

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
          organization: data.get("organization"),
          "project-type": data.getAll("project-type").join(", "),
          budget: data.get("budget"),
          "launch-date": data.get("launch-date"),
          message: data.get("message"),
          _subject: `New inquiry from ${data.get("name")}`,
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
        title="Contact Earth Dog Films - Start Your Video Project"
        description="Ready to create powerful video content? Contact Earth Dog Films in Boulder, Colorado for brand films, documentaries, and campaign videos. Get a free consultation today."
        canonical="/contact"
      />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="flex flex-wrap gap-14 px-[6vw] pb-[96px] pt-16 min-[761px]:gap-20 min-[761px]:pb-[140px] min-[761px]:pt-[104px]">
          <div className="min-w-0 flex-[1_1_380px]">
            <h1 className="m-0 font-display text-[clamp(56px,7vw,112px)] font-normal leading-[0.95] tracking-[-0.02em]"><span className="load-line"><span className="load-up">
              Let’s tell your <em className="text-brand">story.</em>
            </span></span></h1>
            <p className="load-fade m-0 mt-8 max-w-[460px] text-xl leading-[1.55] text-ink-3">
              Tell us a little about your project and we’ll be in touch to talk it through.
            </p>
            <dl className="load-fade m-0 mt-14 flex flex-col gap-7 [--load-delay:0.55s]">
              <div>
                <dt className={dtClass}>Studio</dt>
                <dd className="m-0 mt-1.5 text-xl">{site.location}</dd>
              </div>
              <div>
                <dt className={dtClass}>Follow</dt>
                <dd className="m-0 mt-1.5 flex gap-6 text-xl">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-brand-text"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-brand-text"
                  >
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>
            <figure className="load-fade m-0 mt-14 max-w-[480px] border-t border-line pt-8 [--load-delay:0.7s] min-[761px]:mt-[72px]">
              <blockquote className="m-0 font-display text-[26px] leading-[1.3]">“{testimonials.contact.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink-3">{testimonials.contact.who}</figcaption>
            </figure>
          </div>

          <div className="load-fade min-w-0 flex-[1.3_1_520px] rounded-lg border border-line bg-white p-6 [--load-delay:0.5s] min-[761px]:p-12">
            {status === "sent" ? (
              <div ref={successRef} tabIndex={-1} role="status" className="flex h-full flex-col justify-center py-10 outline-none">
                <h2 className="m-0 font-display text-[clamp(40px,4vw,56px)] font-normal leading-none">
                  Thank you. <em className="text-brand">Message sent.</em>
                </h2>
                <p className="m-0 mt-6 max-w-[460px] text-lg leading-[1.6] text-ink-3">
                  We’ve got your inquiry and will be in touch to talk it through. We reply to every inquiry.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 min-h-[44px] self-start border-b border-ink pb-0.5 text-[15px] transition-colors hover:border-brand-text hover:text-brand-text"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-x-6 gap-y-7 min-[761px]:grid-cols-2"
              >
                <label className={labelClass}>
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="name-error" message={errors.name} />
                </label>
                <label className={labelClass}>
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="email-error" message={errors.email} />
                </label>
                <label className={`${labelClass} col-span-full`}>
                  Organization
                  <input type="text" name="organization" autoComplete="organization" className={fieldClass} />
                </label>

                <fieldset className="col-span-full m-0 border-0 p-0">
                  <legend className="mb-3 p-0 text-sm font-medium">What are you making?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {projectTypes.map((type) => (
                      <label
                        key={type}
                        className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-[#908E86] px-[18px] py-2.5 text-[15px] transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand"
                      >
                        <input type="checkbox" name="project-type" value={type} className="accent-[#DC2626] outline-none" />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className={labelClass}>
                  Budget range
                  <select name="budget" defaultValue="" className={fieldClass}>
                    <option value="">Select a range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={labelClass}>
                  Ideal launch date
                  <input type="text" name="launch-date" placeholder="e.g. Before the primary" className={fieldClass} />
                </label>
                <label className={`${labelClass} col-span-full`}>
                  Tell us about the story
                  <textarea
                    name="message"
                    rows={6}
                    required
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClass} resize-y`}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </label>

                {/* Honeypot for spam bots: hidden from people and assistive tech. */}
                <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                  <label>
                    Leave this field empty
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

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
                    {status === "sending" ? "Sending…" : "Send inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer border />
    </div>
  );
};

export default Contact;
