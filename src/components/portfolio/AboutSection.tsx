import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Calendar } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "CGPA 9.30 in SSC, 88.60% in Intermediate"
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Multiple CISCO certifications in programming"
    },
    {
      icon: Users,
      title: "Community Involvement",
      description: "Active member of NSS and RSS organizations"
    },
    {
      icon: Calendar,
      title: "Born April 2003",
      description: "Young and ambitious developer"
    }
  ];

  return (
    <section className="py-24 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">About Me</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital Solutions with
            <span className="block text-luxury-taupe">Precision & Passion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently pursuing Bachelor of Technology in Computer Science at Vignan Institute 
            of Technology and Science, I'm passionate about leveraging cutting-edge technologies 
            to solve real-world problems through machine learning, web development, and AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="luxury-card p-8 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Personal Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-card rounded-xl">
                <span className="font-medium">Date of Birth</span>
                <span className="text-muted-foreground">6th April 2003</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-xl">
                <span className="font-medium">Languages</span>
                <span className="text-muted-foreground">English, Hindi, Telugu</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-xl">
                <span className="font-medium">Location</span>
                <span className="text-muted-foreground">Hyderabad, Telangana</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-card rounded-xl">
                <span className="font-medium">Father's Name</span>
                <span className="text-muted-foreground">Sunkari Prabhakar</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Interests & Hobbies</h3>
            <div className="space-y-4">
              <Card className="luxury-card p-6">
                <h4 className="text-xl font-semibold mb-3">Sports Enthusiast</h4>
                <p className="text-muted-foreground mb-4">
                  Passionate about Kabaddi and Cricket, believing in the power of teamwork and strategic thinking.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Kabaddi</Badge>
                  <Badge variant="secondary">Cricket</Badge>
                </div>
              </Card>
              
              <Card className="luxury-card p-6">
                <h4 className="text-xl font-semibold mb-3">Creative Exercises</h4>
                <p className="text-muted-foreground mb-4">
                  Engaging in creative activities to enhance problem-solving abilities and innovative thinking.
                </p>
                <Badge variant="secondary">Creative Thinking</Badge>
              </Card>
              
              <Card className="luxury-card p-6">
                <h4 className="text-xl font-semibold mb-3">AI Knowledge Enhancement</h4>
                <p className="text-muted-foreground mb-4">
                  Continuously learning about artificial intelligence and its applications in modern technology.
                </p>
                <Badge variant="secondary">Artificial Intelligence</Badge>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;