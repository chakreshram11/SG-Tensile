import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-600">
              We're passionate about creating innovative solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, we've grown from a small startup to a leading provider
                of innovative solutions. Our journey has been marked by continuous
                learning, growth, and an unwavering commitment to excellence.
              </p>
              <p className="text-gray-600">
                Today, we serve clients worldwide, helping them transform their
                businesses through cutting-edge technology and strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries and explore new possibilities.'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest standards of professional ethics.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;