import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const boxes = [
    {
      title: 'OUR WORK',
      description: 'Tensile offers a full turn-key service to our clients from initial design concepts through to installation.',
      link: '/our-work',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800',
      position: 'col-span-2 md:col-span-1'
    },
    {
      title: 'PRODUCTS',
      description: 'From structural cables and rods, to tensioned mesh we have the fittings and the knowledge on their specification, application and installation.',
      link: '/products',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800',
      position: 'col-span-2 md:col-span-1'
    },
    {
      title: 'CONSULTANCY',
      description: 'Our team of engineers & designers can work with you to create your signature design. We blend creativity with technology and help you choose the best tensile system.',
      link: '/consultancy',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800',
      position: 'col-span-2'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Vision Into Reality
              </h1>
              <p className="text-xl mb-8">
                We create innovative solutions that drive business growth and success.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Box Links Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            {boxes.map((box, index) => (
              <div 
                key={index} 
                className={`relative group overflow-hidden ${box.position}`}
              >
                <Link to={box.link}>
                  <div className="aspect-[4/3] relative">
                    <img
                      src={box.image}
                      alt={box.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">{box.title}</h2>
                        <p className="text-sm md:text-base">{box.description}</p>
                        <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Cutting-edge solutions for modern challenges',
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400'
              },
              {
                title: 'Expertise',
                description: 'Years of experience in delivering excellence',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400'
              },
              {
                title: 'Support',
                description: '24/7 dedicated customer support',
                image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;