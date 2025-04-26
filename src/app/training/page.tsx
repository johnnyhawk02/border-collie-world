'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Training tips data
const trainingTips = [
  {
    id: 1,
    title: "Start Early and Be Consistent",
    content: "Border Collies are highly intelligent and can begin learning basic commands as young as 8 weeks old. Consistency is key - use the same commands and reward system throughout training.",
    icon: "🎯",
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "Keep Training Sessions Short and Fun",
    content: "Border Collies have intense focus but may become bored with repetitive or lengthy training. Keep sessions to 5-15 minutes and end on a positive note with a command they excel at.",
    icon: "⏱️",
    color: "bg-green-50"
  },
  {
    id: 3,
    title: "Use Positive Reinforcement",
    content: "Reward-based training works best for Border Collies. Use treats, praise, toys, or play as rewards. Avoid harsh corrections as Border Collies are sensitive and may become anxious or fearful.",
    icon: "🦴",
    color: "bg-yellow-50"
  },
  {
    id: 4,
    title: "Provide Mental Stimulation",
    content: "Border Collies need mental exercise as much as physical exercise. Puzzle toys, obedience training, and learning new tricks will help keep their minds engaged and prevent boredom-related behaviors.",
    icon: "🧩",
    color: "bg-purple-50"
  },
  {
    id: 5,
    title: "Channel Their Herding Instinct",
    content: "Border Collies have a strong herding instinct that may manifest as chasing cars, children, or other animals. Channel this instinct constructively through herding trials, agility, or frisbee.",
    icon: "🐑",
    color: "bg-red-50"
  },
  {
    id: 6,
    title: "Socialize Extensively",
    content: "Expose your Border Collie to different people, animals, environments, and situations from a young age. This helps prevent fearfulness and builds confidence.",
    icon: "👥",
    color: "bg-indigo-50"
  },
  {
    id: 7,
    title: "Teach Relaxation and Settle",
    content: "Border Collies are naturally active, so teaching them to relax and settle down is important. Practice 'place' or 'mat' training where they learn to go to a spot and stay calm.",
    icon: "😌",
    color: "bg-orange-50"
  },
  {
    id: 8,
    title: "Be Patient with Sensitive Behaviors",
    content: "Some Border Collies may be sensitive to noise, new environments, or certain handling. Be patient and gradually desensitize them to these stimuli with positive experiences.",
    icon: "❤️",
    color: "bg-pink-50"
  }
];

// Common behavior issues data
const behaviorIssues = [
  {
    issue: "Excessive Barking",
    solution: "Teach the 'quiet' command, ensure adequate exercise, and avoid rewarding barking behavior with attention."
  },
  {
    issue: "Herding Children or Other Pets",
    solution: "Redirect to appropriate toys, teach a strong 'leave it' command, and provide proper herding outlets like herding balls."
  },
  {
    issue: "Destructive Chewing",
    solution: "Increase exercise and mental stimulation, provide appropriate chew toys, and use a bitter spray on forbidden items."
  },
  {
    issue: "Digging",
    solution: "Create a designated digging area, increase exercise, and supervise outdoor time until the habit is broken."
  }
];

export default function TrainingTips() {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const toggleTip = (id: number) => {
    if (expandedTip === id) {
      setExpandedTip(null);
    } else {
      setExpandedTip(id);
    }
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Border Collie Training Tips</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert advice to help you train your intelligent and energetic Border Collie.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cartoon-border p-6 bg-white"
          >
            <h2 className="text-2xl font-bold mb-4">About Training Border Collies</h2>
            <p className="mb-4">
              Border Collies are widely considered the most intelligent dog breed in the world, 
              which makes them highly trainable but also means they need proper mental stimulation 
              to prevent boredom and behavioral issues.
            </p>
            <p>
              These dogs excel at learning commands and tricks, often picking up new skills quickly. 
              However, their intelligence and energy also mean they require consistent training, 
              clear boundaries, and plenty of physical and mental exercise.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cartoon-border overflow-hidden relative h-64 bg-gray-200 flex items-center justify-center text-gray-500"
        >
          Border Collie Training Image Placeholder
          {/* Once you have an image:
          <Image
            src="/images/border-collie-training.jpg"
            alt="Border Collie during training"
            fill
            className="object-cover"
          />
          */}
        </motion.div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Essential Training Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingTips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`cartoon-border p-6 ${tip.color} cursor-pointer`}
              onClick={() => toggleTip(tip.id)}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                  {expandedTip === tip.id ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {tip.content}
                    </motion.p>
                  ) : (
                    <p className="text-gray-700 line-clamp-2">{tip.content}</p>
                  )}
                  <button 
                    className="text-primary font-medium mt-2 flex items-center"
                    aria-label={expandedTip === tip.id ? "Show less" : "Read more"}
                  >
                    {expandedTip === tip.id ? "Show less" : "Read more"}
                    <svg 
                      className={`w-4 h-4 ml-1 transition-transform ${expandedTip === tip.id ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="cartoon-border p-6 bg-blue-50 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Common Behavior Issues & Solutions</h2>
        <div className="space-y-4">
          {behaviorIssues.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg cartoon-border">
              <h3 className="text-xl font-bold mb-2">{item.issue}</h3>
              <p>{item.solution}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="cartoon-border p-6 bg-green-50 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Recommended Activities for Border Collies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🏃‍♂️</div>
            <h3 className="font-bold">Agility</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🥏</div>
            <h3 className="font-bold">Frisbee</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🐑</div>
            <h3 className="font-bold">Herding</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="font-bold">Nose Work</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">💪</div>
            <h3 className="font-bold">Flyball</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="font-bold">Obedience</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🚶‍♂️</div>
            <h3 className="font-bold">Hiking</h3>
          </div>
          <div className="p-4 text-center">
            <div className="text-4xl mb-2">🧩</div>
            <h3 className="font-bold">Puzzle Toys</h3>
          </div>
        </div>
      </motion.div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Remember</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Border Collies thrive with consistent, positive training methods and plenty of 
          mental and physical stimulation. With patience and the right approach, your Border Collie 
          can become an incredibly well-trained and happy companion.
        </p>
        
        <Link href="/quiz" className="cartoon-button inline-block bg-secondary">
          Take the Border Collie Quiz
        </Link>
      </div>
    </div>
  );
} 