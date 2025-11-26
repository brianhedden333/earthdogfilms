export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-power-of-visual-storytelling",
    title: "The Power of Visual Storytelling",
    date: "November 25, 2024",
    excerpt: "Exploring how video connects with audiences on a deeper emotional level than any other medium.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&h=450",
    author: "Earth Dog Films",
    content: `
# The Power of Visual Storytelling

Visual storytelling has the unique ability to connect with audiences on a deeper emotional level than any other medium. Through the combination of moving images, sound, and narrative structure, we can create experiences that resonate long after the screen goes dark.

## Why Video Matters

In today's fast-paced digital landscape, video content stands out as the most engaging format. Studies show that people retain 95% of a message when they watch it in a video compared to just 10% when reading it in text.

But beyond the statistics, there's something fundamentally human about storytelling through moving images. It taps into our visual nature and our innate love of stories.

## The Elements of Great Visual Storytelling

### 1. Authentic Characters
Real people, real stories. The most compelling videos feature authentic voices that audiences can connect with.

### 2. Emotional Arc
Every story needs a journey. Whether it's a 30-second commercial or a feature documentary, the emotional arc keeps viewers engaged.

### 3. Visual Craft
Beautiful cinematography isn't just about aesthetics—it's about creating a visual language that supports and enhances the narrative.

### 4. Purpose and Meaning
The best stories have something to say. They leave the audience with a feeling, an idea, or a call to action.

## Bringing Your Story to Life

At Earth Dog Films, we believe every organization, business, and cause has a story worth telling. Our job is to find that story and bring it to life in a way that resonates with your audience and drives real impact.

Ready to tell your story? [Get in touch](/contact) and let's create something meaningful together.
    `
  },
  {
    slug: "documentary-filmmaking-in-the-digital-age",
    title: "Documentary Filmmaking in the Digital Age",
    date: "November 18, 2024",
    excerpt: "How modern technology has democratized documentary filmmaking while raising the bar for storytelling.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&h=450",
    author: "Earth Dog Films",
    content: `
# Documentary Filmmaking in the Digital Age

The landscape of documentary filmmaking has transformed dramatically over the past decade. What once required extensive budgets and large crews can now be accomplished with smaller teams and more nimble approaches—but that doesn't mean the craft has gotten easier.

## The Democratization of Filmmaking

Digital cameras and accessible editing software have opened the door for more voices to tell their stories. This democratization has led to an explosion of documentary content across streaming platforms and social media.

### The Opportunities
- Lower barriers to entry
- More diverse voices and perspectives
- Faster production timelines
- Greater distribution possibilities

### The Challenges
- Increased competition for audience attention
- Higher expectations for production quality
- The need to stand out in a crowded field
- Balancing speed with storytelling craft

## What Hasn't Changed

Despite all the technological advances, the fundamentals of great documentary filmmaking remain the same:

**Trust and Access**: Building relationships with your subjects takes time and genuine care. There are no shortcuts to earning trust.

**Story First**: All the fancy cameras and drones in the world can't save a weak story. The narrative always comes first.

**Ethical Responsibility**: Documentary filmmakers have a responsibility to their subjects and their audiences. That hasn't changed with digital technology.

**Emotional Truth**: The best documentaries reveal emotional truths that resonate beyond the specific story being told.

## Finding the Balance

At Earth Dog Films, we embrace the possibilities of modern technology while staying grounded in the timeless principles of documentary storytelling. We believe the best work happens when cutting-edge tools serve authentic, meaningful stories.

The digital age has given us incredible tools. Our job is to use them wisely in service of stories that matter.
    `
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
