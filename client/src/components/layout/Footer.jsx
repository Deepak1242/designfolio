import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import MagneticButton from '../ui/MagneticButton';

const Footer = () => {
    return (
        <footer className="bg-gallery-bg text-gallery-text pt-20 pb-10 border-t border-black/5">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-end gap-10">

                <div className="text-center md:text-left">
                    <h3 className="text-8xl font-serif italic mb-2 tracking-tighter">studi<span className="text-accent-lime">Ó</span> Deepak.</h3>
                    <p className="text-gray-500 font-sans uppercase tracking-widest text-xs">© {new Date().getFullYear()} Product & Visual Design.</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/Deepak1242" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors">
                            <FaGithub size={20} />
                        </MagneticButton>
                    </a>
                    <a href="https://linkedin.com/in/deepak-dutt-269542293" target="_blank" rel="noopener noreferrer">
                        <MagneticButton className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors">
                            <FaLinkedin size={20} />
                        </MagneticButton>
                    </a>
                    {/* Placeholder for other socials if needed */}
                    <MagneticButton className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors">
                        <FaTwitter size={20} />
                    </MagneticButton>
                    <MagneticButton className="p-3 border border-black/10 rounded-full hover:bg-black hover:text-white transition-colors">
                        <FaInstagram size={20} />
                    </MagneticButton>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
