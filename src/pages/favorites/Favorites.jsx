import { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import Product from "../../components/slideProducts/Product";
import PageTransition from "../../components/PageTransition";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites } = useContext(CartContext);
  console.log(favorites);

  return (
    <>
      <PageTransition key={favorites.length}>
        <div className="layout-container py-10">
          {/* Title */}
          <h1 className="text-3xl font-bold capitalize mb-8 text-gray-800">
            Favorites ({favorites.length})
          </h1>

          {favorites.length === 0 ? (
            <p className="text-center text-gray-500">
              No products found in your favorites.
              <Link
                to="/"
                className="ml-2 font-semibold text-[var(--main-color)] hover:underline"
              >
                Go to home page
              </Link>
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
              {favorites.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </PageTransition>
    </>
  );
}

export default Favorites;
