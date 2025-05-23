import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import image1 from '.././assets/showcaseimage1.png'
import { WhatsappLogo, ArrowSquareRight, ArrowSquareLeft } from 'phosphor-react';
import bgCarousel from '.././assets/midcarousel.png'
import showcaseimg1 from '.././assets/showcaseimg1.png'
import showcaseimg2 from '.././assets/showcaseimg2.png'
import showcaseimg3 from '.././assets/showcaseimg3.png'
import showcaseimg4 from '.././assets/showcaseimg4.png'

const Showcase = () => {
  return (
    <div>
        <div className='h-screen bg-secondary flex flex-col items-center justify-center'>
            <div className='font-mirage text-primary font-bold text-4xl/12 text-center underline pb-16'>
                Pengalaman menginap yang <br/>
                tenang dan tak terlupakan
            </div>
            <div className='flex gap-20'>
                <img src={image1}/>
                <div className='flex flex-col justify-center gap-4 max-w-2xl'>
                    <Chips text="PENGALAMAN MENGINAP"/>
                    <p className='font-mirage text-primary font-bold text-4xl/12'>
                        Terinspirasi & Tumbuh dari Alam
                    </p>
                    <p className='font-jakarta text-justify text-lg/10'>
                        Mau liburan sambil melepas penat? Malang Greenland Glamping tempatnya!
                        Tempat ini dikelilingi panorama alam asri dan hutan hijau yang memukau.
                        Udara sejuk dan suasana tenang di sini membuat tubuh dan pikiran kalian cepat rileks. Kami menyediakan glamping nyaman untuk keluarga maupun pasangan,
                        dilengkapi fasilitas yang membuat liburan kalian nyaman tanpa repot.
                    </p>
                    <ButtonPrimary position="right" icon={ArrowSquareRight} text ="Pelajari lebih lanjut" />
                </div>
            </div>
        </div>
        <div className="relative w-full">
            <img
                src={bgCarousel}
                alt="Hero Background"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <h2 className="font-mirage text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                    Nikmati liburanmu bersama kami
                </h2>
            </div>
        </div>
        <div className="h-screen bg-secondary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6">
                <Chips text="PENGALAMAN MENGINAP" />
                <p className="font-mirage text-primary font-bold text-4xl text-center">
                    Rasakan Keindahan Alam
                </p>
                <p className="font-jakarta text-center text-lg max-w-xl">
                    Nikmati suasana tenang dan pemandangan Gunung Panderman serta Citylight Kota Batu yang mempesona
                </p>
                {/* Image showcase */}
                <div className="flex justify-center gap-4">
                    <img src={showcaseimg1} alt="Showcase 1" className="object-cover rounded-lg" />
                    <img src={showcaseimg2} alt="Showcase 2" className="object-cover rounded-lg" />
                    <img src={showcaseimg3} alt="Showcase 3" className="object-cover rounded-lg" />
                    <img src={showcaseimg4} alt="Showcase 4" className="object-cover rounded-lg" />
                </div>
                <div className='flex justify-between w-full'>
                    <ButtonPrimary position="left" icon={ArrowSquareLeft} text ="Sebelumnya" />
                    <ButtonPrimary position="right" icon={ArrowSquareRight} text ="Selanjutnya" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Showcase
