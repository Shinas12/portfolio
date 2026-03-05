import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiPhone, HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: HiPhone,
            label: 'Phone',
            value: '+91 9656617612',
            href: 'tel:+919656617612',
        },
        {
            icon: HiMail,
            label: 'Email',
            value: 'nadirshanadhi3@gmail.com',
            href: 'mailto:nadirshanadhi3@gmail.com',
        },
        {
            icon: HiLocationMarker,
            label: 'Address',
            value: 'Puthenpurackal, Thirumalabhagom P.O, Thuravoor, Chavady, Cherthala, Alappuzha - 688540',
            href: null,
        },
    ];

    return (
        <section id="contact" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Get In Touch</p>
                    <h2 className="section-title">Contact</h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10 mt-12">
                    {/* Contact Info */}
                    <motion.div
                        className="lg:col-span-2 space-y-5"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="gold-border-card p-5 flex items-start gap-4 group block hover:bg-dark-800/60"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-400/20 transition-colors duration-300 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-dark-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-dark-100 text-sm group-hover:text-primary-400 transition-colors duration-300">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="gold-border-card p-5 flex items-start gap-4 group">
                                        <div className="w-11 h-11 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-dark-400 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-dark-100 text-sm leading-relaxed">{item.value}</p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {/* Map placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="gold-border-card overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31548.77576831756!2d76.31!3d9.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0882b5d8e5f0a5%3A0x2c1b2d69b5d7856e!2sCherthala%2C%20Kerala!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                                width="100%"
                                height="200"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <form onSubmit={handleSubmit} className="gold-border-card p-8 space-y-6">
                            <div>
                                <label className="block text-sm text-dark-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/30 rounded-xl text-white
                           placeholder-dark-400 focus:outline-none focus:border-primary-400/40 focus:ring-1 focus:ring-primary-400/20
                           transition-all duration-300"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-dark-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/30 rounded-xl text-white
                           placeholder-dark-400 focus:outline-none focus:border-primary-400/40 focus:ring-1 focus:ring-primary-400/20
                           transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-dark-300 mb-2">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/30 rounded-xl text-white
                           placeholder-dark-400 focus:outline-none focus:border-primary-400/40 focus:ring-1 focus:ring-primary-400/20
                           transition-all duration-300 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-primary w-full justify-center"
                            >
                                {submitted ? (
                                    'Message Sent! ✓'
                                ) : (
                                    <>
                                        <HiPaperAirplane size={18} className="rotate-90" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
