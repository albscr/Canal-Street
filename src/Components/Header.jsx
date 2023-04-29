import { easeIn, motion } from "framer-motion";
import React from "react";

function Header() {
  return (
    <header>
      <motion.h1
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{delay: 1.5, duration: 1, ease: easeIn }}
      >
        Canal Street Market is a carefully curated retail market, food hall &
        community space open year-round at 265 Canal Street.{" "}
        <a href="/">Support Small Business </a>
        this weekend!
      </motion.h1>
    </header>
  );
}

export { Header };
