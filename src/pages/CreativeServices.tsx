import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shirt, Palette, Users, Heart, Image, Gift } from "lucide-react";

import tshirtDesignImg from "@/assets/tshirt-design.jpg";
import portraitSketchImg from "@/assets/portrait-sketch.jpg";

const galleryImages = [
  { src: tshirtDesignImg, alt: "Custom T-shirt designs", caption: "Custom T-Shirt Printing" },
  { src: portraitSketchImg, alt: "Digital portrait sketch", caption: "Digital Portrait Sketches" },
];

const services = [
  {
    icon: Shirt,
    title: "Personalized T-Shirt Designs",
    description: "Your idea transformed into creative output - from concept to finished design.",
  },
  {
    icon: Users,
    title: "Bulk Order Printing",
    description: "High-quality printing for schools, events, corporates, and teams with premium fabric options.",
  },
  {
    icon: Gift,
    title: "Special Occasion T-Shirts",
    description: "Birthday, anniversary, couple T-shirts with logo and text printing for memorable gifts.",
  },
  {
    icon: Palette,
    title: "Single & Couple Portraits",
    description: "Beautiful digital sketch portraits made with attention to detail for individuals and couples.",
  },
  {
    icon: Heart,
    title: "Family & Pet Sketches",
    description: "Artistic family portraits and pet sketches with optional artistic backgrounds.",
  },
  {
    icon: Image,
    title: "High-Resolution Digital Files",
    description: "All artwork delivered as high-resolution digital files perfect for printing or sharing.",
  },
];

const CreativeServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-purple-500/5" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-600 bg-pink-500/10 rounded-full">
                Creative & Custom Products
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Wear Your Imagination & Capture Emotions
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Amsfera offers creative custom T-shirt designs, printing solutions, and beautiful digital sketch portraits. From high-quality designs to premium printing and art that captures emotions — everything is done with perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Order Custom Design
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
                Best for startups, corporates, college events, teams, gifting, special occasions, and personal use
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5 group-hover:bg-pink-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-pink-600" />
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
                Our Creative Work
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Custom designs and artwork that make perfect gifts and keepsakes
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
                Ready to Create Something Special?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let us bring your creative vision to life with custom designs and artwork.
              </p>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Start Your Order
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreativeServices;
