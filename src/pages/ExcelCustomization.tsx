import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Zap, Database, Settings, BarChart3, Code } from "lucide-react";

import excelSpreadsheetImg from "@/assets/excel-spreadsheet.jpg";
import excelAutomationImg from "@/assets/excel-automation.jpg";

const galleryImages = [
  { src: excelSpreadsheetImg, alt: "Excel spreadsheet with charts", caption: "Custom Excel Dashboards" },
  { src: excelAutomationImg, alt: "Business automation workflow", caption: "Workflow Automation" },
];

const services = [
  {
    icon: FileSpreadsheet,
    title: "Excel/Google Sheets Entry",
    description: "Professional data entry in Excel and Google Sheets with high accuracy and formatting.",
  },
  {
    icon: Zap,
    title: "PDF to Word/Excel Conversion",
    description: "Quick and accurate conversion of PDF documents to editable Word or Excel formats.",
  },
  {
    icon: Database,
    title: "Formatting, Sorting & Cleanup",
    description: "Data cleaning, sorting, and professional formatting for organized datasets.",
  },
  {
    icon: Settings,
    title: "Report Structuring",
    description: "Professional report layouts and structuring for clear data presentation.",
  },
  {
    icon: BarChart3,
    title: "File Organization",
    description: "Systematic file organization and data management for easy access and retrieval.",
  },
  {
    icon: Code,
    title: "Business Records & Admin Support",
    description: "Complete administrative support including business records management.",
  },
];

const ExcelCustomization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-green-600 bg-green-500/10 rounded-full">
                Data Entry Services
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Accurate, Efficient & Dependable Data Handling
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                For companies and individuals struggling with data workload, Amsfera provides smooth and fast data entry services. We ensure high accuracy with professional formatting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Examples
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
                Best for students, businesses, offices, retailers, or anyone needing quick data support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-green-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-green-600" />
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
                Our Excel Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See examples of our custom spreadsheet work
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
                Need a Custom Excel Solution?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how we can streamline your workflows and boost productivity.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExcelCustomization;
