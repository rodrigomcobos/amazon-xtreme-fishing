import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CookieDisclaimer from './components/common/CookieDisclaimer';
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
// Experience Pages
import Experience from './pages/Experience/Experience';
import WhyUs from './pages/Experience/WhyUs';
import GettingThere from './pages/Experience/GettingThere';
import FAQ from './pages/Experience/FAQ';
import LuresAndTackle from './pages/Experience/LuresAndTackle';
import TravelInsurance from './pages/Experience/TravelInsurance';
import PassportAndVisa from './pages/Experience/PassportAndVisa';
// Species Pages
import Species from './pages/Experience/Species/FishSpecies';
import FishSpeciePage from './pages/Experience/Species/FishSpeciePage';
import PeacockSpecies from './pages/Experience/Species/PeacockSpecies';
import RedTailCatfish from './pages/Experience/Species/RedTailCatfish';
import GoliathCatfish from './pages/Experience/Species/GoliathCatfish';
import Arapaima from './pages/Experience/Species/Arapaima';
import PiranhaSpecies from './pages/Experience/Species/PiranhaSpecies';
import Traira from './pages/Experience/Species/Traira';
import Arowana from './pages/Experience/Species/Arowana';
import Payara from './pages/Experience/Species/Payara';
import GiantOscar from './pages/Experience/Species/GiantOscar';
import NeedleJaw from './pages/Experience/Species/NeedleJaw';
import Aracu from './pages/Experience/Species/Aracu';
import Pacu from './pages/Experience/Species/Pacu';
import Bodo from './pages/Experience/Species/Bodo';
import Sorubim from './pages/Experience/Species/Sorubim';
import Tambaqui from './pages/Experience/Species/Tambaqui';
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

          {/* Experience Routes */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/getting-there" element={<GettingThere />} />
          <Route path="/lures-and-tackle" element={<LuresAndTackle />} />
          <Route path="/passport-and-visa" element={<PassportAndVisa />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:id" element={<FishSpeciePage />} />

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