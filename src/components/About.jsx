import { motion } from 'framer-motion';
import { ArrowUpRight, Eye, Gem, Lightbulb, ShieldCheck, Target } from 'lucide-react';

const features = [
    {
        icon: Lightbulb,
        title: 'Creative Thinking',
        description: 'We turn fresh ideas into meaningful digital experiences that help businesses stand out.',
    },
    {
        icon: ShieldCheck,
        title: 'Quality First',
        description: 'We focus on quality, reliability and thoughtful execution in every project.',
    },
    {
        icon: Gem,
        title: 'Premium Solutions',
        description: 'We create refined digital solutions designed around your business goals.',
    },
];

function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-[#faf9f6] px-4 py-24 sm:px-8 lg:py-32">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d6b477]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-8xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b477]/30 bg-[#d6b477]/10 px-4 py-2 text-xs font-semibold tracking-[2px] text-[#9a763e]">
                        <Gem size={14} />
                        ABOUT NEXORA
                    </span>

                    <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0b0b0b] sm:text-5xl lg:text-6xl">
                        Turning Ideas Into
                        <span className="block text-[#b18a4a]">Digital Excellence.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-500">
                        We combine creativity, strategy and technology to help ambitious businesses build a stronger
                        digital presence and achieve meaningful growth.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Left Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-2rem bg-[#0b0b0b] p-8 text-white shadow-2xl shadow-black/10 sm:p-12">
                            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d6b477]/20" />

                            <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-[#d6b477]/20" />

                            <div className="relative z-10">
                                <span className="text-xs font-semibold tracking-[3px] text-[#d6b477]">
                                    OUR PHILOSOPHY
                                </span>

                                <h3 className="mt-8 max-w-md text-4xl leading-tight font-bold sm:text-5xl">
                                    Great Ideas.
                                    <span className="block text-[#d6b477]">Meaningful Impact.</span>
                                </h3>

                                <p className="mt-6 max-w-sm text-sm leading-8 text-gray-400">
                                    We believe great digital experiences are built through clear thinking, purposeful
                                    design and a commitment to excellence.
                                </p>

                                <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-7">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6b477]/30 bg-[#d6b477]/10">
                                        <Gem size={23} className="text-[#d6b477]" />
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">Nexora Digital Agency</p>
                                        <p className="mt-1 text-xs text-gray-500">Creativity with Purpose</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#d6b477]/15 blur-3xl" />
                        </div>

                        {/* Floating Label */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute -bottom-6 right-5 rounded-2xl border border-[#d6b477]/30 bg-white p-5 shadow-xl sm:right-10"
                        >
                            <p className="text-xs font-medium text-gray-400">Our Promise</p>

                            <p className="mt-1 text-lg font-extrabold text-[#0b0b0b]">
                                Excellence
                                <span className="text-[#b18a4a]">.</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-bold tracking-[3px] text-[#9a763e]">WHO WE ARE</span>

                        <h3 className="mt-4 text-3xl leading-tight font-extrabold text-[#0b0b0b] sm:text-4xl">
                            Your Partner in
                            <span className="text-[#b18a4a]"> Digital Growth.</span>
                        </h3>

                        <p className="mt-6 text-base leading-8 text-gray-500">
                            Nexora is a digital agency focused on helping businesses move forward with confidence. From
                            creative ideas to practical digital solutions, we aim to make every project purposeful and
                            effective.
                        </p>

                        {/* Features */}
                        <div className="mt-9 space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <div key={index} className="group flex gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d6b477]/30 bg-white text-[#b18a4a] transition duration-300 group-hover:bg-[#0b0b0b] group-hover:text-[#d6b477]">
                                            <Icon size={22} />
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-[#0b0b0b]">{feature.title}</h4>

                                            <p className="mt-1 text-sm leading-7 text-gray-500">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA */}
                        <a
                            href="#services"
                            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0b0b0b] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b18a4a]"
                        >
                            Discover Our Services
                            <ArrowUpRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="mt-28 grid gap-6 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-[#d6b477]/25 bg-white p-8 sm:p-10"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d6b477]/15 text-[#9a763e]">
                            <Target size={24} />
                        </div>

                        <h3 className="mt-6 text-2xl font-extrabold text-[#0b0b0b]">Our Mission</h3>

                        <p className="mt-4 text-sm leading-8 text-gray-500">
                            To deliver thoughtful digital solutions that empower businesses, solve real challenges and
                            create lasting value.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-3xl border border-[#d6b477]/25 bg-white p-8 sm:p-10"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d6b477]/15 text-[#9a763e]">
                            <Eye size={24} />
                        </div>

                        <h3 className="mt-6 text-2xl font-extrabold text-[#0b0b0b]">Our Vision</h3>

                        <p className="mt-4 text-sm leading-8 text-gray-500">
                            To become a trusted digital partner known for creativity, quality and meaningful business
                            transformation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
