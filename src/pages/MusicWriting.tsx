import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Music, BookOpen, Mic, PenLine, Headphones, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

import musicStudioImg from "@/assets/music-studio.jpg";
import contentWritingImg from "@/assets/content-writing.jpg";

const galleryImages = [
  { src: musicStudioImg, alt: "Professional music production studio", caption: "Our Music Production Studio" },
  { src: contentWritingImg, alt: "Content writing workspace", caption: "Creative Writing Environment" },
];

const services = [
  {
    icon: Music,
    title: "Original Composition",
    description: "Custom music pieces in any mood - romantic, sad, happy, trap, lo-fi with full song structure (verse, hook, chorus).",
  },
  {
    icon: Mic,
    title: "Hindi Lyrics Writing",
    description: "High-quality Hindi lyrics that capture emotion and meaning for your songs and tracks.",
  },
  {
    icon: Headphones,
    title: "Instrumental & Theme Music",
    description: "Background music, intro/outro themes, and beats for rap, indie, or commercial tracks.",
  },
  {
    icon: BookOpen,
    title: "Content Writing",
    description: "Website content, blog posts, social media captions, and product descriptions that engage readers.",
  },
  {
    icon: PenLine,
    title: "Professional Bio & Email Content",
    description: "Professional bio writing, email content, corporate messages, and promotional scripts.",
  },
  {
    icon: FileText,
    title: "Ads & Promotional Scripts",
    description: "Compelling advertising copy and promotional scripts that convey your message effectively.",
  },
];

const MusicWriting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-b border-border">
          <div className="container px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <Music className="h-4 w-4" />
              Music, Composition & Content
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight animate-fade-in [animation-delay:100ms] opacity-0 text-balance max-w-4xl mx-auto">
              Let Your Feelings Transform Into Music
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground animate-fade-in [animation-delay:200ms] opacity-0 max-w-2xl mx-auto">
              We create original music pieces and lyrical content that match your theme, mood, and emotion. Plus, content writing that engages readers, builds trust, and conveys your message effectively.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground">
                What We Deliver
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Best for singers, filmmakers, YouTubers, businesses, influencers, startups, and content creators
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in opacity-0"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground">
                Our Creative Space
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Where music meets words in professional environments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-secondary/50">
          <div className="container px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground animate-fade-in">
              Ready to Create Something Amazing?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto animate-fade-in [animation-delay:100ms] opacity-0">
              Let's collaborate and bring your creative projects to life with professional music and writing services.
            </p>
            <div className="mt-8 animate-fade-in [animation-delay:200ms] opacity-0">
              <Button size="lg" className="px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MusicWriting;
