// components/ui/ProductCardSkeleton.js

const ProductCardSkeleton = () => {
    let arr = Array.from({ length: 6 });

    return (
        <div className=" flex flex-row p-4 border border-gray-200 rounded-lg shadow animate-pulse">
            {
                arr.map((_, index) => (
                    <div key={index} className=" w-30 h-40 bg-white rounded-lg shadow-md overflow-hidden max-w-sm mx-auto my-4 animate-pulse">
                        {/* Image placeholder */}
                        <div className="relative w-full h-80 bg-gray-200"></div>

                        {/* Card Content placeholder */}
                        <div className="p-6">
                            {/* Product Name placeholder */}
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>

                            {/* Price and GST placeholder */}
                            <div className="flex justify-between items-center mt-4">
                                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>


    );
};

export default ProductCardSkeleton;