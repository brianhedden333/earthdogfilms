
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoLightbox from "@/components/VideoLightbox";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{
    vimeoId?: string;
    youtubeId?: string;
    title: string;
  } | null>(null);
  const [isVertical, setIsVertical] = useState(false);
  const [visibleCommercial, setVisibleCommercial] = useState(3);
  const [visibleDocMarketing, setVisibleDocMarketing] = useState(3);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setVisibleCommercial(6);
      setVisibleDocMarketing(6);
    }
  }, []);

  const handleSeeMoreCommercial = () => {
    if (window.innerWidth >= 768) {
      setVisibleCommercial(commercialWork.length);
    } else {
      setVisibleCommercial(prev => Math.min(prev + 3, commercialWork.length));
    }
  };

  const handleSeeMoreDocMarketing = () => {
    if (window.innerWidth >= 768) {
      setVisibleDocMarketing(documentaryMarketingWork.length);
    } else {
      setVisibleDocMarketing(prev => Math.min(prev + 3, documentaryMarketingWork.length));
    }
  };
  const [subOverlayOpen, setSubOverlayOpen] = useState(false);
  const [subOverlayProject, setSubOverlayProject] = useState<{
    title: string;
    description: string;
    subVideos: { vimeoId: string; title: string; duration?: string }[];
  } | null>(null);

  const commercialWork = [
    {
      title: "Seligman for AG Commercial",
      description: "A 30-second advertisement for the David Seligman for Attorney General campaign in the 2026 Colorado Democratic Primary election.",
      vimeoId: "1202700031",
      customThumbnail: "/lovable-uploads/seligman-thumb.jpg",
      duration: "0:30"
    },
    {
      title: "Yes on 7A",
      description: "A sample of testimonial videos made for Strong Start Bright Future's Yes on 7A campaign in Colorado's Roaring Fork Valley.",
      vimeoId: "1122992265/e830dc73f5",
      customThumbnail: "/lovable-uploads/yes-on-1a-thumb.png",
      duration: "1:32"
    },
    {
      title: "Awaken School",
      description: "A short promotional video for the Spiritual and Successful workshop hosted by Rachael Jayne Groover and the Awaken School in Loveland, Colorado.",
      vimeoId: "1125623603",
      customThumbnail: "/lovable-uploads/awaken-school-thumb.jpg",
      duration: "1:45"
    },
    {
      title: "QuoteThat",
      description: "A web commercial for a family-oriented mobile app founded in Boulder, Colorado.",
      vimeoId: "251723265",
      duration: "0:39"
    },
    {
      title: "Transformative Solutions",
      description: "An extended promotional video explaining the approach and dynamic offerings of a Boulder-based business coaching company.",
      vimeoId: "270209806",
      duration: "3:50"
    },
    {
      title: "California Center for Sustainable Energy",
      description: "A short explainer video about the services provided by the sustainability non-profit based in San Diego, California.",
      vimeoId: "51964106",
      duration: "1:32"
    },
    {
      title: "VMIX Media",
      description: "An explainer video for a white-label video distribution startup based in Del Mar, California.",
      vimeoId: "252373163",
      duration: "1:50"
    },
    {
      title: "The Patchwork School",
      description: "A virtual tour for an innovative school based in Louisville, Colorado.",
      vimeoId: "363362257",
      duration: "4:31"
    },
    {
      title: "Sacred Sons",
      description: "A promotional video for a men's community and personal transformation course.",
      vimeoId: "344372805",
      duration: "1:46"
    }
  ];

  const documentaryMarketingWork = [
    {
      title: "Gonzales for Senate",
      description: "A sample of short, vertical, documentary-style promotional videos intended for organic social media impact.",
      vimeoId: "1205342921",
      customThumbnail: "/lovable-uploads/gonzales-thumb.jpg",
      subVideos: [
        { vimeoId: "1209622639", title: "Gonzales for Senate - Vol. 3", duration: "0:34", customThumbnail: "/lovable-uploads/gonzales-sub3-thumb.jpg" },
        { vimeoId: "1205342921", title: "Gonzales for Senate - Vol. 1", duration: "0:49", customThumbnail: "/lovable-uploads/gonzales-sub1-thumb.jpg" },
        { vimeoId: "1203265891", title: "Gonzales for Senate - Vol. 2", duration: "0:30", customThumbnail: "/lovable-uploads/gonzales-sub2-thumb.jpg" },
      ]
    },
    {
      title: "Towards Animism",
      description: "A short promotional documentary for land-based workshops by herbalist Kat Mackinnon.",
      youtubeId: "Zx8nrOw0xLI",
      customThumbnail: "/lovable-uploads/towards-animism-thumb.png",
      duration: "3:28"
    },
    {
      title: "Earthaven Ecovillage",
      description: "An overview of a permaculure-based ecovillage outside of Asheville, North Carolina.",
      youtubeId: "ybFE15LM1h8",
      duration: "7:23"
    },
    {
      title: "Elephant Collective",
      description: "A portrait of an musician incubation program in Boulder, Colorado.",
      vimeoId: "379624699",
      duration: "5:28"
    },
    {
      title: "Advocates for Injured Athletes",
      description: "The origin story of a youth sports safety non-profit based in San Diego, California.",
      vimeoId: "28742880",
      duration: "5:11"
    },
    {
      title: "The Blind Cafe",
      description: "A unique dining experience in darkness.",
      vimeoId: "363364357",
      duration: "1:56"
    },
    {
      title: "The Linkery's Ethan and Steph",
      description: "The story of cask beer at a farm-to-table restaurant in San Diego, California.",
      vimeoId: "17943030",
      duration: "3:08"
    },
    {
      title: "The Linkery's Max",
      description: "A chef's passion for house-made everything at a farm-to-table restaurant in San Diego, California.",
      vimeoId: "17577920",
      duration: "2:55"
    },
    {
      title: "The Linkery's Ian",
      description: "Hand-made bread and community connection at a farm-to-table restaurant in San Diego, California",
      vimeoId: "17988223",
      duration: "2:51"
    },
    {
      title: "Zone 7 Winter",
      description: "A local food distribution company overcomes the challenges of winter in New Jersey.",
      vimeoId: "19838162",
      duration: "5:12"
    },
    {
      title: "Zone 7 Spring",
      description: "A local food distribution company celebrates spring farming and renewal in New Jersey.",
      vimeoId: "118621660",
      duration: "4:57"
    }
  ];

  const documentaryWork = [
    {
    title: "Fracking the System: Colorado's Oil and Gas Wars",
    description: (
      <p>
        When a mega-fracking site gets moved from a White neighborhood to a BIPOC neighborhood, a mother fights to try and stop it. She joins the state-wide effort to change the law, but the powerful oil and gas industry fights back with lawsuits, harassment, sabotage, and $50 million.
        <br /><br />
        Watch the film here:{" "}
        <a href="https://www.frackingthesystem.com" target="_blank" rel="noopener noreferrer">
          FrackingTheSystem.com
        </a>
      </p>
    ),
    youtubeId: "T-azhfhG0H0",
    duration: "1:59"
  }
  ];

  const musicDanceWork = [
    {
      title: "Jeff and Paige - The Great Monarch Migration (Official Music Video)",
      description: "Official music video celebrating the wonder of the monarch butterfly migration.",
      vimeoId: "270158301",
      duration: "5:47"
    },
    {
      title: "Ayla Nereo - Tightrope Walker at Red Rocks Promo",
      description: "Promotional video for Ayla Nereo's performance at Red Rocks Amphitheatre.",
      vimeoId: "355230121",
      duration: "1:00"
    },
    {
      title: "Redrocks Polish Ambassador ft. Ayla Nereo (Wildlight)",
      description: "Live performance footage of Polish Ambassador featuring Ayla Nereo at Red Rocks.",
      vimeoId: "336685007",
      duration: "1:00"
    },
    {
      title: "Changing of the Light - Acroyoga",
      description: "A beautiful acroyoga performance capturing movement and connection.",
      vimeoId: "625275624",
      duration: "2:33"
    },
    {
      title: "Jeacey Adams Hooping to Nada by Lido Pimienta in Paonia, CO",
      description: "Flow arts performance filmed in the scenic landscape of Paonia, Colorado.",
      vimeoId: "487005355",
      duration: "1:36"
    }
  ];

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": "Fracking the System: Colorado's Oil and Gas Wars — Trailer",
        "description": "Trailer for the feature documentary about environmental justice and the oil and gas industry in Colorado.",
        "thumbnailUrl": "https://img.youtube.com/vi/T-azhfhG0H0/maxresdefault.jpg",
        "uploadDate": "2022-01-01",
        "duration": "PT1M59S",
        "embedUrl": "https://www.youtube.com/embed/T-azhfhG0H0",
        "contentUrl": "https://www.youtube.com/watch?v=T-azhfhG0H0"
      },
      {
        "@type": "VideoObject",
        "name": "Seligman for AG Commercial",
        "description": "A 30-second advertisement for the David Seligman for Attorney General campaign in the 2026 Colorado Democratic Primary election.",
        "thumbnailUrl": "https://vumbnail.com/1202700031.jpg",
        "uploadDate": "2025-06-01",
        "duration": "PT30S",
        "embedUrl": "https://player.vimeo.com/video/1202700031",
        "contentUrl": "https://vimeo.com/1202700031"
      },
      {
        "@type": "VideoObject",
        "name": "Yes on 7A — Strong Start Bright Future Campaign",
        "description": "A sample of testimonial videos made for Strong Start Bright Future's Yes on 7A campaign in Colorado's Roaring Fork Valley.",
        "thumbnailUrl": "https://earthdogfilms.com/lovable-uploads/yes-on-1a-thumb.png",
        "uploadDate": "2024-10-01",
        "duration": "PT1M32S",
        "embedUrl": "https://player.vimeo.com/video/1122992265?h=e830dc73f5",
        "contentUrl": "https://vimeo.com/1122992265"
      },
      {
        "@type": "VideoObject",
        "name": "Awaken School — Spiritual and Successful Workshop",
        "description": "A short promotional video for the Spiritual and Successful workshop hosted by Rachael Jayne Groover and the Awaken School in Loveland, Colorado.",
        "thumbnailUrl": "https://earthdogfilms.com/lovable-uploads/awaken-school-thumb.jpg",
        "uploadDate": "2024-11-01",
        "duration": "PT1M45S",
        "embedUrl": "https://player.vimeo.com/video/1125623603",
        "contentUrl": "https://vimeo.com/1125623603"
      },
      {
        "@type": "VideoObject",
        "name": "QuoteThat — Mobile App Commercial",
        "description": "A web commercial for a family-oriented mobile app founded in Boulder, Colorado.",
        "thumbnailUrl": "https://vumbnail.com/251723265.jpg",
        "uploadDate": "2017-09-01",
        "duration": "PT39S",
        "embedUrl": "https://player.vimeo.com/video/251723265",
        "contentUrl": "https://vimeo.com/251723265"
      },
      {
        "@type": "VideoObject",
        "name": "Transformative Solutions — Business Coaching Promo",
        "description": "An extended promotional video explaining the approach and dynamic offerings of a Boulder-based business coaching company.",
        "thumbnailUrl": "https://vumbnail.com/270209806.jpg",
        "uploadDate": "2018-04-01",
        "duration": "PT3M50S",
        "embedUrl": "https://player.vimeo.com/video/270209806",
        "contentUrl": "https://vimeo.com/270209806"
      },
      {
        "@type": "VideoObject",
        "name": "California Center for Sustainable Energy",
        "description": "A short explainer video about the services provided by the sustainability non-profit based in San Diego, California.",
        "thumbnailUrl": "https://vumbnail.com/51964106.jpg",
        "uploadDate": "2013-06-01",
        "duration": "PT1M32S",
        "embedUrl": "https://player.vimeo.com/video/51964106",
        "contentUrl": "https://vimeo.com/51964106"
      },
      {
        "@type": "VideoObject",
        "name": "VMIX Media — Video Distribution Explainer",
        "description": "An explainer video for a white-label video distribution startup based in Del Mar, California.",
        "thumbnailUrl": "https://vumbnail.com/252373163.jpg",
        "uploadDate": "2017-09-01",
        "duration": "PT1M50S",
        "embedUrl": "https://player.vimeo.com/video/252373163",
        "contentUrl": "https://vimeo.com/252373163"
      },
      {
        "@type": "VideoObject",
        "name": "The Patchwork School — Virtual Tour",
        "description": "A virtual tour for an innovative school based in Louisville, Colorado.",
        "thumbnailUrl": "https://vumbnail.com/363362257.jpg",
        "uploadDate": "2019-10-01",
        "duration": "PT4M31S",
        "embedUrl": "https://player.vimeo.com/video/363362257",
        "contentUrl": "https://vimeo.com/363362257"
      },
      {
        "@type": "VideoObject",
        "name": "Sacred Sons — Men's Community Promo",
        "description": "A promotional video for a men's community and personal transformation course.",
        "thumbnailUrl": "https://vumbnail.com/344372805.jpg",
        "uploadDate": "2019-04-01",
        "duration": "PT1M46S",
        "embedUrl": "https://player.vimeo.com/video/344372805",
        "contentUrl": "https://vimeo.com/344372805"
      },
      {
        "@type": "VideoObject",
        "name": "Gonzales for Senate — Social Media Campaign",
        "description": "A sample of short, vertical promotional documentaries intended for organic social media impact.",
        "thumbnailUrl": "https://earthdogfilms.com/lovable-uploads/gonzales-thumb.jpg",
        "uploadDate": "2025-06-01",
        "duration": "PT49S",
        "embedUrl": "https://player.vimeo.com/video/1205342921",
        "contentUrl": "https://vimeo.com/1205342921"
      },
      {
        "@type": "VideoObject",
        "name": "Towards Animism — Land-Based Workshop Documentary",
        "description": "A short promotional documentary for land-based workshops by herbalist Kat Mackinnon.",
        "thumbnailUrl": "https://earthdogfilms.com/lovable-uploads/towards-animism-thumb.png",
        "uploadDate": "2019-08-01",
        "duration": "PT3M28S",
        "embedUrl": "https://www.youtube.com/embed/Zx8nrOw0xLI",
        "contentUrl": "https://www.youtube.com/watch?v=Zx8nrOw0xLI"
      },
      {
        "@type": "VideoObject",
        "name": "Earthaven Ecovillage",
        "description": "An overview of a permaculture-based ecovillage outside of Asheville, North Carolina.",
        "thumbnailUrl": "https://img.youtube.com/vi/ybFE15LM1h8/maxresdefault.jpg",
        "uploadDate": "2015-06-01",
        "duration": "PT7M23S",
        "embedUrl": "https://www.youtube.com/embed/ybFE15LM1h8",
        "contentUrl": "https://www.youtube.com/watch?v=ybFE15LM1h8"
      },
      {
        "@type": "VideoObject",
        "name": "Elephant Collective — Musician Incubation Portrait",
        "description": "A portrait of a musician incubation program in Boulder, Colorado.",
        "thumbnailUrl": "https://vumbnail.com/379624699.jpg",
        "uploadDate": "2020-01-01",
        "duration": "PT5M28S",
        "embedUrl": "https://player.vimeo.com/video/379624699",
        "contentUrl": "https://vimeo.com/379624699"
      },
      {
        "@type": "VideoObject",
        "name": "Advocates for Injured Athletes",
        "description": "The origin story of a youth sports safety non-profit based in San Diego, California.",
        "thumbnailUrl": "https://vumbnail.com/28742880.jpg",
        "uploadDate": "2013-01-01",
        "duration": "PT5M11S",
        "embedUrl": "https://player.vimeo.com/video/28742880",
        "contentUrl": "https://vimeo.com/28742880"
      },
      {
        "@type": "VideoObject",
        "name": "The Blind Cafe",
        "description": "A documentary about a unique dining experience in darkness.",
        "thumbnailUrl": "https://vumbnail.com/363364357.jpg",
        "uploadDate": "2019-10-01",
        "duration": "PT1M56S",
        "embedUrl": "https://player.vimeo.com/video/363364357",
        "contentUrl": "https://vimeo.com/363364357"
      },
      {
        "@type": "VideoObject",
        "name": "Zone 7 Winter — Local Food Distribution",
        "description": "A local food distribution company overcomes the challenges of winter in New Jersey.",
        "thumbnailUrl": "https://vumbnail.com/19838162.jpg",
        "uploadDate": "2012-06-01",
        "duration": "PT5M12S",
        "embedUrl": "https://player.vimeo.com/video/19838162",
        "contentUrl": "https://vimeo.com/19838162"
      },
      {
        "@type": "VideoObject",
        "name": "Zone 7 Spring — Local Food Distribution",
        "description": "A local food distribution company celebrates spring farming and renewal in New Jersey.",
        "thumbnailUrl": "https://vumbnail.com/118621660.jpg",
        "uploadDate": "2015-01-01",
        "duration": "PT4M57S",
        "embedUrl": "https://player.vimeo.com/video/118621660",
        "contentUrl": "https://vimeo.com/118621660"
      },
      {
        "@type": "VideoObject",
        "name": "Jeff and Paige — The Great Monarch Migration (Official Music Video)",
        "description": "Official music video celebrating the wonder of the monarch butterfly migration.",
        "thumbnailUrl": "https://vumbnail.com/270158301.jpg",
        "uploadDate": "2018-04-01",
        "duration": "PT5M47S",
        "embedUrl": "https://player.vimeo.com/video/270158301",
        "contentUrl": "https://vimeo.com/270158301"
      },
      {
        "@type": "VideoObject",
        "name": "Ayla Nereo — Tightrope Walker at Red Rocks Promo",
        "description": "Promotional video for Ayla Nereo's performance at Red Rocks Amphitheatre.",
        "thumbnailUrl": "https://vumbnail.com/355230121.jpg",
        "uploadDate": "2019-08-01",
        "duration": "PT1M",
        "embedUrl": "https://player.vimeo.com/video/355230121",
        "contentUrl": "https://vimeo.com/355230121"
      },
      {
        "@type": "VideoObject",
        "name": "Polish Ambassador ft. Ayla Nereo (Wildlight) — Red Rocks Live",
        "description": "Live performance footage of Polish Ambassador featuring Ayla Nereo at Red Rocks.",
        "thumbnailUrl": "https://vumbnail.com/336685007.jpg",
        "uploadDate": "2019-04-01",
        "duration": "PT1M",
        "embedUrl": "https://player.vimeo.com/video/336685007",
        "contentUrl": "https://vimeo.com/336685007"
      },
      {
        "@type": "VideoObject",
        "name": "Changing of the Light — Acroyoga Performance",
        "description": "A cinematic acroyoga performance capturing movement and connection.",
        "thumbnailUrl": "https://vumbnail.com/625275624.jpg",
        "uploadDate": "2021-09-01",
        "duration": "PT2M33S",
        "embedUrl": "https://player.vimeo.com/video/625275624",
        "contentUrl": "https://vimeo.com/625275624"
      },
      {
        "@type": "VideoObject",
        "name": "Jeacey Adams Hooping in Paonia, CO",
        "description": "Flow arts performance filmed in the scenic landscape of Paonia, Colorado.",
        "thumbnailUrl": "https://vumbnail.com/487005355.jpg",
        "uploadDate": "2021-01-01",
        "duration": "PT1M36S",
        "embedUrl": "https://player.vimeo.com/video/487005355",
        "contentUrl": "https://vimeo.com/487005355"
      }
    ]
  };

  const getVideoThumbnail = (vimeoId?: string, youtubeId?: string, customThumbnail?: string) => {
    if (customThumbnail) {
      return customThumbnail;
    }
    if (vimeoId) {
      return `https://vumbnail.com/${vimeoId}.jpg`;
    }
    if (youtubeId) {
      return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
    }
    return "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=450";
  };

  const handleVideoClick = (project: { title: string; vimeoId?: string; youtubeId?: string; subVideos?: { vimeoId: string; title: string; duration?: string }[]; description?: string }) => {
    if (project.subVideos) {
      setSubOverlayProject({ title: project.title, description: project.description || "", subVideos: project.subVideos });
      setSubOverlayOpen(true);
      return;
    }
    setIsVertical(false);
    setSelectedVideo({
      vimeoId: project.vimeoId,
      youtubeId: project.youtubeId,
      title: project.title
    });
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO
        title="Video Production Portfolio - Documentary & Brand Films"
        description="Explore Earth Dog Films' portfolio of documentary marketing, commercial brand films, political campaign videos, and feature documentaries. Award-winning video production in Boulder and Denver, Colorado for mission-driven organizations."
        canonical="/portfolio"
        structuredData={portfolioStructuredData}
      />
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We collaborate with organizations, businesses, and causes to tell stories that matter. 
            Our work lives at the intersection of authenticity and visual craft.
          </p>
        </div>
      </section>

      {/* Documentary Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Documentary</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our roots are in documentary. Authenticity and integrity are key ingredients to everything we make.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {documentaryWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img
                      src={getVideoThumbnail(undefined, project.youtubeId)}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={224}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-3">{project.title}</h3>
                    <div className="text-stone-600 leading-relaxed mb-4">{project.description}</div>
                    {project.duration && <p className="text-sm text-stone-400 mb-4">{project.duration}</p>}
                    <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                      <a
                        href="https://www.frackingthesystem.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Website
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial & Brand Films Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Commercial & Brand Films</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We help purpose-led companies and entrepreneurs tell their stories—through brand films,
              testimonials, and human-centered promotional content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialWork.slice(0, visibleCommercial).map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img
                      src={getVideoThumbnail(project.vimeoId, undefined, project.customThumbnail)}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={192}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                    {project.duration && <p className="text-sm text-stone-400 mt-2">Run time: {project.duration}</p>}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          {visibleCommercial < commercialWork.length && (
            <div className="text-center mt-8">
              <button onClick={handleSeeMoreCommercial} className="text-sm text-red-600 hover:text-red-700">
                see more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Documentary Marketing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Documentary Marketing</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Marketing content that brings documentary stories to life and connects with audiences
              through authentic storytelling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentaryMarketingWork.slice(0, visibleDocMarketing).map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img
                      src={getVideoThumbnail(project.vimeoId, project.youtubeId, project.customThumbnail)}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={192}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                    {project.duration && <p className="text-sm text-stone-400 mt-2">Run time: {project.duration}</p>}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
          {visibleDocMarketing < documentaryMarketingWork.length && (
            <div className="text-center mt-8">
              <button onClick={handleSeeMoreDocMarketing} className="text-sm text-red-600 hover:text-red-700">
                see more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Music & Dance Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Music & Dance</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Capturing the beauty of movement and music through cinematic visuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicDanceWork.map((project, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none overflow-hidden">
                <div onClick={() => handleVideoClick(project)}>
                  <div className="relative">
                    <img
                      src={getVideoThumbnail(project.vimeoId)}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width={400}
                      height={192}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-sans text-stone-900 mb-3">{project.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{project.description}</p>
                    {project.duration && <p className="text-sm text-stone-400 mt-2">Run time: {project.duration}</p>}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Love What You See?</h2>
          <p className="text-xl text-stone-300 mb-10">
            Let's create something meaningful for your organization
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Sub-video overlay */}
      {subOverlayOpen && subOverlayProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 transition-opacity duration-300"
          onClick={() => setSubOverlayOpen(false)}
        >
          <div
            className="max-w-3xl w-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-2xl font-bold text-white">{subOverlayProject.title}</h2>
                <p className="text-stone-400 text-sm mt-1">{subOverlayProject.description}</p>
              </div>
              <button
                onClick={() => setSubOverlayOpen(false)}
                className="text-white text-3xl leading-none ml-6 hover:text-stone-300"
              >
                ×
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {subOverlayProject.subVideos.map((video, i) => (
                <div
                  key={i}
                  className="cursor-pointer group"
                  onClick={() => {
                    setSubOverlayOpen(false);
                    setIsVertical(true);
                    setSelectedVideo({ vimeoId: video.vimeoId, title: video.title });
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={video.customThumbnail || `https://vumbnail.com/${video.vimeoId}.jpg`}
                      alt={video.title}
                      className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  {video.duration && (
                    <p className="text-stone-400 text-xs mt-2">Run time: {video.duration}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <VideoLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        vimeoId={selectedVideo?.vimeoId}
        youtubeId={selectedVideo?.youtubeId}
        title={selectedVideo?.title || ""}
        vertical={isVertical}
      />

      <Footer />
    </div>
  );
};

export default Portfolio;
