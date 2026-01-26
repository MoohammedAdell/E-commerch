import SlideProduct from "../slideProducts/SlideProduct";

function RelatedProducts({ loadingRelatedProduct, product, relatedProduct }) {
  return (
    <div>
      {loadingRelatedProduct ? (
        <p>Loading ... </p>
      ) : (
        <SlideProduct
          title={product.category.replace("-", " ")}
          data={relatedProduct}
          key={relatedProduct.category}
        />
      )}
    </div>
  );
}

export default RelatedProducts;
