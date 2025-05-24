import Chips from '.././components/Chips.jsx'
import IconChips from '.././components/IconChip.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import bgCarousel from '.././assets/carouseladmin.png'
import { MapPinIcon , ArrowSquareRightIcon , RoadHorizonIcon, CoffeeIcon, SwimmingPoolIcon, PawPrintIcon, IslandIcon, ArrowSquareLeftIcon, WhatsappLogoIcon } from '@phosphor-icons/react';

const FAQ = () => {
  return (
    <div>
        <div className="min-h-screen bg-secondary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6">
                <Chips text="FAQ" />
                <p className="font-mirage text-primary font-bold text-4xl text-center">
                    Pertanyaan yang sering ditanyakan
                </p>
                <p className="font-jakarta text-center text-lg max-w-xl">
                    Temukan informasi penting sebelum menginap di Malang Greenland
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-9">
                    <IconChips
                        icon={MapPinIcon }
                        title="Dimana tepatnya lokasi Malang Greenland?"
                        description="Lokasinya berada di Tawangargo, Karangploso, Malang"
                    />
                    <IconChips
                        icon={CoffeeIcon}
                        title="Apakah kafe buka 24 jam?"
                        description="Untuk saat ini kafe buka dari jam 8 pagi hingga jam 8 malam"
                    />
                    <IconChips
                        icon={RoadHorizonIcon}
                        title="Apakah akses jalan ke lokasi memadai?"
                        description="Akses jalan semua memadai, mobil bisa lewat dengan aman"
                    />
                    <IconChips
                        icon={SwimmingPoolIcon}
                        title="Apakah kolam renang aman untuk anak - anak?"
                        description="Kolam renang kami sangat family friendly dan aman untuk anak - anak"
                    />
                    <IconChips
                        icon={PawPrintIcon}
                        title="Apakah bisa membawa hewan peliharaan?"
                        description="Mohon maaf glamping kami belum bisa untuk membawa hewan"
                    />
                    <IconChips
                        icon={IslandIcon}
                        title="Wisata apa saja yang dekat dengan glamping?"
                        description="Ada Malang Skyland, Wisata Taman Dolan, dan Batu Love Garden"
                    />
                </div>
                <div 
                className='flex flex-col w-full h-full bg-primary p-12 justify-center gap-6 rounded-md mt-9'
                style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgCarousel})`
                      }}>
                    <p className='font-mirage text-secondary font-bold text-4xl text-center'>Punya pertanyaan lain?</p>
                    <p className='font-jakarta text-secondary font-medium text-large text-center'>Hubungi admin kami dibawah ini</p>
                    <div className='flex gap-4 justify-center'>
                        <ButtonPrimary position="left" icon={WhatsappLogoIcon} text ="Whatsapp Admin 1" type="accent" />
                        <ButtonPrimary position="left" icon={WhatsappLogoIcon} text ="Whatsapp Admin 2" type="accent" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ
