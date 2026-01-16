import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FloatingImage, RotatingBadge, FunkySpinner } from '../ui/FunkyElements';

gsap.registerPlugin(ScrollTrigger);

const tags = [
  "Product Design", "UI/UX", "Design Systems", "Prototyping", "User Research", "Interaction", "Motion", "Figma"
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(textRef.current,
      { y: 50, opacity: 0, rotation: 2 },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { scale: 0.8, opacity: 0, rotate: -10 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        }
      }
    );

  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20 px-6 md:px-20 bg-gallery-bg text-gallery-text relative overflow-visible z-10">

      {/* Funky Decorations */}
      <FloatingImage src="/assets/chrome-morph.png" alt="Chrome Blob" className="bottom-[10%] left-[-10%] w-[200px] md:w-[400px] opacity-60 blur-sm" speed={6} delay={1} />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="flex flex-col md:flex-row gap-20 items-center">

          <div className="w-full md:w-1/2 relative">
            {/* Brutalist Image Composition */}
            <div ref={imageRef} className="relative z-10">
              <img src="/assets/brutalist-statue.png" alt="Deepak Avatar" className="w-full max-w-md mx-auto drop-shadow-2xl filter contrast-125" />

              {/* Sticker */}
              <img src="/assets/smiley-melt.png" alt="Smiley" className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 animate-wiggle" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-accent-lime/20 -z-10 rotate-12 blur-xl rounded-full" />
          </div>

          <div className="w-full md:w-1/2 relative">
            <span className="absolute -top-12 -left-8 text-9xl font-display font-bold text-gray-100 -z-10 select-none">ABOUT</span>

            <h2 className="text-sm font-mono font-bold tracking-[0.3em] uppercase mb-8 border-b-4 border-accent-pink pb-2 inline-block bg-accent-pink/10 px-4 transform -skew-x-12">Deepak Dutt</h2>

            <p ref={textRef} className="text-4xl md:text-6xl font-display font-bold leading-[0.9] mb-8 text-gallery-text">
              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-orange italic font-serif">Designer</span> obsessed with crafting <span className="underline decoration-wavy decoration-accent-lime underline-offset-8">functional art</span>.
            </p>

            <div className="font-hand text-2xl -rotate-2 text-gray-500 mb-8 bg-white/80 p-4 shadow-sm border border-black/5 rotate-1 max-w-lg">
              "Designing intuitive interfaces that solve real human problems." 🧠
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2 border-l-4 border-accent-purple pl-4">
                <h3 className="font-sans font-bold text-5xl">1.5+</h3>
                <p className="font-mono uppercase text-xs tracking-widest text-gray-500">Years of<br />Experience</p>
              </div>
              <div className="space-y-2 border-l-4 border-accent-orange pl-4">
                <h3 className="font-sans font-bold text-5xl">10+</h3>
                <p className="font-mono uppercase text-xs tracking-widest text-gray-500">Projects<br />Shipped</p>
              </div>
            </div>

            <div>
              <h4 className="font-mono font-bold text-sm uppercase mb-4 tracking-widest text-gray-400">Tech Arsenal</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className={`px-4 py-2 border-2 border-black rounded-none font-bold font-sans text-sm uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-none hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${i % 2 === 0 ? 'bg-white' : 'bg-transparent'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Extra Funky Element */}
      <div className="absolute bottom-10 left-10 hidden md:block z-0 opacity-50">
        <RotatingBadge text="CREATIVE • DEV • ART • " className="text-accent-purple" />
      </div>

    </section>
  );
};

export default AboutSection;
