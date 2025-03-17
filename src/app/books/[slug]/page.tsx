import { notFound } from 'next/navigation';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Features from '@/components/Features';

// Function to get all book slugs
export async function generateStaticParams() {
  const booksDirectory = path.join(process.cwd(), 'public/content/books');
  const filenames = fs.readdirSync(booksDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => ({
      slug: filename.replace(/\.md$/, ''),
    }));
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
      image: data.image
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

  return (
    <>
      {/* Features Section with Background */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 via-purple-100/90 to-blue-50/90"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
        <Features />
      </section>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-purple-200/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left Column - Book Image */}
              <div className="md:w-1/3">
                <div className="sticky top-8">
                  <div className="relative w-full max-w-[300px] mx-auto">
                    <div className="aspect-[3/4]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl transform -rotate-1"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-2xl transform rotate-1"></div>
                      <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-3xl">
                        <Image
                          src={`/books/${book.image}`}
                          alt={book.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Buy Now Button */}
                  <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Book Content */}
              <div className="md:w-2/3">
                <article className="prose prose-lg max-w-none prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h2:text-2xl prose-h2:font-normal prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:text-lg prose-p:font-normal prose-p:mb-6 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-li:text-gray-600 prose-li:text-lg animate-fade-in-up"
                  dangerouslySetInnerHTML={{ __html: book.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}