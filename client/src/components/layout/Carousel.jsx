import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { db } from "../../utils/db.service"; // Keep your DB service

// Skeleton loader
const CarouselSkeleton = () => (
  <div className="w-full aspect-[4/1] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
    <div className="text-gray-400">Loading Banners...</div>
  </div>
);

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const products = await db.getCorosuelBanners();

        if (Array.isArray(products) && products.length > 0) {
          const formatted = products.map((banner) => ({
            id: banner.id,
            imageUrl: banner.image,
          }));
          setBanners(formatted);
        } else {
          throw new Error("No banners fetched from DB.");
        }
      } catch (error) {
        console.error("Failed to fetch carousel banners:", error);

        // Fallback banner
        setBanners([
          {
            id: 1,
            imageUrl: "/image_370abd.jpg",
            title: "Delivering joy with zero shipping cost",
            subtitle: "Get all your medical essentials delivered for free",
            buttonText: "from Sept 1st to Oct 31st",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const nextSlide = useCallback(() => {
    if (banners.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    if (banners.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (banners.length > 1) {
      const id = setInterval(nextSlide, 2000);
      return () => clearInterval(id);
    }
  }, [banners.length, nextSlide]);

  if (loading) return <CarouselSkeleton />;
  if (!banners || banners.length === 0) return null;

  return (
    <div className="relative w-full max-w-9xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full flex-shrink-0 aspect-[4/1] bg-gray-800"
          >
            <img
              src={banner.imageUrl}
              alt={banner.title || "Banner"}
              className="object-cover w-full h-full"
            />

            {banner.title && (
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center p-4">
                <div className="text-center text-white max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-300 via-cyan-300 to-green-300 bg-clip-text text-transparent mb-4 drop-shadow-md">
                    {banner.title}
                  </h2>

                  <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
                    {banner.subtitle}
                  </p>

                  <button className="bg-[#01B763] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition text-gray-800 z-10"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white/80 transition text-gray-800 z-10"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === index ? "bg-[#01B763]" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
