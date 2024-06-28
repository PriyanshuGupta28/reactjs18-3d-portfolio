import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegramPlane, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiFiverr } from "react-icons/si";

const Footer: React.FC = () => {
    const icons = [
        { href: 'https://wa.link/puy5gd', icon: <FaWhatsapp />, label: 'WhatsApp' },
        { href: 'https://t.me/', icon: <FaTelegramPlane />, label: 'Telegram' },
        { href: 'https://www.fiverr.com/', icon: <SiFiverr />, label: 'Fiverr' },
        { href: 'https://www.instagram.com/', icon: <FaInstagram />, label: 'Instagram' },
        { href: 'https://twitter.com/', icon: <FaTwitter />, label: 'Twitter' },
    ];

    return (
        <footer className="bg-gray-800 text-white py-10 gap-2">
            <div className="container mx-auto flex items-center justify-center">
                <motion.div
                    className="flex space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {icons.map((icon) => (
                        <motion.a
                            key={icon.label}
                            href={icon.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {icon.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
