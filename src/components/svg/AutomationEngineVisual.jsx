import React from 'react';
import { motion } from 'framer-motion';

// Animated Automation Engine Visual
const AutomationEngineVisual = () => {
    // Gear animation variants
    const gearVariants = {
        rotate: {
            rotate: 360,
            transition: { duration: 8, repeat: Infinity, ease: 'linear' }
        }
    };

    const reverseGearVariants = {
        rotate: {
            rotate: -360,
            transition: { duration: 6, repeat: Infinity, ease: 'linear' }
        }
    };

    return (
        <div className="w-full h-96 bg-gradient-to-br from-slate-50 to-blue-50 sharp-edges border border-slate-200 relative overflow-hidden">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Main gear - large */}
            <motion.svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-blue-200"
                viewBox="0 0 100 100"
                variants={gearVariants}
                animate="rotate"
            >
                <path
                    fill="currentColor"
                    d="M50 20 L53 12 L58 12 L61 20 A31 31 0 0 1 72 25 L80 22 L83 26 L76 33 A31 31 0 0 1 80 44 L88 47 L88 53 L80 56 A31 31 0 0 1 76 67 L83 74 L80 78 L72 75 A31 31 0 0 1 61 80 L58 88 L53 88 L50 80 A31 31 0 0 0 39 80 L36 88 L31 88 L28 80 A31 31 0 0 1 17 75 L9 78 L6 74 L13 67 A31 31 0 0 1 9 56 L1 53 L1 47 L9 44 A31 31 0 0 1 13 33 L6 26 L9 22 L17 25 A31 31 0 0 1 28 20 L31 12 L36 12 L39 20 A31 31 0 0 0 50 20 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35"
                />
            </motion.svg>

            {/* Secondary gear - top right */}
            <motion.svg
                className="absolute top-12 right-16 w-20 h-20 text-blue-300"
                viewBox="0 0 100 100"
                variants={reverseGearVariants}
                animate="rotate"
            >
                <path
                    fill="currentColor"
                    d="M50 20 L53 12 L58 12 L61 20 A31 31 0 0 1 72 25 L80 22 L83 26 L76 33 A31 31 0 0 1 80 44 L88 47 L88 53 L80 56 A31 31 0 0 1 76 67 L83 74 L80 78 L72 75 A31 31 0 0 1 61 80 L58 88 L53 88 L50 80 A31 31 0 0 0 39 80 L36 88 L31 88 L28 80 A31 31 0 0 1 17 75 L9 78 L6 74 L13 67 A31 31 0 0 1 9 56 L1 53 L1 47 L9 44 A31 31 0 0 1 13 33 L6 26 L9 22 L17 25 A31 31 0 0 1 28 20 L31 12 L36 12 L39 20 A31 31 0 0 0 50 20 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35"
                />
            </motion.svg>

            {/* Tertiary gear - bottom left */}
            <motion.svg
                className="absolute bottom-16 left-12 w-16 h-16 text-blue-400"
                viewBox="0 0 100 100"
                variants={gearVariants}
                animate="rotate"
            >
                <path
                    fill="currentColor"
                    d="M50 20 L53 12 L58 12 L61 20 A31 31 0 0 1 72 25 L80 22 L83 26 L76 33 A31 31 0 0 1 80 44 L88 47 L88 53 L80 56 A31 31 0 0 1 76 67 L83 74 L80 78 L72 75 A31 31 0 0 1 61 80 L58 88 L53 88 L50 80 A31 31 0 0 0 39 80 L36 88 L31 88 L28 80 A31 31 0 0 1 17 75 L9 78 L6 74 L13 67 A31 31 0 0 1 9 56 L1 53 L1 47 L9 44 A31 31 0 0 1 13 33 L6 26 L9 22 L17 25 A31 31 0 0 1 28 20 L31 12 L36 12 L39 20 A31 31 0 0 0 50 20 Z M50 35 A15 15 0 1 0 50 65 A15 15 0 1 0 50 35"
                />
            </motion.svg>

            {/* Flowing data lines */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    style={{
                        top: `${30 + i * 20}%`,
                        left: 0,
                        right: 0
                    }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}

            {/* Status label */}
            <div className="absolute bottom-6 left-6 right-6 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 sharp-edges text-sm font-semibold">
                    <motion.span
                        className="w-2 h-2 bg-blue-500 sharp-edges"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    AUTOMATION ENGINE ACTIVE
                </div>
            </div>
        </div>
    );
};

export default AutomationEngineVisual;
