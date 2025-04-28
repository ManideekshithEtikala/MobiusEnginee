import React from "react";
import Navbar from "./Navbar.jsx";
import Head from "./Head.jsx";
import Work from "./Work.jsx";
import AboutUs from "./Aboutus.jsx";
import Testimonials from "./Testimonials.jsx";
import PricingPlans from "./PricingPlans.jsx";
import Choose from "./Choose.jsx";
import ReasumeCoaching from "./ReasumeCoaching.jsx";
import Footer from "./Footer.jsx";
import EndComponent from "./EndComponent.jsx";
import PricingCard from "./PricingCard.jsx";
const Landingpage = () => {
  return (
    <div className="font-sans text-gray-900">
      <div className="bg-[url(/headnavbg.png)] bg-cover bg-center flex flex-col items-center justify-center relative">
        <Navbar />
        <Head />
      </div>

      {/* Features */}
      <Work />

      {/* About Us */}
      <AboutUs />

      {/* Testimonial */}
      <Testimonials />
      <Choose />

      {/* Pricing Plans */}
      <PricingPlans />
<PricingCard />
      {/* Contact Section */}
      <ReasumeCoaching />

      {/* Footer */}
      <Footer />

      <EndComponent />
    </div>
  );
};

export default Landingpage;
