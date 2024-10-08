import React, { useState, useEffect } from 'react';
import { Material } from '../types';

interface Props {
  material?: Material;
  onSave: (material: Material) => void;
  onCancel: () => void;
}

const MaterialForm: React.FC<Props> = ({ material, onSave, onCancel }) => {
  const [form, setForm] = useState<Material>({
    id: '',
    name: '',
    image: '',
    size: '',
    material: '',
    weight: 0,
    source: '',
    compliance: '',
    children: [],
  });

  useEffect(() => {
    if (material) {
      setForm(material);
    }
  }, [material]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'weight' ? (value === '' ? 0 : parseFloat(value)) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
        <input
          type="text"
          id="size"
          name="size"
          value={form.size}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="material" className="block text-sm font-medium text-gray-700">Material</label>
        <input
          type="text"
          id="material"
          name="material"
          value={form.material}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          step="0.01"
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
        <input
          type="text"
          id="source"
          name="source"
          value={form.source}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div>
        <label htmlFor="compliance" className="block text-sm font-medium text-gray-700">Compliance</label>
        <input
          type="text"
          id="compliance"
          name="compliance"
          value={form.compliance}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default MaterialForm;