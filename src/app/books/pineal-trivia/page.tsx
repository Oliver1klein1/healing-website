import Image from 'next/image';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getBookContent(filename: string): Promise<string> {
  const contentDirectory = path.join(process.cwd(), 'src/content/books');
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);

  return processedContent.toString();
}

export default async function PinealTriviaPage() {
  const book = {
    title: "101 Jaw-Dropping and Fun Facts About the Pineal Gland",
    image: "pineal-trivia.jpg",
    pdfUrl: "/pdfs/pineal-trivia-preview.pdf",
    contentFile: "pineal-trivia.md"
  };

  const content = await getBookContent(book.contentFile);

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
                <div className="text-lg text-gray-700 space-y-6">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </article>

              {/* Highlighted Excerpts */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Highlighted Excerpts</h2>
                <div className="space-y-4">
                  {/* Card 1 */}
                  <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                    <p className="text-yellow-300 text-sm md:text-base text-justify">
                      Epidemiological studies have found that long-term night shift workers have increased rates of certain cancers (like breast cancer) and other health issues.
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