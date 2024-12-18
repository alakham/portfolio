"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence className="fixed pointer-events-none">
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed top-0 w-screen h-screen pointer-events-none bg-primary-900"
        />
      </div>

      {children}
    </AnimatePresence>
  );
}

export default PageTransition;
