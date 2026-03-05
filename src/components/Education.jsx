import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap } from 'react-icons/hi';

const educationData = [
    {
        degree: 'B.Com (Corporation)',
        institution: 'Mahatma Gandhi University',
        year: '2020',
    },
    {
        degree: 'Class XII',
        institution: 'Kerala State Board',
        year: '2017',
    },
    {
        degree: 'Class X',
        institution: 'Kerala State Board',
        year: '2015',
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="education" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">My Education</p>
                    <h2 className="section-title">Education</h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative mt-16 max-w-2xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400/40 via-primary-400/20 to-transparent" />

                    {educationData.map((item, i) => (
                        <motion.div
                            key={item.year}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                            className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary-400 shadow-lg shadow-primary-400/30 z-10" />

                            {/* Card */}
                            <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                                }`}>
                                <div className="gold-border-card p-6 group hover:bg-dark-800/60">
                                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}>
                                        <div className="w-10 h-10 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-400/20 transition-colors duration-300">
                                            <HiAcademicCap size={20} />
                                        </div>
                                        <span className="text-sm font-medium text-primary-400 bg-primary-400/10 px-3 py-1 rounded-full">
                                            {item.year}
                                        </span>
                                    </div>
                                    <h4 className="text-white font-semibold text-lg">{item.degree}</h4>
                                    <p className="text-dark-300 text-sm mt-1">{item.institution}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
