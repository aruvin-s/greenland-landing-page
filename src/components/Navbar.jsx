import React from 'react';
import Logo from '.././assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="px-[104px] py-4 flex justify-between items-center">
      <div>
        <img src={Logo} alt="Villa Booking Logo" className="h-16" />
      </div>
      <ul className="flex gap-9 text-base">
        <li>
          <div className="hover:underline transition font-jakarta font-bold text-white">
            Glamping
          </div>
        </li>
        <li>
          <div className="hover:underline transition font-jakarta font-bold text-white">
            Menginap
          </div>
        </li>
        <li>
          <div className="hover:underline transition font-jakarta font-bold text-white">
            Reservasi
          </div>
        </li>
        <li>
          <div className="hover:underline transition font-jakarta font-bold text-white">
            FAQ
          </div>
        </li>
        <li>
          <div className="hover:underline transition font-jakarta font-bold text-white">
            Testimoni
          </div>
        </li>
      </ul>
      <div className="transition font-jakarta font-bold hover:underline text-white">
            Hubungi Kami
      </div>
    </nav>
  );
};

export default Navbar;
