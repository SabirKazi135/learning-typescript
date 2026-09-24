type Product = {
  name: string;
  price: number;
  discount?: number;
  category: "electronics" | "clothing" | "food" | "books" | "other";
};

const products: Product[] = [
  {
    name: "Smartphone",
    price: 699,
    discount: 10,
    category: "electronics",
  },
  {
    name: "T-shirt",
    price: 25,
    category: "clothing",
  },
  {
    name: "Chocolate Bar",
    price: 2,
    discount: 0.5,
    category: "food",
  },
  {
    name: "Novel",
    price: 15,
    category: "books",
  },
  {
    name: "Headphones",
    price: 150,
    discount: 20,
    category: "electronics",
  },
];

function calculateFinalPrice(product: Product): number {
  if (product.discount !== undefined) {
    return product.price - (product.price * product.discount) / 100;
  }
  return product.price;
}

function displayProduct(product: Product) {
  console.log(`Product: ${product.name}`);
  if (product.discount !== undefined) {
    console.log(`With Discount: $${calculateFinalPrice(product).toFixed(2)}`);
  } else {
    console.log(`Price: $${product.price.toFixed(2)}`);
  }
  console.log(`Category: ${product.category}`);
}

displayProduct(products[0]);
