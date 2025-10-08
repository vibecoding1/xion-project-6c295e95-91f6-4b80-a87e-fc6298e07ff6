import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      duration: "Jan 2022 - Present",
      description: "Led a team of 5 engineers in developing scalable web applications using Next.js and Supabase. Implemented real-time features and optimized database queries, resulting in a 20% performance improvement."
    },
    {
      title: "Software Developer",
      company: "Creative Solutions Co.",
      duration: "Jul 2019 - Dec 2021",
      description: "Developed and maintained client-side applications using React and TypeScript. Collaborated with design teams to implement user-friendly interfaces and integrate third-party APIs."
    },
    {
      title: "Junior Developer",
      company: "Startup Hub",
      duration: "Jan 2018 - Jun 2019",
      description: "Assisted in the development of a new e-commerce platform. Gained experience in front-end development, version control, and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in-up">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-surface border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100 + 200}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary flex items-center justify-center md:justify-start">
                  <Briefcase className="mr-3 h-6 w-6 text-secondary" /> {exp.title}
                </CardTitle>
                <CardDescription className="text-textSecondary mt-2 text-lg">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <p className="flex items-center text-sm text-accent mb-4">
                  <Calendar className="mr-2 h-4 w-4" /> {exp.duration}
                </p>
                <p className="text-textSecondary leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
