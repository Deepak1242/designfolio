import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import MagneticButton from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-accent-acid/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
                
                {/* Animated Logo Container (similar to Nav) */}
                <div className="flex flex-col items-center md:items-start group">
                    <Link to="/" className="flex items-center interactive hover:scale-105 transition-transform origin-center md:origin-left mb-6">
                        <img src="/logomain.png" alt="Nextruss Designs Logo" className="h-32 md:h-48 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
                    </Link>
                    <p className="text-gray-400 font-sans uppercase tracking-widest text-xs ml-2">© {new Date().getFullYear()} Nextruss Designs.</p>
                </div>

                {/* Floating Social Pill (Nav Desktop Menu style) */}
                <div className="flex gap-2 items-center bg-white/5 backdrop-blur-md px-3 py-3 rounded-full border border-white/10 shadow-xl transition-all hover:bg-white/10">
                    <a href="https://github.com/Deepak1242" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 sm:p-4 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
                            <FaGithub size={22} />
                        </MagneticButton>
                    </a>
                    <a href="https://linkedin.com/in/deepak-dutt-269542293" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 sm:p-4 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
                            <FaLinkedin size={22} />
                        </MagneticButton>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 sm:p-4 rounded-full hover:bg-blue-800 hover:text-white transition-colors duration-300">
                            <FaTwitter size={22} />
                        </MagneticButton>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 sm:p-4 rounded-full bg-white text-black hover:bg-blue-800 hover:text-white transition-colors duration-300">
                            <FaInstagram size={22} />
                        </MagneticButton>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
