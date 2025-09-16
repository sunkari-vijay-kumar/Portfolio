import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Wrench, BookOpen } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java (Basics)", "C++ (Basics)", "C", "SQL"],
      color: "bg-primary"
    },
    {
      category: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript (Basics)"],
      color: "bg-luxury-taupe"
    },
    {
      category: "Tools & Software",
      icon: Wrench,
      skills: ["VS Code", "GitHub", "Adobe Creative Suite", "Photoshop", "After Effects"],
      color: "bg-luxury-sand"
    },
    {
      category: "Coursework",
      icon: BookOpen,
      skills: ["Object-Oriented Programming", "Data Structures"],
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-24 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Technical Skills</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical Expertise &
            <span className="block text-luxury-taupe">Proficiencies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning multiple programming languages, web technologies, 
            and development tools, built through academic learning and hands-on project experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="luxury-card p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-luxury cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Soft Skills</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond technical expertise, I bring essential interpersonal and professional skills 
              that enhance collaboration and project success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "Communication", description: "Clear and effective communication across teams" },
              { skill: "Problem Solving", description: "Analytical thinking and creative solutions" },
              { skill: "Interpersonal Skills", description: "Building relationships and teamwork" },
              { skill: "Creativity", description: "Innovative approaches to challenges" }
            ].map((softSkill, index) => (
              <Card key={index} className="luxury-card p-6 text-center">
                <h4 className="text-lg font-semibold mb-2">{softSkill.skill}</h4>
                <p className="text-sm text-muted-foreground">{softSkill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </Card>
          
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Web Technologies</div>
          </Card>
          
          <Card className="luxury-card p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Development Tools</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;