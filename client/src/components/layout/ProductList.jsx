import React, { useEffect, useState } from "react";
import ProductCard from "../reusable-components/ProductCard";
import ProductCardSkeleton from "../skeletons/ProductSkeleton";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/products/");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
       // console.log(products)
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productsToShow = products.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < products.length;
console.log(products);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(12);
  };

  const handleProductCardClick = (product) => {
    navigate(`/product-details/${product.id}`);
  };

  return (
    <div className="p-3 pt-1">
      <h2 className="sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Featured Products
      </h2>

      {loading && <ProductCardSkeleton />}

      {!loading && products.length === 0 && (
        <div className="text-center text-gray-500">No products available.</div>
      )}

      {!loading && products.length > 0 && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {productsToShow.map((product) => (
              <ProductCard
                key={product.product_id}
                product={product}
                onClick={() => handleProductCardClick(product)}
              />
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {hasMoreProducts ? (
              <button
                onClick={handleSeeMore}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                See More
              </button>
            ) : (
              products.length > 12 && (
                <button
                  onClick={handleShowLess}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Show Less
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
