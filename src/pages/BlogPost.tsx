import { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABand from "@/components/CTABand";
import { getBlogPostBySlug } from "@/data/blogPosts";

const backLink =
  "inline-flex min-h-[44px] items-center text-[15px] text-ink-3 transition-colors hover:text-brand-text";

// Inline [text](/url) links inside a paragraph.
const withLinks = (text: string): ReactNode[] => {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/g);
  return parts.map((part, i) => {
    if (i % 3 === 1) {
      return (
        <Link key={i} to={parts[i + 1]} className="text-brand-text underline underline-offset-2 hover:text-brand">
          {part}
        </Link>
      );
    }
    return i % 3 === 2 ? null : part;
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-paper font-sans leading-[normal] text-ink">
        <SEO title="Post Not Found" noindex={true} />
        <Header />
        <main className="flex flex-auto flex-col justify-center px-[6vw] py-24">
          <h1 className="m-0 font-display text-[clamp(52px,7vw,112px)] font-normal leading-[0.98] tracking-[-0.02em]">
            Post not found
          </h1>
          <p className="m-0 mt-6 text-xl leading-[1.55] text-ink-3">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link to="/blog" className={`mt-6 self-start ${backLink}`}>
            ← Back to blog
          </Link>
        </main>
        <Footer border />
      </div>
    );
  }

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author || "Brian Hedden"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Earth Dog Films",
      "logo": {
        "@type": "ImageObject",
        "url": "https://earthdogfilms.com/lovable-uploads/edf-logo-2025.png"
      }
    }
  };

  const lines = post.content.split("\n").filter((line) => line.trim());

  return (
    <div className="w-full bg-paper font-sans leading-[normal] text-ink">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        structuredData={articleStructuredData}
      />
      <Header />
      <Breadcrumbs />

      <main>
        <section className="px-[6vw] pb-12 pt-10 min-[761px]:pt-16">
          <Link to="/blog" className={backLink}>
            ← All posts
          </Link>
          <div className="load-fade mt-8 text-[13px] uppercase tracking-[0.12em] text-brand-text [--load-delay:0s]">{post.date}</div>
          <h1 className="m-0 mt-4 max-w-[1200px] font-display text-[clamp(48px,6.4vw,104px)] font-normal leading-[0.98] tracking-[-0.02em]">
            <span className="load-line">
              <span className="load-up">{post.title}</span>
            </span>
          </h1>
          {post.author && <p className="load-fade m-0 mt-6 text-[15px] text-ink-3">By {post.author}</p>}
        </section>

        <section className="px-[6vw] pb-[72px] min-[761px]:pb-24">
          <Reveal delay={350}>
            <div className="reveal-img overflow-hidden rounded-md">
              <img
                src={post.image}
                alt=""
                className="block aspect-[4/3] w-full object-cover min-[761px]:aspect-[21/9]"
              />
            </div>
          </Reveal>
        </section>

        <article className="load-fade mx-auto max-w-[760px] px-[6vw] pb-[96px] [--load-delay:0.7s] min-[761px]:px-0 min-[761px]:pb-[140px]">
          {lines.map((line, index) => {
            const text = line.trim();
            if (text.startsWith("# ")) {
              // The post title is already the page's h1.
              if (text.slice(2) === post.title) return null;
              return (
                <h2 key={index} className="m-0 mb-4 mt-14 font-display text-[40px] font-normal leading-[1.1]">
                  {text.slice(2)}
                </h2>
              );
            }
            if (text.startsWith("## ")) {
              return (
                <h2 key={index} className="m-0 mb-4 mt-14 font-display text-[40px] font-normal leading-[1.1]">
                  {text.slice(3)}
                </h2>
              );
            }
            if (text.startsWith("### ")) {
              return (
                <h3 key={index} className="m-0 mb-2 mt-9 font-display text-[28px] font-normal leading-[1.2]">
                  {text.slice(4)}
                </h3>
              );
            }
            if (text.startsWith("**") && text.endsWith("**")) {
              return (
                <p key={index} className="m-0 mt-5 text-lg font-semibold leading-[1.7] text-ink">
                  {text.replace(/\*\*/g, "")}
                </p>
              );
            }
            return (
              <p key={index} className="m-0 mt-5 text-lg leading-[1.7] text-ink-2">
                {withLinks(text)}
              </p>
            );
          })}
        </article>

        <Reveal>
          <CTABand title="Ready to tell your story?" cta="Start a project" layout="center" />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
