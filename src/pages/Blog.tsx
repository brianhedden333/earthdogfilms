import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="w-full bg-paper font-sans leading-[normal] text-ink">
    <SEO
      title="Blog - Filmmaking & Storytelling Insights"
      description="Insights on filmmaking, documentary production, video storytelling, and the creative process from Earth Dog Films. Tips and guides for mission-driven brands."
      canonical="/blog"
    />
    <Header />
    <Breadcrumbs />

    <main>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-end gap-10 px-[6vw] pb-14 pt-16 min-[761px]:pt-[104px]">
        <h1 className="m-0 font-display text-[clamp(64px,8vw,128px)] font-normal leading-[0.95] tracking-[-0.02em]"><span className="load-line"><span className="load-up">
          Blog
        </span></span></h1>
        <p className="load-fade m-0 max-w-[520px] text-xl leading-[1.55] text-ink-3">
          Thoughts on filmmaking, storytelling, and the craft of visual narratives.
        </p>
      </section>

      <section className="px-[6vw] pb-[96px] min-[761px]:pb-[140px]">
        <div className="border-t border-line pt-12">
          {blogPosts.length === 0 ? (
            <div className="py-16">
              <h2 className="m-0 font-display text-[44px] font-normal leading-[1.1]">Coming soon</h2>
              <p className="m-0 mt-4 max-w-[560px] text-lg leading-[1.6] text-ink-3">
                Our blog is under development. Check back soon for insights on filmmaking, storytelling, and the
                creative process.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-x-10 gap-y-16">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 120}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block text-ink transition-colors hover:text-brand-text"
                >
                  <div className="reveal-img overflow-hidden rounded-md">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="block aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-[22px] text-[13px] text-ink-4">{post.date}</div>
                  <h2 className="m-0 mt-2 font-display text-[36px] font-normal leading-[1.05]">{post.title}</h2>
                  <p className="m-0 mt-2.5 max-w-[560px] text-base leading-[1.55] text-ink-3">{post.excerpt}</p>
                </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Reveal>
        <CTABand title="Have a story to tell?" cta="Let’s talk" />
      </Reveal>
    </main>

    <Footer />
  </div>
);

export default Blog;
