import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiUser, HiBriefcase, HiStar } from 'react-icons/hi';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const stats = [
        { icon: HiBriefcase, label: 'Years Experience', value: '4+' },
        { icon: HiStar, label: 'Specialization', value: 'Retail' },
        { icon: HiUser, label: 'Focus', value: 'Sales' },
    ];

    return (
        <section id="about" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Get To Know Me</p>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-10 mt-12">
                    <motion.div
                        className="md:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="gold-border-card p-8">
                            <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-200 rounded-full mb-6" />
                            <p className="text-dark-200 leading-relaxed text-lg">
                                Motivated sales professional with experience in retail operations,
                                customer relationship management, and team coordination. Passionate
                                about improving sales performance, maintaining excellent customer
                                service, and ensuring smooth store operations.
                            </p>
                            <p className="text-dark-300 leading-relaxed mt-4">
                                With a commitment to excellence and a keen eye for merchandising,
                                I bring a results-driven approach to every retail environment.
                                My goals center around achieving sales targets while fostering
                                lasting relationships with customers and team members.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-2 space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                className="gold-border-card p-6 flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-400/20 transition-colors duration-300">
                                    <stat.icon size={22} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-dark-300">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
