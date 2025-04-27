'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to <span className="text-primary font-display">BorderCollieWorld</span>
          </h1>
          <p className="text-lg mb-6">
            Discover everything about the world&apos;s smartest and most energetic dog breed.
            From training tips to fun facts, games, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
          className="relative"
        >
          <div className="relative h-64 md:h-80 w-full cartoon-border overflow-hidden bg-white">
            <Image
              src="/logo001.png"
              alt="BorderCollieWorld Logo"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full cartoon-border"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-2xl">🐾</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 