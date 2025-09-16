import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Music, Mic, Leaf, Brain } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Emotion Based Music Recommendation System",
      description: "An intelligent system that analyzes user emotions to recommend personalized music. Uses machine learning algorithms to correlate user behavior with musical preferences, creating a unique listening experience based on emotional states and listening history.",
      technologies: ["Python", "Machine Learning", "OpenCV"],
      icon: Music,
      color: "bg-primary",
      features: [
        "Emotion detection through facial recognition",
        "ML-based recommendation engine",
        "User behavior analysis",
        "Personalized music curation"
      ],
      category: "Machine Learning"
    },
    {
      title: "Advanced Voice Assistant",
      description: "A sophisticated AI-powered voice assistant that provides seamless voice interactions for various tasks including scheduling, reminders, smart home control, and information retrieval with natural language understanding and context-aware responses.",
      technologies: ["Python", "Machine Learning"],
      icon: Mic,
      color: "bg-luxury-taupe",
      features: [
        "Natural language processing",
        "Voice command recognition",
        "Smart home integration",
        "Multi-language support"
      ],
      category: "Artificial Intelligence"
    },
    {
      title: "Precision Agriculture using Machine Learning",
      description: "A comprehensive web-based platform designed to revolutionize farming practices through data-driven insights. Helps farmers optimize crop growth, predict yields, recommend fertilizers, and detect diseases affecting crops.",
      technologies: ["HTML5", "CSS3", "Python", "JavaScript"],
      icon: Leaf,
      color: "bg-luxury-sand",
      features: [
        "Crop yield prediction",
        "Disease detection system",
        "Fertilizer recommendations",
        "Weather-based insights"
      ],
      category: "Web Development"
    },
    {
      title: "Brain Stroke Identification using Machine Learning",
      description: "A machine learning-based healthcare system for brain stroke identification using CT and MRI scans. Features advanced image preprocessing, CNN analysis, and transfer learning to assist healthcare professionals in rapid diagnosis and treatment planning.",
      technologies: ["HTML5", "CSS3", "Python", "NumPy", "TensorFlow", "OpenCV", "CNN", "Jupyter Notebook", "Flask", "Streamlit", "JavaScript"],
      icon: Brain,
      color: "bg-accent",
      features: [
        "Medical image analysis",
        "CNN-based classification",
        "Transfer learning implementation",
        "Healthcare professional interface"
      ],
      category: "Healthcare AI"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Projects</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects &
            <span className="block text-luxury-taupe">Innovations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of practical applications combining machine learning, web development, 
            and artificial intelligence to solve real-world problems across various domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="luxury-card p-8 h-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold leading-tight mb-3">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Major Projects</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">ML Projects</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Web Applications</div>
          </Card>
          
          <Card className="luxury-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Healthcare AI</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;