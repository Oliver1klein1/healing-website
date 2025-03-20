import { notFound } from 'next/navigation';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Features from '@/components/Features';
import LoadingScreen from '@/components/LoadingScreen';
import PDFViewer from '@/components/PDFViewer';

// Function to get all book slugs
export async function generateStaticParams() {
  try {
    const booksDirectory = path.join(process.cwd(), 'public/content/books');
    if (!fs.existsSync(booksDirectory)) {
      console.warn('Books directory does not exist:', booksDirectory);
      return [];
    }
    
    const filenames = fs.readdirSync(booksDirectory);
    return filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => ({
        slug: filename.replace(/\.md$/, ''),
      }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Function to get book content
async function getBookContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'public/content/books', `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Process markdown content to remove strong/bold formatting
    let processedContent = content.replace(/\*\*(.*?)\*\*/g, '$1');
    processedContent = processedContent.replace(/__(.*?)__/g, '$1');
    
    // Convert markdown to HTML
    const result = await remark()
      .use(html)
      .process(processedContent);
    const contentHtml = result.toString();

    return {
      title: data.title,
      description: contentHtml,
      image: data.image,
      pdfUrl: data.pdfUrl
    };
  } catch (error) {
    console.error('Error reading book content:', error);
    return null;
  }
}

export default async function BookPage({ params }: { params: { slug: string } }) {
  const book = await getBookContent(params.slug);

  if (!book) {
    notFound();
  }

  const showPreview = params.slug === 'optimize-microbiome';

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
                        src={`/books/${book.image}`}
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
                        Astonishingly, gut microbes produce many of the same chemicals that our brains use to regulate thoughts and emotions. In fact, about 90% of our body's serotonin – a key neurotransmitter for mood – is made in the gut.
                      </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        Ever wonder why you crave sweets or feel hungry soon after eating? Part of the answer may lie in your gut microbes and the signals they send to your brain. The gut-brain axis is a communication highway, and microbes are active messengers on it. Gut bacteria can influence levels of appetite-regulating hormones ... This suggests that a healthy microbiome puts a check on cravings, especially for hyper-palatable "junk" foods.
                      </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-purple-900 p-6 rounded-xl shadow-lg">
                      <p className="text-yellow-300 text-sm md:text-base text-justify">
                        One of the most striking demonstrations of the microbiome's impact on mood comes from animal studies swapping gut bacteria between individuals with very different temperaments. In a groundbreaking experiment, researchers ... essentially transferred behavioral traits along with the gut microbiota. They worked with two strains of mice: one known for being anxious and timid ..., and another that was notably calm and exploratory .... The results were astonishing: mice that received the "calm" microbiome became less anxious, while those colonized with the "anxious" microbiome became more anxious.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Book Content */}
            <div className="md:w-2/3">
              <article 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-normal prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:text-lg prose-p:text-justify prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: book.description }}
              />

              {/* PDF Preview Section */}
              {showPreview && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Preview the Book</h2>
                  <div className="bg-purple-50 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Here's a sneak peek...</h2>
                    <p className="text-gray-600 mb-4">
                      Take a look at the first few pages to get a taste of what's inside.
                    </p>
                    {(() => {
                      console.log('Book data:', book);
                      return null;
                    })()}
                    <PDFViewer url="/books/optimize-your-microbiome-preview.pdf.pdf" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}