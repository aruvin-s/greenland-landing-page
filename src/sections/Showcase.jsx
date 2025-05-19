import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import image1 from '.././assets/showcaseimage1.png'

const Showcase = () => {
  return (
    <div className='h-screen bg-[#F3EFE7] flex flex-col items-center'>
        <div className='font-mirage text-primary font-bold text-4xl/12 text-center underline pt-24 pb-16'>
            Pengalaman menginap yang <br/>
            tenang dan tak terlupakan
        </div>
        <div className='flex gap-20'>
            <img src={image1}/>
            <div className='flex flex-col justify-center gap-4 max-w-2xl'>
                <Chips/>
                <p className='font-mirage text-primary font-bold text-4xl/12'>
                    Terinspirasi & Tumbuh dari Alam
                </p>
                <p className='font-jakarta text-justify text-lg/10'>
                    Mau liburan sambil melepas penat? Malang Greenland Glamping tempatnya!
                    Tempat ini dikelilingi panorama alam asri dan hutan hijau yang memukau.
                    Udara sejuk dan suasana tenang di sini membuat tubuh dan pikiran kalian cepat rileks. Kami menyediakan glamping nyaman untuk keluarga maupun pasangan,
                    dilengkapi fasilitas yang membuat liburan kalian nyaman tanpa repot.
                </p>
                <ButtonPrimary/>
            </div>
        </div>
    </div>
  )
}

export default Showcase
