"use client";
import { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mvgkwpap", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiUser className="text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiMail className="text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute top-3 left-3">
            <FiMessageSquare className="text-gray-400" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Your Message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center px-5 py-3 border border-blue-600 text-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent rounded-lg transition-all duration-300 group"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              <FiSend className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-800/30 border border-green-600 rounded-lg">
          Message sent successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-800/30 border border-red-600 rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}
    </div>
  );
}
