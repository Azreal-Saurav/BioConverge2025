import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dna, Brain, Microscope, Shield, Beaker, Cpu } from "lucide-react";

const Themes = () => {
  const themes = [
    {
      title: "Genomics and Synthetic Biology",
      subtitle: "Engineering Life for a Sustainable Future",
      icon: Dna,
      description: "Explore cutting-edge genomic engineering techniques, CRISPR technologies, and synthetic biological systems designed for sustainable applications.",
      topics: ["CRISPR Gene Editing", "Synthetic Chromosomes", "Genomic Medicine", "Bio-circuits"]
    },
    {
      title: "Next-Gen Molecular Diagnostics",
      subtitle: "Advanced Detection and Analysis",
      icon: Microscope,
      description: "Revolutionary diagnostic techniques using molecular biology, biosensors, and AI-driven analysis for rapid and accurate detection.",
      topics: ["Biosensor Technology", "Point-of-Care Diagnostics", "Liquid Biopsies", "Molecular Imaging"]
    },
    {
      title: "Translational Bioengineering",
      subtitle: "From Lab to Real-World Solutions",
      icon: Beaker,
      description: "Bridging the gap between laboratory research and practical applications in medicine, industry, and environmental solutions.",
      topics: ["Biomedical Devices", "Tissue Engineering", "Drug Delivery Systems", "Bioprocess Engineering"]
    },
    {
      title: "Host-Pathogen Evolution",
      subtitle: "Understanding Dynamic Interactions",
      icon: Shield,
      description: "Investigating the evolutionary arms race between hosts and pathogens to develop better therapeutic strategies.",
      topics: ["Antimicrobial Resistance", "Vaccine Development", "Pathogen Genomics", "Immune System Engineering"]
    },
    {
      title: "Synthetic and Chemical Biology 2.0",
      subtitle: "Next Generation Bio-Manufacturing",
      icon: Brain,
      description: "Advanced synthetic biology approaches for creating novel biological systems and sustainable manufacturing processes.",
      topics: ["Metabolic Engineering", "Biorefinery", "Synthetic Circuits", "Protein Design"]
    },
    {
      title: "Bridging Biology, AI, Engineering, and Sustainability",
      subtitle: "Interdisciplinary Innovation",
      icon: Cpu,
      description: "Integrating artificial intelligence, engineering principles, and biological systems for sustainable global solutions.",
      topics: ["AI in Biology", "Computational Biology", "Sustainable Biotech", "Green Chemistry"]
    }
  ];

  const ThemeCard = ({ theme, index }: { theme: any, index: number }) => {
    const Icon = theme.icon;
    const colors = [
      "text-teal-green",
      "text-science-blue", 
      "text-primary",
      "text-molecule-purple",
      "text-teal-green",
      "text-science-blue"
    ];

    return (
      <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-l-teal-green">
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-lg bg-gray-50 group-hover:bg-teal-green/10 transition-colors`}>
              <Icon className={`h-8 w-8 ${colors[index % colors.length]}`} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-teal-green transition-colors mb-2">
                {theme.title}
              </CardTitle>
              <CardDescription className="text-sm font-medium text-muted-foreground">
                {theme.subtitle}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed">
            {theme.description}
          </p>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-primary">Key Topics:</h4>
            <div className="flex flex-wrap gap-2">
              {theme.topics.map((topic: string, topicIndex: number) => (
                <Badge key={topicIndex} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-6">Conference Themes</h1>
          <p className="text-xl text-muted-foreground">
            Explore six cutting-edge themes at the intersection of biology, engineering, and sustainability
          </p>
        </div>
      </section>

      {/* Themes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <ThemeCard key={index} theme={theme} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Research Focus Areas</h2>
            <p className="text-lg text-muted-foreground">
              Our conference themes address critical global challenges through innovative bioengineering solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-teal-green">Sustainable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  Focus on developing environmentally friendly biotechnologies that address climate change, 
                  resource scarcity, and sustainable manufacturing processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-science-blue">Healthcare Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  Advancing personalized medicine, rapid diagnostics, and novel therapeutic approaches 
                  through cutting-edge bioengineering technologies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  Contributing to the vision of Viksit Bharat while addressing worldwide challenges 
                  in food security, energy, and environmental sustainability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-molecule-purple">Technology Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  Bridging artificial intelligence, computational biology, and experimental sciences 
                  to accelerate discovery and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Submit Your Research
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contribute to these exciting themes by submitting your abstract and sharing your research 
            with the global bioengineering community.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Submission Deadline</h3>
            <p className="text-white/90">6th September 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Themes;