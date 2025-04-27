import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      
      <FeatureSection />
      
      <section className="py-12 bg-blue-50 -mx-4 px-4 cartoon-border">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Fun Facts About Border Collies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These incredible dogs are full of surprises!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg cartoon-border">
              <h3 className="text-xl font-bold mb-2">Super Smart</h3>
              <p>Border Collies are often considered the most intelligent dog breed in the world!</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg cartoon-border">
              <h3 className="text-xl font-bold mb-2">Working Origins</h3>
              <p>They were originally bred to herd sheep on the border between Scotland and England.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg cartoon-border">
              <h3 className="text-xl font-bold mb-2">Energy to Spare</h3>
              <p>Border Collies have seemingly endless energy and love to stay active with jobs and play.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/breed-info" className="cartoon-button inline-block">
              More Border Collie Facts
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Test Your Border Collie Knowledge?</h2>
              <p className="mb-6">
                Take our fun quiz to see how much you know about Border Collies and find out which 
                Border Collie personality matches yours!
              </p>
              <Link href="/quiz" className="cartoon-button inline-block bg-secondary">
                Take the Quiz
              </Link>
            </div>
            
            <div className="relative h-64 cartoon-border bg-purple-100 flex items-center justify-center">
              <div className="text-4xl">❓🐕❓</div>
              <div className="absolute -top-3 -right-3 bg-white cartoon-border p-2 rotate-12">
                <span className="text-lg font-bold">Fun Quiz!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-green-50 -mx-4 px-4 cartoon-border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Border Collie Community</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Explore all our resources, share your Border Collie photos, and connect with other Border Collie lovers!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/gallery" className="cartoon-button inline-block">
              Browse Gallery
            </Link>
            <Link href="/games" className="cartoon-button inline-block bg-yellow-400">
              Play Games
            </Link>
            <Link href="/adoption" className="cartoon-button inline-block bg-pink-400">
              Adoption Corner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
