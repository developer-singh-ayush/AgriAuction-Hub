import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAuction = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    crop: "",
    description: "",
    basePrice: "",
    quantity: "",
    endTime: "",
    image: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result, // storing base64 image
        }));
      };

      if (file) reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const auctions = JSON.parse(localStorage.getItem("agriAuctions")) || [];

    const newAuction = {
      id: Date.now(),
      ...formData,
    };

    auctions.push(newAuction);
    localStorage.setItem("agriAuctions", JSON.stringify(auctions));

    setSuccess(true);

    setTimeout(() => {
      navigate("/auctions"); // redirect to auction list
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Create New Auction
        </h2>

        {success && (
          <div className="mb-4 p-3 text-white bg-green-600 rounded text-center">
            Auction Created Successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Crop Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Crop Name</label>
            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g. Wheat, Rice"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe your crop quality and details"
            />
          </div>

          {/* Base Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Base Price (₹/quintal)</label>
            <input
              type="number"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Quantity (in quintals)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Auction End Time</label>
            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Crop Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 w-full"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Submit Auction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuction;
