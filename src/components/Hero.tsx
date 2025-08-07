import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import heroImage from "@/assets/hero-bioconverge.jpg";
import { Calendar, MapPin, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Floating DNA Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="w-16 h-16 bg-white rounded-full molecule-float"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="w-12 h-12 bg-teal-green rounded-full molecule-float" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="absolute top-1/3 right-20 opacity-15">
        <div className="w-20 h-20 bg-science-blue rounded-full molecule-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="block">BioConverge</span>
            <span className="text-teal-green">2025</span>
          </h1>
          <div className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
            International BioE3 Conference
          </div>
          <div className="text-lg md:text-xl text-white/80 mb-8">
            Bridging Biology, Engineering and Sustainability for Global Impact
          </div>
        </div>

        {/* Conference Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-white">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>6–8 October 2025</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>MRIIRS, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>In Association with SCSB</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
          <Button variant="science" size="lg" asChild>
            <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
              Submit Abstract
            </a>
          </Button>
        </div>

        {/* Quick Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Early Bird Deadline</h3>
            <p className="text-white/90">15th August 2025</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Final Deadline</h3>
            <p className="text-white/90">6th September 2025</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-2">Workshop</h3>
            <p className="text-white/90">8th October 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;