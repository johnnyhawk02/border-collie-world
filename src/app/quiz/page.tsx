'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// Quiz questions data
const quizQuestions = [
  {
    id: 1,
    question: "What would you do on a perfect weekend?",
    options: [
      { id: 'a', text: "Go hiking or camping in nature", personalityPoints: { active: 3, smart: 1, playful: 0, loyal: 0 } },
      { id: 'b', text: "Read books or solve puzzles at home", personalityPoints: { active: 0, smart: 3, playful: 0, loyal: 1 } },
      { id: 'c', text: "Play sports or games with friends", personalityPoints: { active: 2, smart: 0, playful: 3, loyal: 0 } },
      { id: 'd', text: "Spend time with family or close friends", personalityPoints: { active: 0, smart: 0, playful: 1, loyal: 3 } }
    ]
  },
  {
    id: 2,
    question: "How would your friends describe you?",
    options: [
      { id: 'a', text: "Energetic and always on the go", personalityPoints: { active: 3, smart: 0, playful: 1, loyal: 0 } },
      { id: 'b', text: "Thoughtful and problem-solving", personalityPoints: { active: 0, smart: 3, playful: 0, loyal: 1 } },
      { id: 'c', text: "Fun-loving and the life of the party", personalityPoints: { active: 1, smart: 0, playful: 3, loyal: 0 } },
      { id: 'd', text: "Dependable and always there when needed", personalityPoints: { active: 0, smart: 1, playful: 0, loyal: 3 } }
    ]
  },
  {
    id: 3,
    question: "What's your approach to learning new skills?",
    options: [
      { id: 'a', text: "Jump right in and learn by doing", personalityPoints: { active: 3, smart: 1, playful: 1, loyal: 0 } },
      { id: 'b', text: "Research thoroughly before starting", personalityPoints: { active: 0, smart: 3, playful: 0, loyal: 1 } },
      { id: 'c', text: "Make it into a game or challenge", personalityPoints: { active: 1, smart: 1, playful: 3, loyal: 0 } },
      { id: 'd', text: "Learn from someone you trust and respect", personalityPoints: { active: 0, smart: 1, playful: 0, loyal: 3 } }
    ]
  },
  {
    id: 4,
    question: "What's your ideal job?",
    options: [
      { id: 'a', text: "Something active where I'm not stuck at a desk", personalityPoints: { active: 3, smart: 0, playful: 1, loyal: 0 } },
      { id: 'b', text: "A role that challenges me intellectually", personalityPoints: { active: 0, smart: 3, playful: 0, loyal: 1 } },
      { id: 'c', text: "A creative or entertaining field", personalityPoints: { active: 1, smart: 0, playful: 3, loyal: 0 } },
      { id: 'd', text: "A position helping or supporting others", personalityPoints: { active: 0, smart: 0, playful: 0, loyal: 3 } }
    ]
  },
  {
    id: 5,
    question: "How do you handle stress?",
    options: [
      { id: 'a', text: "Go for a run or workout", personalityPoints: { active: 3, smart: 0, playful: 0, loyal: 0 } },
      { id: 'b', text: "Analyze the problem and make a plan", personalityPoints: { active: 0, smart: 3, playful: 0, loyal: 1 } },
      { id: 'c', text: "Watch comedy or do something fun", personalityPoints: { active: 0, smart: 0, playful: 3, loyal: 0 } },
      { id: 'd', text: "Talk it through with someone close to you", personalityPoints: { active: 0, smart: 1, playful: 0, loyal: 3 } }
    ]
  }
];

// Personality types
const personalityTypes = {
  active: {
    title: "The Energetic Explorer",
    description: "Like an active Border Collie, you're full of energy and always ready for adventure! You thrive on physical activity and prefer to be outdoors rather than cooped up inside. You're the friend who's always suggesting hikes, sports, or new activities to try.",
    traits: ["Energetic", "Adventurous", "Action-oriented", "Athletic"],
    icon: "🏃‍♂️",
    color: "bg-blue-100"
  },
  smart: {
    title: "The Clever Problem-Solver",
    description: "You share the Border Collie's legendary intelligence! You love mental challenges and are always looking to learn new things. People come to you when they need creative solutions or thoughtful analysis.",
    traits: ["Intelligent", "Analytical", "Quick-thinking", "Curious"],
    icon: "🧠",
    color: "bg-purple-100"
  },
  playful: {
    title: "The Joyful Entertainer",
    description: "Just like a playful Border Collie with a frisbee, you bring fun and joy to every situation! You have a natural talent for making people smile and finding the lighter side of life.",
    traits: ["Fun-loving", "Spontaneous", "Creative", "Optimistic"],
    icon: "🎮",
    color: "bg-yellow-100"
  },
  loyal: {
    title: "The Faithful Friend",
    description: "You embody the Border Collie's legendary loyalty! People know they can count on you no matter what. You value deep connections and are the rock that friends and family rely on in tough times.",
    traits: ["Dependable", "Trustworthy", "Supportive", "Compassionate"],
    icon: "❤️",
    color: "bg-red-100"
  }
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [personalityResult, setPersonalityResult] = useState<null | keyof typeof personalityTypes>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate quiz progress percentage
  const progress = (currentQuestion / quizQuestions.length) * 100;

  const handleAnswer = (questionId: number, optionId: string) => {
    setAnswers({ ...answers, [questionId]: optionId });
    
    // If this is the last question, calculate results
    if (currentQuestion === quizQuestions.length - 1) {
      setIsSubmitting(true);
      setTimeout(() => {
        calculateResults();
        setIsSubmitting(false);
        setShowResults(true);
      }, 1000);
    } else {
      // Otherwise, move to the next question
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const calculateResults = () => {
    // Initialize personality scores
    const scores = {
      active: 0,
      smart: 0,
      playful: 0,
      loyal: 0
    };

    // Add up points for each personality type based on answers
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = quizQuestions.find(q => q.id === parseInt(questionId));
      if (!question) return;

      const selectedOption = question.options.find(option => option.id === answerId);
      if (!selectedOption) return;

      // Add personality points
      Object.entries(selectedOption.personalityPoints).forEach(([trait, points]) => {
        scores[trait as keyof typeof scores] += points;
      });
    });

    // Find the personality type with the highest score
    let highestScore = 0;
    let resultType: keyof typeof personalityTypes = 'active';

    Object.entries(scores).forEach(([trait, score]) => {
      if (score > highestScore) {
        highestScore = score;
        resultType = trait as keyof typeof personalityTypes;
      }
    });

    setPersonalityResult(resultType);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setPersonalityResult(null);
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Which Border Collie Are You?</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Take this fun quiz to discover which Border Collie personality matches yours!
        </p>
      </motion.div>

      {!showResults ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Progress bar */}
          <div className="mb-8">
            <div className="bg-gray-200 h-4 rounded-full">
              <motion.div
                className="bg-primary h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-right text-sm mt-1">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </div>
          </div>

          {/* Current question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="cartoon-border p-6 bg-white mb-6"
          >
            <h2 className="text-2xl font-bold mb-6">
              {quizQuestions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(quizQuestions[currentQuestion].id, option.id)}
                  className={`w-full text-left p-4 rounded-lg cartoon-border transition-colors
                    ${answers[quizQuestions[currentQuestion].id] === option.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto"
        >
          {isSubmitting ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
              <p className="mt-4 text-xl">Analyzing your answers...</p>
            </div>
          ) : personalityResult && (
            <div className="cartoon-border p-8 bg-white">
              <div className={`p-6 mb-6 rounded-lg ${personalityTypes[personalityResult].color}`}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold">You are: {personalityTypes[personalityResult].title}</h2>
                  <div className="text-5xl">{personalityTypes[personalityResult].icon}</div>
                </div>
                <p className="text-lg mb-6">{personalityTypes[personalityResult].description}</p>
                
                <h3 className="text-xl font-bold mb-2">Your Top Traits:</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {personalityTypes[personalityResult].traits.map((trait, index) => (
                    <span key={index} className="px-3 py-1 bg-white rounded-full cartoon-border text-sm font-medium">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <button 
                  onClick={restartQuiz}
                  className="cartoon-button bg-secondary"
                >
                  Take Quiz Again
                </button>
                
                <div>
                  <Link href="/training" className="inline-block mt-4 text-primary font-medium">
                    Check out Border Collie Training Tips
                  </Link>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
} 