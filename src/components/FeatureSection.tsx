'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const features = [
  {
    title: 'Breed Information',
    description: 'Learn all about Border Collies - history, temperament, care tips and more.',
    icon: '📚',
    href: '/breed-info',
    color: 'bg-blue-100',
  },
  {
    title: 'Training Tips',
    description: 'Get expert advice on how to train your Border Collie with fun and effective methods.',
    icon: '🎓',
    href: '/training',
    color: 'bg-green-100',
  },
  {
    title: 'Fun Quiz',
    description: 'Find out which type of Border Collie personality matches yours!',
    icon: '❓',
    href: '/quiz',
    color: 'bg-purple-100',
  },
  {
    title: 'Photo Gallery',
    description: 'Browse our collection of adorable Border Collie photos or submit your own.',
    icon: '📷',
    href: '/gallery',
    color: 'bg-pink-100',
  },
  {
    title: 'Games',
    description: 'Play fun Border Collie themed games right in your browser.',
    icon: '🎮',
    href: '/games',
    color: 'bg-yellow-100',
  },
  {
    title: 'Adoption Corner',
    description: 'Looking to adopt? Find resources to help you bring a Border Collie into your home.',
    icon: '🏠',
    href: '/adoption',
    color: 'bg-orange-100',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Explore BorderCollieWorld</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dive into all our Border Collie resources and have fun while learning about this amazing breed!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Link href={feature.href}>
              <div className={`cartoon-border p-6 h-full ${feature.color} transition-all`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 