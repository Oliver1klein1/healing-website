'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

export default function MicrobiomeTriviaPage() {
  const book = {
    title: "Microbiome Trivia: 150 Astonishing Facts About Your Gut - Your Second Brain",
    image: "microbiome-trivia.jpg",
    pdfUrl: "/pdfs/microbiome-trivia-preview.pdf"
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
                        Your gut bacteria may outnumber your own human cells, creating a hidden ecosystem that shapes your health in surprising ways.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        Scientists have discovered that your gut microbes can influence everything from your mood to your risk for diseases like Alzheimer's.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        Your microbiome may be the key to better sleep, youthful skin, and a healthier metabolism—discover how in this fascinating guide.
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
                <p className="text-xl">By Dr Michael Klein</p>

                <p>Did you know that your gut contains trillions of microbes that influence everything from your mood to your immune system? Or that your gut bacteria may outnumber your own human cells? The mysteries of the microbiome are stranger-and more powerful-than you ever imagined!</p>

                <p>Your gut isn't just about digestion-it's your second brain. Scientists have discovered that the microbes inside you can shape your cravings, regulate inflammation, and even affect your risk for diseases like Alzheimer's and depression. In this book, you'll uncover 150 mind-blowing facts that reveal how the tiny organisms inside you hold the keys to health, longevity, and well-being.</p>

                <h2>Discover Amazing Facts Like:</h2>
                <ul>
                  <li>True or False? Your gut bacteria can help determine your personality.</li>
                  <li>Did You Know? Your microbiome may impact how well you sleep.</li>
                  <li>Surprising Insight: A healthy gut could be the secret to youthful skin and better metabolism!</li>
                </ul>

                <p>With engaging trivia, jaw-dropping scientific discoveries, and fascinating science-backed insights, Microbiome Trivia makes learning about gut health fun, accessible, and unforgettable.</p>

                <p>Are you ready to unlock the secrets of your hidden microbial world?</p>
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