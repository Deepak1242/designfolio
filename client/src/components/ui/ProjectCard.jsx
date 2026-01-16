import { useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ project, onClick, className = '' }) => {
    const imageRef = useRef(null);
    const overlayRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, { scale: 1.1, duration: 0.5, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    };

    return (
        <div
            className={`relative group cursor-none overflow-hidden bg-white/5 border border-black/5 p-4 md:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-accent-purple/20 hover:-translate-y-2 ${className}`}
            onClick={() => onClick(project)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Tape/Sticker Element Mockup - random rotation could be passed via props or random in CSS */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/80 shadow-sm rotate-1 z-20 backdrop-blur-sm" />

            <div className="w-full h-full relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img
                    ref={imageRef}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Artistic Overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 bg-accent-purple/20 mix-blend-multiply opacity-0 transition-opacity duration-300 flex items-center justify-center"
                >
                    <span className="bg-white text-black px-6 py-2 font-display font-bold text-xl uppercase tracking-widest transform -rotate-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        View Art
                    </span>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-end">
                <div>
                    <span className="font-hand text-xl text-gray-500 block -rotate-2">{project.category}</span>
                    <h3 className="text-2xl font-serif italic font-bold mt-1 text-gallery-text group-hover:text-accent-purple transition-colors">{project.title}</h3>
                </div>
                <div className="text-xs font-sans font-bold border border-black px-2 py-1 rounded-full uppercase tracking-widest opacity-50">
                    {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
