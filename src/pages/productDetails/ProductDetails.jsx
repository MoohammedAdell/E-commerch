import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import ImgProducts from "../../components/productDetails/ImgProducts";
import RelatedProducts from "../../components/productDetails/RelatedProducts";
import DetailsProduct from "../../components/productDetails/DetailsProduct";
import PageTransition from "../../components/PageTransition";
import { CartContext } from "../../components/context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loadingRelatedProduct, setLoadingRelatedProduct] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProduct(data.products);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoadingRelatedProduct(false));
  }, [product?.category]);

  if (loading)
    return (
      <p className="text-center py-20 flex items-center justify-center">
        <ScaleLoader
          color="#4f88ff"
          speedMultiplier={1}
          barCount={4}
          height={80}
          loading
          radius={41}
          width={6}
        />
      </p>
    );
  if (!product) return <p>Product not found</p>;


 

  return (
    <PageTransition key={id}>
      <div className="layout-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <ImgProducts product={product} />

          {/* Details */}
          <DetailsProduct product={product} />
        </div>
      </div>

      <RelatedProducts
        loadingRelatedProduct={loadingRelatedProduct}
        product={product}
        relatedProduct={relatedProduct}
      />
    </PageTransition>
  );
}

export default ProductDetails;
