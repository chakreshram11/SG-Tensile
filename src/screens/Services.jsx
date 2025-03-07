import React from 'react';
import { Code, Smartphone, Database, Cloud, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies'
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: <Database size={40} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights'
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure'
    },
    {
      icon: <Shield size={40} />,
      title: 'Cybersecurity',
      description: 'Protect your business from digital threats'
    },
    {
      icon: <Users size={40} />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting and planning'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;