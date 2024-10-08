export interface Material {
  id: string;
  name: string;
  image: string;
  size: string;
  material: string;
  weight: number;
  source: string;
  compliance: string;
  children: Material[];
  isExpanded?: boolean;
}

export interface DragItem {
  id: string;
  type: string;
}

export interface Product {
  id: string;
  name: string;
  number: string;
  size: string;
}