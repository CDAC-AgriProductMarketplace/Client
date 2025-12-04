import { Star } from "lucide-react";

const ProductListItem = ({ product }) => (
    <div className="flex bg-white rounded-xl shadow-md p-4 items-center hover:shadow-lg transition duration-200">
        <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-20 h-20 object-cover rounded-lg mr-4"
            onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/6B7280/ffffff?text=Img" }}
        />
        <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-green-700 font-medium mb-1">{product.category}</p>
            <div className="flex items-center text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-500' : 'text-gray-300'}`} />
                ))}
                <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
            </div>
        </div>
        <div className="text-right ml-4 flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 block">₹{product.price}</span>
            <button 
                className="mt-2 px-4 py-1 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition"
            >
                Add to Cart
            </button>
        </div>
    </div>
);

export default ProductListItem;