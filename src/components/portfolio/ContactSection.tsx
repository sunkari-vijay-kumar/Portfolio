import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, LinkedinIcon, Github, Send, Download } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sunkarivijayekumar0604@gmail.com",
      href: "mailto:sunkarivijayekumar0604@gmail.com",
      color: "bg-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93980 97257",
      href: "tel:+919398097257",
      color: "bg-luxury-taupe"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: "#",
      color: "bg-luxury-sand"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Connect &
            <span className="block text-luxury-taupe">Collaborate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for a passionate developer, have a project in mind, 
            or simply want to discuss technology and innovation, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a 
                      key={index}
                      href={contact.href}
                      className="block group"
                    >
                      <Card className="luxury-card p-6 group-hover:shadow-luxury transition-luxury">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                            <p className="text-lg font-semibold">{contact.value}</p>
                          </div>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:shadow-elegant transition-luxury hover:-translate-y-1"
                >
                  <LinkedinIcon className="w-5 h-5 text-primary" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-xl hover:shadow-elegant transition-luxury hover:-translate-y-1"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div>
              <Card className="luxury-card p-6 bg-gradient-luxury">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2">Download Resume</h4>
                  <p className="text-muted-foreground mb-4">
                    Get a detailed overview of my experience and skills
                  </p>
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="luxury-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Your first name" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" className="h-12" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" className="h-12" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <Button className="w-full h-12 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="luxury-card p-12 bg-gradient-luxury">
            <h3 className="text-3xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and innovative projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Mail className="w-5 h-5 mr-2" />
                Start a Conversation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;