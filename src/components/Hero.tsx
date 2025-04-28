'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="py-8 md:py-12 lg:py-20 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Welcome to <span className="text-primary font-display">BorderCollieWorld</span>
          </h1>
          <p className="text-base md:text-lg mb-4 md:mb-6">
            Discover everything about the world&apos;s smartest and most energetic dog breed.
            From training tips to fun facts, games, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link href="/breed-info" className="cartoon-button inline-block text-center">
              Learn About Border Collies
            </Link>
            <Link href="/quiz" className="cartoon-button inline-block text-center bg-secondary">
              Take the Fun Quiz
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-md mx-auto md:max-w-full order-first md:order-last"
        >
          <div className="relative h-64 sm:h-72 md:h-80 w-full cartoon-border overflow-hidden bg-white flex items-center justify-center">
            <Image
              src="/logo002.png"
              alt="Border Collie"
              width={350}
              height={350}
              priority
              className="object-contain max-h-full max-w-full p-4"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 