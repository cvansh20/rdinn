import { motion } from 'framer-motion';
import rdInnAbout from '../assets/photos/rdinn-about.jpeg';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-accent tracking-[0.3em] uppercase text-sm font-medium block">Welcome To RD Inn</span>
                            <h2 className="text-4xl md:text-6xl text-primary font-serif leading-tight">
                                Where Luxury <br /> Meets Celebration
                            </h2>
                        </div>

                        <p className="text-primary/70 text-lg leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                            Located in the heart of Shahganj, RD Inn is a destination designed for memorable stays, elegant celebrations, rooftop dining, and exceptional hospitality. From luxurious rooms to beautifully designed banquet spaces, every corner reflects comfort, sophistication, and warmth.
                        </p>

                        <p className="text-primary/70 text-lg leading-relaxed font-light">
                            Whether you are planning a wedding celebration, family gathering, corporate event, or a relaxing stay, RD Inn offers a premium experience crafted with modern elegance and personalized service. Our rooftop restaurant, banquet hall, open lawn, and thoughtfully designed interiors create unforgettable moments for every guest.
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="pt-4"
                        >
                            <button className="secondary-btn">Explore RD Inn</button>
                        </motion.div>
                    </motion.div>

                    {/* Visuals */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative z-10 aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src={rdInnAbout}
                                alt="Luxury Mountain Interior"
                                className="w-full h-full object-cover grayscale-[20%] hover:scale-110 transition-transform duration-1000"
                            />
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 0.1, x: 0 }}
                            className="absolute -top-10 -right-10 text-[12rem] font-serif text-primary pointer-events-none select-none"
                        >
                            RD
                        </motion.div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-accent/30 z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
