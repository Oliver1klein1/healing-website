import Image from 'next/image';
import Link from 'next/link';

const books = [
  {
    title: 'Heal Your Gut Naturally',
    subtitle: '17 Steps to Banish Stomach Pain, Indigestion and Bloating',
    image: '/books/heal-your-gut.jpg',
    slug: 'heal-your-gut',
    rating: 4.9,
    reviews: 120,
  },
  {
    title: '7 Steps to Optimize Your Microbiome',
    subtitle: 'And Why You Need To',
    image: '/books/optimize-microbiome.jpg',
    slug: 'optimize-microbiome',
    rating: 4.9,
    reviews: 120,
  },
  {
    title: '17 Steps to Combat Colds & Flu',
    subtitle: 'Using Science-Backed Natural Remedies',
    image: '/books/combat-colds.jpg',
    slug: 'combat-colds',
    rating: 4.9,
    reviews: 120,
  },
  {
    title: '101 Jaw-Dropping Fun Facts',
    subtitle: 'About the Pineal Gland',
    image: '/books/pineal-gland.jpg',
    slug: 'pineal-gland',
    rating: 4.9,
    reviews: 120,
  },
  {
    title: 'Microbiome Trivia',
    subtitle: 'Amazing Facts About Your Gut Health',
    image: '/books/microbiome-trivia.jpg',
    slug: 'microbiome-trivia',
    rating: 4.8,
    reviews: 95,
  },
  {
    title: 'Pineal Trivia',
    subtitle: 'Fascinating Facts About Your Third Eye',
    image: '/books/pineal-trivia.jpg',
    slug: 'pineal-trivia',
    rating: 4.8,
    reviews: 88,
  },
  {
    title: 'Heal Your Skin Naturally',
    subtitle: 'Science-Backed Solutions for Common Skin Problems',
    image: '/books/heal-your-skin.jpg',
    slug: 'heal-your-skin',
    rating: 4.9,
    reviews: 105,
  }
];

export default function BookSection() {
  return (
    <div className="container mx-auto px-4 relative py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Published Works
        </h2>
        <p className="text-xl text-gray-600">
          Science-Backed Natural Remedies - Dr. Klein's books have helped many to understand and implement evidence-based natural medicine.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <Link 
            key={index}
            href={`/books/${book.slug}`}
            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative h-[400px] p-8 flex items-center justify-center">
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority={index < 3}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {book.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {book.subtitle}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {book.rating}
                  </span>
                </div>
                <span className="text-gray-500 text-sm">
                  {book.reviews} reviews
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 