import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Ruler, FileText, HardHat, Compass, PenTool } from "lucide-react";

import engineeringBlueprintsImg from "@/assets/engineering-blueprints.jpg";
import engineeringCadImg from "@/assets/engineering-cad.jpg";

const galleryImages = [
  { src: engineeringBlueprintsImg, alt: "Engineer reviewing blueprints", caption: "Blueprint Review & Planning" },
  { src: engineeringCadImg, alt: "3D CAD modeling", caption: "3D CAD Modeling" },
];

const services = [
  {
    icon: Building2,
    title: "AutoCAD Technical Drawings",
    description: "Professional AutoCAD drawings for construction, piping, structure, and layout designs.",
  },
  {
    icon: Ruler,
    title: "Site Layout Designs",
    description: "Comprehensive site layout designs and project plans with detailed documentation.",
  },
  {
    icon: FileText,
    title: "Engineering Presentations",
    description: "Professional engineering presentations and documentation for project stakeholders.",
  },
  {
    icon: HardHat,
    title: "Full Home Construction",
    description: "Complete construction from foundation to finishing with strong materials and modern techniques.",
  },
  {
    icon: Compass,
    title: "Creative Layout & Space Planning",
    description: "Smart design concepts that maximize space, improve lighting, enhance ventilation, and increase functionality.",
  },
  {
    icon: PenTool,
    title: "Structural Consulting",
    description: "Expert guidance on strength, durability, safety standards, and load-bearing designs.",
  },
];

const EngineeringDesign = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-orange-600 bg-orange-500/10 rounded-full">
                Engineering & Construction
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Technical Precision With Creative Clarity
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                From smart planning to complete construction — we turn your dream space into a beautiful reality. Amsfera provides end-to-end construction solutions with quality, transparency, and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                What We Deliver
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Best for construction companies, contractors, engineering students, project managers, and industrial clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Our Engineering Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional engineering and design work
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
        <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's bring your engineering vision to life with professional design and consultation.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EngineeringDesign;
