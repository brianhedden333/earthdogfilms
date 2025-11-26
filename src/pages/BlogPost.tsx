import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-stone-900 mb-6">Post Not Found</h1>
            <p className="text-lg text-stone-600 mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section with Featured Image */}
      <section className="pt-24 pb-0">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-stone-600 hover:text-red-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <p className="text-sm text-stone-500 mb-4">{post.date}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              {post.title}
            </h1>
            {post.author && (
              <p className="text-lg text-stone-600">By {post.author}</p>
            )}
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-xl mb-12"
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose prose-lg prose-stone max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              // Handle headers
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-4xl font-bold text-stone-900 mt-12 mb-6">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-stone-900 mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-stone-900 mt-8 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }

              // Handle bold text
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-bold text-stone-900 mt-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }

              // Handle links [text](/url)
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              if (linkRegex.test(paragraph)) {
                const parts = paragraph.split(linkRegex);
                return (
                  <p key={index} className="text-stone-700 leading-relaxed mb-4">
                    {parts.map((part, i) => {
                      if (i % 3 === 1) {
                        return (
                          <Link
                            key={i}
                            to={parts[i + 1]}
                            className="text-red-600 hover:text-red-700 underline"
                          >
                            {part}
                          </Link>
                        );
                      }
                      if (i % 3 === 2) return null;
                      return part;
                    })}
                  </p>
                );
              }

              // Regular paragraphs
              if (paragraph.trim() && !paragraph.startsWith('#')) {
                return (
                  <p key={index} className="text-stone-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Tell Your Story?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's create something meaningful together
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
