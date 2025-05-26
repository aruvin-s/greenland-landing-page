import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon, PhoneIcon, EnvelopeIcon, InstagramLogoIcon, GlobeIcon, MapPinIcon, ClockIcon  } from '@phosphor-icons/react';
import Logo from '.././assets/Logo.png'
import image from '.././assets/footer.png'

const Footer = () => {
  return (
    <div>
       <div className="bg-accent flex py-20">
            <div className="flex justify-center gap-20 w-full px-[104px] font-jakarta text-secondary">
                <div className="flex flex-col max-w-sm">
                  <img src={Logo} alt="Villa Booking Logo"/>
                  <img src={image} alt="Footer Image"/>
                </div>
                <div className="flex flex-col max-w-sm  gap-3">
                  <p className='font-bold text-lg'>Menu</p>
                  <div className='h-[1px] w-full bg-secondary'></div>
                  <a>About</a>
                  <a>Stay</a>
                  <a>FAQ</a>
                  <a>Review</a>
                </div>
                <div className="flex flex-col max-w-sm  gap-3">
                  <p className='font-bold text-lg'>Kontak dan Reservasi</p>
                  <div className='h-[1px] w-full bg-secondary'></div>
                  <div className='flex gap-1 items-center'>
                    <PhoneIcon size={20} />
                    <a>082144036169</a>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <WhatsappLogoIcon size={20} />
                    <a>082133523123</a>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <EnvelopeIcon size={20} />
                    <a>mlg.greenlandglamping@gmail.com</a>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <InstagramLogoIcon size={20} />
                    <a>greenlandmalang</a>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <GlobeIcon size={20} />
                    <a>greenlandmalang.com</a>
                  </div>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className="flex flex-col max-w-sm gap-3">
                    <p className='font-bold text-lg'>Alamat</p>
                    <div className='h-[1px] w-full bg-secondary'></div>
                    <div className='flex items-start gap-2'>
                      <MapPinIcon size={20} className='mt-[6px]' />
                      <div className='text-secondary leading-8'>
                        <p>Lasah, Tawangargo,</p>
                        <p>Karangploso</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-sm gap-3">
                    <p className='font-bold text-lg'>Jam Operasional</p>
                    <div className='h-[1px] w-full bg-secondary'></div>
                    <div className='flex items-start gap-2'>
                      <ClockIcon size={20} className='mt-[6px]' />
                      <div className='text-secondary leading-8'>
                        <p>Senin - Minggu</p>
                        <p>08.00 am - 21.00 pm</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
