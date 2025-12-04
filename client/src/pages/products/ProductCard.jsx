import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
    const isOutOfStock = !product.stock;
    return (
        <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${isOutOfStock ? 'opacity-70' : ''}`}>
            {isOutOfStock && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Out of Stock
                </div>
            )}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
                {/* <img
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    src={product.image || placeholderImage.src}
                    loading="lazy"
                    alt={product.name || "Product"}
                /> */}
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/6B7280/ffffff?text=Product+Image" }}
                />
            </div>
            <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 truncate mb-1" title={product.name}>
                    {product.name}
                </h3>
                <p className="text-xs text-green-700 font-medium mb-2">{product.category}</p>

                <div className="flex items-center mb-3">
                    <div className="flex items-center text-yellow-500 text-sm mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-500' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                        ₹{product.price}
                    </span>
                    <button
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition duration-200 ${isOutOfStock
                                ? 'bg-gray-400 text-white cursor-not-allowed'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                        disabled={isOutOfStock}
                    >
                        {isOutOfStock ? 'Notify Me' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductCard;