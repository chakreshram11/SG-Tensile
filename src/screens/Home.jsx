import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// import TensileCanvas from '../components/TensileCanvas';
import BackgroundVideo from '../components/BackgroundVideo';
import BoxLinksSection from '../components/BoxLinksSection';
import BoxLinksSectionTwo from '../components/BoxLinksSectionTwo';
import TensileMeshComponent from '../components/TensileMeshComponent ';
import ScrollToTop from '../components/ScrollToTop';
import OneOne from '../assets/OneOne.jpg';
import OneTwo from '../assets/OneTwo.jpg';
import OneThree from '../assets/OneThree.jpg'
import FourOne from '../assets/FourOne.jpg';
import FourTwo from '../assets/FourTwo.jpg';
import FullOne from '../assets/FullOne.jpg';
import FullTwo from '../assets/FullTwo.jpg';


const Home = () => {
  const boxes = [
    // Top Row
    {
      type: 'image',
      image: OneOne,
    },
    {
      type: 'link',
      title: 'OUR WORK',
      description: 'Tensile offers a full turn-key service to our clients from initial design concepts through to installation.',
      link: '/ourwork',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'image',
      image: OneTwo,
    },
    // Bottom Row
    {
      type: 'link',
      title: 'PRODUCTS',
      description: 'From structural cables and rods, to tensioned mesh we have the fittings and the knowledge on their specification, application and installation.',
      link: '/products',
      image: 'https://images.unsplash.com/photo-1508736793122-f5165d18b7a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'image',
      image: OneThree,
    },
    {
      type: 'link',
      title: 'CONSULTANCY',
      description: 'Our team of engineers & designers can work with you to create your signature design. We blend creativity with technology and help you choose the best tensile system.',
      link: '/consultancy',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
  ];

    const boxesTwo = [
      { type: 'image', image: FourOne }, // Top row, first box (square, image)
      { type: 'link', title: 'Your Tensile Architecture Specialist', description: 'Tensile design & construct are specialist suppliers and installers of tensile architectural solutions. From structural cables and rods to tensioned mesh we have the fittings and the knowledge on their specification, application and installation. Tensile uses the best products from around the globe to provide our clients with the right tensile member for their project. Tensile architecture is an exciting industry covering many facets from bracing cables to green facades through to new and creative balustrades.'}, // Top row, second box (rectangle, description)
      { type: 'link', title: '', description: 'Tensile were professional, flexible and efficient. They worked well with a variety of artists and other professionals to deliver a high quality result within the constraints of the job. (Sydney City Council)'}, // Bottom row, first box (square, description)
      { type: 'image', image: FourTwo}, // Bottom row, second box (rectangle, image)
    ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add ScrollToTop to handle route changes */}
      <ScrollToTop />

      {/* Hero Section with ONLY Video */}
        <div className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] min-h-screen overflow-hidden z-10">
          <BackgroundVideo />
        </div>

        {/* Content Section BELOW the video */}
        <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
  <div className="container mx-auto px-6 text-center max-w-4xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
      SG TENSILE
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
      <span className='font-bold'>SG Tensile</span> is a proud sister company of <strong>Everest Tent Technologies SDN BHD</strong>, a renowned Malaysian manufacturer specializing in a wide range of tensile fabric structures. With strong roots in engineering excellence and innovation, we deliver custom-designed solutions tailored to the unique requirements of each project.
      <br /><br />
      At <span className='font-bold'>SG Tensile</span>, we understand that every construction space is different. That’s why we provide bespoke tensile solutions that align with both the architectural needs and personal preferences of our clients.
      <br /><br />
      Our commitment to <strong>quality craftsmanship</strong> and <strong>customer satisfaction</strong> is at the core of everything we do. From consultation to completion, we strive to exceed expectations by delivering reliable, durable, and visually striking tensile structures.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg text-base sm:text-lg"
    >
      Get in Touch
      <ArrowRight className="ml-2" size={20} />
    </Link>
  </div>
</section>



      {/* Box Links Section */}
      <div>
        <BoxLinksSection boxes={boxes} />
      </div>

      {/* Box Links Section Two with Background Image */}
      <div className="relative">
        {/* Background Image Section */}
        <div
          className="w-full h-80 bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:inset-0 "
          style={{ backgroundImage: `url(${FullOne})` }}
        ></div>
        {/* Boxes Section */}
        <div className="relative">
          <BoxLinksSectionTwo boxes={boxesTwo} />
        </div>
        {/* Background Image Section */}
        <div
          className="w-full h-80 bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:inset-0 "
          style={{ backgroundImage: `url(${FullTwo})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              It’s all in the detail.
            </h2>
          </div>
        </div>
        </div>
      <div>
        <TensileMeshComponent />
      </div>
    </div>
  );
};

export default Home;