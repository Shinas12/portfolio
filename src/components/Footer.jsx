import { HiPhone, HiMail, HiHeart } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaFacebook, href: '#', label: 'Facebook' },
    ];

    return (
        <footer className="relative border-t border-primary-400/10 bg-dark-950/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold gold-gradient-text mb-3">Nadirsha P N</h3>
                        <p className="text-dark-400 text-sm leading-relaxed">
                            Sales Manager dedicated to driving sales growth and delivering exceptional customer experiences.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
                        <div className="space-y-2">
                            <a href="tel:+919656617612" className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors text-sm">
                                <HiPhone size={14} />
                                +91 9656617612
                            </a>
                            <a href="mailto:nadirshanadhi3@gmail.com" className="flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors text-sm">
                                <HiMail size={14} />
                                nadirshanadhi3@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Follow</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-dark-700/50 border border-dark-600/30 flex items-center justify-center
                           text-dark-300 hover:text-primary-400 hover:border-primary-400/30 hover:bg-primary-400/5
                           transition-all duration-300"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="divider mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-dark-400 text-sm">
                        © {currentYear} Nadirsha P N. All rights reserved.
                    </p>
                    <p className="text-dark-500 text-xs flex items-center gap-1">
                        Made with <HiHeart className="text-primary-400" size={12} />
                    </p>
                </div>
            </div>
        </footer>
    );
}
