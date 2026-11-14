import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, Palette, Search, ShoppingBag, Smartphone, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const services = [
    {
        icon: Code2,
        number: '01',
        title: 'Web Development',
        description: 'We build modern, responsive and high-performance websites tailored to your business needs.',
        tags: ['Custom Website', 'Web Application'],
    },
    {
        icon: Palette,
        number: '02',
        title: 'UI/UX Design',
        description: 'We create intuitive and visually refined digital experiences that your customers love.',
        tags: ['Website Design', 'User Experience'],
    },
    {
        icon: Smartphone,
        number: '03',
        title: 'App Development',
        description: 'We develop user-friendly mobile applications designed to connect your business with customers.',
        tags: ['Mobile Apps', 'Cross Platform'],
    },
    {
        icon: ShoppingBag,
        number: '04',
        title: 'E-commerce Solutions',
        description: 'We create powerful online stores with seamless shopping experiences and modern functionality.',
        tags: ['Online Store', 'E-commerce'],
    },
    {
        icon: Search,
        number: '05',
        title: 'SEO Optimization',
        description: 'We improve your website visibility and help potential customers discover your business online.',
        tags: ['SEO Strategy', 'Organic Growth'],
    },
    {
        icon: TrendingUp,
        number: '06',
        title: 'Digital Strategy',
        description: 'We develop thoughtful digital strategies that support your business goals and long-term growth.',
        tags: ['Brand Strategy', 'Growth Planning'],
    },
];

function ServiceCard({ service, index = 0 }) {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group relative h-full rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#d6b477]/60 hover:shadow-2xl hover:shadow-[#d6b477]/10 sm:p-8"
        >
            <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b477]/30 bg-[#d6b477]/10 text-[#a47d3e] transition-all duration-300 group-hover:bg-[#0b0b0b] group-hover:text-[#d6b477]">
                    <Icon size={25} />
                </div>

                <span className="text-sm font-bold tracking-widest text-gray-300 transition-colors duration-300 group-hover:text-[#b18a4a]">
                    {service.number}
                </span>
            </div>

            <h3 className="mt-8 text-xl font-bold text-[#0b0b0b] transition-colors duration-300 group-hover:text-[#9a763e]">
                {service.title}
            </h3>

            <p className="mt-4 min-h-84px text-sm leading-7 text-gray-500">{service.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-[#f7f5f0] px-3 py-1.5 text-[11px] font-medium text-[#8a7657]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-[#0b0b0b] transition-colors duration-300 group-hover:text-[#a47d3e]"
            >
                Discuss Your Project
                <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
            </a>
        </motion.div>
    );
}

function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % services.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="relative overflow-hidden bg-white px-4 py-24 sm:px-8 lg:py-32">
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#d6b477]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-8xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b477]/30 bg-[#d6b477]/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-[#9a763e]">
                        <Sparkles size={14} />
                        WHAT WE DO
                    </span>

                    <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b0b0b] sm:text-5xl lg:text-6xl">
                        Our Professional
                        <span className="block text-[#b18a4a]">Services.</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-500">
                        From creative design to powerful technology, we provide complete digital solutions to help your
                        business move forward.
                    </p>
                </motion.div>

                {/* Mobile Auto Slider */}
                <div className="md:hidden">
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                            >
                                <ServiceCard service={services[activeIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <div className="mt-8 flex justify-center gap-2">
                        {services.map((service, index) => (
                            <button
                                key={service.number}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${service.title}`}
                                className={`h-2 rounded-full transition-all duration-500 ${
                                    activeIndex === index ? 'w-8 bg-[#d6b477]' : 'w-2 bg-[#d6b477]/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Services Grid */}
                <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.number} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#0b0b0b] px-8 py-10 text-center sm:flex-row sm:px-12 sm:text-left"
                >
                    <div>
                        <p className="text-xs font-semibold tracking-[3px] text-[#d6b477]">HAVE A PROJECT IN MIND?</p>

                        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                            Let's Create Something Great.
                        </h3>

                        <p className="mt-3 text-sm text-gray-400">Tell us about your idea. Let's make it happen.</p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#d6b477] px-7 py-4 text-sm font-bold text-[#0b0b0b] transition duration-300 hover:-translate-y-1 hover:bg-white"
                    >
                        Get In Touch
                        <ArrowUpRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Services;
