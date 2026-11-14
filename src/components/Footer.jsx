const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
];

const services = [
    'Web Development',
    'UI/UX Design',
    'App Development',
    'E-commerce Solutions',
    'SEO Optimization',
    'Digital Strategy',
];

const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' },
];

function Footer() {
    return (
        <footer className="bg-[#0b0b0b] text-white">
            <div className="mx-auto max-w-8xl px-6 pt-20 md:px-12 lg:px-20">
                {/* Top CTA */}
                <div className="mb-16 flex flex-col items-start justify-between gap-8 rounded-2xl border border-[#d6b477]/20 bg-[#17140e] p-8 md:flex-row md:items-center md:p-12">
                    <div className="max-w-xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b477]">
                            Let's Work Together
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                            Have a project in mind?
                            <span className="block text-[#d6b477]">Let's make it happen.</span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Let's turn your ideas into powerful digital experiences. Contact our team and start your
                            next project.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="shrink-0 rounded-lg bg-[#d6b477] px-7 py-4 text-sm font-bold text-[#17140e] transition duration-300 hover:bg-white"
                    >
                        Start a Project
                    </a>
                </div>

                {/* Footer Columns */}
                <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="inline-block text-3xl font-bold tracking-wide">
                            Nexora<span className="text-[#d6b477]">.</span>
                        </a>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
                            Nexora Digital Agency creates modern websites, innovative applications, and digital
                            solutions that help businesses grow.
                        </p>

                        <h3 className="mb-4 mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#d6b477]">
                            Follow Us
                        </h3>

                        <div className="flex flex-wrap gap-x-5 gap-y-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm text-gray-400 transition hover:text-[#d6b477]"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#d6b477]">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 transition hover:text-[#d6b477]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#d6b477]">
                            Our Services
                        </h3>

                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-gray-400 transition hover:text-[#d6b477]"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.18em] text-[#d6b477]">
                            Contact Information
                        </h3>

                        <p className="mb-6 text-sm leading-7 text-gray-400">
                            Have questions or need a custom solution? We would love to hear from you.
                        </p>

                        <div className="space-y-5 text-sm">
                            <div>
                                <p className="mb-1 text-xs uppercase tracking-wider text-[#d6b477]">Email</p>
                                <a href="mailto:hello@nexora.com" className="text-gray-400 transition hover:text-white">
                                    hello@nexora.com
                                </a>
                            </div>

                            <div>
                                <p className="mb-1 text-xs uppercase tracking-wider text-[#d6b477]">Phone</p>
                                <a href="tel:+8801XXXXXXXXX" className="text-gray-400 transition hover:text-white">
                                    +880 1XXXXXXXXX
                                </a>
                            </div>

                            <div>
                                <p className="mb-1 text-xs uppercase tracking-wider text-[#d6b477]">Location</p>
                                <p className="text-gray-400">Your City, Your Country</p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="mt-7 inline-block border-b border-[#d6b477] pb-1 text-sm font-semibold text-[#d6b477] transition hover:text-white"
                        >
                            Send an Inquiry
                        </a>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row md:text-left">
                    <p className="text-xs leading-6 text-gray-500">
                        © {new Date().getFullYear()} Nexora Digital Agency. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
                        <a href="#contact" className="transition hover:text-[#d6b477]">
                            Privacy Policy
                        </a>

                        <a href="#contact" className="transition hover:text-[#d6b477]">
                            Terms & Conditions
                        </a>
                    </div>

                    <a href="#home" className="text-sm font-semibold text-[#d6b477] transition hover:text-white">
                        Back to Top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
