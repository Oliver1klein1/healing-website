import Image from 'next/image';
import BookSection from '@/components/BookSection';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen">
        {/* Bridging Science Section with Glass Effect */}
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Evidence-Based',
                  description: 'All remedies and protocols are backed by peer-reviewed scientific research and clinical trials.',
                  icon: '🧬'
                },
                {
                  title: 'Natural Ingredients',
                  description: 'Focus on sustainable, natural compounds with minimal side effects and maximum efficacy.',
                  icon: '🌿'
                },
                {
                  title: 'Accessible Knowledge',
                  description: 'Complex medical research translated into clear, practical guidance for everyone.',
                  icon: '📚'
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl border border-white/10">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-blue-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Books Section with Enhanced Gradient Background */}
        <section className="relative py-8 overflow-hidden bg-transparent">
          <BackgroundGradientAnimation
            containerClassName="absolute inset-0"
            className="opacity-70"
            size="100%"
            firstColor="59, 130, 246"
            secondColor="147, 51, 234"
            thirdColor="59, 130, 246"
            gradientBackgroundStart="rgb(59, 130, 246)"
            gradientBackgroundEnd="rgb(147, 51, 234)"
            blendingValue="hard-light"
          />
          <div className="relative z-10">
            <BookSection />
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Section with Modern Layout */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative h-[300px] w-[250px] mx-auto rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <Image
                  src="/doctor-hero.jpeg"
                  alt="Dr. Michael Klein"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  A Bit About Me...
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4 text-gray-700 text-justify">
                    Hi. I'm a medical doctor and business executive with over two decades of experience in pharmaceutical research spanning Africa, Asia, and Australia. Throughout my career, I've had the privilege of living and working in South Africa, Australia, and Singapore, where my three wonderful children were born.
                  </p>
                  <p className="mb-4 text-gray-700 text-justify">
                    Having served on African, Asian, and European boards of multinational pharmaceutical companies, much of my professional journey involved diving deep into data and extracting valuable insights from countless clinical trials. This unique vantage point gave me firsthand exposure to both the extraordinary benefits and notable limitations of modern medicine.
                  </p>
                  <p className="mb-4 text-gray-700 text-justify">
                    While pharmaceuticals undoubtedly save lives, I've come to recognize that complex, costly medications aren't always necessary or accessible for everyone. In fact, many everyday health challenges can be addressed effectively using simple, affordable natural remedies that have endured through generations.
                  </p>
                  <p className="text-gray-700 text-justify">
                    Inspired by the needs of busy, budget-conscious families (and the naturally curious!), my mission is to sift through the vast sea of scientific research and translate it into clear, practical guidance. This series of books is designed to deliver quick, effective, science-backed solutions to common health issues—helping you and your family achieve optimal wellness naturally, without breaking the bank.
                  </p>
                </div>
              </div>
            </div>
      </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
    </>
  );
}
