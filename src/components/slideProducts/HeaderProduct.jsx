function HeaderProduct({ title, description }) {
  return (
    <div className="top-slide">
      <h2 className="!text-[var(--main-color)] text-2xl md:text-3xl font-bold capitalize">
        {title}
      </h2>

      <p className="text-[var(--p-color)] pb-3">
        {description}
      </p>

      <hr
        className="
          relative
          h-[2px]
          bg-gray-300
          border-0
          after:content-['']
          after:absolute
          after:left-0
          after:top-0
          after:h-full
          after:w-[80px]
          after:bg-[var(--main-color)]
        "
      />
    </div>
  );
}

export default HeaderProduct;
