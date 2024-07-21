import React from "react";

const PopularHotels = () => {
  const hotels = [
    {
      name: "MM CONTINENTAL",
      image: "images/MM continental.webp", // Replace with your image path
      location: "Mullana,Mullana",
      review: "4.5/5",
      price: "₹4000",
    },
    {
      name: "AMBALA HAVELI",
      image: "images/Ambala haweli.jpg", // Replace with your image path
      location: "Mohra,Mullana",
      review: "4.2/5",
      price: "₹3500",
    },
    {
      name: "TAJ DELHITES",
      image: "images/hotel delhites.jpg", // Replace with your image path
      location: "Ambala Sadar,Mullana",
      review: "4.8/5",
      price: "₹3000",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl text-blue-600 font-semibold tracking-wide uppercase">
            Popular Hotels Near Me
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={hotel.image}
                alt={hotel.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                <p className="text-gray-600 mt-2">
                  <strong>Location:</strong> {hotel.location}
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Review:</strong> {hotel.review}
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Average Price:</strong> {hotel.price}
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularHotels;
