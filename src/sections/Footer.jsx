import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon, PhoneIcon, EnvelopeIcon, InstagramLogoIcon, GlobeIcon, MapPinIcon, ClockIcon  } from '@phosphor-icons/react';
import Logo from '.././assets/Logo.png'
import image from '.././assets/footer.png'

const Footer = () => {
  return (
    <div className="bg-accent py-20">
      <div className="flex flex-col lg:flex-row justify-center gap-12 md:gap-20 w-full px-4 sm:px-8 md:px-[104px] font-jakarta text-secondary mx-auto items-center lg:items-start">
        <div className="flex flex-col flex-shrink-0 w-full sm:w-lg">
            <img 
              src={Logo} 
              alt="Villa Booking Logo" 
              className="mb-6 max-w-full h-auto object-contain" 
            />
            <img 
              src={image} 
              alt="Footer Image" 
              className="max-w-full h-auto object-cover rounded-md" 
            />
          </div>

        <div className="flex flex-col max-w-full mb-8 md:mb-0 gap-3 text-center lg:text-start">
          <p className="font-bold text-lg">Menu</p>
          <div className="h-[1px] bg-secondary mb-3"></div>
          <a href="#" className="hover:underline transition">About</a>
          <a href="#" className="hover:underline transition">Stay</a>
          <a href="#" className="hover:underline transition">FAQ</a>
          <a href="#" className="hover:underline transition">Review</a>
        </div>

        <div className="flex flex-col mb-8 md:mb-0 gap-3 items-center lg:items-start">
          <p className="font-bold text-lg">Kontak dan Reservasi</p>
          <div className="h-[1px] w-full bg-secondary mb-3"></div>
          <div className="flex gap-2 items-center">
            <PhoneIcon size={20} />
            <a href="tel:082144036169" className="hover:underline transition">082144036169</a>
          </div>
          <div className="flex gap-2 items-center">
            <WhatsappLogoIcon size={20} />
            <a href="https://wa.me/082133523123" className="hover:underline transition">082133523123</a>
          </div>
          <div className="flex gap-2 items-center">
            <EnvelopeIcon size={20} />
            <a href="mailto:mlg.greenlandglamping@gmail.com" className="hover:underline transition">mlg.greenlandglamping@gmail.com</a>
          </div>
          <div className="flex gap-2 items-center">
            <InstagramLogoIcon size={20} />
            <a href="https://instagram.com/greenlandmalang" className="hover:underline transition">@greenlandmalang</a>
          </div>
          <div className="flex gap-2 items-center">
            <GlobeIcon size={20} />
            <a href="https://greenlandmalang.com" className="hover:underline transition">greenlandmalang.com</a>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <p className="font-bold text-lg">Alamat</p>
            <div className="h-[1px] w-full bg-secondary mb-3"></div>
            <div className="flex items-start gap-2">
              <MapPinIcon size={20} className="mt-[6px]" />
              <div className="text-secondary leading-8">
                <p>Lasah, Tawangargo,</p>
                <p>Karangploso</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <p className="font-bold text-lg">Jam Operasional</p>
            <div className="h-[1px] w-full bg-secondary mb-3"></div>
            <div className="flex items-start gap-2">
              <ClockIcon size={20} className="mt-[6px]" />
              <div className="text-secondary leading-8">
                <p>Senin - Minggu</p>
                <p>08.00 am - 21.00 pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer
