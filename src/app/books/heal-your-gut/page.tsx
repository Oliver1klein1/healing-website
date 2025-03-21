'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

export default function HealYourGutPage() {
  const book = {
    title: "Heal Your Gut Naturally: 17 Steps to Banish Pain, Indigestion, and Bloating",
    image: "heal-your-gut.jpg",
    pdfUrl: "/pdfs/heal-your-gut-preview.pdf"
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
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
                  <div className="space-y-12">
                    {/* Card 1 */}
                    <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        "The best way to handle digestive troubles is to prevent them in the first place. By making mindful lifestyle and dietary changes, you can strengthen your digestive system and avoid triggers that cause stomach pain, indigestion, and bloating"
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        "If you have IBS (Irritable Bowel Syndrome) or chronic bloating and pain that hasn't responded to basic diet tweaks, you might benefit from a structured elimination diet like the Low-FODMAP diet. FODMAPs are certain types of carbohydrates... that can be hard to digest and tend to ferment in the gut, causing gas and bloating"
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        "Nature has provided us with wonderful herbs that can calm an upset stomach. Three of the best herbal teas for digestion are peppermint, chamomile, and ginger."
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
                <p className="text-xl">By Dr. Michael Klein</p>

                <p>Do you constantly suffer from stomach pain, bloating, or indigestion? Have you tried medication after medication, only to find temporary relief? Your gut health holds the key to your overall well-being-and healing it naturally is easier than you think!</p>

                <p>Dr. Michael Klein, a seasoned medical doctor with over two decades of pharmaceutical research experience across three continents, reveals the science-backed, budget-friendly remedies that can transform your digestive health. This book distills years of research and real-world experience into a simple, practical, and effective 17-step guide-empowering you to take control of your gut without breaking the bank.</p>

                <h2>Inside, you'll discover:</h2>
                <ul>
                  <li>The hidden triggers behind your digestive distress-and how to eliminate them</li>
                  <li>Powerful Western herbal remedies that restore balance to your gut microbiome</li>
                  <li>The best foods to promote healing and reduce inflammation naturally</li>
                  <li>Simple DIY recipes for soothing teas, gut-healing broths, and probiotic-rich foods</li>
                  <li>When to seek professional help-and what symptoms you should never ignore</li>
                </ul>

                <p>Backed by peer-reviewed science and free from complex pharmaceutical jargon, this guide is designed for anyone looking for practical, natural solutions to regain digestive health and live pain-free.</p>

                <p>If you're ready to banish stomach pain, ease bloating, and take charge of your digestive health-without expensive treatments or restrictive diets-then this book is your roadmap to lasting relief.</p>
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