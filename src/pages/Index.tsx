import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, BookOpen, Calendar, Microscope, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Conference Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Conference Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BioConverge-2025 brings together leading scientists, engineers, and innovators 
              to explore the intersection of synthetic biology, engineering, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Microscope className="h-12 w-12 text-teal-green mx-auto mb-4" />
                <CardTitle>Synthetic Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore cutting-edge research in engineered biological systems and their applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Globe className="h-12 w-12 text-science-blue mx-auto mb-4" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover how bioengineering contributes to sustainable solutions for global challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with international experts and contribute to solutions for Viksit Bharat.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Explore the Conference
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/speakers" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <Users className="h-8 w-8 text-teal-green mb-2" />
                  <CardTitle>Distinguished Speakers</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Meet our international and national experts leading the field of synthetic biology.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/themes" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-science-blue mb-2" />
                  <CardTitle>Conference Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Explore six cutting-edge themes from genomics to AI in bioengineering.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/awards" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Awards & Grants</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn about prestigious SCSB awards and SynBio grants available.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/workshop" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-teal-green mb-2" />
                  <CardTitle>Post-Conference Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Join our hands-on Gibson Assembly workshop on October 8th.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/about" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <Globe className="h-8 w-8 text-science-blue mb-2" />
                  <CardTitle>About MRIIRS & SCSB</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn about our organizing institutions and their research excellence.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Get in touch with our conference coordinators for any inquiries.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join BioConverge-2025?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of this groundbreaking conference and contribute to the future of bioengineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="science" size="lg" asChild>
              <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                Submit Your Abstract
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
