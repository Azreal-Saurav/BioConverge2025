import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Wrench, BookOpen, Award } from "lucide-react";

const Workshop = () => {
  const workshopFeatures = [
    {
      icon: Wrench,
      title: "Hands-On Experience",
      description: "Direct experience with Gibson Assembly techniques and protocols"
    },
    {
      icon: BookOpen,
      title: "Expert Instruction",
      description: "Learn from leading researchers in molecular cloning"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Limited participants for personalized attention"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive a certificate of completion"
    }
  ];

  const agenda = [
    {
      time: "09:00 - 09:30",
      activity: "Registration & Welcome Coffee",
      description: "Check-in and networking with fellow participants"
    },
    {
      time: "09:30 - 10:30",
      activity: "Introduction to Gibson Assembly",
      description: "Theoretical background and principles of the technique"
    },
    {
      time: "10:30 - 10:45",
      activity: "Coffee Break",
      description: "Networking and informal discussions"
    },
    {
      time: "10:45 - 12:30",
      activity: "Hands-On Session 1",
      description: "Design and preparation of assembly reactions"
    },
    {
      time: "12:30 - 13:30",
      activity: "Lunch Break",
      description: "Complimentary lunch and networking"
    },
    {
      time: "13:30 - 15:15",
      activity: "Hands-On Session 2",
      description: "Assembly execution and transformation"
    },
    {
      time: "15:15 - 15:30",
      activity: "Coffee Break",
      description: "Quick refreshment break"
    },
    {
      time: "15:30 - 16:30",
      activity: "Results Analysis",
      description: "Evaluation and troubleshooting of results"
    },
    {
      time: "16:30 - 17:00",
      activity: "Q&A and Closing",
      description: "Final questions and certificate distribution"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-primary mb-6">Post-Conference Workshop</h1>
          <h2 className="text-3xl font-semibold text-teal-green mb-4">
            Gibson Assembly: Advanced Cloning Strategies
          </h2>
          <p className="text-xl text-muted-foreground">
            Master the art of seamless DNA assembly with hands-on training
          </p>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4">About the Workshop</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Join us for an intensive hands-on workshop on <strong>Gibson Assembly</strong>, 
                    one of the most powerful and versatile techniques in modern molecular cloning. 
                    This post-conference workshop is designed to provide practical experience 
                    with advanced cloning strategies used in synthetic biology and bioengineering.
                  </p>
                  
                  <p className="text-base leading-relaxed">
                    Gibson Assembly allows for the seamless assembly of multiple DNA fragments 
                    in a single isothermal reaction, making it an essential tool for constructing 
                    complex genetic circuits, metabolic pathways, and synthetic biological systems.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-teal-green">What You'll Learn:</h3>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-green mt-1">•</span>
                        <span>Principles and mechanisms of Gibson Assembly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-green mt-1">•</span>
                        <span>Design strategies for overlapping fragments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-green mt-1">•</span>
                        <span>Troubleshooting common assembly problems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-green mt-1">•</span>
                        <span>Applications in synthetic biology projects</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Facts */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-science-blue">Workshop Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-teal-green" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-sm text-muted-foreground">8th October 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-science-blue" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Capacity</p>
                      <p className="text-sm text-muted-foreground">Limited to 30 participants</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-teal-green">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Basic knowledge of molecular biology</li>
                    <li>• Experience with PCR techniques</li>
                    <li>• Understanding of DNA cloning principles</li>
                    <li>• Lab safety training (preferred)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Workshop Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {workshopFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-teal-green mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Workshop Agenda</h2>
            <p className="text-lg text-muted-foreground">
              A full day of intensive hands-on learning and practical experience
            </p>
          </div>

          <div className="space-y-4">
            {agenda.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="text-sm font-mono">
                        {item.time}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {item.activity}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Register for the Workshop
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Limited seats available. Secure your spot in this exclusive hands-on workshop.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Conference Participants</h3>
              <p className="text-2xl font-bold text-white mb-1">₹2,500</p>
              <p className="text-white/90 text-sm">Special rate for conference attendees</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">External Participants</h3>
              <p className="text-2xl font-bold text-white mb-1">₹4,000</p>
              <p className="text-white/90 text-sm">For non-conference participants</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button variant="science" size="lg" asChild>
              <a href="https://bioconverge.github.io/bioconver2025/" target="_blank" rel="noopener noreferrer">
                Register for Workshop
              </a>
            </Button>
            <p className="text-white/80 text-sm">
              * Workshop fee includes materials, lunch, and certificate
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshop;