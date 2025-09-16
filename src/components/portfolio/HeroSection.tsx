import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, LinkedinIcon, Github } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <div className="space-y-8 lg:order-1">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit text-sm font-medium px-4 py-2">
              Computer Science Student
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Sunkari 
                <span className="block text-luxury-taupe">Vijay Kumar</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Passionate about creating innovative solutions through machine learning, 
                web development, and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>sunkarivijayekumar0604@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 93980 97257</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 shadow-elegant transition-luxury">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-luxury"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border border-border hover:shadow-elegant transition-luxury hover:-translate-y-1"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border border-border hover:shadow-elegant transition-luxury hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream to-luxury-sand rounded-3xl transform rotate-3 shadow-luxury"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <img 
                src={heroPortrait} 
                alt="Sunkari Vijay Kumar - Professional Portrait" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;