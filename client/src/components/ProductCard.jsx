
function ProductCard({ product, onSelectProduct }) {
  return (
    <a className="product-card" onClick={() => onSelectProduct(product)}>
      <img src={`/${product.image}`} alt={product.name} />
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}</p>
      </div>
    </a>
  );
}

export default ProductCard;