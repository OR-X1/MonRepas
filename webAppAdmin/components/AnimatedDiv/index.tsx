import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  closer: boolean;
};

export const AnimatedDiv: FC<Props> = ({ children, closer }) => {
  return (
    <AnimatePresence>
      {closer && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className=""
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
