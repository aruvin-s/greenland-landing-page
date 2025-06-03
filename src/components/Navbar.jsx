import React from 'react';
import Logo from '.././assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="px-4 sm:px-10 md:px-20 lg:px-[104px] py-4 flex justify-center xl:justify-between items-center">
      <div>
        <img src={Logo} alt="Villa Booking Logo" className="h-12 sm:h-14" />
      </div>
      <ul className="hidden xl:flex gap-9 text-base">
        <li>
          <a href="#glamping" className="hover:underline transition font-jakarta font-bold text-white">
            Glamping
          </a>
        </li>
        <li>
          <a href="#menginap" className="hover:underline transition font-jakarta font-bold text-white">
            Menginap
          </a>
        </li>
        <li>
          <a href="#reservasi" className="hover:underline transition font-jakarta font-bold text-white">
            Reservasi
          </a>
        </li>
        <li>
          <a href="#faq" className="hover:underline transition font-jakarta font-bold text-white">
            FAQ
          </a>
        </li>
        <li>
          <a href="#testimoni" className="hover:underline transition font-jakarta font-bold text-white">
            Testimoni
          </a>
        </li>
      </ul>
      <a href="#contact" className="hidden xl:block transition font-jakarta font-bold hover:underline text-white">
        Hubungi Kami
      </a>
    </nav>
  );
};

export default Navbar;
