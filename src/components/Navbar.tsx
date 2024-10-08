import React from 'react';
import { Link } from 'react-router-dom';
import { PackageOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <PackageOpen className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Furniture BOM</span>
          </Link>
          <div>
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;