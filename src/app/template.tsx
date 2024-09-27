"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="flex h-full w-full items-center justify-center"
    >
      {children}
    </motion.div>
  );
}

export default Template;
