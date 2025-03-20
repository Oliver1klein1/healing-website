export default function PinealGlandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            5 Steps To Decalcify Your Pineal Gland
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A practical guide to restoring your body's natural wisdom center
          </p>
        </div>
      </div>

      {/* Book Description Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About This Book
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Your pineal gland, often called the "third eye," is a crucial part of your body's natural wisdom system. However, modern lifestyle factors can lead to its calcification, affecting everything from sleep patterns to overall well-being.
              </p>
              <p className="text-gray-600 mb-6">
                This comprehensive guide provides five practical, science-backed steps to help decalcify your pineal gland and restore its natural function. Each step is carefully explained with detailed instructions and supporting research.
              </p>
              <p className="text-gray-600">
                Whether you're looking to improve your sleep, enhance your spiritual practice, or simply optimize your health, this book offers practical solutions backed by scientific evidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlighted Excerpts Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="h-48 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Natural Solutions
              </h3>
              <p className="text-gray-600">
                Discover natural methods to support your pineal gland's health and function.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="h-48 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scientific Approach
              </h3>
              <p className="text-gray-600">
                Learn about the research behind pineal gland health and decalcification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preview the Book
          </h2>
          <div className="relative w-full h-[800px] bg-white rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="/books/pineal-gland-preview.pdf"
              className="w-full h-full"
              title="Book Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 