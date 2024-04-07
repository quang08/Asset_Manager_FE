import React, { useState } from "react";
import axios from "axios";

function CreateAsset({ onClose }) {
  const [assetData, setAssetData] = useState({
    name: "",
    description: "",
    purchaseDate: "",
    purchaseCost: "",
    currentStatus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetData({
      ...assetData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/assets", assetData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error creating asset:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-xl font-bold mb-4">Create New Asset</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={assetData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={assetData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="purchaseDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Purchase Date:
            </label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={assetData.purchaseDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="purchaseCost"
              className="block text-gray-700 font-bold mb-2"
            >
              Purchase Cost:
            </label>
            <input
              type="number"
              id="purchaseCost"
              name="purchaseCost"
              value={assetData.purchaseCost}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="currentStatus"
              className="block text-gray-700 font-bold mb-2"
            >
              Current Status:
            </label>
            <input
              type="text"
              id="currentStatus"
              name="currentStatus"
              value={assetData.currentStatus}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAsset;
