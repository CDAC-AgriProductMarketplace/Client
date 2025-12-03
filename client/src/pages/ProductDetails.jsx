import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  // Fetch from backend later
  useEffect(() => {
    fetch("http://localhost:8080/api/products/1")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => {
        // Dummy fallback data
        setProduct({
          id: 1,
          name: "Carbon Steel Farming Shovel",
          description:
            "Multipurpose, carbon steel farming shovel ideal for everyday digging, tilling, and soil work.",
          price: 500,
          rating: 4.6,
          stock: 25,
          image: "\images\shovel.jpg",
          features: [
            "Strong carbon-steel blade that cuts through compact soil.",
            "Anti-slip comfort grip for better handling.",
            "Lightweight design and long-lasting durability.",
          ],
          specs: {
            crops: "General Farm Use",
            brand: "AgriForge",
            weight: "1.8 kg",
            material: "Carbon Steel",
            handle: "Wooden Premium Handle",
          },
        });
      });
  }, []);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="w-full p-6 bg-[#f5f7f6] min-h-screen">
      {/* MAIN TOP GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* LEFT IMAGE */}
        <div className="col-span-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <img
              src={product.image}
              alt="product"
              className="w-full h-[380px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* MIDDLE PRODUCT INFO */}
        <div className="col-span-5">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h1 className="text-2xl font-semibold">{product.name}</h1>

            <p className="text-sm text-gray-500 mt-1">{product.description}</p>

            {/* Price */}
            <div className="mt-4">
              <span className="text-xl font-bold">₹{product.price}</span>
            </div>

            {/* Features */}
            <div className="mt-4 border p-3 bg-yellow-50 rounded-md text-sm">
              <p className="font-semibold">Features:</p>
              <ul className="list-disc ml-5 mt-1 text-gray-700">
                {product.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Product Description */}
            <div className="mt-4 text-sm text-gray-700">
              <p>
                This carbon steel shovel is ideal for daily farm work—digging,
                soil turning, compost handling, and general agricultural tasks.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">₹{product.price}</h3>

            <p className="text-sm text-green-700">Eligible for FREE delivery</p>
            <p className="text-xs text-gray-600">
              Delivery in 2–3 business days
            </p>

            {/* Stock */}
            <div className="mt-4 text-sm">
              <p className="font-semibold">Stock:</p>
              <p
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {product.stock > 0 ? "Available" : "Out of stock"}
              </p>
            </div>

            <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4">
              Add to Cart
            </button>

            <button className="w-full border border-green-600 text-green-700 py-2 rounded-lg mt-3">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* LOWER GRID SECTIONS */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-12 gap-6">
        {/* PRODUCT SPECS */}
        <div className="col-span-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <p className="text-gray-500">Crops</p>
              <p>{product.specs.crops}</p>

              <p className="text-gray-500">Brand</p>
              <p>{product.specs.brand}</p>

              <p className="text-gray-500">Weight</p>
              <p>{product.specs.weight}</p>

              <p className="text-gray-500">Material</p>
              <p>{product.specs.material}</p>

              <p className="text-gray-500">Handle</p>
              <p>{product.specs.handle}</p>
            </div>
          </div>
        </div>

        {/* CUSTOMER REVIEWS */}
        <div className="col-span-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold">Customer Reviews</h2>

            <p className="text-4xl font-bold mt-2">{product.rating}</p>
            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${product.rating * 20}%` }}
              ></div>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Based on verified customer feedback across farming use.
            </p>
          </div>
        </div>

        {/* USAGE SECTION */}
        <div className="col-span-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Usage & Care</h2>
            <p className="text-sm text-gray-600">
              Clean the shovel after use to prevent rust. Store in a dry place
              and oil the metal parts monthly for maximum durability.
            </p>
          </div>
        </div>

        {/* CUSTOMERS ALSO BOUGHT */}
        <div className="col-span-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">
              Customers Also Bought
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <p>Cultivator Hand Fork</p>
                <p className="font-semibold">₹12.5</p>
              </div>

              <div className="flex justify-between">
                <p>Organic Fertilizer (1kg)</p>
                <p className="font-semibold">₹8.0</p>
              </div>

              <div className="flex justify-between">
                <p>Heavy Duty Garden Gloves</p>
                <p className="font-semibold">₹3.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
