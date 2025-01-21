// components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">JK Fashion</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="hover:text-gray-400">
            Products
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-400">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
