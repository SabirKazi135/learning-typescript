import { useState } from "react";
import type { ChangeEvent } from "react";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

type Product = {
  name: string;
  price: number;
  discount?: number;
  category: "electronics" | "clothing" | "food";
};

const product1: Product = {
  name: "Samsung M52",
  price: 25000,
  discount: 10,
  category: "electronics",
};

const product2: Product = {
  name: "Samsung M55",
  price: 35000,
  category: "electronics",
};

const products: Product[] = [product1, product2];

function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div onClick={() => onSelect(product)}>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>

      {product.discount !== undefined ? (
        <p>Discount: {product.discount}%</p>
      ) : null}

      <p>{product.category}</p>
    </div>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search products..."
      />

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onSelect={setSelectedProduct}
        />
      ))}

      {selectedProduct ? (
        <div>Selected product: {selectedProduct.name}</div>
      ) : null}
    </>
  );
}

export default App;
