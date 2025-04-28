"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [pawCount, setPawCount] = useState(2);
  
  const addPaw = () => {
    if (pawCount < 10) {
      setPawCount(prevCount => prevCount + 1);
    }
  };

  return (
    <footer className="py-8 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">BorderCollieWorld</h3>
            <p className="text-sm text-gray-600">
              Your fun and friendly resource for everything about Border Collies.
              Learn, play, and discover the world of these amazing dogs!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/breed-info" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Breed Information
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Training Tips
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Fun Quiz
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-sm text-gray-600 mb-4">
              BorderCollieWorld is a fun, educational resource created to celebrate
              the amazing Border Collie breed.
            </p>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} BorderCollieWorld
            </p>
          </div>
        </div>
        
        <div 
          className="flex items-center justify-center mt-8 cursor-pointer" 
          onClick={addPaw}
          title="Click to add more paw prints!"
        >
          {Array(pawCount).fill(0).map((_, i) => (
            <span key={i} className="text-2xl mx-1 transform hover:scale-125 transition-transform" role="img" aria-label="paw print">
              🐾
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
} 