import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto text-black py-10 px-6">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Monster</h2>
          <p className="text-sm ">
            Premium fashion, best quality, and trusted worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2  text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>Offers</li>
            <li>New Arrivals</li>
          </ul>
        </div>

        {/* FAQ + Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Support</h2>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaYoutube className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-10">
        © 2025 Fashion Store. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
