'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BreedInfo() {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Border Collie Breed Information</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about these intelligent, energetic, and loyal dogs.
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
            <h2 className="text-2xl font-bold mb-4">About Border Collies</h2>
            <p className="mb-4">
              Border Collies are a medium-sized herding breed that originated on the border 
              between Scotland and England, hence their name. They were bred to be 
              working dogs, specifically for herding sheep, and their intelligence, 
              trainability, and boundless energy reflect this heritage.
            </p>
            <p>
              Today, Border Collies excel in a variety of activities including 
              herding, dog sports like agility and flyball, obedience competitions, 
              and as family companions for active households.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cartoon-border overflow-hidden relative h-64 bg-gray-200 flex items-center justify-center text-gray-500"
        >
          Border Collie Image Placeholder
          {/* Once you have an image:
          <Image
            src="/images/border-collie-profile.jpg"
            alt="Border Collie profile"
            fill
            className="object-cover"
          />
          */}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <motion.div variants={itemVariants} className="cartoon-border p-6 bg-blue-50">
          <h2 className="text-2xl font-bold mb-4">Physical Characteristics</h2>
          <ul className="space-y-3">
            <li><strong>Size:</strong> Medium (18-22 inches tall, 30-45 pounds)</li>
            <li><strong>Coat:</strong> Medium to long double coat, can be rough or smooth</li>
            <li><strong>Colors:</strong> Black and white is most common, but can also be blue merle, red merle, tricolor, and many other variations</li>
            <li><strong>Lifespan:</strong> 12-15 years</li>
            <li><strong>Eyes:</strong> Often have intense, focused gaze; can be brown, blue, or one of each</li>
          </ul>
        </motion.div>
        
        <motion.div variants={itemVariants} className="cartoon-border p-6 bg-green-50">
          <h2 className="text-2xl font-bold mb-4">Temperament & Personality</h2>
          <ul className="space-y-3">
            <li><strong>Intelligence:</strong> Consistently ranked as the most intelligent dog breed</li>
            <li><strong>Energy:</strong> Very high energy, requires lots of physical and mental exercise</li>
            <li><strong>Work Ethic:</strong> Strong drive to work and complete tasks</li>
            <li><strong>Sensitivity:</strong> Highly responsive to owner's commands and emotions</li>
            <li><strong>Trainability:</strong> Extremely trainable and eager to learn</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="cartoon-border p-6 bg-yellow-50 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg cartoon-border">
            <h3 className="text-xl font-bold mb-2">Record Holders</h3>
            <p>Border Collies hold many world records for canine activities, including 
            the farthest frisbee catch and most tricks performed in a minute!</p>
          </div>
          <div className="p-4 bg-white rounded-lg cartoon-border">
            <h3 className="text-xl font-bold mb-2">Vocabulary Champions</h3>
            <p>Some Border Collies can learn hundreds of words, with the most famous example
            being a Border Collie named Chaser who knew over 1,000 words!</p>
          </div>
          <div className="p-4 bg-white rounded-lg cartoon-border">
            <h3 className="text-xl font-bold mb-2">The "Eye"</h3>
            <p>Border Collies are known for their intense stare (called "the eye") which
            they use to control sheep—it's an instinctive herding technique!</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="cartoon-border p-6 bg-red-50 mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Border Collie Care</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Exercise Needs</h3>
            <p className="mb-4">
              Border Collies need a minimum of 1-2 hours of exercise daily, including 
              both physical activities and mental stimulation. Without proper exercise, 
              they may develop behavioral problems.
            </p>
            <h3 className="text-xl font-bold mb-3">Diet</h3>
            <p>
              High-quality dog food appropriate for their age, size, and activity level 
              is recommended. Active Border Collies may need more calories than less 
              active breeds.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Grooming</h3>
            <p className="mb-4">
              Brush your Border Collie's coat weekly to remove loose hair and prevent 
              matting. They shed seasonally, during which daily brushing may be needed.
            </p>
            <h3 className="text-xl font-bold mb-3">Health Considerations</h3>
            <p>
              Common health issues include hip dysplasia, epilepsy, Collie Eye Anomaly, 
              and certain genetic conditions. Regular veterinary checkups are important.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Is a Border Collie Right for You?</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Border Collies make wonderful companions for the right homes, but they're not for everyone. 
          They thrive with active owners who can provide plenty of exercise, mental stimulation, 
          and training. Consider the following before bringing a Border Collie into your life:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="cartoon-border p-6 bg-green-100">
            <h3 className="text-xl font-bold mb-2">Great For</h3>
            <ul className="text-left space-y-2">
              <li>✅ Active individuals or families</li>
              <li>✅ Homes with large, secure yards</li>
              <li>✅ People interested in dog sports</li>
              <li>✅ Experienced dog owners</li>
              <li>✅ Those with time for training and exercise</li>
            </ul>
          </div>
          
          <div className="cartoon-border p-6 bg-red-100">
            <h3 className="text-xl font-bold mb-2">May Not Be Ideal For</h3>
            <ul className="text-left space-y-2">
              <li>❌ Apartment dwellers</li>
              <li>❌ Those with limited time for exercise</li>
              <li>❌ Inactive households</li>
              <li>❌ First-time dog owners</li>
              <li>❌ Homes where the dog will be alone all day</li>
            </ul>
          </div>
        </div>
        
        <Link href="/adoption" className="cartoon-button inline-block">
          Learn About Border Collie Adoption
        </Link>
      </div>
    </div>
  );
} 