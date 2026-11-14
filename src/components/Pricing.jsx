import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for small businesses getting started.',
        price: '$299',
        period: '/ project',
        features: [
            'Responsive Website',
            'Up to 5 Pages',
            'Basic UI/UX Design',
            'Contact Form Integration',
            'Basic SEO Setup',
            '1 Month Support',
        ],
        button: 'Get Started',
        featured: false,
    },
    {
        name: 'Professional',
        description: 'Everything you need to grow your business.',
        price: '$699',
        period: '/ project',
        features: [
            'Premium Responsive Website',
            'Up to 12 Pages',
            'Custom UI/UX Design',
            'Advanced Functionality',
            'SEO Optimization',
            'Performance Optimization',
            '3 Months Support',
        ],
        button: 'Choose Professional',
        featured: true,
    },
    {
        name: 'Enterprise',
        description: 'Advanced solutions for ambitious businesses.',
        price: 'Custom',
        period: ' pricing',
        features: [
            'Custom Website Development',
            'Unlimited Pages',
            'Advanced UI/UX Design',
            'Custom Integrations',
            'E-commerce Solutions',
            'Advanced SEO Strategy',
            'Dedicated Support',
        ],
        button: 'Contact Us',
        featured: false,
    },
];

function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-24 bg-[#faf9f6] px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6b477]/40 bg-[#d6b477]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a763e]">
                        <Sparkles size={14} />
                        Our Pricing
                    </span>

                    <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#17140e] md:text-5xl">
                        Plans That Fit Your <span className="text-[#b18a4a]">Business</span>
                    </h2>

                    <p className="text-sm leading-7 text-gray-500 md:text-base">
                        Transparent pricing and flexible solutions to help your business build a strong digital
                        presence.
                    </p>
                </motion.div>

                <div className="grid gap-7 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-2 ${
                                plan.featured
                                    ? 'border-[#d6b477] bg-[#17140e] shadow-2xl shadow-[#d6b477]/10'
                                    : 'border-[#e9e2d5] bg-white shadow-sm hover:border-[#d6b477]'
                            }`}
                        >
                            {plan.featured && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#d6b477] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#17140e]">
                                    Most Popular
                                </span>
                            )}

                            <div className="mb-7">
                                <h3
                                    className={`mb-2 text-xl font-bold ${plan.featured ? 'text-white' : 'text-[#17140e]'}`}
                                >
                                    {plan.name}
                                </h3>

                                <p
                                    className={`min-h-12 text-sm leading-6 ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 flex items-end gap-1">
                                <span
                                    className={`text-4xl font-bold tracking-tight ${plan.featured ? 'text-[#d6b477]' : 'text-[#17140e]'}`}
                                >
                                    {plan.price}
                                </span>
                                <span className={`mb-1 text-sm ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <div className={`mb-8 h-px ${plan.featured ? 'bg-white/10' : 'bg-[#eee8dd]'}`} />

                            <ul className="mb-10 flex-1 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d6b477]/15 text-[#b18a4a]">
                                            <Check size={13} strokeWidth={2.5} />
                                        </span>
                                        <span
                                            className={`text-sm ${plan.featured ? 'text-gray-300' : 'text-gray-600'}`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`group flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold transition duration-300 ${
                                    plan.featured
                                        ? 'bg-[#d6b477] text-[#17140e] hover:bg-white'
                                        : 'border border-[#d6b477] text-[#17140e] hover:bg-[#d6b477]'
                                }`}
                            >
                                {plan.button}
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-10 text-center text-xs leading-6 text-gray-500">
                    * Prices are sample estimates and can be adjusted based on project requirements.
                </p>
            </div>
        </section>
    );
}

export default Pricing;
