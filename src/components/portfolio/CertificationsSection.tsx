import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Users, Briefcase } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "JavaScript Essentials",
      issuer: "CISCO",
      category: "Programming",
      icon: Award,
      color: "bg-primary"
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "CISCO",
      category: "Programming",
      icon: Award,
      color: "bg-primary"
    },
    {
      title: "CPA: Programming Essentials in C++",
      issuer: "CISCO",
      category: "Programming",
      icon: Award,
      color: "bg-primary"
    },
    {
      title: "IT Essentials",
      issuer: "CISCO",
      category: "Technology",
      icon: Award,
      color: "bg-primary"
    }
  ];

  const achievements = [
    {
      title: "Intercollege Level Hackathon",
      type: "Participation Certificate",
      description: "Demonstrated problem-solving skills and technical expertise in a competitive programming environment",
      icon: Trophy,
      color: "bg-luxury-taupe"
    },
    {
      title: "AI Based ChatGPT Workshop",
      type: "Participation Certificate",
      description: "Enhanced knowledge in artificial intelligence and modern AI applications",
      icon: Trophy,
      color: "bg-luxury-sand"
    }
  ];

  const memberships = [
    {
      organization: "National Service Scheme (NSS)",
      role: "Volunteer",
      description: "Active participation in community service and social development initiatives",
      icon: Users,
      color: "bg-accent"
    },
    {
      organization: "Rashtriya Swayamsevak Sangh (RSS)",
      role: "Member",
      description: "Engaged in cultural and social activities promoting community values",
      icon: Users,
      color: "bg-luxury-taupe"
    }
  ];

  return (
    <section className="py-24 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Certifications & Achievements</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Recognition &
            <span className="block text-luxury-taupe">Community Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of professional certifications, achievements, and community involvement 
            that demonstrates commitment to continuous learning and social responsibility.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="luxury-card p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                      </div>
                      <p className="text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                      <Badge variant="secondary" className="text-xs">
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Awards and Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="luxury-card p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3">
                        {achievement.type}
                      </Badge>
                      <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Professional Membership */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Community Involvement</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {memberships.map((membership, index) => {
              const Icon = membership.icon;
              return (
                <Card key={index} className="luxury-card p-8">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 ${membership.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{membership.role}</Badge>
                      </div>
                      <h4 className="text-xl font-bold mb-3">{membership.organization}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {membership.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">CISCO Certifications</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Achievement Awards</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Organizations</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Commitment</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;