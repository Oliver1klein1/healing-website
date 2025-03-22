'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "101 Jaw-Dropping and Fun Facts About the Pineal Gland",
  imageUrl: "/images/books/pineal-gland-facts.jpg",
  pdfUrl: "/pdfs/pineal-gland-facts-preview.pdf"
};

export default function PinealGlandFactsPage() {
  return (
    <>
      <LoadingScreen />
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-b from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/bfh logo purple circular.png"
                  alt="BFH Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h2 className="text-5xl font-bold text-white animate-[pulse_3s_ease-in-out_infinite] bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                Bridging Science & Natural Medicine
              </h2>
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/dna_in_bowl.gif"
                  alt="DNA in Bowl"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Discover science-backed natural remedies that are gentle on your body and your wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Book Image */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <div className="relative w-full max-w-[300px] mx-auto">
                <div className="aspect-[3/4] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl transform -rotate-1"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-2xl transform rotate-1"></div>
                  <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={book.imageUrl}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Buy Now Button */}
              <div className="mt-6 md:mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 animate-pulse hover:animate-none relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-75 blur-lg group-hover:opacity-100 animate-glow"></div>
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Book Content and Excerpts */}
          <div className="md:w-2/3">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-6">101 Jaw-Dropping and Fun Facts About the Pineal Gland</h1>
              <p className="text-xl text-gray-600 mb-8">By Dr Michael Klein, MD</p>
              
              <div className="space-y-6">
                <p>Did you know the pineal gland has the second-highest blood flow of any organ in your body? Or that ancient philosophers believed it was the "seat of the soul"? Hidden deep within your brain, this tiny pinecone-shaped gland has been at the center of scientific discovery, spiritual speculation, and even wild conspiracy theories.</p>
                
                <p>In 101 Jaw-Dropping and Fun Facts About the Pineal Gland, you'll explore the fascinating world of this mysterious organ-its role in sleep, its connection to ancient mysticism, and the cutting-edge science revealing its influence on health, aging, and even consciousness itself. Packed with incredible trivia, surprising research, and mind-expanding insights, this book makes learning about the pineal gland as exciting as it is enlightening.</p>
                
                <p>Whether you're a science enthusiast, a health-conscious reader, or someone intrigued by the unexplored powers of the human brain, this book will keep you hooked from cover to cover. Discover:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>How the pineal gland regulates your biological clock</li>
                  <li>The strange truth about pineal gland calcification</li>
                  <li>Ancient and modern beliefs about the "third eye"</li>
                  <li>Groundbreaking research on melatonin, health, and longevity</li>
                  <li>And dozens more astonishing, little-known facts!</li>
                </ul>
                
                <p>If you love learning about the hidden wonders of the human body, this book is a must-read. Click "Buy Now" and embark on a fascinating journey into the mysteries of the pineal gland!</p>
              </div>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "The pineal gland's unique position in the brain and its connection to light perception has led scientists to call it the 'third eye' - a nickname that's more than just poetic. Discover how this tiny organ helps regulate your sleep-wake cycle and influences your overall health."
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Ancient philosophers and modern scientists alike have been fascinated by the pineal gland's role in consciousness. From Descartes' belief that it was the seat of the soul to modern research linking it to spiritual experiences, this mysterious gland continues to intrigue researchers."
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "The pineal gland's production of melatonin isn't just about sleep - it's a powerful antioxidant that helps protect your brain from aging and disease. Learn how this hormone influences everything from your immune system to your mood."
                  </p>
                </div>
              </div>
            </div>

            {/* PDF Preview Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Preview the Book</h2>
              <div className="bg-purple-50 p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Here's a sneak peek...</h2>
                <p className="text-gray-600 mb-4">
                  Take a look at the first few pages to get a taste of what's inside.
                </p>
                <PDFViewer url={book.pdfUrl} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 