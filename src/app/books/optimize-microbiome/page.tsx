'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "Optimize Your Microbiome: 17 Steps to Restore Gut Health and Feel Better",
  imageUrl: "/images/books/optimize-microbiome.jpg",
  pdfUrl: "/pdfs/optimize-microbiome-preview.pdf"
};

export default function OptimizeMicrobiomePage() {
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
              <div className="relative w-[300px] h-[400px] mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-6 md:mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 animate-pulse hover:animate-none relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-75 blur-lg group-hover:opacity-100 animate-glow"></div>
                  <span className="relative z-10">Buy Now</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Book Content */}
          <div className="md:w-2/3">
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold mb-6">7 Steps to Optimize Your Microbiome - And Why You Need To</h1>
              <p className="text-xl text-gray-600 mb-8">By Dr. Michael Klein, MD</p>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-emerald-600">What If the Secret to a Longer, Healthier Life Was Hiding Inside You?</h2>
                <p>Your body is home to trillions of microbes-an invisible but powerful ecosystem that controls everything from your mood and metabolism to inflammation and immune strength. Cutting-edge research now reveals that your gut microbiome may hold the key to weight loss, disease prevention, and even longevity. Yet modern diets, stress, and medication use are silently destroying this hidden ally.</p>
                
                <h2 className="text-2xl font-semibold text-emerald-600">Recent breakthroughs show that:</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Centenarians (people who live to 100+) have unique gut bacteria that protect them from aging and disease</li>
                  <li>Scientists made mice obese-just by changing their gut bacteria (even with no change in diet!)</li>
                  <li>90% of serotonin (your "happiness hormone") is made in your gut, not your brain</li>
                  <li>Chronic inflammation-the root of heart disease, arthritis, and diabetes-often starts in the gut</li>
                  <li>Your microbiome can even "train" your immune system to fight off illness more effectively</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-emerald-600">7 Simple, Affordable Steps to Restore Your Gut Health-Starting Today</h2>
                <p>In this science-backed but easy-to-follow guide you will learn how to optimize your microbiome naturally, without expensive supplements or complex diets.</p>
                
                <h2 className="text-2xl font-semibold text-emerald-600">Inside, you'll discover:</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>How to feed the "good bacteria" that supercharge your immune system</li>
                  <li>Which budget-friendly foods help heal your gut (and which ones destroy it)</li>
                  <li>The truth about probiotics-are they worth it, or just a marketing gimmick?</li>
                  <li>How exercise, stress, and sleep impact your gut-and simple ways to improve all three</li>
                  <li>Why getting outside (and even getting a little dirty!) can strengthen your microbiome</li>
                </ul>
                
                <p>If you're tired of fad diets, expensive pills, and confusing health advice, this book offers clear, actionable steps that anyone can follow. Whether you struggle with low energy, bloating, weight gain, stress, or frequent illness, optimizing your microbiome could be the missing piece of the puzzle.</p>
                
                <p>Your gut has the power to heal, protect, and transform your body-starting today. Are you ready to take the first step?</p>
                <p>Grab your copy now and unlock the hidden potential inside you!</p>
              </div>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-12">
                {/* Card 1 */}
                <div key="excerpt-1" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Astonishingly, gut microbes produce many of the same chemicals that our brains use to regulate thoughts and emotions. In fact, about 90% of our body's serotonin – a key neurotransmitter for mood – is made in the gut."
                  </p>
                </div>

                {/* Card 2 */}
                <div key="excerpt-2" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Ever wonder why you crave sweets or feel hungry soon after eating? Part of the answer may lie in your gut microbes and the signals they send to your brain. The gut-brain axis is a communication highway, and microbes are active messengers on it."
                  </p>
                </div>

                {/* Card 3 */}
                <div key="excerpt-3" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "One of the most striking demonstrations of the microbiome's impact on mood comes from animal studies swapping gut bacteria between individuals with very different temperaments."
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