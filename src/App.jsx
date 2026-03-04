import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        🛒 E-Commerce Product Catalog
      </header>

      <div className="catalog">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;