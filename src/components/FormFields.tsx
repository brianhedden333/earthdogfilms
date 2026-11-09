// Shared field styles for the site's inquiry forms (Contact, Content Plans).

export const labelClass = "flex flex-col gap-2 text-sm font-medium";
// Border is a step darker than the mockup's #CFCDC5 so field edges meet the 3:1 contrast minimum.
export const fieldClass =
  "min-h-[48px] w-full rounded-md border border-[#908E86] bg-paper px-4 py-3.5 text-base font-normal text-ink placeholder:text-ink-4 aria-[invalid=true]:border-brand-text";

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <span id={id} className="text-sm font-normal text-brand-text">
      {message}
    </span>
  ) : null;

// Spam-bot trap: hidden from people and assistive tech. A filled-in "_gotcha" means a bot.
export const Honeypot = () => (
  <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
    <label>
      Leave this field empty
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
);
