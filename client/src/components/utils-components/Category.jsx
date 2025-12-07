'use client';
import React, { useEffect, useState } from 'react';
// components/CategoryStrip.js

import { db } from '../../utils/db.service';
import CategoryCard from './../reusable-components/CategoryCard';
import ProductCardSkeleton from './../skeletons/ProductSkeleton';



const Category = () => {
    // const router = useRouter(); // Uncomment for `pages` router
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.getCategorys().then((data) => {
            setCategories(data);
        }).catch((error) => {
            console.error("Error fetching categories:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handleCardClick = (categoryId) => {
        console.log(`Navigating to category with ID: ${categoryId}`);
        // Example navigation using the App Router:
        // router.push(`/categories/${categoryId}`);
    };

    return (<div className="px-2 py-4 justify-items-space-between">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
            <h2 className="sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-0">Product Category</h2>

        </div>
        {loading && <ProductCardSkeleton />}
        {!loading && (categories.length === 0) && <div className='text-center'>No categories available.</div>}
        {!loading && (categories.length > 0) && (

            <>
                {/* Container for the mobile horizontal scroll */}
                <div className="md:hidden overflow-hidden  w-full relative overflow-x-auto hide-scrollbar">
                    <div className="flex animate-marquee ">
                        {/* Duplicate the list to create a seamless loop */}
                        {categories.map((category) => (
                            <div key={category.id} className="flex-shrink-0 w-1/3 mr-4"> {/* Adjusted width for mobile */}
                                <CategoryCard category={category} onClick={handleCardClick} />
                            </div>
                        ))}
                        {categories.map((category) => (
                            <div key={category.id + '-duplicate'} className="flex-shrink-0 w-1/3 mr-4">
                                <CategoryCard category={category} onClick={handleCardClick} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid for desktop and medium screens */}
                <div className="hidden md:flex overflow-x-auto gap-2 p-4 justify-between hide-scrollbar">
                    {categories.map((category) => (
                        <div key={category.id} className="flex-shrink-0 flex-grow-0 basis-0">
                            <CategoryCard
                                category={category}
                                onClick={handleCardClick}
                            />
                        </div>
                    ))}
                </div>
            </>
        )}
    </div>


    );
};

export default Category;