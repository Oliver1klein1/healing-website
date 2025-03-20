const testimonials = [
  {
    quote: "The simple and cost-effective remedies helped me overcome my chronic digestive issues when nothing else worked. I loved the fact that almost every statement in the book has a referenced paper to back it up. Made me confidence in the treatment.",
    author: "Sarah Thompson",
    title: "Verified Reader"
  },
  {
    quote: "After years of expensive treatments, these well-researched affordable natural solutions finally gave me relief from my skin problems. I should have listened more closely to my gran. I'm forever grateful.",
    author: "Sarah Thompson",
    title: "Verified Reader"
  },
  {
    quote: "The protocols in his books are easy to follow and actually work. I've seen remarkable improvements in my energy levels and overall health.",
    author: "Michael Chen",
    title: "Wellness Journey"
  },
  {
    quote: "After years of expensive treatments, Dr. Klein's affordable natural solutions finally gave me relief from my skin problems. I'm forever grateful.",
    author: "Emily Rodriguez",
    title: "Natural Healing Success"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-purple-200/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/dots.png')] opacity-15"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Patient Testimonials
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Real stories from people who have transformed their health through the wisdom in these books.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic relative z-10">
                {testimonial.quote}
              </p>
              <div className="relative z-10">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-blue-600">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 