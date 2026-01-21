import { Music, Monitor, FileSpreadsheet, HardHat, PenTool, Shirt } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

const services = [
  {
    icon: Music,
    title: "Music & Writing",
    description: "Creative content hub",
    href: "/music-writing",
  },
  {
    icon: Monitor,
    title: "Data Dashboard",
    description: "Analytics & visualization",
    href: "/data-dashboard",
  },
  {
    icon: FileSpreadsheet,
    title: "Fast Data Entry",
    description: "Quick & accurate solutions",
    href: "/excel-customization",
  },
  {
    icon: PenTool,
    title: "Creative Services",
    description: "Design & visual solutions",
    href: "/creative-services",
  },
  {
    icon: HardHat,
    title: "Engineering & Design",
    description: "Civil design & consultancy",
    href: "/engineering-design",
  },
  {
    icon: Shirt,
    title: "Custom T-Shirts",
    description: "Personalized prints for events",
    href: "/creative-services",
  },
];

const Services = () => {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12 animate-fade-in opacity-0 [animation-delay:900ms]">
          <Button size="lg" className="px-6 sm:px-8">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
