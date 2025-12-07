import React from "react";
const ProductCard = ({ product ,onClick}) => {
  const placeholderImage = '/images/placeholder.png';
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer 
                 hover:shadow-lg transition-all duration-300 transform hover:scale-105 
                 flex flex-col"
      style={{
        boxShadow:
          "0 4px 6px rgba(1, 183, 99, 0.2), 0 1px 3px rgba(1, 183, 99, 0.1)",
      }}
      onClick={() => onClick(product)}
    >
      {/* Product Image */}
      <div className="relative w-full h-40 md:h-52 lg:h-56 xl:h-60 bg-white flex items-center justify-center">
        <img
          className="w-full h-full object-contain p-3"
          src={product.image || placeholderImage.src}
          loading="lazy"
          alt={product.name || "Product"}
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Product Name */}
        <h3 className="text-gray-700 text-sm font-semibold line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Price & GST */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-sm font-bold text-teal-600">
            ${product.price}
          </span>

          <span className="text-sm font-bold text-orange-500">
            {product.gst > 0 ? `GST: $${product.gst}` : "GST Free"}
          </span>
        </div>

        {/* Add to Cart Button ALWAYS at bottom */}
        <button
          className="
            mt-auto w-full bg-teal-600 text-white 
            py-2 px-4 rounded-lg shadow-md 
            hover:bg-teal-700 transition duration-300
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  

  );
};

export default ProductCard;