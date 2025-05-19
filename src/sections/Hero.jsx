import Navbar from '.././components/Navbar.jsx'
import ButtonCTA from '.././components/ButtonCTA.jsx'
import bghero from '.././assets/bghero.png'

const Hero = () => {
  return (
    <div
    className="flex flex-col bg-cover bg-center h-screen"
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bghero})`
      }}
    >
        <Navbar/>
        <div className='px-[104px] flex flex-col items-center justify-center h-full text-center'>
            <h1 className='font-mirage font-bold text-white text-[64px]/18 pb-1'>
                Harmoni di Antara <br/> Malang dan Batu
            </h1>
            <p className='font-jakarta text-white text-xl/18 pb-4'>
                Nikmati ketenangan dan keindahan menginap ditengah alam hanya sekejap dari pusat kota
            </p>
            <ButtonCTA/>
        </div>
    </div>
  )
}

export default Hero
