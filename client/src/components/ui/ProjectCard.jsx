import { useRef } from 'react';
import gsap from 'gsap';

const ProjectCard = ({ project, onClick, className = '' }) => {
    const containerRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);

    // Build the image stack: up to 3 images, duplicating main if fewer exist
    const mainImage = project.image || project.images?.[0]?.url || 'https://via.placeholder.com/600x400';
    const allImages = project.images?.map(img => img.url || img) || [];
    const stackImages = [
        allImages[1] || mainImage,
        allImages[2] || allImages[1] || mainImage,
    ];

    const handleMouseEnter = () => {
        gsap.to(card1Ref.current, {
            x: -18, y: -14, rotation: -8, scale: 0.95, opacity: 1,
            duration: 0.45, ease: 'power3.out'
        });
        gsap.to(card2Ref.current, {
            x: 18, y: 10, rotation: 6, scale: 0.92, opacity: 1,
            duration: 0.45, ease: 'power3.out', delay: 0.04
        });
    };

    const handleMouseLeave = () => {
        gsap.to(card1Ref.current, {
            x: 0, y: 0, rotation: 0, scale: 0.97, opacity: 0,
            duration: 0.35, ease: 'power2.inOut'
        });
        gsap.to(card2Ref.current, {
            x: 0, y: 0, rotation: 0, scale: 0.94, opacity: 0,
            duration: 0.35, ease: 'power2.inOut'
        });
    };

    return (
        <div
            ref={containerRef}
            className={`relative group cursor-pointer ${className}`}
            onClick={() => onClick(project)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '800px' }}
        >
            {/* --- Back card 2 (deepest) --- */}
            <div
                ref={card2Ref}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg opacity-0 will-change-transform"
                style={{ zIndex: 1 }}
            >
                <img
                    src={stackImages[1]}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* --- Back card 1 (middle) --- */}
            <div
                ref={card1Ref}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg opacity-0 will-change-transform"
                style={{ zIndex: 2 }}
            >
                <img
                    src={stackImages[0]}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* --- Front card (main / top) --- */}
            <div
                className="relative rounded-2xl overflow-hidden shadow-xl transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-blue-800/30"
                style={{ zIndex: 3 }}
            >
                <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                        src={mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Gradient overlay at the bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md text-white/80 text-xs font-sans font-bold uppercase tracking-[0.15em] rounded-full mb-2 border border-white/10">
                        {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                        {project.title}
                    </h3>
                </div>

                {/* Hover badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-800 text-white text-xs font-sans font-bold uppercase tracking-widest rounded-full shadow-lg">
                        View <span className="text-sm">→</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
