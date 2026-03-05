import { motion } from 'framer-motion';
import { HiArrowDown, HiMail } from 'react-icons/hi';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-400/3 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/[0.02] rounded-full blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary-400 border border-primary-400/20 rounded-full bg-primary-400/5">
                        Sales Manager
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="text-white">Nadirsha</span>{' '}
                    <span className="gold-gradient-text">P N</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-dark-200/80 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Focused on increasing sales and building strong customer relationships
                    through effective retail management.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#contact" className="btn-primary">
                        <HiMail size={18} />
                        Contact Me
                    </a>
                    <a href="#about" className="btn-outline">
                        Learn More
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-dark-300"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <HiArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
