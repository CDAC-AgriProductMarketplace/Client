
import React, { useEffect, useState } from 'react'
import { db } from '../../utils/db.service'
import ProductCard from '../reusable-components/ProductCard'
import ProductCardSkeleton from '../skeletons/ProductSkeleton';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // State to manage how many products are currently visible
    const [visibleCount, setVisibleCount] = useState(12); // Show 6 products by default (2 rows on large screens)

    useEffect(() => {
        db.getProducts().then((data) => {
            setProducts(data);
        }).catch((error) => {
            console.error("Error fetching products:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const productsToShow = products.slice(0, visibleCount);
    const hasMoreProducts = visibleCount < products.length;

    const handleSeeAll = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    // Reset view
    const handleShowLess = () => {
        setVisibleCount(6);
    };

    const handleProductCardClick = (product) => {
        console.log("Product clicked:", product);
        // Add your navigation or modal logic here, e.g.,
        // router.push(`/products/${product.id}`);
    };

    return (
    <div className="p-3 pt-1">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
        <h2 className="sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-0">
          Featured Products
        </h2>
      </div>

      {loading && <ProductCardSkeleton />}

      {!loading && products.length === 0 && (
        <div className="text-center">No products available.</div>
      )}

      {!loading && products.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {productsToShow.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleProductCardClick}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {hasMoreProducts && (
              <button
                onClick={handleSeeAll}
                className="p-1 bg-teal-600 text-white sm:font-medium md:font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
              >
                See More
              </button>
            )}

            {!hasMoreProducts && products.length > 6 && (
              <button
                onClick={handleShowLess}
                className="px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;