'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Simple catch game component
const CatchGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [frisbeePosition, setFrisbeePosition] = useState({ x: 50, y: 20 });
  const [colliePosition, setColliePosition] = useState(50);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  
  // Start the game
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    setFrisbeePosition({ x: 50, y: 20 });
    setColliePosition(50);
  };
  
  // Move the collie based on mouse or touch position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gameActive || !gameAreaRef.current) return;
    
    const gameArea = gameAreaRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - gameArea.left) / gameArea.width * 100;
    setColliePosition(Math.max(10, Math.min(90, relativeX)));
  };
  
  // Update game state
  useEffect(() => {
    if (!gameActive) return;
    
    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameActive(false);
          setGameOver(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    // Frisbee movement
    const frisbeeInterval = setInterval(() => {
      setFrisbeePosition((prev) => {
        // Move frisbee down
        const newY = prev.y + 5;
        
        // If frisbee reaches bottom, check if collie caught it
        if (newY >= 85) {
          const caughtFrisbee = Math.abs(prev.x - colliePosition) < 15;
          
          if (caughtFrisbee) {
            setScore((prevScore) => prevScore + 1);
          }
          
          // Reset frisbee position
          return {
            x: Math.random() * 80 + 10, // Random x between 10-90
            y: 10
          };
        }
        
        return { ...prev, y: newY };
      });
    }, 200);
    
    return () => {
      clearInterval(timer);
      clearInterval(frisbeeInterval);
    };
  }, [gameActive, colliePosition]);
  
  return (
    <div className="cartoon-border bg-blue-50 p-4 my-8">
      <h3 className="text-xl font-bold mb-2 text-center">Catch the Frisbee!</h3>
      <p className="text-center mb-4">
        Move your mouse (or finger on touch devices) to help the Border Collie catch frisbees.
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white px-4 py-2 rounded-full cartoon-border">
          Score: {score}
        </div>
        <div className="bg-white px-4 py-2 rounded-full cartoon-border">
          Time: {timeLeft}s
        </div>
      </div>
      
      <div 
        ref={gameAreaRef}
        className="relative h-80 bg-gradient-to-b from-sky-300 to-green-300 cartoon-border overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Frisbee */}
        {gameActive && (
          <motion.div
            className="absolute w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
            style={{ 
              left: `${frisbeePosition.x}%`, 
              top: `${frisbeePosition.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            🥏
          </motion.div>
        )}
        
        {/* Border Collie */}
        <motion.div
          className="absolute bottom-0 left-0 w-20 h-20 flex items-center justify-center"
          style={{ 
            left: `${colliePosition}%`,
            transform: 'translateX(-50%)'
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-4xl">🐕</span>
        </motion.div>
        
        {/* Game overlay */}
        {!gameActive && !gameOver && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cartoon-button bg-secondary px-8 py-4 text-lg"
              onClick={startGame}
            >
              Start Game
            </motion.button>
          </div>
        )}
        
        {/* Game over screen */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white p-6 rounded-lg cartoon-border text-center"
            >
              <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
              <p className="text-xl mb-4">Your score: {score}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cartoon-button bg-secondary"
                onClick={startGame}
              >
                Play Again
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

// Memory match game component (simplified version)
const MemoryGame = () => {
  return (
    <div className="cartoon-border bg-purple-50 p-4 my-8">
      <h3 className="text-xl font-bold mb-2 text-center">Border Collie Memory Match</h3>
      <p className="text-center mb-4">
        Test your memory by matching pairs of cards featuring Border Collies.
      </p>
      
      <div className="text-center p-8">
        <p className="mb-4">Coming soon!</p>
        <button className="cartoon-button bg-gray-400 cursor-not-allowed opacity-70">
          Game Under Development
        </button>
      </div>
    </div>
  );
};

// Herding game component (simplified version)
const HerdingGame = () => {
  return (
    <div className="cartoon-border bg-green-50 p-4 my-8">
      <h3 className="text-xl font-bold mb-2 text-center">Sheep Herding Challenge</h3>
      <p className="text-center mb-4">
        Help your Border Collie guide sheep into the pen within the time limit.
      </p>
      
      <div className="text-center p-8">
        <p className="mb-4">Coming soon!</p>
        <button className="cartoon-button bg-gray-400 cursor-not-allowed opacity-70">
          Game Under Development
        </button>
      </div>
    </div>
  );
};

export default function Games() {
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Border Collie Games</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have fun with our collection of Border Collie themed games!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        <CatchGame />
        <MemoryGame />
        <HerdingGame />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Keep Exploring</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Want to learn more about Border Collies? Check out our other sections!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/breed-info" className="cartoon-button">
            Breed Information
          </Link>
          <Link href="/quiz" className="cartoon-button bg-secondary">
            Take the Quiz
          </Link>
          <Link href="/gallery" className="cartoon-button bg-pink-400">
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
} 