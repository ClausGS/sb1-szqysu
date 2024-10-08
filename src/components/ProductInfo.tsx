import React, { useState } from 'react';
import { Edit, Check } from 'lucide-react';

interface ProductInfoProps {
  initialProductNumber: string;
  initialProductName: string;
  initialProductSize: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  initialProductNumber,
  initialProductName,
  initialProductSize,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [productNumber, setProductNumber] = useState(initialProductNumber);
  const [productName, setProductName] = useState(initialProductName);
  const [productSize, setProductSize] = useState(initialProductSize);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Product Information</h2>
        <button
          onClick={isEditing ? handleSave : handleEdit}
          className="flex items-center px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isEditing ? (
            <>
              <Check size={16} className="mr-1" />
              Save
            </>
          ) : (
            <>
              <Edit size={16} className="mr-1" />
              Edit
            </>
          )}
        </button>
      </div>
      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          {isEditing ? (
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="text-gray-900 text-lg font-semibold">{productName}</p>
          )}
        </div>
        <div className="col-span-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Overall Size</label>
          {isEditing ? (
            <input
              type="text"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="text-gray-900">{productSize}</p>
          )}
        </div>
        <div className="col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Number</label>
          {isEditing ? (
            <input
              type="text"
              value={productNumber}
              onChange={(e) => setProductNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ) : (
            <p className="text-gray-900 text-right">{productNumber}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;