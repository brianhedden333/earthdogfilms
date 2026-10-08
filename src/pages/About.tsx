import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LogoGrid from "@/components/LogoGrid";
import CTABand from "@/components/CTABand";
import { processSteps } from "@/data/site";

const eyebrow = "text-[13px] uppercase tracking-[0.12em] text-brand-text";

const About = () => (
  <div className="w-full bg-paper font-sans leading-[normal] text-ink">
    <SEO
      title="About Earth Dog Films - Boulder Video Production Company"
      description="Learn about Earth Dog Films, a boutique video production company founded by filmmaker Brian Hedden. Based in Boulder, Colorado, we create cinematic content for mission-driven brands."
      canonical="/about"
    />
    <Header />
    <Breadcrumbs />

    <main>
      <section className="px-[6vw] pb-14 pt-16 min-[761px]:pb-20 min-[761px]:pt-[104px]">
        <div className={`load-fade mb-6 [--load-delay:0s] ${eyebrow}`}>About the studio</div>
        <h1 className="m-0 max-w-[1200px] font-display text-[clamp(52px,7vw,112px)] font-normal leading-[0.98] tracking-[-0.02em]"><span className="load-line"><span className="load-up">
          We make films for people working to <em className="text-brand">change things.</em>
        </span></span></h1>
      </section>

      <section className="px-[6vw] pb-[88px] min-[761px]:pb-[120px]">
        <Reveal delay={350}>
          <div className="reveal-img overflow-hidden rounded-md">
            <img
              src="/img/about-hero.webp"
              alt="Children in butterfly wings walking through a meadow"
              className="block aspect-[4/3] w-full object-cover object-[50%_45%] min-[761px]:aspect-[21/8]"
            />
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-12 min-[761px]:mt-16">
          <Reveal>
          <p className="m-0 font-display text-[clamp(28px,2.6vw,38px)] leading-[1.25]">
            For more than sixteen years, Earth Dog Films has helped mission-driven brands, educators and changemakers
            reach their audiences with depth, clarity and heart.
          </p>
          </Reveal>
          <Reveal delay={120}>
          <p className="m-0 text-lg leading-[1.7] text-ink-2">
            We work across campaign spots, brand films and long-form documentary, and we start every project the same
            way: by understanding the values, mission and strategy behind the work. The craft follows from there — so
            the final film looks beautiful and does its job.
          </p>
          </Reveal>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-center gap-12 bg-paper-2 px-[6vw] py-[88px] min-[761px]:gap-16 min-[761px]:py-[120px]">
        <Reveal>
          <div className="reveal-img max-w-[520px] overflow-hidden rounded-md">
            <img
              src="/img/brian-hedden.webp"
              alt="Brian Hedden on location, operating a camera on a gimbal rig"
              loading="lazy"
              decoding="async"
              className="block aspect-[4/5] w-full object-cover object-[62%_50%]"
            />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className={`mb-4 ${eyebrow}`}>Founder &amp; Director</div>
          <h2 className="m-0 font-display text-[clamp(48px,12vw,64px)] font-normal leading-none">Brian Hedden</h2>
          <p className="m-0 mt-7 max-w-[600px] text-lg leading-[1.7] text-ink-2">
            An NYU-trained filmmaker, Brian founded Earth Dog Films more than sixteen years ago. He produced the
            award-winning investigative documentary <em>Fracking the System</em>, which took on Colorado’s oil and gas
            industry.
          </p>
          <p className="m-0 mt-5 max-w-[600px] text-lg leading-[1.7] text-ink-2">
            A background in political consulting and teaching means he understands what a campaign or a mission needs
            a film to do, not just how it should look.
          </p>
        </Reveal>
      </section>

      <section className="px-[6vw] py-[96px] min-[761px]:py-[140px]">
        <Reveal>
          <h2 className="m-0 mb-10 font-display text-[clamp(44px,12vw,56px)] font-normal leading-[1.2] min-[761px]:mb-14">
            How we work
          </h2>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-10">
          {processSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 110} className="border-t-2 border-ink pt-6">
              <div className="text-[13px] text-brand-text">{s.num}</div>
              <h3 className="m-0 mb-2.5 mt-3 font-display text-[32px] font-normal leading-[1.2]">{s.title}</h3>
              <p className="m-0 text-base leading-[1.6] text-ink-3">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 px-[6vw] py-[72px] min-[761px]:py-24">
        <Reveal>
          <h2 className="m-0 mb-12 text-center font-display text-[40px] font-normal leading-[1.2]">
            Organizations we’ve worked with
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <LogoGrid cellClassName="h-[100px] min-[761px]:h-[120px]" />
        </Reveal>
      </section>

      <Reveal>
        <CTABand title="Ready to tell your story?" cta="Start a project" layout="center" />
      </Reveal>
    </main>

    <Footer />
  </div>
);

export default About;
