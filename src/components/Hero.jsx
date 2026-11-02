import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Play, Sparkles, TrendingUp, Users } from 'lucide-react';

const stats = [
    { icon: Users, value: '120+', label: 'Happy Clients' },
    { icon: BriefcaseBusiness, value: '250+', label: 'Projects Done' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
];

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-white px-4 pb-16 pt-32 sm:px-8"
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute -top-40 right-0 h-500px w-500px rounded-full bg-[#d6b477]/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-350px w-350px rounded-full bg-[#d6b477]/10 blur-[110px]" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6b477]/30 bg-[#d6b477]/10 px-4 py-2">
                        <Sparkles size={15} className="text-[#b18a4a]" />

                        <span className="text-xs font-semibold tracking-wide text-[#8a6b3d]">
                            YOUR DIGITAL GROWTH PARTNER
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-2xl text-5xl leading-[1.12] font-extrabold tracking-tight text-[#0b0b0b] sm:text-6xl lg:text-7xl">
                        We Build Digital
                        <span className="block bg-linear-to-r from-[#b18a4a] via-[#d6b477] to-[#8a6b3d] bg-clip-text text-transparent">
                            Experiences
                        </span>
                        That Matter.
                    </h1>

                    {/* Description */}
                    <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
                        We help ambitious businesses grow with powerful digital strategies, creative design, and
                        innovative technology.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-[#0b0b0b] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#b18a4a]"
                        >
                            Start Your Project
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-3 rounded-full border border-[#d6b477]/40 bg-white px-7 py-4 text-sm font-semibold text-[#0b0b0b] transition duration-300 hover:border-[#b18a4a] hover:bg-[#d6b477]/10"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d6b477]/20 text-[#8a6b3d]">
                                <Play size={13} fill="currentColor" />
                            </span>
                            Explore Work
                        </a>
                    </div>

                    {/* Statistics */}
                    <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-gray-100 pt-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;

                            return (
                                <div key={index}>
                                    <Icon size={19} className="mb-3 text-[#b18a4a]" />

                                    <h3 className="text-2xl font-extrabold tracking-tight text-[#0b0b0b] sm:text-3xl">
                                        {stat.value}
                                    </h3>

                                    <p className="mt-1 text-xs font-medium text-gray-400 sm:text-sm">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="relative mx-auto w-full max-w-xl"
                >
                    <div className="relative rounded-2rem border border-[#d6b477]/30 bg-[#faf9f6] p-4 shadow-2xl shadow-black/10 sm:p-6">
                        {/* Browser Header */}
                        <div className="flex items-center justify-between border-b border-[#d6b477]/20 pb-5">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-500" />
                            </div>

                            <span className="text-xs font-semibold tracking-widest text-gray-400">NEXORA STUDIO</span>

                            <Sparkles size={17} className="text-[#b18a4a]" />
                        </div>

                        {/* Main Visual */}
                        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#d6b477]/20 bg-linear-to-br from-[#0b0b0b] via-[#17140e] to-[#292115] p-7 text-white sm:p-10">
                            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#d6b477]/20" />

                            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#d6b477]/20" />

                            <div className="relative z-10">
                                <span className="rounded-full border border-[#d6b477]/30 bg-[#d6b477]/10 px-3 py-1.5 text-[10px] font-semibold tracking-[2px] text-[#d6b477]">
                                    CREATIVE DIGITAL SOLUTIONS
                                </span>

                                <h2 className="mt-8 max-w-sm text-4xl leading-tight font-bold sm:text-5xl">
                                    Think
                                    <span className="block text-[#d6b477]">Beyond</span>
                                    Limits.
                                </h2>

                                <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
                                    Strategy meets creativity. Let's build something extraordinary together.
                                </p>

                                <div className="mt-8 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d6b477] text-[#0b0b0b]">
                                        <ArrowRight size={19} />
                                    </div>

                                    <span className="text-xs font-semibold tracking-wider text-[#d6b477]">
                                        DISCOVER OUR APPROACH
                                    </span>
                                </div>
                            </div>

                            <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-[#d6b477]/20 blur-3xl" />
                        </div>

                        {/* Bottom Cards */}
                        <div className="mt-5 grid grid-cols-2 gap-4">
                            {/* Growth Card */}
                            <div className="rounded-2xl border border-[#d6b477]/20 bg-white p-5">
                                <p className="text-xs font-medium text-gray-400">Business Growth</p>

                                <h3 className="mt-2 text-2xl font-extrabold text-[#0b0b0b]">+85%</h3>

                                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                                    <div className="h-full w-[85%] rounded-full bg-[#b18a4a]" />
                                </div>
                            </div>

                            {/* Satisfaction Card */}
                            <div className="rounded-2xl border border-[#d6b477]/20 bg-white p-5">
                                <p className="text-xs font-medium text-gray-400">Client Satisfaction</p>

                                <h3 className="mt-2 text-2xl font-extrabold text-[#0b0b0b]">4.9/5</h3>

                                <div className="mt-3 flex gap-1 text-[#b18a4a]">
                                    {'★★★★★'.split('').map((star, index) => (
                                        <span key={index}>{star}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="absolute -left-5 top-24 hidden items-center gap-3 rounded-2xl border border-[#d6b477]/20 bg-white p-4 shadow-xl sm:flex"
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d6b477]/15 text-[#b18a4a]">
                            <Sparkles size={21} />
                        </div>

                        <div>
                            <p className="text-sm font-bold text-[#0b0b0b]">Creative Ideas</p>

                            <p className="text-xs text-gray-400">Made for your growth</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
