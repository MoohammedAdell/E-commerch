import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import Product from "../../components/slideProducts/Product";

function SearchResults() {
    const [searchQery, setSearchQery] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  console.log(query);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setSearchQery(data.products || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if(query) fetchResults()
  }, [query]);

  return (
  <PageTransition key={query}>
      <div className="layout-container py-10">
        {/* Title */}
        <h1 className="text-3xl font-bold capitalize mb-8 !text-[var(--main-color)] text-gray-800">
       Results for: {query}
        </h1>

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : searchQery.length === 0 ? (
          <p className="text-center text-gray-500">
            No products found in this search
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
            {searchQery.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>  
)
}

export default SearchResults;
