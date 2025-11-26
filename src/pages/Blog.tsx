
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            Thoughts on filmmaking, storytelling, and the craft of visual narratives.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Coming Soon</h2>
              <p className="text-stone-600">
                Our blog is under development. Check back soon for insights on filmmaking, storytelling, and the creative process.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full cursor-pointer group">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <CardContent className="p-6">
                      <p className="text-sm text-stone-500 mb-2">{post.date}</p>
                      <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
