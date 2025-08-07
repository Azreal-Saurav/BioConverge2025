import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-6">About BioConverge-2025</h1>
          <p className="text-xl text-muted-foreground">
            Bridging Biology, Engineering and Sustainability for Global Impact
          </p>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-8 w-8 text-teal-green" />
                <CardTitle className="text-3xl">About the Conference</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>BioConverge-2025</strong> is an international platform focusing on Synthetic Biology, 
                Engineering, and Sustainability. This prestigious conference brings together leading scientists, 
                researchers, and innovators from around the globe to explore cutting-edge developments in 
                bioengineering and their applications for sustainable solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Hosted alongside the <strong>7th Annual Meeting of SCSB</strong>, the conference emphasizes 
                <strong>"Biomanufacturing for a Viksit Bharat"</strong> and global biotechnology innovation. 
                Our mission is to foster collaboration, knowledge exchange, and breakthrough discoveries that 
                will shape the future of biological engineering.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary" className="text-sm">Synthetic Biology</Badge>
                <Badge variant="secondary" className="text-sm">Bioengineering</Badge>
                <Badge variant="secondary" className="text-sm">Sustainability</Badge>
                <Badge variant="secondary" className="text-sm">Global Impact</Badge>
                <Badge variant="secondary" className="text-sm">Innovation</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* About MRIIRS */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-science-blue" />
                  <CardTitle className="text-2xl">About MRIIRS</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base leading-relaxed">
                  <strong>Manav Rachna International Institute of Research and Studies (MRIIRS)</strong> 
                  is a NAAC 'A++' accredited institution, recognized as one of India's top private 
                  universities for research and innovation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-teal-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Excellence in Research</h4>
                      <p className="text-sm text-muted-foreground">
                        Home to the Molecular Biosciences Research Cluster (MR-MBRC)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-science-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Advanced Facilities</h4>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art research facilities and international collaborations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Global Recognition</h4>
                      <p className="text-sm text-muted-foreground">
                        NAAC 'A++' accredited with international partnerships
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About SCSB */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">About SCSB</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-base leading-relaxed">
                  The <strong>Society of Chemical and Synthetic Biology (SCSB)</strong> is India's 
                  leading non-profit scientific society dedicated to advancing research and innovation 
                  in Chemical and Synthetic Biology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-teal-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Research Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Provides research grants and financial support to scientists
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-science-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Global Networking</h4>
                      <p className="text-sm text-muted-foreground">
                        Facilitates international scientific collaboration and knowledge exchange
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Innovation Hub</h4>
                      <p className="text-sm text-muted-foreground">
                        Promotes innovation in synthetic biology and chemical engineering
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Vision & Mission</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-teal-green">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  To establish a global platform for breakthrough discoveries in synthetic biology, 
                  fostering innovation that addresses critical challenges in sustainability, 
                  healthcare, and biotechnology for a better tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-science-blue">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed">
                  To bridge the gap between biology, engineering, and sustainability through 
                  collaborative research, knowledge sharing, and innovation that contributes 
                  to the development of Viksit Bharat and global scientific advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;