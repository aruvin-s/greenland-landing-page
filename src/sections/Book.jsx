import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon  } from '@phosphor-icons/react';
import bookimg1 from '.././assets/book1.png'
import bookimg2 from '.././assets/book2.png'
import bookimg3 from '.././assets/book3.png'
import bookimg4 from '.././assets/book4.png'

const Book = () => {
  return (
    <div>
        <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 py-24">
                <Chips variant="secondary" text="RESERVASI"/>
                <p className="font-mirage text-secondary font-bold text-4xl text-center">
                    Bagaimana cara reservasi?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
                  {[ 
                    { img: bookimg1, text: '1. Klik link yang ada pada bio instagram kami, atau langsung klik tombol reservasi sekarang dibawah ini' },
                    { img: bookimg2, text: '2. Scroll ke bagian bawah lalu klik hubungi Whatsapp Admin 1 atau Whatsapp Admin 2' },
                    { img: bookimg3, text: '3. Tanyakan ketersediaan kamar kepada admin kami pada tanggal yang anda inginkan' },
                    { img: bookimg4, text: '4. Isi form konfirmasi booking dan lakukan down payment, setelah itu booking anda terkonfirmasi dan admin akan mengirimkan invoice' }
                  ].map((item, i) => (
                    <div key={i} className="w-full max-w-xs mx-auto">
                      <img
                        src={item.img}
                        alt={`Book ${i + 1}`}
                        className="w-full object-cover rounded-lg"
                      />
                      <p className="font-jakarta text-secondary font-medium text-lg py-4 text-justify leading-9">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center w-full'>
                    <ButtonPrimary position="left" icon={WhatsappLogoIcon} text ="Reservasi Sekarang" type="accent"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book
