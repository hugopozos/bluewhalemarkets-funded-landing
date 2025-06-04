import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import React from "react";
import FAQsSection from "@/components/home/faq";

export default function FAQsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div
            className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" 
            style={{
                background:
                "linear-gradient(to bottom right, rgba(0,0,0,1), rgba(30,20,60,0.8)), radial-gradient(#333 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }}
            />
      <Navbar />

      <main className="flex-grow px-4 py-16 relative z-10">
        <section>
          <FAQsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
