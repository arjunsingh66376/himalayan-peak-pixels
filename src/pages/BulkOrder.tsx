// BulkOrderPage.jsx

import React, { useState } from "react";
import Owl from "../../src/assets/owl.jpg";
import water from "../../src/assets/bisleri.jpg";
import Navigation from "@/components/Navigation";
import tropicalFrameBg from "../assets/tropical.jpg";

const products = [
  {
    name: "Pinecone Owl Craft",
    description: "Handcrafted decorative owl made from pinecones",
    img: Owl,
    price: 150,
  },
  {
    name: "Bisleri Water Bottle",
    description: "Premium mineral water, 1 liter",
    img: water,
    price: 20,
  },
];

function ProductShowcase({ onAdd }) {
  return (
    <div className="w-full" style={{ marginTop: "5%" }}>
      <div className="bg-green-100 p-8 rounded-lg shadow-lg max-w-full">
        <h2 className="text-2xl font-bold mb-4 text-black">Featured Products</h2>
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow flex flex-col items-center p-4 w-64 flex-shrink-0"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-40 mb-2 rounded"
                style={{ width: "auto", maxWidth: "100%" }} // not full width
              />
              <h3 className="font-semibold text-lg text-center mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 text-sm mb-4 text-center">
                {product.description}
              </p>
              <button
                onClick={() => onAdd(idx)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                type="button"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OrderForm({ selectedProduct, onDetailsChange, orderDetails }) {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    instructions: "",
  });

  return (
    <form className="bg-white mt-8 p-8 rounded-lg shadow-lg space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Bulk Order Form</h2>
      <div>
        <label className="block font-semibold mb-1">Full Name:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          required
        />
      </div>
      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block font-semibold mb-1">Phone:</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
            onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-1">Shipping Address:</label>
        <textarea
          className="w-full p-2 border rounded"
          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Delivery Date Preference:</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          onChange={(e) => setCustomer({ ...customer, date: e.target.value })}
        />
      </div>
      {/* ORDER DETAILS */}
      <div>
        <label className="block font-semibold mb-1">Order Details:</label>
        <table className="w-full border mt-2">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Product</th>
            </tr>
          </thead>
          <tbody>
            {!selectedProduct.length && (
              <tr>
                <td className="p-2 border text-center text-gray-500">
                  No items added yet. Please add products from above.
                </td>
              </tr>
            )}
            {selectedProduct.map((idx) => (
              <tr key={idx}>
                <td className="p-2 border">{products[idx].name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Details input for selected product(s) */}
      {selectedProduct.length > 0 && (
        <div className="space-y-4">
          {selectedProduct.map((idx) => (
            <div
              key={idx}
              className="rounded bg-gray-50 p-4 border border-gray-200 my-2"
            >
              <h4 className="font-semibold mb-2">{products[idx].name}</h4>
              <div className="mb-2">
                <label className="block mb-1">Quantity:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={orderDetails[idx]?.quantity || ""}
                  onChange={e =>
                    onDetailsChange(idx, {
                      ...orderDetails[idx],
                      quantity: e.target.value, // ALLOW ANY CHARACTERS
                    })
                  }
                  required
                  placeholder="Enter quantity (e.g., 5, 2 cases, large, 10kg)"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="block mb-1">Description/Instructions:</label>
                <textarea
                  className="w-full p-2 border rounded"
                  value={orderDetails[idx]?.desc || ""}
                  onChange={(e) =>
                    onDetailsChange(idx, {
                      ...orderDetails[idx],
                      desc: e.target.value,
                    })
                  }
                  placeholder="Optional instructions about this item"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Submit Order
      </button>
    </form>
  );
}

function TermsAndConditions() {
  return (
    <div className="bg-gray-100 mt-8 p-6 rounded font-medium max-w-2xl mx-auto">
      <h3 className="text-lg font-bold mb-2">Terms & Conditions</h3>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Minimum order quantity for bulk rates: 20 units per item.</li>
        <li>Delivery charges may apply based on location and quantity.</li>
        <li>
          Bulk discounts available for orders above 50 units; please contact
          for customized quotes.
        </li>
      </ul>
      <p className="mt-4 text-gray-600">
        For queries, contact{" "}
        <span className="font-semibold">sales@yourcompany.com</span> or call{" "}
        <span className="font-semibold">+91-XXXXXXXXXX</span>.
      </p>
    </div>
  );
}

export default function BulkOrderPage() {
  // Products that have been "added"; store product indices
  const [selectedProduct, setSelectedProduct] = useState([]);
  // Order details for each product (by index), e.g., {quantity, desc}
  const [orderDetails, setOrderDetails] = useState({});

  const handleAddProduct = (index) => {
    if (!selectedProduct.includes(index)) {
      setSelectedProduct((prev) => [...prev, index]);
    }
  };

  const handleDetailsChange = (productIdx, detail) => {
    setOrderDetails((prev) => ({
      ...prev,
      [productIdx]: detail,
    }));
  };

  return (
    <div className="min-h-screen bg-bulk-product-bg pb-10">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${tropicalFrameBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            WHOLESALE DEAL
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
            the more you buy, the more you save!
          </p>
        </div>
      </section>

      {/* Blank white div with height 30px and margin-bottom 10px */}
      <div className="w-full bg-white h-[30px] mb-[10px]" />

      <ProductShowcase onAdd={handleAddProduct} />

      <div className="max-w-5xl mx-auto space-y-8">
        <OrderForm
          selectedProduct={selectedProduct}
          orderDetails={orderDetails}
          onDetailsChange={handleDetailsChange}
        />
        <TermsAndConditions />
      </div>
    </div>
  );
}
