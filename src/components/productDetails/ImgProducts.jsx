function ImgProducts({ product }) {
  return (
    <div className="-mt-6">
      <div className="bg-white rounded-xl flex justify-center ">
        <img
          id="big"
          src={product.images[0]}
          alt={product.title}
          className="max-h-[500px] object-contain"
        />
      </div>

      <div className="flex gap-4 justify-center">
        {product.images.map((img, i) => (
          <div
            key={i}
            className="w-26 h-26  md:w-40 md:h-40 rounded-3xl p-2 cursor-pointer hover:border-blue-500"
          >
            <img
              src={img}
              alt={product.title}
              className="w-full h-full object-contain"
              onClick={() => (document.getElementById("big").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgProducts;
