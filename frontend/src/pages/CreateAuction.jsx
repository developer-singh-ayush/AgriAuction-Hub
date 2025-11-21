import React, { useState } from "react";

const CreateAuction = () => {
  const [formData, setFormData] = useState({
    crop: "",
    description: "",
    basePrice: "",
    quantity: "",
    endTime: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result, // base64 image saved here
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loggedInUser = JSON.parse(localStorage.getItem("agriUser"));
    if (!loggedInUser) {
      alert("Please log in before creating an auction.");
      return;
    }

    const newAuction = {
      id: Date.now(),
      crop: formData.crop,
      description: formData.description,
      basePrice: Number(formData.basePrice),
      quantity: Number(formData.quantity),
      endTime: formData.endTime,
      image: formData.image,
      farmerName: loggedInUser.name,
    };

    const existingAuctions = JSON.parse(localStorage.getItem("agriAuctions")) || [];

    existingAuctions.push(newAuction);

    localStorage.setItem("agriAuctions", JSON.stringify(existingAuctions));

    alert("Auction created successfully!");
    window.location.href = "/auction-list";
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Create New Auction</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Crop Name */}
          <div>
            <label className="block text-sm font-semibold">Crop Name</label>
            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Base Price */}
          <div>
            <label className="block text-sm font-semibold">Base Price (₹)</label>
            <input
              type="number"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold">Quantity (quintals)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm font-semibold">Auction End Time</label>
            <input
              type="datetime-local"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold">Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-1" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded mt-4"
          >
            Submit Auction
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAuction;
