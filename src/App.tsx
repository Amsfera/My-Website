import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import MusicWriting from "./pages/MusicWriting";
import DataDashboard from "./pages/DataDashboard";
import ExcelCustomization from "./pages/ExcelCustomization";
import EngineeringDesign from "./pages/EngineeringDesign";
import CreativeServices from "./pages/CreativeServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/music-writing" element={<MusicWriting />} />
          <Route path="/data-dashboard" element={<DataDashboard />} />
          <Route path="/excel-customization" element={<ExcelCustomization />} />
          <Route path="/engineering-design" element={<EngineeringDesign />} />
          <Route path="/creative-services" element={<CreativeServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
