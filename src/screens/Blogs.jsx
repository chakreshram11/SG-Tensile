import React from 'react';
import BannerImage from '../components/BannerImage';

const Blogs = () => {
  const Blogs = [
    {
      title: 'Launching New AI-Powered Platform',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
      excerpt: 'We are excited to announce the launch of our new AI-powered platform...',
    },
    {
      title: 'Expanding Global Operations',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=800',
      excerpt: 'Our company is expanding its operations to new international markets...',
    },
    {
      title: 'Technology Innovation Award',
      date: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800',
      excerpt: 'We are honored to receive the 2024 Technology Innovation Award...',
    }
  ];

  return (
    <div className="pt-16">
      <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Work Banner"
      />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Latest News</h1>
            <p className="text-xl text-gray-600">
              Stay updated with our latest announcements and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Blogs.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-indigo-600 font-semibold hover:text-indigo-700">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;