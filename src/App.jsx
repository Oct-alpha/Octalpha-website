import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Blog from "./pages/Blog";
import OctaMindAutonomous from "./pages/blogs/OctaMindAutonomous";
import GuideToAIGovernance from "./pages/blogs/GuideToAIGovernance";
import CustomersPage from "./pages/CustomersPage";
import ContactPage from "./pages/ContactPage";
import ITInfrastructure from "./pages/services/ITInfrastructure";
import Cybersecurity from "./pages/services/Cybersecurity";
import GRC from "./pages/services/GRC";
import CloudSolutions from "./pages/services/CloudSolutions";
import DigitalCollaboration from "./pages/services/DigitalCollaboration";
import ManagedITSolutions from "./pages/services/ManagedITSolutions";
import CustomerJourney from "./pages/services/CustomerJourney";
import ERP from "./pages/services/ERP";
import VAPT from "./pages/services/VAPT";
import VCISO from "./pages/services/VCISO";
import DueDiligence from "./pages/services/DueDiligence";
import BackupDisasterRecovery from "./pages/services/BackupDisasterRecovery";
import FinancialReconciliation from "./pages/services/FinancialReconciliation";
import AIGRCAutomation from "./pages/services/AIGRCAutomation";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/octamind-autonomous-attacks" element={<OctaMindAutonomous />} />
          <Route path="/blogs/guide-to-ai-governance" element={<GuideToAIGovernance />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/grc" element={<GRC />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/digital-collaboration" element={<DigitalCollaboration />} />
          <Route path="/services/managed-it-solutions" element={<ManagedITSolutions />} />
          <Route path="/services/customer-journey" element={<CustomerJourney />} />
          <Route path="/services/erp" element={<ERP />} />
          <Route path="/services/financial-reconciliation" element={<FinancialReconciliation />} />
          <Route path="/services/ai-grc-automation" element={<AIGRCAutomation />} />
          <Route path="/services/cybersecurity/vapt" element={<VAPT />} />
          <Route path="/services/cybersecurity/vciso" element={<VCISO />} />
          <Route path="/services/cybersecurity/due-diligence" element={<DueDiligence />} />
          <Route path="/services/backup-and-disaster-recovery" element={<BackupDisasterRecovery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;