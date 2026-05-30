import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-primary text-background py-24 md:py-32 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 border-2 border-accent flex items-center justify-center">
                                <span className="text-accent font-serif text-xl">RD</span>
                            </div>
                            <span className="text-2xl font-serif tracking-[0.2em] uppercase">Hotel RD Inn</span>
                        </div>
                        <p className="text-background/50 max-w-md font-light leading-relaxed text-lg italic">
                            ""Experience hospitality, elegant celebrations, rooftop dining, and memorable stays at RD Inn Shahganj.""
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="text-background/30 hover:text-accent transition-colors">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl text-accent">Reach Us</h4>
                        <ul className="space-y-4 font-light text-background/60">
                            <li className="flex items-start gap-4">
                                <a
                                    href="https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x399045ce1b03c369:0x2e0438e368161b6a!3e0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 hover:text-accent transition-colors"
                                >
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                <span>Near V-Mart Jaunpur Road,<br />Shahganj, Jaunpur, UP</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-4">
                                <a
                                    href="tel:+918299250632"
                                    className="flex items-center gap-4 hover:text-accent transition-colors"
                                >
                                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>+91 8299250632</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-4">
                                <a
                                    href="mailto:ershivansh16@gmail.com"
                                    className="flex items-center gap-4 hover:text-accent transition-colors"
                                >
                                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                                <span>ershivansh16@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl text-accent">Explore</h4>
                        <ul className="space-y-4 font-light text-background/60 tracking-widest uppercase text-xs">
                            <li><a href="#about" className="hover:text-background transition-colors">About RD Inn</a></li>
                            <li><a href="#rooms" className="hover:text-background transition-colors">Rooms & Suites</a></li>
                            <li><a href="#rooms" className="hover:text-background transition-colors">Banquet Hall</a></li>
                            <li><a href="#gallery" className="hover:text-background transition-colors">Gallery</a></li>
                            <li><a href="#booking" className="hover:text-background transition-colors">Reservations</a></li>
                            <li><a href="#location" className="hover:text-background transition-colors">Location</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-white/20">
                    <p>© 2026 Shivansh RD Inn Shahganj. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
