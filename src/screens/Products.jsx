import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          image: doc.data().image_urls?.[0] || 'https://via.placeholder.com/300x200?text=Image+Not+Available'
        }));
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = (e) => {
    // Close only if clicked on the overlay background
    if (e.target.id === 'modal-overlay') {
      setSelectedProduct(null);
    }
  };

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="pt-6 sm:pt-12">
      <section className="bg-gradient-to-b from-white to-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
              Our Products
            </h1>
            <p className="text-lg text-gray-600">
              Discover our latest tensile structure innovations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer border"
                onClick={() => handleCardClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                  }}
                />
                <div className="p-4">
                  <span className="text-sm font-medium text-indigo-500 uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-3">
                    <button className="text-indigo-600 hover:underline text-sm font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div
          id="modal-overlay"
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl relative overflow-hidden animate-zoomIn">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-64 sm:h-80 object-cover rounded-t-xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
              }}
            />
            <div className="p-6">
              <span className="text-sm text-indigo-600 font-medium uppercase">
                {selectedProduct.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {selectedProduct.title}
              </h2>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
