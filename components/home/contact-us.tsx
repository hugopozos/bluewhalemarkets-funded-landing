"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    trading_account: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", trading_account: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      console.error("Something went wrong.");
    }
  };
  return (
    <section className="py-24 px-6 bg-black/5 backdrop-blur rounded-xl relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
            <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400">
                Contact Us
            </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-8">
        Your Success is Our Priority
        </h2>
        {!submitted ? (
           <>
        <p className="text-gray-400 text-center mb-12">
        Our dedicated support team is here to assist you with any questions about our trading platform, account services, or technical assistance. We provide comprehensive support in multiple languages to ensure you have the best trading experience possible.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-black to-[#080816] border border-gray-800 p-6 rounded-xl shadow-lg">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name"  className="bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none placeholder:text-gray-400" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none placeholder:text-gray-400" />
          <input type="text" name="trading_account" value={form.trading_account} onChange={handleChange} placeholder="Trading Account"  className="md:col-span-2 bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none placeholder:text-gray-400" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} className="md:col-span-2 bg-black/20 border border-gray-700 text-white rounded-lg px-4 py-3 outline-none placeholder:text-gray-400 resize-none" />
          
         <div className="md:col-span-2 flex justify-center">
        <button type="submit" className="relative w-44 py-3 px-5 rounded-full font-semibold text-white shadow-md transition-all duration-300 overflow-hidden group text-base">
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(at_center,_#ffffff33,_#ffffff99,_#ffffff33)] animate-spin-slow blur-sm opacity-40 group-hover:opacity-70 z-0"></span>
            <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-0"></span>
            <span className="relative z-10">Send Message</span>
        </button>
        </div>

    
      
        </form>
        </>
      ) : (
          <div className="bg-black/20 text-white border border-green-600 p-6 rounded-xl shadow-lg text-center space-y-4">
            <h3 className="text-2xl font-semibold text-green-400">Thank you!</h3>
            <p>Your message has been successfully sent.</p>
            <p>Our support team has received your inquiry and will get back to you as soon as possible.</p>
            <p>We appreciate your patience and look forward to assisting you.</p>
          </div>
        )}

      </div>
    </section>
  );
}
