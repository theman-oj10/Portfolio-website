import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = [
    "Full-Stack Development",
    "Machine Learning",
    "Fintech"
];

const textVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -10, y: 60 },  // Increased y offset
    animate: { opacity: 1, scale: 1, rotate: 0, y: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: 10, y: -60 }     // Increased y offset
};

const TypewriterEffect = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [speed, setSpeed] = useState(150);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const handleTyping = () => {
            const currentText = texts[index];
            if (isDeleting) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => setIsDeleting(true), 1500); // Increased pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }

            setSpeed(isDeleting ? 50 : 150);
        };

        const typingInterval = setInterval(handleTyping, speed);
        return () => clearInterval(typingInterval);
    }, [charIndex, isDeleting, index, speed, mounted]);

    if (!mounted) {
        return <div style={{ minHeight: '60px' }}></div>; // Increased minimum height
    }

    return (
        <div className="text-center" style={{ minHeight: '60px' }}>  {/* Increased minimum height */}
            <AnimatePresence>
                <motion.div
                    key={index}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.6 }}  // Slightly increased animation duration
                    className="text-3xl font-bold text-blue-400 tracking-wide"  // Increased text size and adjusted styling
                >
                    {displayText}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TypewriterEffect;