import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => (
  <div className="flex min-h-screen w-full flex-col bg-paper font-sans leading-[normal] text-ink">
    <SEO title="Page not found" noindex />
    <Header />
    <main className="flex flex-auto flex-col justify-center px-[6vw] py-24">
      <div className="mb-6 text-[13px] uppercase tracking-[0.12em] text-brand-text">404</div>
      <h1 className="m-0 font-display text-[clamp(52px,7vw,112px)] font-normal leading-[0.98] tracking-[-0.02em]">
        This page is <em className="text-brand">off the map.</em>
      </h1>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-colors hover:bg-brand"
        >
          Back to home
        </Link>
        <Link
          to="/portfolio"
          className="inline-flex min-h-[44px] items-center rounded-full border border-[#908E86] px-8 py-4 text-base transition-colors hover:border-ink"
        >
          See the portfolio
        </Link>
      </div>
    </main>
    <Footer border />
  </div>
);

export default NotFound;
