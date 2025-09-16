import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Trophy } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "Vignan Institute of Technology and Science",
      degree: "Bachelor of Technology in Computer Science",
      period: "2021-2025",
      status: "Completed",
      grade: "CGPA: 7.14",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate Education (MPC)",
      period: "2019-2021",
      status: "Completed",
      grade: "88.60%",
      icon: Trophy,
      color: "bg-luxury-taupe"
    },
    {
      institution: "Lotus High School, Hyderabad",
      degree: "SSC Board Education",
      period: "2019",
      status: "Completed",
      grade: "CGPA: 9.30",
      icon: Trophy,
      color: "bg-luxury-sand"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Education</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Academic Journey &
            <span className="block text-luxury-taupe">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A consistent track record of academic excellence, from foundational education 
            to specialized computer science studies, building a strong foundation for 
            technological innovation.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card key={index} className="luxury-card relative overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 ${edu.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold mb-2">{edu.institution}</h3>
                          <p className="text-xl text-muted-foreground">{edu.degree}</p>
                        </div>
                        
                        <div className="text-right">
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"}
                            className="mb-2"
                          >
                            {edu.status}
                          </Badge>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Grade */}
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-semibold">Grade:</span>
                        <Badge variant="outline" className="text-lg px-4 py-2">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-luxury-cream to-luxury-beige opacity-50 rounded-bl-full"></div>
              </Card>
            );
          })}
        </div>

        {/* Achievements Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">9.30</div>
            <div className="text-muted-foreground">CGPA in SSC</div>
          </Card>
          
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">88.60%</div>
            <div className="text-muted-foreground">Intermediate Score</div>
          </Card>
          
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years of Study</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;