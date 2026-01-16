import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../components/ui/MagneticButton';
import GradientBlinds from '../components/ui/GradientBlinds';
import AboutSection from '../components/home/AboutSection';
import ProjectsGallery from '../components/home/ProjectsGallery';
import ContactSection from '../components/home/ContactSection';
import { RotatingBadge } from '../components/ui/FunkyElements';

const Home = () => {
    const containerRef = useRef(null);
    const titleLinesRef = useRef([]);

    useEffect(() => {
        const tl = gsap.timeline();

        // Staggered Text Reveal
        tl.fromTo(titleLinesRef.current,
            { y: 100, opacity: 0, rotate: 5 },
            { y: 0, opacity: 1, rotate: 0, duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.5 }
        );
    }, []);

    const addToRefs = (el) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    return (
        <div ref={containerRef} className="w-full relative overflow-hidden bg-gallery-bg selection:bg-accent-lime selection:text-black">

            {/* Hero Section */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 py-20">
                <div className="absolute inset-0 w-full h-full -z-0 pointer-events-auto">
                    <GradientBlinds
                        gradientColors={['#D4E66D', '#E2F0CB', '#A8E6CF', '#D4E66D']}
                        angle={15}
                        noise={0.1}
                        blindCount={12}
                        blindMinWidth={50}
                        spotlightRadius={0.5}
                        spotlightSoftness={1}
                        spotlightOpacity={0.8}
                        mouseDampening={0.15}
                        distortAmount={0.2}
                        shineDirection="left"
                        mixBlendMode="normal"
                    />
                </div>

                {/* Background Scrolling Marquee */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] rotate-[-15deg] opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap z-0">
                    <div className="text-[20vw] font-display font-bold uppercase animate-marquee">
                        Design • Art • Code • Magic • Design • Art • Code • Magic •
                    </div>
                </div>

                <div className="z-20 text-center text-gallery-text pointer-events-none flex flex-col items-center relative">

                    {/* Main Headline - Staggered */}
                    <div className="relative leading-[0.85] perspective-1000">
                        <div className="overflow-hidden">
                            <span ref={addToRefs} className="block text-[12vw] md:text-[8vw] font-serif italic font-light tracking-tight text-accent-purple">Visual</span>
                        </div>

                        <div className="relative z-10 mix-blend-normal">
                            <span ref={addToRefs} className="block text-[16vw] md:text-[13vw] font-display font-bold uppercase tracking-tighter text-outline-hover relative cursor-pointer select-none">
                                MAESTRO
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-lime/30 rounded-full mix-blend-screen blur-3xl animate-pulse pointer-events-none -z-10"></span>
                            </span>
                        </div>

                        <div className="overflow-hidden">
                            <span ref={addToRefs} className="block text-xl md:text-2xl font-sans tracking-[0.5em] uppercase mt-6 border-t border-black/10 pt-6">
                                <span className="text-accent-orange">Product</span> • <span className="text-accent-lime">UI/UX</span> • <span className="text-accent-pink">Interaction</span>
                            </span>
                        </div>
                    </div>

                    {/* Rotating Scroll Badge */}
                    <div className="absolute right-0 bottom-[-20%] md:bottom-auto md:top-20 md:right-20">
                        <RotatingBadge text="SCROLL • EXPLORE • VIEW • " className="text-accent-orange animate-spin-slow" />
                    </div>

                    <p className="mt-12 max-w-lg text-lg md:text-xl font-hand -rotate-2 text-gray-600 block bg-white/50 backdrop-blur-sm px-6 py-2 border border-white rounded-lg shadow-sm">
                        "Crafting digital experiences that feel like magic." ✨
                    </p>

                </div>

                <div className="absolute bottom-12 z-20 pointer-events-auto flex flex-col items-center gap-4">
                    <span className="font-sans text-xs uppercase tracking-widest text-gray-400 rotate-90 origin-center translate-y-12">Scroll</span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-gray-400 to-transparent"></div>
                </div>
            </section>

            <AboutSection />

            <ProjectsGallery />

            <ContactSection />

        </div>
    );
};

export default Home;
