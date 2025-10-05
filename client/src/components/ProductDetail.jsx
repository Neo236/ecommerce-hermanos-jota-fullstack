
function ProductDetail({ product, onAddToCart, onBack }) {
  return (
    <div className="product-detail-container container">
      <div className="product-detail-layout">
        
        <div className="product-image-gallery">
          <img src={`/${product.image}`} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">
            {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}
          </p>
          <p className="description">{product.description}</p>
          
          <div className="product-specs">
            <h3>Especificaciones</h3>
            <ul>
              {/* Iteramos sobre las especificaciones del producto para mostrarlas */}
              {Object.entries(product.specs).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Añadir al Carrito
          </button>
          
          <button className="btn" onClick={onBack} style={{marginTop: '1rem', width: '100%'}}>
            &larr; Volver al Catálogo
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;