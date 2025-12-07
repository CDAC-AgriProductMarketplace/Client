import { ChevronDown, SlidersHorizontal, Star, X } from "lucide-react";
import React, { useEffect } from "react";
import { db } from "../../utils/db.service";

const FilterSidebar = ({categories, subcategories, filters, setFilters }) => {
   const [brands, setBrands] = React.useState([])
    const ratings = [5, 4, 3];
    useEffect(() => {
        const fetchBrands = async () => {
            // Simulate API call
            const brandData = await db.getBrandList();
            setBrands(brandData);
        };
       fetchBrands();
    });

    const toggleSubcategory = (subcat) => {
        setFilters(prev => {
            const newSubcats = prev.subcategories.includes(subcat)
                ? prev.subcategories.filter(s => s !== subcat)
                : [...prev.subcategories, subcat];
            return { ...prev, subcategories: newSubcats };
        });
    };
    const toggleCategory = (cat) => {
        setFilters(prev => {
            const newCats = prev.categories.includes(cat)
                ? prev.categories.filter(c => c !== cat)
                : [...prev.categories, cat];
            return { ...prev, categories: newCats };
        });
    };

    const toggleBrand = (brand) => {
        setFilters(prev => {
            const newBrands = prev.brands.includes(brand)
                ? prev.brands.filter(b => b !== brand)
                : [...prev.brands, brand];
            return { ...prev, brands: newBrands };
        });
    };

    const handleRatingChange = (rating) => {
        setFilters(prev => ({
            ...prev,
            rating: prev.rating === rating ? null : rating
        }));
    };

    const clearFilters = () => {
        setFilters({
            categories: [],
            subcategories: [],
            brands: [],
            minPrice: 0,
            maxPrice: 1000,
            rating: null,
        });
    };
    
    const isFilterActive = filters.subcategories.length > 0 || filters.brands.length > 0 || filters.rating !== null || filters.minPrice > 0 || filters.maxPrice < 1000;


    return (
        <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 sticky top-20">
            <div className="flex justify-between items-center mb-4 pb-4 border-b">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <SlidersHorizontal className="w-5 h-5 mr-2 text-green-600" />
                    Filters
                </h3>
                {isFilterActive && (
                    <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center">
                        <X className="w-4 h-4 mr-1" /> Clear All
                    </button>
                )}
            </div>

 {/* Category Filter */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                    Categories <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <div className="space-y-2 text-sm">
                    {categories.map((cat,index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                id={cat}
                                checked={filters.categories.includes(cat)}
                                onChange={() => toggleCategory(cat)}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor={cat} className="ml-3 text-gray-600 cursor-pointer hover:text-green-600 transition">
                                {cat.replace('-',' ').toUpperCase() }
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            {/* Subcategory Filter */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                    Subcategories <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <div className="space-y-2 text-sm">
                    {subcategories.map((sub,index) => (
                        <div key={index} className="flex items-center">
                            <input
                                type="checkbox"
                                id={sub}
                                checked={filters.subcategories.includes(sub)}
                                onChange={() => toggleSubcategory(sub)}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor={sub} className="ml-3 text-gray-600 cursor-pointer hover:text-green-600 transition">
                                {sub.replace('-',' ').toUpperCase() }
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Price Filter (Simplified Range) */}
             <div className="mb-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                    Price Range <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <div className="text-sm">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm"
                    />
                    <div className="flex justify-between mt-1 text-gray-600">
                        <span>₹{filters.minPrice}</span>
                        <span>₹{filters.maxPrice}+</span>
                    </div>
                </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                    Brand <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <div className="space-y-2 text-sm">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center">
                            <input
                                type="checkbox"
                                id={`brand-${brand}`}
                                checked={filters.brands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor={`brand-${brand}`} className="ml-3 text-gray-600 cursor-pointer hover:text-green-600 transition">
                                {brand}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Rating Filter */}
            <div className="mb-2 pt-4 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center justify-between">
                    Customer Rating <ChevronDown className="w-4 h-4 text-gray-500" />
                </h4>
                <div className="space-y-2 text-sm">
                    {ratings.map((rating) => (
                        <button 
                            key={rating}
                            onClick={() => handleRatingChange(rating)}
                            className={`flex items-center text-sm p-1 rounded-md transition duration-150 ${filters.rating === rating ? 'bg-green-100 text-green-800 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <div className="flex items-center text-yellow-500 mr-2">
                                {[...Array(rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
                                {rating < 5 && <span className="text-gray-500 ml-1"> & Up</span>}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FilterSidebar;