'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

export default function CombatColdsPage() {
  const book = {
    title: "17 Steps To Combat Colds And Flu Using Science-Backed Natural Remedies",
    image: "combat-colds.jpg",
    pdfUrl: "/pdfs/combat-colds-preview.pdf"
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
                        "This meta-analysis of several trials found that zinc lozenges (providing &gt;75 mg of zinc per day in divided doses) shortened colds by about 33% on average. In practical terms, people who took zinc from day 1 recovered faster – often a cold that might have lasted a week could end a couple of days sooner"
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        "Honey has been clinically proven to be as effective (if not better) than some commercial cough syrups in reducing nighttime cough in children"
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        "A notable clinical trial found that people taking a daily garlic supplement had significantly fewer colds over 12 weeks than those taking a placebo (24 colds in the garlic group vs 65 in the placebo group)5. The garlic group also had far fewer days of illness overall"
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
                <p className="text-xl">By Dr. Michael Klein, MD</p>

                <p>Are you tired of constantly battling colds and flu, spending money on over-the-counter medications that only mask symptoms?</p>

                <p>The COVID-19 pandemic changed everything, making us more aware than ever of the importance of immune resilience and natural health solutions. Now, more than ever, people are searching for safe, effective, and affordable ways to prevent and manage viral infections-without the side effects of pharmaceuticals.</p>

                <p>In this practical, easy-to-follow guide, Dr. Michael Klein-medical doctor and former pharmaceutical researcher-shares 17 evidence-based steps to prevent and combat colds and flu at home. With over 20 years of experience in pharma and research, Dr. Klein blends scientific data with time-tested wisdom to help you:</p>

                <ul>
                  <li>Boost your immune system naturally with everyday foods and supplements</li>
                  <li>Soothe sore throats, coughs, and congestion using simple, effective remedies</li>
                  <li>Use herbal medicine backed by science for faster recovery</li>
                  <li>Avoid common mistakes that prolong illness</li>
                  <li>Know when to seek medical care-and when you can safely heal at home</li>
                </ul>

                <p>This book is perfect for anyone who wants to:</p>
                <ul>
                  <li>Take control of your health and reduce your reliance on expensive medications</li>
                  <li>Protect yourself and your family with natural, research-supported remedies</li>
                  <li>Learn post-pandemic strategies to strengthen your immune system year-round</li>
                  <li>Save money by using affordable, readily available ingredients</li>
                </ul>

                <p>Don't wait until the next flu season to start protecting your health!</p>

                <p>Equip yourself with trusted, doctor-approved solutions that work with your body-rather than against it. These science-backed natural remedies will help you prevent and overcome colds and flu more effectively, while supporting your body's natural healing abilities.</p>

                <h2>What Makes This Guide Different</h2>
                <ul>
                  <li>Evidence-based natural solutions that actually work</li>
                  <li>Clear, practical steps you can implement immediately</li>
                  <li>Cost-effective remedies using readily available ingredients</li>
                  <li>Safe protocols for both prevention and treatment</li>
                  <li>Expert guidance on when to seek medical care</li>
                </ul>

                <p>Start building your natural defense system today with proven strategies that strengthen your immunity and help you stay healthy year-round.</p>
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