import { FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

function Contact() {
  return (
    <div className="layout-container py-20">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600">
          Choose the best way to reach us
        </p>
      </div>

      {/* Icons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        
        {/* Email */}
        <a
          href="mailto:yourmail@gmail.com"
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
            <FaEnvelope />
          </div>
          <span className="font-medium text-gray-700">
            Email
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/201000000000"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl text-green-500 group-hover:bg-green-500 group-hover:text-white transition">
            <FaWhatsapp />
          </div>
          <span className="font-medium text-gray-700">
            WhatsApp
          </span>
        </a>

        {/* Messenger */}
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition">
            <FaFacebookMessenger />
          </div>
          <span className="font-medium text-gray-700">
            Messenger
          </span>
        </a>

      </div>
    </div>
  );
}

export default Contact;