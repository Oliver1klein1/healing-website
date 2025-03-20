'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

export default function PinealTriviaPage() {
  const book = {
    title: "101 Jaw-Dropping and Fun Facts About the Pineal Gland",
    image: "pineal-trivia.jpg",
    pdfUrl: "/pdfs/pineal-trivia-preview.pdf"
  };

  return (
    <>
      <LoadingScreen />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20"></div>
        <div className="max-w-6xl mx-auto py-12 md:py-16 relative">
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/bfh logo purple circular.png"
                alt="BFH Logo"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Bridging Science & Natural Medicine
            </h1>
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/dna_in_bowl.gif"
                alt="DNA Animation"
                fill
                sizes="(max-width: 768px) 96px, 128px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto py-12 md:py-16 px-4">
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
                        src={`/images/books/${book.image}`}
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
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                    Buy Now
                  </button>
                </div>

                {/* Highlighted Excerpts */}
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Highlighted Excerpts</h2>
                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        Did you know the pineal gland has the second-highest blood flow of any organ in your body? Ancient philosophers believed it was the "seat of the soul."
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        The pineal gland's influence extends far beyond sleep regulation—it plays a crucial role in aging, consciousness, and even spiritual experiences.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        Modern science is uncovering surprising connections between the pineal gland and human potential that ancient cultures somehow knew about thousands of years ago.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Book Content */}
            <div className="md:w-2/3">
              <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-normal prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:text-lg prose-p:text-justify prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-li:text-gray-700">
                <h1>{book.title}</h1>

                <p>Did you know the pineal gland has the second-highest blood flow of any organ in your body? Or that ancient philosophers believed it was the "seat of the soul"? Hidden deep within your brain, this tiny pinecone-shaped gland has been at the center of scientific discovery, spiritual speculation, and even wild conspiracy theories.</p>

                <p>In 101 Jaw-Dropping and Fun Facts About the Pineal Gland, you'll explore the fascinating world of this mysterious organ-its role in sleep, its connection to ancient mysticism, and the cutting-edge science revealing its influence on health, aging, and even consciousness itself. Packed with incredible trivia, surprising research, and mind-expanding insights, this book makes learning about the pineal gland as exciting as it is enlightening.</p>

                <h2>Whether you're a science enthusiast, a health-conscious reader, or someone intrigued by the unexplored powers of the human brain, this book will keep you hooked from cover to cover. Discover:</h2>

                <ul>
                  <li>How the pineal gland regulates your biological clock</li>
                  <li>The strange truth about pineal gland calcification</li>
                  <li>Ancient and modern beliefs about the "third eye"</li>
                  <li>Groundbreaking research on melatonin, health, and longevity</li>
                  <li>And dozens more astonishing, little-known facts!</li>
                </ul>

                <p>If you love learning about the hidden wonders of the human body, this book is a must-read.</p>
              </article>

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
        </div>
      </main>
    </>
  );
} 