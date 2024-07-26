import React from "react";

const FeatureSection = () => {
  const features = [
    {
      title: "Floor Plan & Room Details",
      description: "Get to know room number, orientation, floor plans, and roommates.",
      image: "images/one.webp", // Replace with your image path
    },
    {
      title: "100% Verified Properties",
      description: "What you see is what you get. Our promise.",
      image: "images/two.webp", // Replace with your image path
    },
    {
      title: "Price-Match Guarantee",
      description: "Find a lower price and we'll match it.",
      image: "images/three.webp", // Replace with your image path
    },
    {
      title: "1-on-1 Professional Support",
      description: "Just one call away, we’ll be there for you around the clock.",
      image: "images/four.webp", // Replace with your image path
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl text-blue-600  tracking-wide uppercase">
            Find Your Sweet Student Accommodation
          </h2>
          <p className="mt-3 md:text-3xl leading-8 tracking-tight text-gray-900 sm:text-2xl">
            Let us worry about your student room while you enjoy your precious youth.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center flex-1 md:max-w-xs flex flex-col items-center">
            <img
              className="h-28 md:h-48 w-40 md:w-full object-fit rounded-md mb-4"
              src={feature.image}
              alt={feature.title}
            />
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
