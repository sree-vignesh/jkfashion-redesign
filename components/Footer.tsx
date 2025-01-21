// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Address */}
          <div>
            <h2 className="text-lg font-bold mb-2">Office Address</h2>
            <p>
              J K FASHION
              <br />
              3/87-6, AARNA Web, LNS Street,
              <br />
              Vadivel Nagar, Karur-02
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-bold mb-2">Links</h2>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/infrastructure" className="hover:text-gray-400">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p>
              Phone:{" "}
              <a href="tel:9847566366" className="hover:text-gray-400">
                98475 66366
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:rohit@jkfashion.in"
                className="hover:text-gray-400"
              >
                rohit@jkfashion.in
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} J K Fashion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
