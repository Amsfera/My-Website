import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Heart, Award, Palette, Music, BarChart3, Building2, Layers, IndianRupee, Settings, MapPin, CheckCircle } from "lucide-react";

const About = () => {
  const missionPoints = [
    "To simplify freelancing by bringing diverse services under one roof",
    "To ensure transparency, trust, and easy communication between clients and our studio",
    "To deliver high-quality work with professionalism and creativity",
    "To support Indian talent by offering a platform where skill meets opportunity",
    "To provide customized solutions for individuals, businesses, and events",
  ];

  const services = [
    {
      icon: Palette,
      title: "Creative & Design Services",
      items: [
        "Custom T-shirt designs for individuals, events, and functions",
        "Branding design (logos, banners, visiting cards)",
        "Sketching & illustration",
        "Digital art & poster design",
        "Social media graphics",
        "Festival & invitation designs",
      ],
    },
    {
      icon: Music,
      title: "Music & Audio Services",
      items: [
        "Background music creation",
        "Audio editing & mixing",
        "Music for personal projects, intros, reels, ads, and more",
      ],
    },
    {
      icon: BarChart3,
      title: "Business & Presentation Services",
      items: [
        "Digital dashboards",
        "Data visualization",
        "Professional PowerPoint presentations",
        "Project reports & documentation",
      ],
    },
    {
      icon: Building2,
      title: "Civil & Engineering Services",
      items: [
        "Basic designing & drafting",
        "Layout planning",
        "Visual concepts for structures",
        "Technical drawings (as required)",
      ],
    },
  ];

  const whyChoose = [
    {
      icon: Layers,
      title: "One Platform — Unlimited Services",
      description: "Everything you need, from creativity to engineering, available at one digital studio.",
    },
    {
      icon: IndianRupee,
      title: "Budget-Friendly for Everyone",
      description: "We offer pricing that students, individuals, freelancers, and small businesses can easily afford.",
    },
    {
      icon: Settings,
      title: "Customized to Your Needs",
      description: "Every service is tailored according to your requirement — no templates, no generic work.",
    },
    {
      icon: MapPin,
      title: "Indian, For India",
      description: "Amsfera is built with a deep understanding of Indian users, culture, and affordability.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-primary">Amsfera</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Amsfera is a next-generation multi-purpose freelancing studio designed to connect people 
              with a wide range of creative, technical, and professional services — all on one simple, 
              budget-friendly Indian platform.
            </p>
          </div>
        </section>

        {/* About Description */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe that every individual, business, creator, and community deserves easy access 
                to high-quality digital services without complexity or high cost. Amsfera brings together 
                skilled freelancers across different domains and offers them in a unified, reliable, and 
                user-friendly studio experience.
              </p>
              <p className="text-lg text-foreground font-medium">
                Our goal is simple: To make premium services accessible for everyone — from small businesses 
                to students to event organizers to professionals — at honest and affordable prices.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become India's most trusted, versatile, and innovative freelancing studio, where people 
                can effortlessly find any service they need, all in one place. We aim to empower every Indian 
                — creators, professionals, startups, families, students, and organizations — with affordable, 
                customizable, and high-quality digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Amsfera is not just a service provider — it is a complete digital and creative ecosystem. 
                We cover multiple categories so users don't need to search anywhere else.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title} 
                  className="bg-background rounded-xl p-6 shadow-sm border border-border/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              Amsfera is built to grow continuously. New services will be added to ensure that the platform 
              always meets the evolving needs of our users.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Amsfera?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChoose.map((item) => (
                <div 
                  key={item.title} 
                  className="bg-secondary/50 rounded-xl p-6 text-center hover:bg-secondary/70 transition-colors"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Platform Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple & Easy-to-Use Platform</h2>
              <p className="text-lg text-muted-foreground mb-4">
                No confusion. No complications.
              </p>
              <p className="text-lg text-foreground font-medium">
                Just choose your service, submit your requirement, and we take care of the rest.
              </p>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Amsfera, we don't just deliver a service — <br />
                <span className="text-foreground font-medium">We deliver trust, quality, creativity, and a hassle-free experience.</span>
              </p>
              <div className="text-muted-foreground space-y-2 mb-6">
                <p>Whether you need a T-shirt design for a family function…</p>
                <p>a dashboard for your business…</p>
                <p>a sketch for someone special…</p>
                <p>or a presentation for your office…</p>
              </div>
              <p className="text-xl text-primary font-semibold">
                Amsfera is your one-stop solution.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
