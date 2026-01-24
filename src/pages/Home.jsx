import Slider from "../components/Slider";
import SlideProduct from "../../src/components/slideProducts/SlideProduct";
import { useEffect, useState } from "react";

const categories = [
  "smartphones",
  "laptops",
  "mobile-accessories",
  "mens-watches",
  "womens-bags",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();

            return { [category]: data.products };
          }),
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <Slider />

      {loading ? (
        <p>Loading ...</p>
      ) : (
        categories.map((category) => (
          <SlideProduct
            title={category.replace("-", " ")}
            data={products[category]}
            key={category}
          />
        ))
      )}
    </div>
  );
}

export default Home;
