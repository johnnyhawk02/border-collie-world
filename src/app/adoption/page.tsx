'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// Sample adoptable dogs data
const adoptableDogs = [
  {
    id: 1,
    name: "Max",
    age: "3 years",
    gender: "Male",
    description: "Max is an energetic Border Collie who loves to play frisbee and go for long runs. He's very intelligent and has mastered many tricks. Looking for an active family!",
    location: "Seattle, WA"
  },
  {
    id: 2,
    name: "Luna",
    age: "1 year",
    gender: "Female",
    description: "Luna is a sweet young Border Collie with lots of energy. She's good with other dogs and loves to learn new things. Would do best in an active home with a yard.",
    location: "Portland, OR"
  },
  {
    id: 3,
    name: "Cooper",
    age: "5 years",
    gender: "Male",
    description: "Cooper is a mature Border Collie who is well-trained and calm. He enjoys moderate exercise and is great with children. Perfect for a family looking for a less energetic Border Collie.",
    location: "Denver, CO"
  },
  {
    id: 4,
    name: "Bella",
    age: "2 years",
    gender: "Female",
    description: "Bella is a beautiful black and white Border Collie with endless energy. She loves agility training and would excel in a home that can keep her mentally stimulated.",
    location: "Austin, TX"
  },
  {
    id: 5,
    name: "Rocky",
    age: "4 years",
    gender: "Male",
    description: "Rocky is a friendly Border Collie mix who gets along with everyone. He's house-trained and knows several commands. Looking for a loving forever home!",
    location: "Chicago, IL"
  },
  {
    id: 6,
    name: "Daisy",
    age: "7 months",
    gender: "Female",
    description: "Daisy is an adorable Border Collie puppy full of energy and curiosity. She's currently learning basic commands and would benefit from continued training.",
    location: "Boston, MA"
  }
];

// Adoption checklist items
const adoptionChecklist = [
  {
    title: "Space and Environment",
    content: "Ensure you have adequate space for a Border Collie to run and play. A home with a securely fenced yard is ideal. Apartment living can work but requires a commitment to multiple daily exercise outings."
  },
  {
    title: "Activity Level",
    content: "Border Collies are extremely energetic and need at least 1-2 hours of vigorous exercise daily. Be honest about your activity level and whether you can meet this need consistently."
  },
  {
    title: "Time Commitment",
    content: "These dogs thrive on attention and interaction. They don't do well when left alone for long periods. Consider your work schedule and lifestyle to ensure you can give a Border Collie the time it needs."
  },
  {
    title: "Training Dedication",
    content: "Border Collies require consistent training and mental stimulation. Are you willing to invest time in training classes or daily training sessions at home?"
  },
  {
    title: "Family Situation",
    content: "While generally good with children, Border Collies may try to herd small children by nipping at their heels. Consider the age of children in your home and whether this behavior could be problematic."
  },
  {
    title: "Other Pets",
    content: "Border Collies can get along with other pets but may exhibit herding behaviors. Consider how existing pets might respond to this dynamic."
  },
  {
    title: "Financial Readiness",
    content: "Be prepared for the costs of quality food, veterinary care, training classes, and potential health issues. Border Collies can live 12-15 years, so this is a long-term financial commitment."
  }
];

export default function Adoption() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const toggleItem = (id: number) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
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
        <h1 className="text-4xl font-bold mb-4">Border Collie Adoption</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find your perfect Border Collie companion and learn about the adoption process.
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
            <h2 className="text-2xl font-bold mb-4">About Border Collie Adoption</h2>
            <p className="mb-4">
              Adopting a Border Collie is a rewarding experience, but it&apos;s important to understand 
              the unique needs and characteristics of this intelligent and energetic breed before 
              bringing one into your home.
            </p>
            <p className="mb-4">
              Border Collies are often surrendered to shelters or rescue organizations because their 
              owners underestimated their exercise needs or couldn&apos;t handle their high energy levels. 
              By adopting a Border Collie, you&apos;re giving a second chance to a dog who may have been 
              misunderstood or overwhelmed their previous owner.
            </p>
            <p>
              While puppies are adorable, consider adopting an adult Border Collie. Adult dogs often 
              come with training, have established personalities, and may have lower energy levels 
              than puppies, making them easier to integrate into some households.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cartoon-border overflow-hidden relative h-64 bg-gray-200 flex items-center justify-center text-gray-500"
        >
          Border Collie Adoption Image Placeholder
          {/* Once you have an image:
          <Image
            src="/images/border-collie-adoption.jpg"
            alt="Border Collie looking for home"
            fill
            className="object-cover"
          />
          */}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Is a Border Collie Right for You?</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          Before adopting, it&apos;s important to honestly assess whether a Border Collie is the right fit 
          for your lifestyle and living situation. Review the following checklist:
        </p>
        
        <div className="space-y-4">
          {adoptionChecklist.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="cartoon-border bg-white p-4"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedItem === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItem === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-gray-700"
                >
                  <p>{item.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Border Collies Looking for Homes</h2>
        <p className="text-center max-w-3xl mx-auto mb-8">
          These are just a few examples of Border Collies that might be available for adoption. 
          To find adoptable Border Collies in your area, contact local rescue organizations or check online pet adoption sites.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adoptableDogs.map((dog, index) => (
            <motion.div
              key={dog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="cartoon-border bg-white overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                {dog.name}&apos;s Photo Placeholder
                {/* Once you have images:
                <Image
                  src={`/images/adoptable/${dog.id}.jpg`}
                  alt={dog.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
                */}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{dog.name}</h3>
                  <span className="text-sm bg-blue-100 px-2 py-1 rounded-full">{dog.age}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{dog.location} • {dog.gender}</p>
                <p className="text-gray-700 mb-4">{dog.description}</p>
                <button className="cartoon-button w-full">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="cartoon-border p-6 bg-blue-50 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Adoption Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Border Collie Rescue Organizations</h3>
            <ul className="space-y-2">
              <li>• Border Collie Rescue & Rehab</li>
              <li>• All Border Collie Rescue</li>
              <li>• Glen Highland Farm Border Collie Rescue</li>
              <li>• New England Border Collie Rescue</li>
              <li>• Western Border Collie Rescue</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">General Adoption Resources</h3>
            <ul className="space-y-2">
              <li>• Petfinder.com</li>
              <li>• Adopt-a-Pet.com</li>
              <li>• ASPCA</li>
              <li>• Local animal shelters</li>
              <li>• Local Border Collie clubs</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Adopt?</h2>
        <p className="max-w-3xl mx-auto mb-6">
          If you&apos;ve considered all aspects of Border Collie ownership and feel ready to provide a 
          loving, active home for one of these amazing dogs, take the next step in your adoption journey!
        </p>
        
        <div className="flex justify-center space-x-4">
          <Link href="/breed-info" className="cartoon-button">
            Learn More About Border Collies
          </Link>
          <a 
            href="https://www.petfinder.com/search/dogs-for-adoption/us/anywhere/border-collie/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cartoon-button bg-secondary"
          >
            Find Adoptable Border Collies
          </a>
        </div>
      </div>
    </div>
  );
} 