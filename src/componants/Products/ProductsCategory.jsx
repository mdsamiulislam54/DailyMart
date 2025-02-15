import React, { useState, useEffect } from "react";

const ProductsCategory = () => {
  const accessKey = "3eDBHLYoensU3ckCXz1aMw3G0MjdXrTgFLDyjkjgQ8o";
  const categories = [
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Groceries & Essentials",
    "Books & Stationery",
    "Toys & Baby Products",
    "Automotive & Accessories",
    "Sports & Outdoors",
    "Health & Wellness",
    "Beauty & Personal Care",
  ];

  const [images, setImages] = useState({}); // State to store images

  useEffect(() => {
    async function fetchImages() {
      const allCategories = {};

      for (const category of categories) {
        try {
          const url = `https://api.unsplash.com/search/photos?query=${category}&client_id=${accessKey}&per_page=6`;
          const response = await fetch(url);
          const data = await response.json();
          allCategories[category] = data.results.map((img) => img.urls.small);
        } catch (error) {
          console.error(`Error fetching ${category} images:`, error);
        }
      }

      setImages(allCategories); // State update
    }

    fetchImages();
  }, []); // Empty dependency array to run only once

  return (
    <div className="px-4 lg:px-0">
      <div className="lg:w-container mx-auto">
        {Object.keys(images).map((category) => (
          <div key={category}>
            <h2 className="my-6 text-3xl font-medium tracking-wider">
              {category.toUpperCase()}
            </h2>
            <div
              className={`grid lg:grid-cols-6  md:grid-cols-3 grid-cols-2 gap-5`}
            >
              {images[category]?.map((img, index) => (
                <div className=" overflow-hidden w-full h-[70%]">
                  <img
                    key={index}
                    src={img}
                    alt={category}
                    className=" h-[100%]  object-cover hover:scale-125 transition-all duration-300 cursor-pointer rounded-lg "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center my-3">
          <button className="text-white bg-primary px-6 py-2 text-xl font-bold tracking-wider rounded-lg cursor-pointer ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
