import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MapPage = () => {
    return (
        <section className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-primary/60 hover:text-accent transition-colors uppercase tracking-[0.2em] text-xs font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 space-y-4"
                >
                    <span className="text-accent tracking-[0.4em] uppercase text-sm font-medium block">Location</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary">Visit RD Inn</h1>
                    <p className="text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Hotel RD Inn is located in Shahganj, offering Rooms, Banquet, Rooftop, Restaurant, and any Event spaces for memorable celebrations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 bg-white border border-primary/5 shadow-xl space-y-6">
                            <h3 className="text-2xl font-serif text-primary">Hotel RD Inn</h3>

                            <div className="space-y-4 font-light text-primary/70">
                                <a
                                    href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x399045ce1b03c369:0x2e0438e368161b6a!3e0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 hover:text-accent transition-colors"
                                >
                                    <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>Near V-Mart Jaunpur Road,<br />Shahganj, Jaunpur, UP</span>
                                </a>
                                <a
                                    href="tel:+918299250632"
                                    className="flex items-center gap-4 hover:text-accent transition-colors"
                                >
                                    <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>+91 8299250632</span>
                                </a>
                                <a
                                    href="mailto:ershivansh16@gmail.com"
                                    className="flex items-center gap-4 hover:text-accent transition-colors"
                                >
                                    <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                                    <span>ershivansh16@gmail.com</span>
                                </a>
                                <div className="flex items-start gap-4 border-t border-primary/5 pt-6 mt-6">
                                    <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                                    <div>
                                        <p className="font-serif text-primary mb-1 text-sm uppercase tracking-wider">Check-in / Check-out</p>
                                        <p>Check-in: 11:00 AM</p>
                                        <p>Check-out: 10:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x399045ce1b03c369:0x2e0438e368161b6a!3e0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-btn w-full block text-center"
                        >
                            Get Directions
                        </a>
                    </motion.div>

                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-2 h-[600px] w-full bg-secondary/20 border border-primary/5 overflow-hidden shadow-2xl relative"
                    >
                        {/* Embedded Google Map Placeholder - In a real app, this would be an iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8904633412894!2d82.68052607524044!3d26.037139777179853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399045ce1b03c369%3A0x2e0438e368161b6a!2sHotel%20RD%20Inn!5e0!3m2!1sen!2sin!4v1780177070967!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[20%] contrast-[1.1]"
                        ></iframe>

                        {/* Visual Decorative Overlay */}
                        <div className="absolute inset-0 pointer-events-none border-[20px] border-background/50" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MapPage;
