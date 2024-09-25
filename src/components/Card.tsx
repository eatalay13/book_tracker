"use client";

import { motion } from "framer-motion";

interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="m-5 rounded-lg bg-white p-8 shadow-xl"
    >
      {children}
    </motion.div>
  );
}

export default Card;
