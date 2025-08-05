"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import RevealWrapper from "./RevealWrapper";
import { toast } from "react-hot-toast"; // Make sure toast is installed and set up

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
      toast.error("Please enter a valid email address", {
        position: "bottom-center",
      });
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
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Try again.", {
            position: "bottom-center",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-20 bg-[#0d0d0d] text-white relative"
    >
      {/* Glowing blur background */}
      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <RevealWrapper>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Contact Me
          </h2>
        </RevealWrapper>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#1a1a1a]/80 backdrop-blur-lg rounded-xl border border-neutral-800 p-8 space-y-6"
        >
          <RevealWrapper>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </RevealWrapper>

          <RevealWrapper>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
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
                  toast.error("Invalid email format on paste", {
                    position: "bottom-center",
                  });
                }
              }}
              className={`w-full px-4 py-3 rounded-md bg-[#111] border ${
                emailError ? "border-red-500" : "border-neutral-700"
              } text-white focus:outline-none focus:ring-2 ${
                emailError ? "focus:ring-red-500" : "focus:ring-pink-500"
              }`}
            />
          </RevealWrapper>

          <RevealWrapper>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-md bg-[#111] border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </RevealWrapper>

          <RevealWrapper>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-6 rounded-full hover:scale-105 transition font-semibold"
            >
              Send Message
            </button>
          </RevealWrapper>

          {sent && (
            <RevealWrapper>
              <p className="text-green-400 text-center mt-4">
                Message sent successfully!
              </p>
            </RevealWrapper>
          )}
        </form>
      </div>
    </section>
  );
}
