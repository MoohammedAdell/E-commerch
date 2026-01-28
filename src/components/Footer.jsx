import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-18">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold !text-white mb-4">
            Shop<span className="text-blue-500">X</span>
          </h2>
          <p className="text-sm leading-relaxed">
            We provide the best products with high quality and fast delivery.
            Your satisfaction is our priority.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold !text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">Home</li>
            <li className="hover:text-blue-400 cursor-pointer">Shop</li>
            <li className="hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold !text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">
              FAQ
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold !text-white mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer transition">
              <FaFacebookF />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 cursor-pointer transition">
              <FaInstagram />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 cursor-pointer transition">
              <FaTwitter />
            </span>
            <span className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 cursor-pointer transition">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Tony. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;