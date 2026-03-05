import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
    { name: 'Sales Planning', level: 92 },
    { name: 'Target Achievement', level: 88 },
    { name: 'Customer Relationship Management', level: 95 },
    { name: 'Retail Operations Management', level: 90 },
    { name: 'Billing & Cash Handling', level: 85 },
    { name: 'Inventory & Stock Control', level: 87 },
    { name: 'Visual Merchandising', level: 82 },
    { name: 'Communication & Negotiation', level: 90 },
    { name: 'Teamwork', level: 93 },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">What I'm Good At</p>
                    <h2 className="section-title">Skills</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                            className="group"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-dark-100 font-medium text-sm group-hover:text-primary-400 transition-colors duration-300">
                                    {skill.name}
                                </span>
                                <span className="text-dark-300 text-sm font-mono">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 bg-dark-700/50 rounded-full overflow-hidden border border-dark-600/30">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                    transition={{ duration: 1.2, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                                    className="h-full rounded-full bg-gradient-to-r from-primary-400 to-primary-200 relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-full" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
