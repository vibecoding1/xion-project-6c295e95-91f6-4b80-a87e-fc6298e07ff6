"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would send this data to your backend API
    // For this example, we'll simulate a successful submission
    console.log("Form Data Submitted:", formData);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you shortly.",
        variant: "success",
      });
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-surface text-foreground rounded-xl shadow-2xl mb-16">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in-up">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up delay-200">
          <div>
            <Label htmlFor="name" className="sr-only">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border-border text-text focus:ring-primary focus:border-primary transition-all duration-300"
            />
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border-border text-text focus:ring-primary focus:border-primary transition-all duration-300"
            />
          </div>
          <div>
            <Label htmlFor="message" className="sr-only">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-background border-border text-text focus:ring-primary focus:border-primary transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full px-8 py-3 text-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : <><Mail className="mr-2 h-5 w-5" /> Send Message</>}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
