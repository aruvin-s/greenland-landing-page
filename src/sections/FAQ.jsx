import Chips from '.././components/Chips.jsx'
import IconChips from '.././components/IconChip.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import bgCarousel from '.././assets/carouseladmin.png'
import {
  MapPinIcon,
  ArrowSquareRightIcon,
  RoadHorizonIcon,
  CoffeeIcon,
  SwimmingPoolIcon,
  PawPrintIcon,
  IslandIcon,
  ArrowSquareLeftIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react'

const FAQ = () => {
  return (
    <div className="bg-secondary flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col justify-center items-center gap-6 max-w-7xl w-full">
        <Chips text="FAQ" />
        <p className="font-mirage text-primary font-bold text-3xl sm:text-4xl text-center">
          Pertanyaan yang sering ditanyakan
        </p>
        <p className="font-jakarta text-center text-base sm:text-lg max-w-xl">
          Temukan informasi penting sebelum menginap di Malang Greenland
        </p>

        {/* Grid FAQ Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-9 w-full">
          <IconChips
            icon={MapPinIcon}
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

        {/* CTA Background Section */}
        <div
          className="flex flex-col w-full bg-primary p-6 sm:p-12 justify-center gap-6 rounded-md mt-12 text-center bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgCarousel})`,
          }}
        >
          <p className="font-mirage text-secondary font-bold text-2xl sm:text-4xl">
            Punya pertanyaan lain?
          </p>
          <p className="font-jakarta text-secondary font-medium text-base sm:text-lg">
            Hubungi admin kami dibawah ini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonPrimary
              position="left"
              icon={WhatsappLogoIcon}
              text="Whatsapp Admin 1"
              type="accent"
              href='https://wa.me/6281228866113'
            />
            <ButtonPrimary
              position="left"
              icon={WhatsappLogoIcon}
              text="Whatsapp Admin 2"
              type="accent"
              href='https://wa.me/6282144036169'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
