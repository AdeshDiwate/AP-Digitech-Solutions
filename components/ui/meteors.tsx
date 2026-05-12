"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-0 pointer-events-none"
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Spread starting positions wider (0% to 150%) so that as they fall diagonally 
        // to the left, they still cover the right side of the card.
        const position = (idx / meteorCount) * 150;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor absolute h-[2px] w-[2px] rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[60px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-blue-400/30 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-20px",
              left: position + "%",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: Math.floor(Math.random() * (12 - 6) + 6) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
