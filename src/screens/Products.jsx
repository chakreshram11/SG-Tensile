import React from 'react';
import BannerImage from '../components/BannerImage';

const Products = () => {
  const products = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      category: 'Web Development'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and user-friendly mobile banking application',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800',
      category: 'Mobile App'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Advanced analytics platform powered by AI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      category: 'Data Analytics'
    },
    {
      title: 'Smart Home System',
      description: 'IoT-based home automation solution',
      image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&w=800',
      category: 'IoT'
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
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-gray-600">
              Discover our latest products and innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm font-semibold text-indigo-600">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                    Learn More
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

export default Products;
