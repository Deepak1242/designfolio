import { useState } from 'react';
import MagneticButton from '../ui/MagneticButton';
import toast from 'react-hot-toast';
import { Spring, Curl, Underline, Star } from '../ui/Scribbles';
import { FloatingImage, FunkySpinner, RotatingBadge } from '../ui/FunkyElements';

const ContactSection = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        toast.success('Your letter has been posted! 📮', {
            style: {
                background: '#FDFCF8',
                color: '#1A1A1A',
                border: '2px solid #000',
                fontFamily: 'Space Grotesk',
            }
        });
        setFormState({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="min-h-screen py-32 px-6 md:px-12 bg-gallery-bg text-gallery-text flex flex-col justify-center items-center relative overflow-hidden z-20">

            {/* Funky Decorations */}
            <FloatingImage src="/assets/chrome-morph.png" alt="Chrome Blob" className="top-10 left-10 w-24 opacity-50 absolute" speed={5} />
            <FunkySpinner className="bottom-20 left-20" />

            {/* Background decoration - Springs & Curls */}
            <div className="absolute top-20 right-20 text-accent-purple opacity-80">
                <Spring className="w-48 h-12 rotate-45" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent-pink/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center relative">

                {/* Floating Star */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-accent-orange mix-blend-multiply">
                    <Star className="w-20 h-20 animate-spin-slow" />
                </div>

                {/* Rotating Badge */}
                <div className="absolute top-0 right-0 hidden md:block transform translate-x-1/2 -translate-y-1/2">
                    <RotatingBadge text="SAY HELLO • GET IN TOUCH • " className="text-accent-pink" />
                </div>

                {/* Left Side: Call to Action */}
                <div className="flex-1 text-center md:text-left relative z-20">
                    <span className="font-hand text-4xl text-accent-purple -rotate-6 inline-block mb-4 relative bg-white border border-black/10 px-4 py-2 shadow-sm transform hover:scale-110 transition-transform cursor-none">
                        Don't be a stranger!
                        <Star className="w-6 h-6 absolute -top-3 -right-3 text-accent-lime animate-bounce" />
                    </span>

                    <h2 className="text-[12vw] md:text-[6vw] font-display font-bold text-gallery-text leading-[0.85] mb-8 relative z-10 drop-shadow-sm">
                        LET'S MAKE <br />
                        <span className="font-serif italic font-light text-white stroke-text-black relative inline-block px-2">
                            HISTORY
                            <Underline className="absolute bottom-0 left-0 w-full text-accent-orange" />
                        </span>
                    </h2>
                    <p className="text-black text-xl md:text-2xl font-mono max-w-md font-bold bg-accent-lime/20 p-4 transform -rotate-1 italic">
                        Available for freelance work, collaborations, and coffee chats.
                    </p>
                </div>

                {/* Right Side: Postcard Form */}
                <div className="flex-1 w-full relative group perspective-1000">
                    {/* Postcard Container - COLORFUL UPDATE */}
                    <div className="bg-gradient-to-br from-[#fff0f5] to-[#e6e6fa] p-8 md:p-12 rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black relative transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">

                        {/* Stamp */}
                        <div className="absolute top-6 right-6 w-24 h-28 bg-white border-4 border-double border-accent-pink flex items-center justify-center rotate-6 shadow-sm z-10 transform group-hover:rotate-12 transition-transform">
                            <div className="text-center">
                                <img src="/assets/smiley-melt.png" alt="Stamp" className="w-12 h-12 mx-auto mb-1 opacity-80" />
                                <span className="font-mono font-bold text-[8px] uppercase text-black tracking-widest block">Air Mail<br />Priority</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-20 space-y-6">
                            <div className="group relative">
                                <label className="font-mono text-xs uppercase font-bold tracking-widest text-accent-purple mb-1 block">Who are you?</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/50 border-b-4 border-black/10 py-3 text-2xl font-display font-bold text-black focus:outline-none focus:border-accent-pink transition-all placeholder:text-gray-300"
                                    placeholder="NAME"
                                />
                            </div>

                            <div className="group">
                                <label className="font-mono text-xs uppercase font-bold tracking-widest text-accent-purple mb-1 block">Where to reply?</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/50 border-b-4 border-black/10 py-3 text-2xl font-display font-bold text-black focus:outline-none focus:border-accent-pink transition-colors placeholder:text-gray-300"
                                    placeholder="EMAIL"
                                />
                            </div>

                            <div className="group">
                                <label className="font-mono text-xs uppercase font-bold tracking-widest text-accent-purple mb-1 block">The Plan</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                    className="w-full bg-white/50 border-b-4 border-black/10 py-3 text-xl font-hand font-bold text-black focus:outline-none focus:border-accent-pink transition-colors resize-none placeholder:text-gray-300"
                                    placeholder="Tell me everything..."
                                ></textarea>
                            </div>

                            <div className="pt-8 text-right">
                                <MagneticButton className="px-12 py-5 bg-black text-white font-display font-bold text-xl uppercase tracking-widest hover:bg-accent-lime hover:text-black transition-all shadow-[4px_4px_0px_0px_#BFA2DB] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                                    SEND IT 🚀
                                </MagneticButton>
                            </div>
                        </form>
                    </div>

                    {/* Decor behind postcard */}

                </div>

            </div>

        </section>
    );
};

export default ContactSection;
