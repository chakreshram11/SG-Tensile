

// import React from 'react';
// import BannerImage from '../components/BannerImage';

// const OurTeam = () => {
//   const teamMembers = [
//     {
//       name: 'John Doe',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
//     },
//     {
//       name: 'Jane Smith',
//       role: 'Developer',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
//     },
//     {
//       name: 'Alex Johnson',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300',
//     },
//     {
//       name: 'Emily Davis',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
//     },
//   ];

//   return (
//     <div className="pt-16 min-h-screen">
//       <BannerImage
//         src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
//         alt="Our Team Banner"
//         className="w-full h-auto"
//       />
//       <section className="py-8 sm:py-12 md:py-16">
//         <div className="container mx-auto px-4 sm:px-6 md:px-8">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Our Team</h2>
//           <div className="px-2 sm:px-4 md:px-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
//               {teamMembers.map((member, index) => (
//                 <div key={index} className="flex flex-col items-center p-2 sm:p-4">
//                   <div className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden shadow-md">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
//                     />
//                   </div>
//                   <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-gray-700">{member.name}</h3>
//                   {member.role && (
//                     <h4 className="mt-1 text-xs font-medium text-gray-600">{member.role}</h4>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurTeam;

import React from 'react';
import BannerImage from '../components/BannerImage';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300',
    },
    {
      name: 'Jane Smith',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    },
    {
      name: 'Alex Johnson',
      role: 'Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300',
    },
    {
      name: 'Emily Davis',
      role: 'Developer',    
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Team Banner"
        className="w-full h-auto"
      />
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Our Team</h2>
          <div className="px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center p-4 sm:p-6 box-border">
                  <div className="w-48 sm:w-48 md:w-56 lg:w-64 h-48 sm:h-48 md:h-56 lg:h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover md:grayscale md:hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="mt-2 sm:mt-4 text-lg sm:text-xl font-semibold text-gray-700">{member.name}</h3>
                  {member.role && (
                    <h4 className="mt-1 text-xs sm:text-sm font-medium text-gray-600">{member.role}</h4>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;