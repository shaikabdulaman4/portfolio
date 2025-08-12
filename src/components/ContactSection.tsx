"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import RevealWrapper from "./RevealWrapper";
import { toast } from "react-hot-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
      toast.error("Please enter a valid email address", { position: "bottom-center" });
      return;
    }

    setEmailError(false);

    emailjs
      .sendForm(
        "service_x3kozw8",
        "template_vr6dq7p",
        formRef.current!,
        "4uIujkNr1JgmSBuN-"
      )
      .then(
        () => {
          setSent(true);
          formRef.current?.reset();
          setEmail("");
          setTimeout(() => setSent(false), 4000);
        },
        () => {
          toast.error("Failed to send message. Try again.", { position: "bottom-center" });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-20 bg-[#0d0d0d] text-white scroll-mt-20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute -top-20 -left-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-pink-500 rounded-full blur-[100px] sm:blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] bg-purple-500 rounded-full blur-[100px] sm:blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <RevealWrapper>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Contact Me
          </h2>
        </RevealWrapper>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-xl border border-neutral-800 p-6 sm:p-8 space-y-5 sm:space-y-6 w-full shadow-lg"
        >
          {/* Name Field */}
          <RevealWrapper>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 text-base"
            />
          </RevealWrapper>

          {/* Email Field */}
          <RevealWrapper>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              aria-label="Your Email"
              value={email}
              onChange={(e) => {
                const val = e.target.value;
                setEmail(val);
                setEmailError(!validateEmail(val));
              }}
              onPaste={(e) => {
                const pasted = e.clipboardData.getData("text");
                if (!validateEmail(pasted)) {
                  e.preventDefault();
                  toast.error("Invalid email format on paste", { position: "bottom-center" });
                }
              }}
              className={`w-full px-4 py-3 rounded-md bg-[#111] border ${
                emailError ? "border-red-500" : "border-neutral-700"
              } text-white focus:outline-none focus:ring-2 ${
                emailError ? "focus:ring-red-500" : "focus:ring-pink-500"
              } text-base`}
            />
          </RevealWrapper>

          {/* Message Field */}
          <RevealWrapper>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              aria-label="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 text-base resize-none"
            ></textarea>
          </RevealWrapper>

          {/* Submit Button */}
          <RevealWrapper>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-full hover:scale-105 transition-transform font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            >
              Send Message
            </button>
          </RevealWrapper>

          {/* Success Message */}
          {sent && (
            <RevealWrapper>
              <p className="text-green-400 text-center mt-3 text-sm sm:text-base">
                Message sent successfully!
              </p>
            </RevealWrapper>
          )}
        </form>
      </div>
    </section>
  );
}
