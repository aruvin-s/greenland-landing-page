import Chips from '.././components/Chips.jsx'
import TestimonyCard from '.././components/TestimonyCard.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon  } from '@phosphor-icons/react';
import testi1 from '.././assets/testimony1.png'
import testi2 from '.././assets/testimony2.png'

const Testimony= () => {
  return (
    <div>
        <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 py-24">
                <Chips variant="secondary" text="TESTIMONI"/>
                <p className="font-mirage text-secondary font-bold text-4xl text-center">
                    Bagaimana pengalaman mereka?
                </p>
                <div className='flex gap-10'>
                  <TestimonyCard
                  name="Octaviana"
                  rating={5}
                  image={testi1}
                  message="Harga sangat terjangkau, fasilitas sangat lengkap dan bersih, pelayanan yang sangat ramah, pemandangan yang luar biasa, sangat cocok untuk keluarga"
                  />
                  <TestimonyCard
                  name="Rina Sh"
                  rating={5}
                  image={testi2}
                  message="Cuaca sejuk di pagi hari, pemandangan citylight keren di malam hari, cocok untuk memanjakan mata sambil quality time bersama orang tersayang"
                  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimony
