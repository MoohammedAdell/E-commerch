/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/slideProducts/Product";
import PageTransition from "../../components/PageTransition";

function CategoryPage() {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data.products);
        setLoading(false);
      });
  }, [category]);

  return (
    <PageTransition key={category}>
      <div className="layout-container py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold capitalize mb-8 text-gray-800">
          {category.replace("-", " ")}
        </h1>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : categoryProducts.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found in this category
          </p>
        ) : (
          /* Products Grid */
          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
          >
            {categoryProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}

export default CategoryPage;
