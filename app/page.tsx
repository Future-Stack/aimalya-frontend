"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LandingNavbar from "@/components/user/home/LandingNavbar";
import HeroSection from "@/components/user/home/HeroSection";
import AboutSection from "@/components/user/home/AboutSection";
import TestimonialsSection from "@/components/user/home/TestimonialsSection";
import PricingSection from "@/components/user/home/PricingSection";
import ContactSection from "@/components/user/home/ContactSection";
import LandingFooter from "@/components/user/home/LandingFooter";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Note: Animation logic is kept commented out as per original file state, 
  // but refs are hooked up if you wish to re-enable it.

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // Hero Entrance
  //     const heroTl = gsap.timeline();
  //     heroTl.from(".hero-text", {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power4.out",
  //     })
  //       .from(".hero-cards", {
  //         x: 100,
  //         opacity: 0,
  //         duration: 1,
  //         ease: "power4.out",
  //       }, "-=0.8");
  //
  //     // Section to Section Scroll Transitions
  //     const sections = Object.values(sectionRefs);
  //     sections.forEach((section, i) => {
  //       if (section.current) {
  //         // Reveal children on scroll
  //         gsap.from(section.current.querySelectorAll(".reveal-up"), {
  //           scrollTrigger: {
  //             trigger: section.current,
  //             start: "top 80%",
  //             toggleActions: "play none none none",
  //           },
  //           y: 60,
  //           opacity: 0,
  //           duration: 1,
  //           stagger: 0.15,
  //           ease: "power3.out",
  //         });
  //
  //         // Section transition (slight scale or background shift)
  //         if (i > 0) {
  //           gsap.from(section.current, {
  //             scrollTrigger: {
  //               trigger: section.current,
  //               start: "top bottom",
  //               end: "top top",
  //               scrub: 1,
  //             },
  //             backgroundColor: i % 2 === 0 ? "#f8fafc" : "#ffffff",
  //             ease: "none",
  //           });
  //         }
  //       }
  //     });
  //
  //     // Special animation for dashboard cards in hero
  //     gsap.to(".floating-card", {
  //       y: -15,
  //       duration: 2,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //       stagger: 0.3
  //     });
  //   }, containerRef);
  //
  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <LandingNavbar />

      <main>
        <HeroSection ref={sectionRefs.hero} />
        <AboutSection ref={sectionRefs.about} />
        <TestimonialsSection ref={sectionRefs.testimonials} />
        <PricingSection ref={sectionRefs.pricing} />

        {/* Contact Section - Note: ContactSection already has id="contact" but not ref. 
            If you need ref, ContactSection needs forwardRef like others. 
            For now, wrapping it to maintain structure or updating ContactSection.
            Since ContactSection was just made by me without forwardRef, I will wrap it 
            or assume ref isn't critical since GSAP is off. 
            However, for consistency with other sections, let's keep the section wrapper 
            OR update ContactSection. 
            
            Actually, the previous implementation of ContactSection didn't have the <section> wrapper inside it,
            it was in page.tsx.
            Wait, let me check ContactSection.tsx again.
        */}
        <section id="contact" ref={sectionRefs.contact} className="py-28 bg-white">
          <ContactSection />
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
