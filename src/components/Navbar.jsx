import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between">
      <div className="text-2xl font-bold text-green-600">
        VillaBooking
      </div>

      <ul className="flex gap-6 text-gray-700">
        <li>
          <div className="hover:text-green-600 transition">
            Home
          </div>
        </li>
        <li>
          <div className="hover:text-green-600 transition">
            Reservation
          </div>
        </li>
        <li>
          <div className="hover:text-green-600 transition">
            Contact
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
