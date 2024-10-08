import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import MaterialItem from '../components/MaterialItem';
import MaterialForm from '../components/MaterialForm';
import { dummyProducts } from '../data/dummyProducts';
import { Material } from '../types';
import { v4 as uuidv4 } from 'uuid';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = dummyProducts.find(p => p.id === id);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [showForm, setShowForm] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddMaterial = (material: Material) => {
    setMaterials([...materials, { ...material, id: uuidv4(), children: [] }]);
    setShowForm(false);
  };

  const handleEditMaterial = (id: string) => {
    // Implement edit functionality
  };

  const handleDeleteMaterial = (id: string) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  const handleCopyMaterial = (id: string) => {
    const materialToCopy = materials.find(m => m.id === id);
    if (materialToCopy) {
      setMaterials([...materials, { ...materialToCopy, id: uuidv4() }]);
    }
  };

  const handleMoveMaterial = (draggedId: string, targetId: string) => {
    // Implement move functionality
  };

  const handleToggleMaterial = (id: string) => {
    setMaterials(materials.map(m => 
      m.id === id ? { ...m, isExpanded: !m.isExpanded } : m
    ));
  };

  return (
    <div>
      <ProductInfo
        initialProductNumber={product.number}
        initialProductName={product.name}
        initialProductSize={product.size}
      />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Bill of Materials</h2>
        <button
          onClick={() => setShowForm(true)}
          className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Add Material
        </button>
        {showForm && (
          <div className="mb-4">
            <MaterialForm onSave={handleAddMaterial} onCancel={() => setShowForm(false)} />
          </div>
        )}
        {materials.map(material => (
          <MaterialItem
            key={material.id}
            material={material}
            onEdit={handleEditMaterial}
            onDelete={handleDeleteMaterial}
            onCopy={handleCopyMaterial}
            onMove={handleMoveMaterial}
            onToggle={handleToggleMaterial}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;