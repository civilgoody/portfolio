import { useState } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
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
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted transition-colors duration-200 precision-focus"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-secondary-foreground text-sm font-medium mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
          {/* <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-secondary-foreground transition-colors duration-200 precision-focus"
          >
            <option value="">Select project type</option>
            <option value="fullstack-web-app">Fullstack Web Application</option>
            <option value="frontend-project">Frontend Development</option>
            <option value="consulting">Technical Consulting</option>
            <option value="collaboration">Collaboration Opportunity</option>
            <option value="other">Other</option>
          </select> */}
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
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-primary-dark border border-border rounded-lg text-primary placeholder-muted transition-colors duration-200 resize-none precision-focus"
            placeholder="Tell me about your project, timeline, and any specific requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !formData.name ||
            !formData.email ||
            !formData.message
          }
          className={cn(
            "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 precision-focus",
            isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.message
              ? "bg-muted/20 text-muted cursor-not-allowed"
              : "bg-primary text-primary-dark hover:bg-primary/80 transform hover:scale-[1.02] shadow-lg"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
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
              ✓ Message sent successfully! I&apos;ll get back to you within 24
              hours.
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
