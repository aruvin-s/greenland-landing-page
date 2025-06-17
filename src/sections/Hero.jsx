import Navbar from '.././components/Navbar.jsx'
import ButtonCTA from '.././components/ButtonCTA.jsx'
import bgHero from '.././assets/bghero.png'
import { WhatsappLogoIcon } from '@phosphor-icons/react'

const Hero = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgHero})`
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-10 md:px-20 lg:px-[104px] h-full">
        <h1 className="font-mirage font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight pb-3 animate-fade-in-up">
          Harmoni di Antara <br /> Malang dan Batu
        </h1>

        <p className="font-jakarta text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl pb-6 animate-fade-in-up">
          Nikmati ketenangan dan keindahan menginap ditengah alam hanya sekejap dari pusat kota
        </p>

        <div className="animate-fade-in-up">
          <ButtonCTA position="left" icon={WhatsappLogoIcon} text="Reservasi Sekarang" />
        </div>
      </div>
    </div>
  )
}

export default Hero
