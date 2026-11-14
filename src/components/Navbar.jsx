import { ArrowUpRight, Layers3, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleNavClick = (name) => {
        setActiveLink(name);
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#d6b477]/20 bg-[#0b0b0b] shadow-lg shadow-black/10">
            <nav className="mx-auto flex max-w-8xl items-center justify-between border border-[#c9a96e]/20 bg-[#0b0b0b]/95 px-5 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:px-8">
                {/* Logo */}
                <a href="#home" className="group flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#c9a96e]/40 bg-[#c9a96e]/10 transition duration-500 group-hover:rotate-12">
                        <Layers3 size={23} className="text-[#d6b477]" />
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-[3px] text-white">
                            NEXORA<span className="text-[#d6b477]">.</span>
                        </h1>
                        <p className="mt-0.5 text-[9px] tracking-[3px] text-[#a99a7e]">DIGITAL AGENCY</p>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-9 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => handleNavClick(link.name)}
                            className={`group relative py-2 text-[13px] font-medium tracking-wider transition duration-300 ${
                                activeLink === link.name ? 'text-[#d6b477]' : 'text-gray-400 hover:text-[#d6b477]'
                            }`}
                        >
                            {link.name}

                            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#d6b477] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="hidden items-center gap-3 border border-[#c9a96e]/60 px-6 py-3 text-xs font-semibold tracking-[2px] text-[#d6b477] transition duration-300 hover:bg-[#c9a96e] hover:text-black lg:flex"
                >
                    LET'S TALK
                    <ArrowUpRight size={16} />
                </a>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-[#c9a96e]/30 p-2.5 text-[#d6b477] lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mx-auto mt-2 max-w-8xl border border-[#c9a96e]/20 bg-[#0b0b0b] p-5 shadow-2xl lg:hidden">
                    <div className="flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => handleNavClick(link.name)}
                                className="group relative px-5 py-2.5 text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-blue-600"
                            >
                                {link.name}

                                <span className="absolute bottom-0 left-5 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-2.5rem)]" />
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-5 flex items-center justify-center gap-2 bg-[#c9a96e] px-5 py-4 text-xs font-bold tracking-[2px] text-black"
                        >
                            LET'S TALK
                            <ArrowUpRight size={17} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
