'use client';

import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

const book = {
  title: "Heal Your Skin Naturally: Proven Treatments for Eczema and Other Common Skin Conditions",
  imageUrl: "/images/heal-your-skin-naturally.jpg",
  pdfUrl: "/pdfs/heal-your-skin-preview.pdf"
};

export default function HealYourSkinPage() {
  return (
    <>
      <LoadingScreen />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-600 to-purple-900 py-20 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/logo-transparent.png"
            alt="Background Logo"
            fill
            className="opacity-5 object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6">
            {book.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Book Image */}
          <div className="md:w-1/3">
            <div className="sticky top-8">
              <Image
                src={book.imageUrl}
                alt={book.title}
                width={400}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
              <a
                href="#"
                className="block mt-6 bg-purple-600 text-white text-center py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>

          {/* Right Column - Book Content */}
          <div className="md:w-2/3">
            <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-normal prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:text-lg prose-p:text-justify prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-li:text-gray-700">
              <h1>{book.title}</h1>
              <p className="text-xl">By Dr. Michael Klein, MD</p>

              <p>
                Are you tired of dealing with skin issues that seem to resist every treatment you try? You're not alone. Millions of people struggle with acne, eczema, psoriasis, and other skin conditions that affect both their physical health and self-confidence.
              </p>

              <p>
                In this comprehensive guide, Dr. Michael Klein combines modern dermatological research with time-tested natural remedies to help you achieve the clear, healthy skin you deserve. Drawing from both scientific studies and clinical experience, this book offers practical solutions that work with your body's natural healing processes.
              </p>

              <p>
                You'll discover how to:
              </p>

              <ul>
                <li>Identify and eliminate common triggers that cause skin flare-ups</li>
                <li>Create a personalized skincare routine that actually works</li>
                <li>Use natural ingredients that are scientifically proven to heal skin</li>
                <li>Address the root causes of skin problems, not just the symptoms</li>
                <li>Protect your skin from environmental damage and premature aging</li>
              </ul>

              <p>
                This book is perfect for anyone who:
              </p>

              <ul>
                <li>Struggles with persistent skin issues that haven't responded to conventional treatments</li>
                <li>Wants to avoid harsh chemicals and expensive treatments</li>
                <li>Is looking for natural, science-backed solutions for healthy skin</li>
                <li>Needs a practical, step-by-step guide to natural skincare</li>
              </ul>

              <p>
                Your journey to healthier skin starts here. Learn how to work with your body's natural processes to achieve lasting results without harmful side effects.
              </p>

              <h2>What Makes This Guide Different</h2>
              <ul>
                <li>Evidence-based natural solutions that actually work</li>
                <li>Clear, practical steps you can implement immediately</li>
                <li>Cost-effective remedies using readily available ingredients</li>
                <li>Personalized approaches for different skin types and conditions</li>
                <li>Long-term strategies for maintaining healthy skin</li>
              </ul>

              <p>
                Start your journey to naturally beautiful, healthy skin today with proven strategies that work with your body's own healing abilities.
              </p>
            </article>

            {/* Highlighted Excerpts */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Highlighted Excerpts</h2>
              <div className="space-y-12">
                {/* Card 1 */}
                <div key="excerpt-1" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "To get off the merry-go-round of constant flare-ups, you have to fix what's triggering those flares in the first place, whether it's an imbalance in your gut microbiome, a lack of certain nutrients, unmanaged stress, or even environmental factors like allergens. Addressing those root causes from within breaks the cycle, so the skin can truly heal."
                  </p>
                </div>

                {/* Card 2 */}
                <div key="excerpt-2" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Did you know that your gut health is intimately linked to your skin? Discover how eating the right foods, including fermented delights and prebiotic-rich vegetables, can calm inflammation from the inside out for clearer skin"
                  </p>
                </div>

                {/* Card 3 */}
                <div key="excerpt-3" className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                  <p className="text-yellow-300 text-sm md:text-base text-justify">
                    "Stress isn't just in your head – it shows on your skin. Discover simple 5-minute stress-soothing techniques that can visibly reduce inflammation and break the frustrating stress-skin cycle."
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