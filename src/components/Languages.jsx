import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiPencil, HiChat } from 'react-icons/hi';

const readWrite = ['English', 'Malayalam', 'Hindi', 'Arabic'];
const speak = ['English', 'Malayalam'];

export default function Languages() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="languages" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Languages I Know</p>
                    <h2 className="section-title">Languages</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Read & Write */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="gold-border-card p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400">
                                <HiPencil size={22} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Read & Write</h3>
                                <p className="text-dark-400 text-sm">Written proficiency</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {readWrite.map((lang, i) => (
                                <motion.span
                                    key={lang}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                    className="px-5 py-2.5 bg-dark-700/50 border border-dark-600/30 rounded-xl text-dark-100 font-medium text-sm
                             hover:border-primary-400/30 hover:bg-primary-400/5 hover:text-primary-400 transition-all duration-300 cursor-default"
                                >
                                    {lang}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Speak */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="gold-border-card p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400">
                                <HiChat size={22} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg">Speak</h3>
                                <p className="text-dark-400 text-sm">Spoken fluency</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {speak.map((lang, i) => (
                                <motion.span
                                    key={lang}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                    className="px-5 py-2.5 bg-dark-700/50 border border-dark-600/30 rounded-xl text-dark-100 font-medium text-sm
                             hover:border-primary-400/30 hover:bg-primary-400/5 hover:text-primary-400 transition-all duration-300 cursor-default"
                                >
                                    {lang}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
