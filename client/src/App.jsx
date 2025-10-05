// /client/src/App.jsx

import React, { useState, useEffect } from 'react';

// --- (PRÓXIMAMENTE) Importaremos nuestros componentes aquí ---
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Footer from './components/Footer';

function App() {
  // --- ESTADOS PRINCIPALES DE LA APLICACIÓN ---

  // Estado para almacenar la lista de productos obtenida de la API
  const [products, setProducts] = useState([]);

  // Estado para manejar el producto que se está viendo en detalle
  // Si es `null`, se muestra la lista. Si tiene un objeto, se muestra el detalle.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Estado para el carrito de compras (un array de objetos de producto)
  const [cart, setCart] = useState([]);

  // Estados para manejar la carga y los errores de la petición a la API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- EFECTO PARA CARGAR DATOS DE LA API ---

  // Este useEffect se ejecuta solo una vez, cuando el componente se monta por primera vez.
  useEffect(() => {
    fetch('http://localhost:3001/api/productos')
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria. Verifica que el backend esté funcionando.');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data); // Guardamos los productos en el estado
        setLoading(false);  // Dejamos de cargar
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        setError(error.message); // Guardamos el mensaje de error
        setLoading(false);       // Dejamos de cargar
      });
  }, []); // El array vacío `[]` asegura que se ejecute solo una vez.

  // --- FUNCIONES MANEJADORAS (HANDLERS) ---

  // Función para establecer el producto seleccionado (se pasará a ProductCard)
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Función para volver a la lista de productos (se pasará a ProductDetail)
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Función para añadir un producto al carrito (se pasará a ProductDetail)
  const handleAddToCart = (productToAdd) => {
    setCart([...cart, productToAdd]);
    alert(`${productToAdd.name} fue añadido al carrito.`);
  };


  // --- LÓGICA DE RENDERIZADO ---

  // 1. Mostrar estado de carga si la petición está en curso
  if (loading) {
    return <div>Cargando productos...</div>;
  }

  // 2. Mostrar estado de error si la petición falló
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 3. Renderizado principal de la aplicación
  return (
    <div className="App">
      {/* El Navbar siempre es visible y recibe la cantidad de items en el carrito */}
      {/* <Navbar cartItemCount={cart.length} /> */}
      <p>Items en el carrito: {cart.length}</p> {/* Placeholder temporal del Navbar */}

      <main>
        {
          // Renderizado condicional:
          // Si `selectedProduct` tiene un objeto, muestra ProductDetail.
          // Si no (es `null`), muestra ProductList.
          selectedProduct ? (
            // Placeholder temporal de ProductDetail
            <div>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <button onClick={() => handleAddToCart(selectedProduct)}>Añadir al Carrito</button>
              <button onClick={handleBackToList}>Volver al Catálogo</button>
            </div>
            // <ProductDetail 
            //   product={selectedProduct} 
            //   onAddToCart={handleAddToCart} 
            //   onBack={handleBackToList} 
            // />
          ) : (
            // Placeholder temporal de ProductList
            <div>
                <h2>Catálogo</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id} onClick={() => handleSelectProduct(product)} style={{cursor: 'pointer'}}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
            // <ProductList 
            //   products={products} 
            //   onSelectProduct={handleSelectProduct} 
            // />
          )
        }
      </main>

      {/* <Footer /> */}
      <footer><p>Pie de página</p></footer> {/* Placeholder temporal del Footer */}
    </div>
  );
}

export default App;