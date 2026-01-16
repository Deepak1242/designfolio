import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { IoClose, IoOpenOutline } from 'react-icons/io5';
import MagneticButton from './MagneticButton';

const ProjectModal = ({ project, onClose }) => {
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
            .fromTo(contentRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.1"
            );

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-gallery-bg/90 backdrop-blur-md opacity-0"
                onClick={onClose}
            />

            <div
                ref={contentRef}
                className="bg-[#FDFCF8] w-full max-w-7xl h-[90vh] relative overflow-hidden flex flex-col md:flex-row shadow-2xl border border-black/5"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 bg-white rounded-full text-black hover:bg-black hover:text-white transition-colors border border-black/10 cursor-pointer pointer-events-auto shadow-lg"
                    aria-label="Close modal"
                >
                    <IoClose size={28} />
                </button>

                {/* Content Section - Left (was Right) - Deserves priority in Art Gallery */}
                <div className="w-full md:w-1/3 h-1/2 md:h-full p-8 md:p-12 flex flex-col overflow-y-auto custom-scrollbar bg-[#F2F0E9] border-r border-black/5 relative">

                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-purple to-accent-lime" />

                    <span className="font-hand text-2xl -rotate-2 text-accent-purple mb-6 block">{project.category}</span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gallery-text mb-8 leading-none mix-blend-multiply">{project.title}</h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed font-serif text-lg mb-auto">
                        <p>{project.description || "A visual exploration of form and function. This project challenges the boundaries of traditional digital interfaces through organic layouts and typographic experimentation."}</p>
                    </div>

                    <div className="mt-12 space-y-8">
                        <div>
                            <h4 className="font-sans font-bold mb-3 text-xs uppercase tracking-widest text-gray-400">Mediums</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tools?.map((tool, i) => (
                                    <span key={i} className="px-3 py-1 border border-black/20 rounded-full text-xs font-sans uppercase">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-black/10">
                            <MagneticButton className="w-full py-4 bg-gallery-text text-white font-bold flex items-center justify-center gap-2 hover:bg-accent-orange hover:text-black transition-colors">
                                View Project <IoOpenOutline />
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                {/* Image Section - Right (was Left) - Art focus */}
                <div className="w-full md:w-2/3 h-1/2 md:h-full bg-gray-100 relative p-8 md:p-20 flex items-center justify-center">
                    <div className="relative w-full h-full shadow-2xl rotate-1 group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectModal;
