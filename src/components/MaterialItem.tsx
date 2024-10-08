import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Material, DragItem } from '../types';
import { Edit, Trash, Copy, ChevronRight, ChevronDown } from 'lucide-react';

interface Props {
  material: Material;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCopy: (id: string) => void;
  onMove: (draggedId: string, targetId: string) => void;
  onToggle: (id: string) => void;
}

const MaterialItem: React.FC<Props> = ({ material, onEdit, onDelete, onCopy, onMove, onToggle }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'MATERIAL',
    item: { id: material.id, type: 'MATERIAL' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'MATERIAL',
    drop: (item: DragItem) => {
      if (item.id !== material.id) {
        onMove(item.id, material.id);
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} className={`p-4 mb-2 bg-white rounded shadow ${isDragging ? 'opacity-50' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={() => onToggle(material.id)} className="mr-2">
            {material.children.length > 0 ? (
              material.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />
            ) : null}
          </button>
          <div className="relative group">
            <img src={material.image} alt={material.name} className="w-10 h-10 object-cover rounded mr-4" />
            <div className="absolute left-0 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              <img src={material.image} alt={material.name} className="w-20 h-20 object-cover rounded shadow-lg" />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{material.name}</h3>
            <p className="text-sm text-gray-600">{material.material}, {material.size}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button onClick={() => onEdit(material.id)} className="p-1 hover:bg-gray-100 rounded">
            <Edit size={16} />
          </button>
          <button onClick={() => onCopy(material.id)} className="p-1 hover:bg-gray-100 rounded">
            <Copy size={16} />
          </button>
          <button onClick={() => onDelete(material.id)} className="p-1 hover:bg-gray-100 rounded">
            <Trash size={16} />
          </button>
        </div>
      </div>
      {material.isExpanded && material.children.length > 0 && (
        <div className="ml-8 mt-4">
          {material.children.map((child) => (
            <MaterialItem
              key={child.id}
              material={child}
              onEdit={onEdit}
              onDelete={onDelete}
              onCopy={onCopy}
              onMove={onMove}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MaterialItem;