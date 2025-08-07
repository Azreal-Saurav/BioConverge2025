import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Mail, Building } from "lucide-react";

const Speakers = () => {
  const internationalSpeakers = [
    {
      name: "Dr. Rajesh K Sani",
      affiliation: "South Dakota Mines, USA",
      country: "USA",
      expertise: "Environmental Biotechnology"
    },
    {
      name: "Dr. Yashika Rustagi",
      affiliation: "Harvard Medical School, USA",
      country: "USA",
      expertise: "Medical Biotechnology"
    },
    {
      name: "Dr. Amaladoss Anburaj",
      affiliation: "Temasek Polytechnic, Singapore",
      country: "Singapore",
      expertise: "Synthetic Biology"
    }
  ];

  const nationalSpeakers = [
    {
      name: "Dr. Vijai Singh",
      affiliation: "Indrashil University",
      country: "India",
      expertise: "Bioinformatics"
    },
    {
      name: "Dr. Sanjay Ghosh",
      affiliation: "IBAB, Bengaluru",
      country: "India",
      expertise: "Computational Biology"
    },
    {
      name: "Dr. P.A. Balakumaran",
      affiliation: "CSIR NIIST",
      country: "India",
      expertise: "Chemical Biology"
    },
    {
      name: "Dr. Ramesh Kothari",
      affiliation: "P D Patel Institute of Applied Sciences",
      country: "India",
      expertise: "Environmental Science"
    },
    {
      name: "Dr. Kapila Kumar",
      affiliation: "MRIIRS",
      country: "India",
      expertise: "Molecular Biology"
    }
  ];

  const SpeakerCard = ({ speaker, isInternational = false }: { speaker: any, isInternational?: boolean }) => (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-20 w-20 border-4 border-teal-green/20">
            <AvatarFallback className="text-xl font-semibold bg-gradient-hero text-white">
              {speaker.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-lg group-hover:text-teal-green transition-colors">
          {speaker.name}
        </CardTitle>
        <CardDescription className="space-y-2">
          <div className="flex items-center justify-center space-x-1 text-sm">
            <Building className="h-4 w-4" />
            <span>{speaker.affiliation}</span>
          </div>
          <div className="flex items-center justify-center space-x-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{speaker.country}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Badge 
          variant="secondary" 
          className={isInternational ? "bg-science-blue/10 text-science-blue" : "bg-teal-green/10 text-teal-green"}
        >
          {speaker.expertise}
        </Badge>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-6">Distinguished Speakers</h1>
          <p className="text-xl text-muted-foreground">
            Meet our renowned international and national experts leading the field of synthetic biology
          </p>
        </div>
      </section>

      {/* International Speakers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">International Speakers</h2>
            <p className="text-lg text-muted-foreground">
              Global experts bringing cutting-edge research and innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {internationalSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} isInternational={true} />
            ))}
          </div>
        </div>
      </section>

      {/* National Speakers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">National Experts</h2>
            <p className="text-lg text-muted-foreground">
              Leading Indian scientists driving innovation in bioengineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nationalSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Benefits */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Our Speakers Choose BioConverge-2025
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Global Platform</h3>
              <p className="text-white/90">
                Reach an international audience of researchers and industry leaders
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
              <p className="text-white/90">
                Connect with like-minded professionals and potential collaborators
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Impact</h3>
              <p className="text-white/90">
                Share research that contributes to sustainable global solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call for Speakers */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Interested in Speaking?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We welcome submissions from researchers, academics, and industry professionals 
            working in synthetic biology, bioengineering, and sustainability.
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Mail className="h-5 w-5" />
            <span className="text-lg font-medium">bioconverge2025@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;