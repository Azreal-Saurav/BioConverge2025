import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Star, Gift, Users, Lightbulb } from "lucide-react";

const Awards = () => {
  const scsbawards = [
    {
      title: "Dr. APJ Abdul Kalam Young Scientist Award",
      description: "Recognizing outstanding contributions by young scientists in synthetic and chemical biology",
      eligibility: "Researchers under 35 years",
      prize: "Certificate + Cash Prize",
      icon: Star
    },
    {
      title: "Velu Nachiyar Women Award",
      description: "Celebrating exceptional achievements by women researchers in bioengineering",
      eligibility: "Women scientists and researchers",
      prize: "Certificate + Recognition",
      icon: Users
    },
    {
      title: "Lifetime Achievement Award",
      description: "Honoring distinguished careers and significant contributions to the field",
      eligibility: "Senior researchers with exceptional track record",
      prize: "Prestigious Recognition",
      icon: Trophy
    },
    {
      title: "Agathiyar Chemical Biology Award",
      description: "Excellence in chemical biology research and innovation",
      eligibility: "Chemical biology researchers",
      prize: "Certificate + Cash Prize",
      icon: Lightbulb
    }
  ];

  const AwardCard = ({ award }: { award: any }) => {
    const Icon = award.icon;
    return (
      <Card className="h-full hover:shadow-xl transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-teal-green">
        <CardHeader>
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-lg bg-teal-green/10 group-hover:bg-teal-green/20 transition-colors">
              <Icon className="h-8 w-8 text-teal-green" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg group-hover:text-teal-green transition-colors mb-2">
                {award.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed">
            {award.description}
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs">
                Eligibility
              </Badge>
              <span className="text-sm text-muted-foreground">{award.eligibility}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs bg-teal-green/10 text-teal-green">
                Prize
              </Badge>
              <span className="text-sm font-medium">{award.prize}</span>
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
          <h1 className="text-5xl font-bold text-primary mb-6">Awards & Grants</h1>
          <p className="text-xl text-muted-foreground">
            Recognizing excellence and supporting innovation in bioengineering research
          </p>
        </div>
      </section>

      {/* Conference Awards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Conference Awards</h2>
            <p className="text-lg text-muted-foreground">
              Outstanding presentations and posters will be recognized with prestigious awards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Award className="h-16 w-16 text-science-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Best Oral Presentation Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Recognizing the most impactful and well-delivered oral presentations across all conference themes.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <Badge variant="secondary">Certificate of Excellence</Badge>
                  <Badge variant="secondary">Cash Prize</Badge>
                  <Badge variant="secondary">Publication Opportunity</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Trophy className="h-16 w-16 text-teal-green mx-auto mb-4" />
                <CardTitle className="text-2xl">Best Poster Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Celebrating innovative research and clear scientific communication through poster presentations.
                </CardDescription>
                <div className="mt-4 space-y-2">
                  <Badge variant="secondary">Certificate of Recognition</Badge>
                  <Badge variant="secondary">Cash Prize</Badge>
                  <Badge variant="secondary">Networking Opportunities</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SCSB Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">SCSB Awards</h2>
            <p className="text-lg text-muted-foreground">
              Prestigious awards from the Society of Chemical and Synthetic Biology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scsbawards.map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
      </section>

      {/* SCSB SynBio Grant */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-teal-green">
            <CardHeader className="text-center bg-gradient-hero text-white">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-2">SCSB SynBio Grant</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Supporting the next generation of synthetic biology researchers
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The SCSB SynBio Grant provides comprehensive support to emerging researchers 
                  in synthetic biology, offering not just financial assistance but also mentorship 
                  and access to cutting-edge research facilities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-teal-green/10 rounded-lg p-4 mb-3">
                      <Gift className="h-8 w-8 text-teal-green mx-auto" />
                    </div>
                    <h3 className="font-semibold mb-2">Financial Support</h3>
                    <p className="text-sm text-muted-foreground">Research funding and equipment grants</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-science-blue/10 rounded-lg p-4 mb-3">
                      <Users className="h-8 w-8 text-science-blue mx-auto" />
                    </div>
                    <h3 className="font-semibold mb-2">Mentorship</h3>
                    <p className="text-sm text-muted-foreground">Guidance from senior researchers</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-lg p-4 mb-3">
                      <Lightbulb className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <h3 className="font-semibold mb-2">Facilities Access</h3>
                    <p className="text-sm text-muted-foreground">State-of-the-art research labs</p>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button variant="conference" size="lg">
                    Learn More About SCSB Grant
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            How to Apply
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Submit your research and become eligible for these prestigious awards and grants
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">1. Submit Abstract</h3>
              <p className="text-white/90 text-sm">Submit your research abstract by the deadline</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">2. Present Research</h3>
              <p className="text-white/90 text-sm">Present your work at the conference</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">3. Get Recognized</h3>
              <p className="text-white/90 text-sm">Winners announced during the conference</p>
            </div>
          </div>

          <Button variant="science" size="lg" asChild>
            <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
              Submit Your Abstract
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Awards;