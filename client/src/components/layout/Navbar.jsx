import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);

        // If we are not on home page, navigate to home first (optional logic, but assuming SPA behavior here)
        if (window.location.pathname !== '/') {
            window.location.href = `/${targetId}`;
            return;
        }

        if (window.lenis) {
            window.lenis.scrollTo(targetId);
        } else {
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-[100] mix-blend-difference text-white">
                {/* Brand Logo - Serif & Funky */}
                <Link to="/" className="text-3xl font-serif italic tracking-tighter interactive hover:skew-x-12 transition-transform origin-left relative group text-white">
                    studi<span className="text-accent-lime">Ó</span> Deepak.
                </Link>

                {/* Desktop Menu - Floating Pill */}
                <div className="hidden md:flex gap-2 items-center bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/20">
                    <MagneticButton className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                        <a href="#work" onClick={(e) => handleScroll(e, '#work')} className="font-sans text-sm tracking-widest uppercase font-bold">Work</a>
                    </MagneticButton>
                    <MagneticButton className="px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                        <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="font-sans text-sm tracking-widest uppercase font-bold">About</a>
                    </MagneticButton>
                    <MagneticButton className="px-6 py-2 rounded-full bg-white text-black hover:bg-accent-lime transition-colors duration-300">
                        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="font-sans text-sm tracking-widest uppercase font-bold">Let's Talk</a>
                    </MagneticButton>
                </div>

                {/* Mobile Menu Toggle */}
                <MagneticButton className="md:hidden w-12 h-12 flex flex-col justify-center items-center gap-1 group" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0' : ''}`}></span>
                </MagneticButton>
            </nav>

            {/* Full Screen Menu Overlay (Placeholder for future expansion) */}
            {isOpen && (
                <div className="fixed inset-0 bg-gallery-text z-50 flex items-center justify-center animate-fade-in text-white">
                    <div className="flex flex-col gap-8 text-center font-display text-5xl">
                        <a href="#work" onClick={(e) => handleScroll(e, '#work')}>Work</a>
                        <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
