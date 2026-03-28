import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../components/ui/MagneticButton';
import MaestroHeroVisual from '../components/home/MaestroHeroVisual';
import AboutSection from '../components/home/AboutSection';
import ProjectsGallery from '../components/home/ProjectsGallery';
import ContactSection from '../components/home/ContactSection';
import { RotatingBadge } from '../components/ui/FunkyElements';
import { Star, Underline } from '../components/ui/Scribbles';
import StarBorder from '../components/ui/StarBorder';
import AIChatWidget from '../components/ui/AIChatWidget';

const Home = () => {
    const containerRef = useRef(null);
    const titleLinesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline();

        // Staggered Text Reveal
        tl.fromTo(titleLinesRef.current,
            { y: 80, opacity: 0, rotateX: -20 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: "power4.out", stagger: 0.05, delay: 0.1 }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="w-full relative overflow-hidden bg-gallery-bg selection:bg-accent-acid selection:text-black">

            {/* Premium Agency Hero Section */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 md:px-12 py-20 overflow-hidden">
                <div className="absolute inset-0 w-full h-full -z-0 pointer-events-auto">
                    <MaestroHeroVisual />
                </div>

                <div className="z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center text-left text-white pointer-events-none mt-12 md:mt-24 pl-4 md:pl-0">
                    
                    {/* Eyebrow / Label */}
                    <div className="overflow-hidden mb-6 py-2 -my-2 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-white opacity-50 block"></span>
                        <span ref={addToRefs} className="block text-xs md:text-sm font-sans font-semibold tracking-[0.4em] uppercase text-white/70">
                            Digital Design & Development Agency
                        </span>
                    </div>

                    {/* Main Headline - Left Aligned, Refined Weights */}
                    <div className="relative leading-[0.85] flex flex-col items-start w-full">
                        <div className="overflow-hidden w-full py-4 -my-4">
                            <span ref={addToRefs} className="block text-[14vw] md:text-[8vw] font-display font-light tracking-tighter">
                                Crafting
                            </span>
                        </div>
                        <div className="overflow-hidden flex flex-col md:flex-row items-baseline gap-4 md:gap-8 w-full mt-2 py-4 -my-4">
                            <span ref={addToRefs} className="block text-[16vw] md:text-[9vw] font-serif italic text-[#FB32EC] font-medium">
                                Digital
                            </span>
                            <span ref={addToRefs} className="block text-[14vw] md:text-[8vw] font-display font-medium tracking-tight">
                                Magic.
                            </span>
                        </div>
                    </div>

                    {/* Subheadline & CTA - Staggered Layout */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full mt-16 md:mt-24 gap-12 border-t border-white/10 pt-10">
                        <div className="overflow-visible py-4 -my-4 flex-1">
                            <p ref={addToRefs} className="max-w-xl text-gray-300 font-sans text-base md:text-xl font-light leading-relaxed">
                                We transform complex problems into elegant, highly-converting digital experiences for ambitious brands.
                            </p>
                        </div>

                        <div ref={addToRefs} className="overflow-visible pointer-events-auto py-8 -my-8 md:min-w-[200px] flex justify-end">
                            <StarBorder as="button" color="#FB32EC" speed="4s">
                                Start a Project
                            </StarBorder>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 z-20 pointer-events-auto flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white">Scroll to Explore</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
                </div>
            </section>

            <AboutSection />

            <ProjectsGallery />

            <ContactSection />

            {/* AI Assistant Chat Widget */}
            <AIChatWidget />

        </div>
    );
};

export default Home;
