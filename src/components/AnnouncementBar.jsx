import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiX } = FiIcons;

const STORAGE_KEY = 'hv-workspace-launch-bar-dismissed-v1';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = window.sessionStorage?.getItem(STORAGE_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage?.setItem(STORAGE_KEY, '1');
    } catch (_) {
      /* sessionStorage might be blocked; safe to ignore */
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative w-full bg-[#722F37] text-[#F5F1EA] z-[60]"
          role="complementary"
          aria-label="Product launch announcement"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 text-center">
            <span
              className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C9A36A] flex-shrink-0"
              aria-hidden="true"
            />
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.18em] uppercase">
              <span className="text-[#C9A36A] font-semibold mr-2">NOW LAUNCHING</span>
              <span className="text-[#F5F1EA]/85">Vantage Workspace —</span>
              <a
                href="https://workspace.handvantage.com"
                className="ml-2 underline underline-offset-4 decoration-[#F5F1EA]/40 hover:decoration-[#F5F1EA] transition-colors inline-flex items-center gap-1 text-[#F5F1EA] hover:text-white"
                rel="noopener"
              >
                See the product
                <SafeIcon icon={FiArrowRight} className="w-3 h-3" />
              </a>
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-[#F5F1EA]/55 hover:text-[#F5F1EA] transition-colors p-1"
            >
              <SafeIcon icon={FiX} className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
