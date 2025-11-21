import React, { useEffect, useState } from "react";

const AuctionList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("agriAuctions")) || [];
    setAuctions(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Active Auctions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {auctions.length === 0 ? (
          <p className="text-gray-600 text-center w-full">No auctions available.</p>
        ) : (
          auctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white shadow-lg p-4 rounded-lg border"
            >
              <img
                src={auction.image}
                alt={auction.crop}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="text-xl font-bold mt-3">{auction.crop}</h3>
              <p className="text-gray-700">{auction.description}</p>

              <p className="mt-2">
                <strong>Base Price:</strong> ₹{auction.basePrice}
              </p>

              <p>
                <strong>Quantity:</strong> {auction.quantity} quintals
              </p>

              <p>
                <strong>Farmer:</strong> {auction.farmerName}
              </p>

              <p className="text-sm text-gray-600">
                Ends: {auction.endTime}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuctionList;
