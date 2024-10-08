import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DndProvider>
  );
};

export default App;