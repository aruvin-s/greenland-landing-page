import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import image1 from '.././assets/showcaseimage1.png'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon  } from '@phosphor-icons/react';
import bgCarousel from '.././assets/midcarousel.png'
import showcaseimg1 from '.././assets/showcaseimg1.png'
import showcaseimg2 from '.././assets/showcaseimg2.png'
import showcaseimg3 from '.././assets/showcaseimg3.png'
import showcaseimg4 from '.././assets/showcaseimg4.png'

const Showcase = () => {
  return (
    <div>
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-6 py-20 sm:px-10">
            <div className="font-mirage text-primary font-bold text-2xl sm:text-3xl text-center underline pb-10 sm:pb-16">
                Pengalaman menginap yang <br />
                tenang dan tak terlupakan
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl w-full">
                <div className=" flex justify-center">
                <img
                    src={image1}
                    alt="Showcase"
                    className="w-full max-w-md lg:max-w-full object-contain"
                />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                    <Chips text="TENTANG GLAMPING" />
                </div>
                <p className="font-mirage text-primary font-bold text-2xl sm:text-4xl">
                    Terinspirasi & Tumbuh dari Alam
                </p>
                <p className="font-jakarta text-base/10 sm:text-lg/10 text-justify max-w-prose mx-auto lg:mx-0">
                    Mau liburan sambil melepas penat? Malang Greenland Glamping tempatnya!
                    Tempat ini dikelilingi panorama alam asri dan hutan hijau yang memukau.
                    Udara sejuk dan suasana tenang di sini membuat tubuh dan pikiran kalian cepat rileks. Kami menyediakan glamping nyaman untuk keluarga maupun pasangan,
                    dilengkapi fasilitas yang membuat liburan kalian nyaman tanpa repot.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <ButtonPrimary
                    position="right"
                    icon={ArrowSquareRightIcon}
                    text="Pelajari lebih lanjut"
                    />
                </div>
                </div>
            </div>
        </div>
        <div className="relative w-full">
            <img
                src={bgCarousel}
                alt="Hero Background"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-8">
                <h2 className="font-mirage text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug max-w-4xl mx-auto">
                Nikmati liburanmu bersama kami
                </h2>
            </div>
        </div>
        <div className="min-h-screen bg-secondary flex flex-col items-center justify-center py-16">
  {/* Header Section */}
  <div className="w-full px-6 sm:px-10 flex flex-col items-center gap-4">
    <Chips text="PENGALAMAN MENGINAP" />
    <p className="font-mirage text-primary font-bold text-2xl sm:text-4xl text-center">
      Rasakan Keindahan Alam
    </p>
    <p className="font-jakarta text-center text-base sm:text-lg max-w-sm sm:max-w-lg">
      Nikmati suasana tenang dan pemandangan Gunung Panderman serta Citylight Kota Batu yang mempesona
    </p>
  </div>

  {/* Showcase Grid */}
  <div className="flex flex-col items-center gap-6 mt-6 px-6 sm:px-10 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <img src={showcaseimg1} alt="Showcase 1" className="w-full object-cover rounded-lg" />
      <img src={showcaseimg2} alt="Showcase 2" className="w-full object-cover rounded-lg" />
      <img src={showcaseimg3} alt="Showcase 3" className="w-full object-cover rounded-lg" />
      <img src={showcaseimg4} alt="Showcase 4" className="w-full object-cover rounded-lg" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Showcase
