import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CookieDisclaimer from './components/common/CookieDisclaimer';
import TravelPlannerLayout from './components/layouts/TravelPlannerLayout';

// Main Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CovidPolicy from './pages/CovidPolicy';
import Contact from './pages/Contact';

// About Pages
import AboutUs from './pages/About/AboutUs';
import ExperienceTheAmazon from './pages/About/ExperienceTheAmazon';
import MeetYourHost from './pages/About/MeetYourHost';
import Welcome from './pages/About/Welcome';

// Destination Pages
import AllDestinations from './pages/Destinations/AllDestinations';
import TheZaltanMothership from './pages/Destinations/TheZaltanMothership';
import TheZaltanLodge from './pages/Destinations/TheZaltanLodge';
import HeadwatersCamp from './pages/Destinations/HeadwatersCamp';
import PeacockBassExpeditions from './pages/Destinations/PeacockBassExpeditions';
import Xingu from './pages/Destinations/Xingu';
import EcoLodge from './pages/Destinations/EcoLodge';

// Travel Planner Pages
import Experience from './pages/Travel_Planner/Experience';
import WhyUs from './pages/Travel_Planner/WhyUs';
import GettingThere from './pages/Travel_Planner/GettingThere';
import FAQ from './pages/Travel_Planner/FAQ';
import LuresAndTackle from './pages/Travel_Planner/LuresAndTackle';
import TravelInsurance from './pages/Travel_Planner/TravelInsurance';
import PassportAndVisa from './pages/Travel_Planner/PassportAndVisa';

// Species Pages
import Species from './pages/Travel_Planner/Species/FishSpecies';
import FishSpeciePage from './pages/Travel_Planner/Species/FishSpeciePage';
import PeacockSpecies from './pages/Travel_Planner/Species/PeacockSpecies';
import RedTailCatfish from './pages/Travel_Planner/Species/RedTailCatfish';
import GoliathCatfish from './pages/Travel_Planner/Species/GoliathCatfish';
import Arapaima from './pages/Travel_Planner/Species/Arapaima';
import PiranhaSpecies from './pages/Travel_Planner/Species/PiranhaSpecies';
import Traira from './pages/Travel_Planner/Species/Traira';
import Arowana from './pages/Travel_Planner/Species/Arowana';
import Payara from './pages/Travel_Planner/Species/Payara';
import GiantOscar from './pages/Travel_Planner/Species/GiantOscar';
import NeedleJaw from './pages/Travel_Planner/Species/NeedleJaw';
import Aracu from './pages/Travel_Planner/Species/Aracu';
import Pacu from './pages/Travel_Planner/Species/Pacu';
import Bodo from './pages/Travel_Planner/Species/Bodo';
import Sorubim from './pages/Travel_Planner/Species/Sorubim';
import Tambaqui from './pages/Travel_Planner/Species/Tambaqui';

// Gallery Pages
import Pictures from './pages/Gallery/Pictures';
import Videos from './pages/Gallery/Videos';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/covid-policy" element={<CovidPolicy />} />

          {/* About Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/experience-the-amazon" element={<ExperienceTheAmazon />} />
          <Route path="/meet-your-host" element={<MeetYourHost />} />

          {/* Destination Routes */}
          <Route path="/destinations" element={<AllDestinations />} />
          <Route path="/zaltan-mothership" element={<TheZaltanMothership />} />
          <Route path="/zaltan-lodge" element={<TheZaltanLodge />} />
          <Route path="/ecolodge" element={<EcoLodge />} />
          <Route path="/xingu-reservation" element={<Xingu />} />
          <Route path="/headwaters-camp" element={<HeadwatersCamp />} />
          <Route path="/peacock-bass-expeditions" element={<PeacockBassExpeditions />} />

          {/* Travel Planner Routes */}
          <Route element={<TravelPlannerLayout />}>
            <Route path="/experience" element={<Experience />} />
            <Route path="/getting-there" element={<GettingThere />} />
            <Route path="/lures-and-tackle" element={<LuresAndTackle />} />
            <Route path="/passport-and-visa" element={<PassportAndVisa />} />
            <Route path="/travel-insurance" element={<TravelInsurance />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/species" element={<Species />} />
            <Route path="/species/:id" element={<FishSpeciePage />} />
          </Route>

          {/* Gallery Routes */}
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </main>
      <Footer />
      {/* <CookieDisclaimer /> */}
    </div>
  );
};

export default App;