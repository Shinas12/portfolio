import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    HiChartBar, HiUsers, HiCog, HiCurrencyDollar,
    HiClipboardList, HiEye
} from 'react-icons/hi';

const responsibilities = [
    {
        icon: HiChartBar,
        title: 'Sales Planning & Targets',
        desc: 'Strategic sales planning and consistently achieving monthly and annual targets.',
    },
    {
        icon: HiUsers,
        title: 'Customer Relationship',
        desc: 'Building and maintaining lasting customer relationships for repeat business.',
    },
    {
        icon: HiCog,
        title: 'Retail Operations',
        desc: 'Managing day-to-day retail operations ensuring smooth store functioning.',
    },
    {
        icon: HiCurrencyDollar,
        title: 'Billing & Cash Handling',
        desc: 'Accurate billing processes and responsible cash management procedures.',
    },
    {
        icon: HiClipboardList,
        title: 'Inventory & Stock Control',
        desc: 'Systematic inventory management and optimal stock level maintenance.',
    },
    {
        icon: HiEye,
        title: 'Visual Merchandising',
        desc: 'Creative product displays and store layouts to maximize customer engagement.',
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative">
            <div className="divider" />
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-subtitle">Where I've Worked</p>
                    <h2 className="section-title">Experience</h2>
                </motion.div>

                {/* Company Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="gold-border-card p-8 mt-12 mb-10"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white">ADDREZZ MENS STORE</h3>
                            <p className="text-dark-300 mt-1">Cherthala</p>
                            <p className="text-dark-300 text-sm mt-1">
                                Modern retail outlet offering premium men's clothing including formal wear,
                                casual wear, ethnic collections, and accessories.
                            </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1">
                            <span className="px-4 py-1.5 text-sm font-medium text-primary-400 bg-primary-400/10 border border-primary-400/20 rounded-full">
                                Sales Manager
                            </span>
                            <span className="text-dark-300 text-sm mt-2">Feb 2021 – Present</span>
                        </div>
                    </div>
                </motion.div>

                {/* Responsibility Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {responsibilities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                            className="gold-border-card p-6 group hover:bg-dark-800/60 cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-400/10 flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-400/20 group-hover:scale-110 transition-all duration-300">
                                <item.icon size={22} />
                            </div>
                            <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                            <p className="text-dark-300 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
