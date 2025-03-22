'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "Microbiome Trivia: 150 Astonishing Facts About Your Gut - Your Second Brain",
  imageUrl: "/images/books/microbiome-trivia.jpg",
  pdfUrl: "/pdfs/microbiome-trivia-preview.pdf"
};

export default function MicrobiomeTriviaPage() {
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
              <h1 className="text-4xl font-bold mb-6">Microbiome Trivia: 150 Astonishing Facts About Your Gut - Your Second Brain</h1>
              <p className="text-xl text-gray-600 mb-8">By Dr Michael Klein, MD</p>
              
              <div className="space-y-6">
                <p>Did you know that your gut contains trillions of microbes that influence everything from your mood to your immune system? Or that your gut bacteria may outnumber your own human cells? The mysteries of the microbiome are stranger-and more powerful-than you ever imagined!</p>
                
                <p>Your gut isn't just about digestion-it's your second brain. Scientists have discovered that the microbes inside you can shape your cravings, regulate inflammation, and even affect your risk for diseases like Alzheimer's and depression. In this book, you'll uncover 150 mind-blowing facts that reveal how the tiny organisms inside you hold the keys to health, longevity, and well-being.</p>
                
                <h2 className="text-2xl font-semibold text-emerald-600">Discover Amazing Facts Like:</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>True or False? Your gut bacteria can help determine your personality.</li>
                  <li>Did You Know? Your microbiome may impact how well you sleep.</li>
                  <li>Surprising Insight: A healthy gut could be the secret to youthful skin and better metabolism!</li>
                </ul>
                
                <p>With engaging trivia, jaw-dropping scientific discoveries, and fascinating science-backed insights, Microbiome Trivia makes learning about gut health fun, accessible, and unforgettable.</p>
                
                <p>Are you ready to unlock the secrets of your hidden microbial world?</p>
                <p>Grab your copy today and discover how your gut is shaping your life in ways you never imagined!</p>
              </div>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Your gut microbiome is like a bustling metropolis, home to trillions of microorganisms that work together to keep you healthy. Discover how these tiny residents influence everything from your mood to your metabolism."
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "The gut-brain connection is more powerful than you might think. Learn how your microbiome can influence your mood, behavior, and even your risk of neurological conditions like depression and anxiety."
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Your microbiome is unique as your fingerprint, and it changes throughout your life. Discover how factors like diet, stress, and medication can shape your microbial community and impact your health."
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