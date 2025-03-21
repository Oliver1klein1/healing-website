import { notFound } from 'next/navigation';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
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
    console.log('Attempting to read file:', filePath);
    
    if (!fs.existsSync(filePath)) {
      console.error('Book file not found:', filePath);
      return null;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    console.log('File content length:', fileContent.length);
    
    const { data, content } = matter(fileContent);
    console.log('Parsed frontmatter:', data);
    
    // Convert markdown to HTML
    const result = await remark()
      .use(html)
      .process(content);
    const contentHtml = result.toString();
    console.log('Generated HTML length:', contentHtml.length);

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

// Server component
export default async function Page({ params }: { params: { slug: string } }) {
  try {
    console.log('Rendering book page for slug:', params.slug);
    
    const book = await getBookContent(params.slug);
    console.log('Book content received:', book ? 'yes' : 'no');

    if (!book) {
      console.error('Book not found for slug:', params.slug);
      notFound();
    }

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
                          {params.slug === 'combat-colds' && '"This meta-analysis of several trials found that zinc lozenges (providing &gt;75 mg of zinc per day in divided doses) shortened colds by about 33% on average. In practical terms, people who took zinc from day 1 recovered faster – often a cold that might have lasted a week could end a couple of days sooner"'}
                          {params.slug === 'heal-your-gut' && '"The best way to handle digestive troubles is to prevent them in the first place. By making mindful lifestyle and dietary changes, you can strengthen your digestive system and avoid triggers that cause stomach pain, indigestion, and bloating"'}
                          {params.slug === 'heal-your-skin' && '"Pharmaceutical companies fund a huge amount of medical research, education, and marketing... There is a well-documented publication bias in favor of positive drug trial results – studies sponsored by drug companies are much more likely to report outcomes favoring the sponsor\'s product. In contrast, who funds research on broccoli extract or fish oil for skin health? Such studies are often small and grant-funded, with no big-budget industry pushing the results into conferences or medical journals. This imbalance means natural therapies don\'t get the same spotlight."'}
                          {params.slug === 'optimize-microbiome' && '"Astonishingly, gut microbes produce many of the same chemicals that our brains use to regulate thoughts and emotions. In fact, about 90% of our body\'s serotonin – a key neurotransmitter for mood – is made in the gut."'}
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                        <p className="text-yellow-300 text-sm md:text-base text-justify">
                          {params.slug === 'combat-colds' && '"Honey has been clinically proven to be as effective (if not better) than some commercial cough syrups in reducing nighttime cough in children"'}
                          {params.slug === 'heal-your-gut' && '"If you have IBS (Irritable Bowel Syndrome) or chronic bloating and pain that hasn\'t responded to basic diet tweaks, you might benefit from a structured elimination diet like the Low-FODMAP diet. FODMAPs are certain types of carbohydrates... that can be hard to digest and tend to ferment in the gut, causing gas and bloating"'}
                          {params.slug === 'heal-your-skin' && '"In a clinical trial on children with eczema, topical virgin coconut oil for 8 weeks dramatically improved skin moisture and reduced disease severity. The average eczema score (SCORAD) dropped by 68%, far better than the 38% drop with mineral oil. Importantly, measurements of transepidermal water loss (TEWL) – a marker of barrier leakage – fell significantly in the coconut oil group, indicating a stronger, more sealed barrier."'}
                          {params.slug === 'optimize-microbiome' && '"Ever wonder why you crave sweets or feel hungry soon after eating? Part of the answer may lie in your gut microbes and the signals they send to your brain. The gut-brain axis is a communication highway, and microbes are active messengers on it."'}
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-purple-900 p-8 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-300">
                        <p className="text-yellow-300 text-sm md:text-base text-justify">
                          {params.slug === 'combat-colds' && '"A notable clinical trial found that people taking a daily garlic supplement had significantly fewer colds over 12 weeks than those taking a placebo (24 colds in the garlic group vs 65 in the placebo group)5. The garlic group also had far fewer days of illness overall"'}
                          {params.slug === 'heal-your-gut' && '"Nature has provided us with wonderful herbs that can calm an upset stomach. Three of the best herbal teas for digestion are peppermint, chamomile, and ginger."'}
                          {params.slug === 'heal-your-skin' && '"In a 12-week randomized trial, young men put on a low-glycemic-load diet had a significantly greater reduction in acne lesions than those on a regular high-carb diet (average 23 fewer pimples vs. 12 fewer in the control group). They also showed improved insulin sensitivity, highlighting how diet and hormones impact skin"'}
                          {params.slug === 'optimize-microbiome' && '"One of the most striking demonstrations of the microbiome\'s impact on mood comes from animal studies swapping gut bacteria between individuals with very different temperaments."'}
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
                  dangerouslySetInnerHTML={{ 
                    __html: book.description
                  }}
                />

                {/* PDF Preview Section */}
                {book.pdfUrl && (
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
                )}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error in Page component:', error);
    throw error;
  }
}