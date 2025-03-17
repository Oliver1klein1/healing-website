import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Science-Backed Natural Remedies
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Dr. Michael Klein combines rigorous scientific research with natural medicine 
              to create evidence-based solutions for modern health challenges.
            </p>
            <div className="flex gap-4">
              <Link href="/books" className="btn-primary">
                Explore Books
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/doctor-hero.jpg"
              alt="Dr. Michael Klein"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 