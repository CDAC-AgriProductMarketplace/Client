import { ChevronDown, SlidersHorizontal, Star, X } from "lucide-react";
import { useEffect, useState } from "react";

const FilterSidebar = ({
  categories = [],
  subcategories = [],
  filters,
  setFilters,
}) => {
  const [brands, setBrands] = useState([]);
  const ratings = [5, 4, 3];

  /* --------------------------------
     TEMP: derive brands from products later
     (for now keep empty / static)
  ---------------------------------*/
  useEffect(() => {
    // TODO: Replace with backend API when available
    setBrands(["Ugaoo", "Trust Basket", "Gardenia"]);
  }, []);

  /* ---------- TOGGLES ---------- */
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const toggleSubcategory = (sub) => {
    setFilters((prev) => ({
      ...prev,
      subcategories: prev.subcategories.includes(sub)
        ? prev.subcategories.filter((s) => s !== sub)
        : [...prev.subcategories, sub],
    }));
  };

  const toggleBrand = (brand) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((b) => b !== brand)
        : [...prev.brands, brand],
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? null : rating,
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      subcategories: [],
      brands: [],
      minPrice: 0,
      maxPrice: 100000,
      rating: null,
    });
  };

  const isFilterActive =
    filters.categories.length  > 0||
    filters.subcategories.length > 0||
    filters.brands.length ||
    filters.rating !== null ||
    filters.minPrice > 0 ||
    (filters.maxPrice ?? 100000) < 100000;

  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 sticky top-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-4 border-b">
        <h3 className="text-xl font-bold text-gray-800 flex items-center">
          <SlidersHorizontal className="w-5 h-5 mr-2 text-green-600" />
          Filters
        </h3>
        {isFilterActive && (
          <button
            onClick={clearFilters}
            className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center"
          >
            <X className="w-4 h-4 mr-1" /> Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3 flex justify-between">
          Categories <ChevronDown className="w-4 h-4" />
        </h4>
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.categories.includes(cat.name)}
              onChange={() => toggleCategory(cat.name)}
              className="h-4 w-4 text-green-600"
            />
            <label className="ml-3 text-gray-600">
              {cat.name.toUpperCase()}
            </label>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3 flex justify-between">
          Subcategories <ChevronDown className="w-4 h-4" />
        </h4>
        {subcategories.map((sub) => (
          <div key={sub.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={filters.subcategories.includes(sub.name)}
              onChange={() => toggleSubcategory(sub.name)}
              className="h-4 w-4 text-green-600"
            />
            <label className="ml-3 text-gray-600">
              {sub.name.toUpperCase()}
            </label>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="mb-6 pt-4 border-t">
        <h4 className="font-semibold text-gray-700 mb-3">
          Price Range
        </h4>
        <input
          type="range"
          min="0"
          max="100000"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              maxPrice: Number(e.target.value),
            }))
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹0</span>
          <span>₹{filters.maxPrice}</span>
        </div>
      </div>

      {/* Brand */}
      {brands.length > 0 && (
        <div className="mb-6 pt-4 border-t">
          <h4 className="font-semibold text-gray-700 mb-3">
            Brand
          </h4>
          {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 text-green-600"
              />
              <label className="ml-3 text-gray-600">{brand}</label>
            </div>
          ))}
        </div>
      )}

      {/* Rating */}
      <div className="pt-4 border-t">
        <h4 className="font-semibold text-gray-700 mb-3">
          Customer Rating
        </h4>
        {ratings.map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingChange(rating)}
            className={`flex items-center mb-2 p-1 rounded ${
              filters.rating === rating
                ? "bg-green-100 text-green-800"
                : "text-gray-600"
            }`}
          >
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500" />
            ))}
            {rating < 5 && <span className="ml-1">& Up</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
