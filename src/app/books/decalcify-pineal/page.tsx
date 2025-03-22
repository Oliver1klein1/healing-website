'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "Five Steps to Decalcify Your Pineal Gland - And Why You Need To",
  imageUrl: "/images/books/pineal-gland.jpg",
  pdfUrl: "/pdfs/pineal-gland-preview.pdf"
};

export default function DecalcifyPinealPage() {
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
              <h1 className="text-4xl font-bold mb-6">Five Steps to Decalcify Your Pineal Gland - And Why You Need To</h1>
              <p className="text-xl text-gray-600 mb-8">By Dr Michael Klein, MD</p>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-emerald-600">Unlock the Secret to Enhanced Clarity, Energy, and Intuition!</h2>
                
                <p>Do you often feel mentally foggy, fatigued, or disconnected? Modern life and environmental toxins could be silently affecting one of your most vital organs: your pineal gland. Dr. Michael Klein, renowned medical expert and researcher, reveals why a calcified pineal gland may be behind your lack of energy, diminished intuition, and disrupted sleep patterns.</p>
                
                <p>In "5 Steps to Decalcify Your Pineal Gland - And Why You Need To," Dr. Klein walks you through clear, scientifically-backed strategies that help restore your gland's optimal function, including dietary changes, detoxification methods, and proven lifestyle practices.</p>
                
                <p>Imagine waking up each morning refreshed, experiencing heightened clarity, and tapping effortlessly into your intuition. Thousands have already rejuvenated their physical and mental health by following Dr. Klein's easy-to-implement steps, reclaiming vitality, mental sharpness, and spiritual connectedness.</p>
                
                <p>Don't let another day go by feeling less vibrant than you deserve.</p>
                <p>Click "Buy Now" to start your journey toward a clearer, healthier, and more intuitive life today!</p>
              </div>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "The pineal gland's calcification isn't just a natural part of aging – it's a sign that your body's natural detoxification systems are struggling. By following these five steps, you can help your body clear away the calcium deposits that are clouding your mental clarity and disrupting your sleep."
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Your diet plays a crucial role in pineal gland health. Discover how certain foods can help decalcify your pineal gland while others might be contributing to its calcification. Learn which nutrients are essential for optimal pineal function."
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Environmental toxins are one of the biggest contributors to pineal gland calcification. Find out how to reduce your exposure to fluoride, heavy metals, and other harmful substances that can affect your pineal gland's health."
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