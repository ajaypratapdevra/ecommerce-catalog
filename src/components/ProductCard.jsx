import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product }) {

  const [selected,setSelected] = useState(product.variants[0]);

  return (
    <div className="card">

      <img
        src={product.image}
        className="product-image"
      />

      <h2 className="product-name">{product.name}</h2>

      <p className="category">{product.category}</p>

      <div className="rating">
        ⭐ {product.avgRating}
      </div>

      <div className="price">
        ${selected.price}
      </div>

      <div className="variants">
        {product.variants.map(v => (
          <button
            key={v.sku}
            className="variant-btn"
            onClick={()=>setSelected(v)}
          >
            {v.color}
          </button>
        ))}
      </div>

      <div className="stock">
        {selected.stock} items left
      </div>

      <button className="cart-btn">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;