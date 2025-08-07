import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, User, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const coordinators = [
    {
      name: "Dr. Kapila Kumar",
      phone: "9910303402",
      role: "Principal Coordinator",
      affiliation: "MRIIRS"
    },
    {
      name: "Dr. Somya Asthana",
      phone: "7054152088",
      role: "Conference Coordinator",
      affiliation: "MRIIRS"
    },
    {
      name: "Dr. L. Karthik",
      phone: "9952545640",
      role: "SCSB Coordinator",
      affiliation: "SCSB"
    }
  ];

  const ContactCard = ({ coordinator }: { coordinator: any }) => (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
          <User className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl group-hover:text-teal-green transition-colors">
          {coordinator.name}
        </CardTitle>
        <CardDescription>
          <span className="font-medium">{coordinator.role}</span>
          <br />
          <span className="text-sm">{coordinator.affiliation}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-3">
        <div className="flex items-center justify-center space-x-2 text-primary">
          <Phone className="h-4 w-4" />
          <span className="font-medium">{coordinator.phone}</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our conference coordinators for any inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Contact */}
          <div className="text-center mb-16">
            <Card className="max-w-2xl mx-auto border-2 border-teal-green">
              <CardHeader className="bg-gradient-hero text-white">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-2xl">General Inquiries</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  For all conference-related questions and information
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3 text-xl">
                    <Mail className="h-6 w-6 text-teal-green" />
                    <a 
                      href="mailto:bioconverge2025@gmail.com" 
                      className="font-semibold text-primary hover:text-teal-green transition-colors"
                    >
                      bioconverge2025@gmail.com
                    </a>
                  </div>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Conference Coordinators */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Conference Coordinators</h2>
              <p className="text-lg text-muted-foreground">
                Our dedicated team is here to assist you with all your conference needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coordinators.map((coordinator, index) => (
                <ContactCard key={index} coordinator={coordinator} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground">
              Choose the best way to reach us based on your inquiry type
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-science-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Registration Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Questions about registration process, fees, and deadlines
                </CardDescription>
                <Button variant="conference" size="sm" asChild>
                  <a href="mailto:bioconverge2025@gmail.com?subject=Registration Query">
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Mail className="h-12 w-12 text-teal-green mx-auto mb-4" />
                <CardTitle className="text-lg">Abstract Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Help with abstract submission and presentation guidelines
                </CardDescription>
                <Button variant="conference" size="sm" asChild>
                  <a href="mailto:bioconverge2025@gmail.com?subject=Abstract Submission">
                    Get Help
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Travel & Accommodation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Information about venue, travel, and local accommodation
                </CardDescription>
                <Button variant="conference" size="sm" asChild>
                  <a href="mailto:bioconverge2025@gmail.com?subject=Travel Information">
                    Contact Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Venue Information</h2>
          </div>

          <Card>
            <CardHeader className="text-center">
              <MapPin className="h-12 w-12 text-teal-green mx-auto mb-4" />
              <CardTitle className="text-2xl">Manav Rachna International Institute of Research and Studies</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg">
                Sector 43, Aravalli Hills, Delhi Surajkund Road,<br />
                Faridabad, Haryana 121004, India
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>45 minutes from Delhi Airport</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>Easy metro connectivity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            We're Here to Help
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is committed to providing you with prompt and helpful responses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Response</h3>
              <p className="text-white/90">Within 24 hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-white/90">9 AM - 6 PM IST</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MessageCircle className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Follow-up</h3>
              <p className="text-white/90">Until resolved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;