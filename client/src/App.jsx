
import React, { useState, useEffect } from 'react';

// Importamos nuestros componentes finales
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al conectar con la API. Verifica que el backend esté funcionando.');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (productToAdd) => {
    setCart([...cart, productToAdd]);
    alert(`${productToAdd.name} fue añadido al carrito.`);
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar cartItemCount={cart.length} />

      <main>
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onAddToCart={handleAddToCart} 
            onBack={handleBackToList} 
          />
        ) : (
          <>
            <ProductList 
              products={products} 
              onSelectProduct={handleSelectProduct} 
            />
            <ContactForm />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;