import about1 from "../../img/about1.jfif";
import about2 from "../../img/about2.jfif";
import about3 from "../../img/about3.jfif";

function About() {
  return (
    <div className="layout-container py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are passionate about delivering high-quality products with a smooth
          and enjoyable shopping experience.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={about1}
            alt="about"
            className="rounded-2xl object-cover h-48 w-full"
          />
          <img
            src={about2}
            alt="about"
            className="rounded-2xl object-cover h-48 w-full"
          />
          <img
            src={about3}
            alt="about"
            className="rounded-2xl object-cover h-48 w-full col-span-2"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our store was built to bring you the best products at competitive
            prices. We focus on quality, trust, and customer satisfaction.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            With fast delivery, secure payments, and responsive support, we aim
            to make your shopping journey simple and enjoyable.
          </p>

          <div className="flex gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">1K+</h3>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
