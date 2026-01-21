import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, PieChart, TrendingUp, Database, LineChart, Table2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import dataAnalyticsImg from "@/assets/data-analytics.jpg";
import dataVisualizationImg from "@/assets/data-visualization.jpg";

const galleryImages = [
  { src: dataAnalyticsImg, alt: "Data analytics dashboard", caption: "Advanced Analytics Dashboard" },
  { src: dataVisualizationImg, alt: "Business intelligence visualization", caption: "Business Intelligence Visualizations" },
];

const services = [
  {
    icon: BarChart3,
    title: "Power BI Dashboards",
    description: "Dynamic dashboards with interactive filters for powerful analytics and BI insights.",
  },
  {
    icon: PieChart,
    title: "Excel Dashboard Layouts",
    description: "Professional layouts with formulas, charts, KPIs, and metrics for clear data visualization.",
  },
  {
    icon: TrendingUp,
    title: "MSP Project Dashboards",
    description: "Timeline visuals, project scheduling, and progress tracking using Microsoft Project.",
  },
  {
    icon: Database,
    title: "Business Reporting",
    description: "Business and project progress reporting with clean layout and professional formatting.",
  },
  {
    icon: LineChart,
    title: "Presentation-Ready Dashboards",
    description: "Dashboards optimized for PPT/PDF presentations with clean, professional visuals.",
  },
  {
    icon: Table2,
    title: "Data Cleaning & Structuring",
    description: "Formulas, data cleaning, charts, metrics, and tables for organized insights.",
  },
];

const features = [
  { stat: "50+", label: "Dashboards Built" },
  { stat: "99%", label: "Client Satisfaction" },
  { stat: "24/7", label: "Real-time Updates" },
  { stat: "10x", label: "Faster Insights" },
];

const DataDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 border-b border-border">
          <div className="container px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in">
              <BarChart3 className="h-4 w-4" />
              Professional Dashboard Representation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight animate-fade-in [animation-delay:100ms] opacity-0 text-balance max-w-4xl mx-auto">
              Transform Raw Data Into Meaningful Visuals
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground animate-fade-in [animation-delay:200ms] opacity-0 max-w-2xl mx-auto">
              Amsfera creates high-quality dashboards backed by powerful data analysis using Power BI, Microsoft Project (MSP), and Excel. We turn complex datasets into smart, clear, and interactive visuals that help you make confident business decisions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <Button size="lg" className="w-full sm:w-auto px-8">
                Request Demo
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                View Examples
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-secondary/30">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in opacity-0"
                  style={{ animationDelay: `${350 + index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">
                    {feature.stat}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {feature.label}
                  </div>
                </div>
              ))}
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
                Best for managers, business owners, students, engineers, data teams, and anyone who needs data clarity
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 animate-fade-in opacity-0"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
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
                Our Work
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                See our data visualization projects in action
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto animate-fade-in [animation-delay:100ms] opacity-0">
              Let's build a custom dashboard that transforms your data into powerful insights for smarter decisions.
            </p>
            <div className="mt-8 animate-fade-in [animation-delay:200ms] opacity-0">
              <Button size="lg" className="px-8">
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

export default DataDashboard;
