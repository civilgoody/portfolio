import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "Fullstack Web Application",
  "Frontend Development",
  "Technical Consulting",
  "Collaboration Opportunity",
  "Other",
];
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real app, you'd send this to your backend or email service
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }
  };

  return (
    <div className="bg-secondary-dark/50 border border-border rounded-xl p-6">
      <h3 className="text-xl font-bold text-secondary-foreground mb-6 flex items-center">
        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-precision-pulse" />
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-secondary-foreground text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted transition-colors duration-200 precision-focus"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-secondary-foreground text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted transition-colors duration-200 precision-focus"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-secondary-foreground text-sm font-medium mb-2"
          >
            Project Type
          </label>
          <Select
            onValueChange={(value) => {
              setFormData((prev) => ({
                ...prev,
                subject: value,
              }));
            }}
            defaultValue={formData.subject}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {PROJECT_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-secondary-foreground text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted transition-colors duration-200 resize-none precision-focus"
            placeholder="Tell me about your project, timeline, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 precision-focus",
            isSubmitting
              ? "bg-muted/20 text-muted cursor-not-allowed"
              : "bg-primary text-primary-dark hover:bg-primary/80 transform hover:scale-[1.02] shadow-lg"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="text-center p-4 bg-success/10 border border-success/30 rounded-lg">
            <p className="text-success font-medium">
              ✓ Ok I&apos;ll be honest. This isn&apos;t working yet. Pls contact
              me via any of the social links.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 font-medium">
              ✗ Something went wrong. Please try again or reach out via email.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
