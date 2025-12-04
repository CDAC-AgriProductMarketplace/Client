import React, { use, useEffect, useState } from 'react';
import { Filter, Star, Search, ChevronDown, LayoutGrid, List, SlidersHorizontal, ArrowDownWideNarrow, X } from 'lucide-react';

import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import ProductListItem from './ProductListItem';
import { useParams } from 'react-router-dom';
import { db } from '../../utils/db.service';

const ProductListPage = () => {
    
    const[allProducts, setAllProducts] = useState([]); // For demo purposes only
   const [currentSubcategory, setCurrentSubcategory] = useState('Humic Acid');
    const [currentCategory, setCurrentCategory] = useState('Soil Enhancers');
    const [subcategories, setSubcategories] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [sort, setSort] = useState('relevance');

    const [filters, setFilters] = useState({
        // Initialize filters based on the current page's context
        categories: currentCategory ? [currentCategory] : [],
        subcategories: currentSubcategory ? [currentSubcategory] : [], 
        brands: [],
        minPrice: 0,
        maxPrice: 1000,
        rating: null,
    });


    const productsToFilter = Array.isArray(allProducts) ? allProducts : [];
    
    const filteredProducts = productsToFilter.filter(product => {
          if (currentSubcategory && filters.categories.length > 0 && !filters.categories.includes(product.category && (product.category.toLowerCase().replace(' ', '-')))) {
            return false;
        }
        if (  filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory && (product.subcategory.toLowerCase().replace(' ', '-')))) {
            return false;
        }
        // 3. Brand Filter
        if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
            return false;
        }
        // 4. Price Filter
        if (product.price > filters.maxPrice || product.price < filters.minPrice) {
            return false;
        }
        // 5. Rating Filter
        if (filters.rating && product.rating < filters.rating) {
            return false;
        }
      
        return true;
    });

    // Sorting Logic (Simplified)
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        if (sort === 'rating') return b.rating - a.rating;
        return 0; // Relevance default
    });
    
    const activeFiltersCount = filters.subcategories.length + filters.brands.length + (filters.rating ? 1 : 0);

    // If no main category is provided, render a message
    if (!currentCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800">Please Select a Category</h2>
                    <p className="text-gray-500 mt-2">Use the navigation bar to choose a product category.</p>
                </div>
            </div>
        );
    }

    const { category, subcategory } = useParams();


   useEffect(() => {
       setCurrentCategory(category);
    setCurrentSubcategory(subcategory);
    setFilters(prev => ({
        ...prev,
        subcategories: subcategory ? [subcategory] : [],
    }));
    

  const fetchData = async () => {
    const products = await db.getProducts();
    const categoryMapped =await db.getCategoryMap();
    setSubcategories(categoryMapped[category] || []);
    setCategories(Object.keys(categoryMapped));
    setAllProducts(products);
  };

  fetchData();
}, [category, subcategory]);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header and Breadcrumb */}
                <header className="mb-6 md:mb-8">
                    <p className="text-sm text-gray-500 mb-1">
                        Home / {currentCategory} {currentSubcategory && `/ ${currentSubcategory}`}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        {currentSubcategory && currentSubcategory.replace('-',' ').toUpperCase() ||  currentCategory} 
                        {subcategory && subcategory.replace('-',' ').toUpperCase()  && <span className="text-green-600"> Products</span>}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        {filteredProducts.length} results found in {currentSubcategory && currentSubcategory.replace('-',' ').toUpperCase() || subcategory && subcategory.replace('-',' ').toUpperCase() }.
                    </p>
                    
                </header>

                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-4">
                    <button 
                        onClick={() => setIsMobileFilterOpen(true)}
                        className="w-full flex items-center justify-center p-3 bg-green-600 text-white rounded-lg font-semibold transition hover:bg-green-700 shadow-md"
                    >
                        <Filter className="w-5 h-5 mr-2" /> Show Filters 
                        {activeFiltersCount > 0 && (
                            <span className="ml-2 bg-white text-green-600 px-2 py-0.5 rounded-full text-xs font-bold">
                                {activeFiltersCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* Main Content Grid (Sidebar + Products) */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* 1. Sidebar (Desktop View) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <FilterSidebar 
                            subcategories={subcategories} 
                            categories={categories}
                            filters={filters} 
                            setFilters={setFilters} 
                        />
                    </div>

                    {/* 2. Products List */}
                    <div className="lg:col-span-3">
                        
                        {/* Sort and View Controls */}
                        <div className="flex justify-between items-center bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-600 hidden sm:inline">Sort by:</span>
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2 appearance-none pr-8 cursor-pointer transition duration-150"
                                    style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center' }}
                                >
                                    <option value="relevance">Relevance</option>
                                    <option value="price-asc">Price: Low to High</option>
                                    <option value="price-desc">Price: High to Low</option>
                                    <option value="rating">Top Rated</option>
                                </select>
                            </div>
                            
                            <div className="flex items-center space-x-2 text-gray-600">
                                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}>
                                    <LayoutGrid className="w-5 h-5" />
                                </button>
                                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}>
                                    <List className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Product Grid/List Display */}
                        {sortedProducts.length > 0 ? (
                            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`}>
                                {sortedProducts.map((product) => (
                                    viewMode === 'grid' 
                                        ? <ProductCard key={product.id} product={product} />
                                        : <ProductListItem key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="p-10 text-center bg-white rounded-xl shadow-lg mt-10">
                                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-700">No products match your filters.</h3>
                                <p className="text-gray-500 mt-2">Try adjusting your price range or clearing some filters.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Modal */}
            {isMobileFilterOpen && (
                <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 overflow-y-auto">
                    <div className="bg-white h-full w-full max-w-sm ml-auto shadow-2xl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-xl font-bold text-gray-800">Filter Products</h3>
                            <button onClick={() => setIsMobileFilterOpen(false)} className="text-gray-500 hover:text-gray-800">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-4">
                            <FilterSidebar 
                                subcategories={subcategories} 
                                filters={filters} 
                                setFilters={setFilters} 
                            />
                            <button 
                                onClick={() => setIsMobileFilterOpen(false)}
                                className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                            >
                                Apply Filters ({filteredProducts.length} Results)
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ProductListPage;