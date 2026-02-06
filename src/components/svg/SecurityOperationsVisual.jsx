import React from 'react';
import { motion } from 'framer-motion';

// Animated Security Operations Center (SOC) Visual
const SecurityOperationsVisual = () => {
    return (
        <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl border border-slate-700 relative overflow-hidden p-6">
            {/* Grid lines background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Animated radar sweep */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(139, 92, 246, 0.3) 10%, transparent 30%)',
                    borderRadius: '50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border-2 border-viability-primary/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 border border-viability-primary/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-viability-primary/10 rounded-full" />

            {/* Pulsing center dot */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-viability-primary rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Floating threat indicators */}
            {[
                { top: '25%', left: '20%', delay: 0 },
                { top: '35%', left: '70%', delay: 0.5 },
                { top: '65%', left: '30%', delay: 1 },
                { top: '70%', left: '65%', delay: 1.5 }
            ].map((pos, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-green-500 rounded-full"
                    style={{ top: pos.top, left: pos.left }}
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
                />
            ))}

            {/* Status text */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-500 uppercase tracking-widest">All Systems Secure</span>
                    </div>
                    <span className="text-slate-500">24/7 MONITORING ACTIVE</span>
                </div>
                <div className="mt-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-viability-primary to-green-500"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SecurityOperationsVisual;
