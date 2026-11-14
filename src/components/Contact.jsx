import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'hello@nexora.com',
        link: 'mailto:hello@nexora.com',
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '+880 1XXXXXXXXX',
        link: 'tel:+8801XXXXXXXXX',
    },
    {
        icon: MapPin,
        title: 'Our Location',
        value: 'Your City, Your Country',
        link: '#contact',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        value: 'Saturday – Thursday, 9 AM – 6 PM',
        link: '#contact',
    },
];

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');

        const subject = encodeURIComponent(`Project inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);

        window.location.href = `mailto:hello@nexora.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="scroll-mt-24 bg-white px-6 py-24 md:px-12 lg:px-20">
            <div className="mx-auto max-w-8xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6b477]/40 bg-[#d6b477]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a763e]">
                        <Mail size={14} />
                        Get In Touch
                    </span>

                    <h2 className="mb-5 text-3xl font-bold tracking-tight text-[#17140e] md:text-5xl">
                        Let’s Build Something <span className="text-[#b18a4a]">Great</span>
                    </h2>

                    <p className="text-sm leading-7 text-gray-500 md:text-base">
                        Have a project in mind? Tell us about it. We would love to discuss how we can help your business
                        grow.
                    </p>
                </motion.div>

                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl bg-[#17140e] p-8 text-white md:p-10"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b477]">
                            Contact Information
                        </span>

                        <h3 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">
                            Let’s talk about your next big idea.
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Reach out to us using any of the contact details below. We are ready to hear about your
                            project.
                        </p>

                        <div className="mt-10 space-y-7">
                            {contactInfo.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a key={item.title} href={item.link} className="group flex items-start gap-4">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d6b477]/30 bg-[#d6b477]/10 text-[#d6b477] transition group-hover:bg-[#d6b477] group-hover:text-[#17140e]">
                                            <Icon size={19} />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span className="block text-sm font-semibold text-white">{item.title}</span>
                                            <span className="mt-1 block wrap-break-word text-sm leading-6 text-gray-400 transition group-hover:text-[#d6b477]">
                                                {item.value}
                                            </span>
                                        </span>

                                        <ArrowUpRight
                                            size={16}
                                            className="mt-1 shrink-0 text-gray-500 transition group-hover:text-[#d6b477]"
                                        />
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-10 border-t border-white/10 pt-7">
                            <p className="text-xs leading-6 text-gray-500">
                                Nexora Digital Agency — Turning ideas into digital experiences.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-[#eee8dd] bg-[#faf9f6] p-8 md:p-10"
                    >
                        <h3 className="text-2xl font-bold text-[#17140e]">Send Us a Message</h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Fill out the form and tell us what you need.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-2 block text-sm font-semibold text-[#292115]"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        required
                                        className="w-full rounded-lg border border-[#e5dfd3] bg-white px-4 py-3 text-sm text-[#17140e] outline-none transition placeholder:text-gray-400 focus:border-[#b18a4a] focus:ring-2 focus:ring-[#d6b477]/20"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-2 block text-sm font-semibold text-[#292115]"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full rounded-lg border border-[#e5dfd3] bg-white px-4 py-3 text-sm text-[#17140e] outline-none transition placeholder:text-gray-400 focus:border-[#b18a4a] focus:ring-2 focus:ring-[#d6b477]/20"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-service"
                                    className="mb-2 block text-sm font-semibold text-[#292115]"
                                >
                                    Service You Need
                                </label>
                                <select
                                    id="contact-service"
                                    name="service"
                                    required
                                    defaultValue=""
                                    className="w-full rounded-lg border border-[#e5dfd3] bg-white px-4 py-3 text-sm text-[#17140e] outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#d6b477]/20"
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="App Development">App Development</option>
                                    <option value="E-commerce Solutions">E-commerce Solutions</option>
                                    <option value="SEO Optimization">SEO Optimization</option>
                                    <option value="Digital Strategy">Digital Strategy</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block text-sm font-semibold text-[#292115]"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    required
                                    className="w-full resize-none rounded-lg border border-[#e5dfd3] bg-white px-4 py-3 text-sm text-[#17140e] outline-none transition placeholder:text-gray-400 focus:border-[#b18a4a] focus:ring-2 focus:ring-[#d6b477]/20"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#17140e] px-6 py-4 text-sm font-semibold text-[#d6b477] transition duration-300 hover:bg-[#d6b477] hover:text-[#17140e]"
                            >
                                Send Message
                                <Send size={16} className="transition-transform group-hover:translate-x-1" />
                            </button>

                            <p className="text-xs leading-5 text-gray-500">
                                This form opens your email application with the message prepared. It does not send
                                messages directly from the website.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
