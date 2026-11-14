import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Layers3, Sparkles } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Modern E-commerce',
        category: 'E-commerce',
        type: 'Online Shopping Platform',
        description: 'A modern shopping experience with elegant product layouts and a seamless customer journey.',
        number: '01',
        theme: 'bg-[#17140e]',
        accent: '#d6b477',
        tags: ['E-commerce', 'UI/UX Design'],
    },
    {
        id: 2,
        title: 'Corporate Website',
        category: 'Web Design',
        type: 'Business Website',
        description: 'A refined corporate website designed to communicate trust, professionalism and brand value.',
        number: '02',
        theme: 'bg-[#26221b]',
        accent: '#c6a46a',
        tags: ['Website', 'Brand Identity'],
    },
    {
        id: 3,
        title: 'Creative Branding',
        category: 'Branding',
        type: 'Brand Identity Design',
        description: 'A distinctive visual identity that gives a brand a consistent and memorable presence.',
        number: '03',
        theme: 'bg-[#383025]',
        accent: '#e0c28e',
        tags: ['Branding', 'Creative Design'],
    },
    {
        id: 4,
        title: 'Digital Agency',
        category: 'Web Design',
        type: 'Agency Website',
        description: 'A premium agency website with clear messaging, modern visuals and responsive layouts.',
        number: '04',
        theme: 'bg-[#1c1c1c]',
        accent: '#d6b477',
        tags: ['Development', 'Responsive'],
    },
    {
        id: 5,
        title: 'Luxury Store',
        category: 'E-commerce',
        type: 'Luxury Shopping Experience',
        description: 'An elegant digital storefront focused on premium presentation and effortless browsing.',
        number: '05',
        theme: 'bg-[#30271b]',
        accent: '#d6b477',
        tags: ['Online Store', 'UI/UX'],
    },
    {
        id: 6,
        title: 'Mobile Experience',
        category: 'Branding',
        type: 'Digital Product Concept',
        description: 'A thoughtful digital product concept combining usability, visual clarity and simplicity.',
        number: '06',
        theme: 'bg-[#25221e]',
        accent: '#c6a46a',
        tags: ['Digital Product', 'Design'],
    },
];

const categories = ['All Projects', 'Web Design', 'E-commerce', 'Branding'];

function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All Projects');

    const filteredProjects =
        activeCategory === 'All Projects'
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="portfolio" className="relative overflow-hidden bg-[#faf9f6] px-4 py-24 sm:px-8 lg:py-32">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d6b477]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b477]/30 bg-[#d6b477]/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-[#9a763e]">
                        <Sparkles size={14} />
                        OUR PORTFOLIO
                    </span>

                    <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b0b0b] sm:text-5xl lg:text-6xl">
                        Work That Speaks
                        <span className="block text-[#b18a4a]">For Itself.</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-500">
                        Explore our creative concepts and digital project showcases, designed with purpose and attention
                        to detail.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-5 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                                activeCategory === category
                                    ? 'bg-[#0b0b0b] text-[#d6b477] shadow-lg shadow-black/10'
                                    : 'border border-gray-200 bg-white text-gray-500 hover:border-[#d6b477] hover:text-[#9a763e]'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div layout className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            layout
                            key={project.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.05,
                            }}
                            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#d6b477]/60 hover:shadow-2xl hover:shadow-[#d6b477]/10"
                        >
                            {/* Project Preview */}
                            <div
                                className={`relative m-3 flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl ${project.theme}`}
                            >
                                <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border border-[#d6b477]/20 transition-transform duration-700 group-hover:scale-125" />

                                <div className="absolute -bottom-16 -left-12 h-52 w-52 rounded-full border border-[#d6b477]/20 transition-transform duration-700 group-hover:scale-125" />

                                <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6b477]/40 bg-[#d6b477]/10 text-[#d6b477] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                                        <Layers3 size={27} />
                                    </div>

                                    <span className="text-[10px] font-semibold tracking-[3px] text-[#d6b477]/70">
                                        NEXORA PROJECT {project.number}
                                    </span>

                                    <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>

                                    <p className="mt-2 text-xs text-gray-400">{project.type}</p>
                                </div>

                                {/* Preview Arrow */}
                                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b477]/30 bg-black/20 text-[#d6b477] transition duration-300 group-hover:rotate-45 group-hover:bg-[#d6b477] group-hover:text-black">
                                    <ArrowUpRight size={19} />
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="px-6 pb-7 pt-3">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs font-semibold tracking-wider text-[#9a763e]">
                                        {project.category}
                                    </span>

                                    <span className="text-xs font-medium text-gray-300">{project.number} / 06</span>
                                </div>

                                <h3 className="mt-3 text-xl font-bold text-[#0b0b0b]">{project.title}</h3>

                                <p className="mt-3 text-sm leading-7 text-gray-500">{project.description}</p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-[#f7f5f0] px-3 py-1.5 text-[10px] font-medium text-[#8a7657]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 border-t border-gray-100 pt-5">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0b0b] transition-colors duration-300 hover:text-[#a47d3e]"
                                    >
                                        Discuss Similar Project
                                        <ExternalLink size={15} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-gray-500">Have a project in mind? Let's work together.</p>

                    <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#0b0b0b] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b18a4a]"
                    >
                        Start Your Project
                        <ArrowUpRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Portfolio;
