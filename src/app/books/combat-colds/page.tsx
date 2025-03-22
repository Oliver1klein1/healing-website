'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "17 Steps to Combat Colds & Flu: Using Science-Backed Natural Remedies",
  imageUrl: "/images/books/combat-colds.jpg",
  pdfUrl: "/pdfs/combat-colds-preview.pdf"
};

export default function CombatColdsPage() {
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
              <h1 className="text-4xl font-bold mb-6">17 Steps To Combat Colds And Flu Using Science-Backed Natural Remedies</h1>
              <p className="text-xl text-gray-600 mb-8">By Dr. Michael Klein, MD</p>
              
              <div className="space-y-6">
                <p>Are you tired of constantly battling colds and flu, spending money on over-the-counter medications that only mask symptoms?</p>
                
                <p>The COVID-19 pandemic changed everything, making us more aware than ever of the importance of immune resilience and natural health solutions. Now, more than ever, people are searching for safe, effective, and affordable ways to prevent and manage viral infections-without the side effects of pharmaceuticals.</p>
                
                <p>Discover a doctor's science-backed approach to cold and flu relief using natural remedies that actually work.</p>
                
                <p>In this practical, easy-to-follow guide, Dr. Michael Klein-medical doctor and former pharmaceutical researcher-shares 17 evidence-based steps to prevent and combat colds and flu at home. With over 20 years of experience in pharma and research, Dr. Klein blends scientific data with time-tested wisdom to help you:</p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Boost your immune system naturally with everyday foods and supplements</li>
                  <li>Soothe sore throats, coughs, and congestion using simple, effective remedies</li>
                  <li>Use herbal medicine backed by science for faster recovery</li>
                  <li>Avoid common mistakes that prolong illness</li>
                  <li>Know when to seek medical care-and when you can safely heal at home</li>
                </ul>
                
                <p>This book is for you if you want to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Take control of your health and reduce your reliance on expensive medications</li>
                  <li>Protect yourself and your family with natural, research-supported remedies</li>
                  <li>Learn post-pandemic strategies to strengthen your immune system year-round</li>
                  <li>Save money by using affordable, readily available ingredients</li>
                </ul>
                
                <p>Don't wait until the next flu season to start protecting your health!</p>
                
                <p>Equip yourself with trusted, doctor-approved solutions that work with your body-rather than against it. Get your copy of 17 Steps to Combat Colds and Flu Using Science-Backed Natural Remedies today and start feeling better, faster!</p>
                <p>Click "Buy Now" to start your journey toward natural healing and immune resilience!</p>
              </div>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "This meta-analysis of several trials found that zinc lozenges (providing &gt;75 mg of zinc per day in divided doses) shortened colds by about 33% on average. In practical terms, people who took zinc from day 1 recovered faster – often a cold that might have lasted a week could end a couple of days sooner"
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Honey has been clinically proven to be as effective (if not better) than some commercial cough syrups in reducing nighttime cough in children"
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-900 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "A notable clinical trial found that people taking a daily garlic supplement had significantly fewer colds over 12 weeks than those taking a placebo (24 colds in the garlic group vs 65 in the placebo group)5. The garlic group also had far fewer days of illness overall"
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