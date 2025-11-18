import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InstalacionesElectricas from "./pages/services/InstalacionesElectricas";
import Mantenimiento from "./pages/services/Mantenimiento";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      {/* 👇 Basename correcto para GitHub Pages */}
      <BrowserRouter basename="/redcontrol-energy-solutions">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/instalaciones-electricas" element={<InstalacionesElectricas />} />
          <Route path="/servicios/mantenimiento" element={<Mantenimiento />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
