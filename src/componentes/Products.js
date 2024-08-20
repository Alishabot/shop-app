import Product from "./Product";

export default function Products({ productsList, category }) {
  const filteredProducts = productsList.filter((product) => {
    if (!category) return true;

    if (product.category === category) return true;
    else return false;
  });

  const products = filteredProducts.map((product) => {
    return <Product product={product} key={product.id} />;
  });

  return (
    <div>
      <h1>Products</h1>

      <div className="prod-grid">{products}</div>
    </div>
  );
}
