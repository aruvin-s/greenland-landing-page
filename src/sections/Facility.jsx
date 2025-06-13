import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import {
  WhatsappLogoIcon,
  ArrowSquareRightIcon,
  ArrowSquareLeftIcon,
} from '@phosphor-icons/react'
import facilityimg1 from '.././assets/facility.png'
import facilityimg2 from '.././assets/facility-1.png'
import facilityimg3 from '.././assets/facility-2.png'
import facilityimg4 from '.././assets/facility2.png'
import facilityimg5 from '.././assets/facility2-1.png'
import facilityimg6 from '.././assets/facility2-2.png'

const Facility = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center px-6 sm:px-10 py-24">
      <div className="flex flex-col items-center gap-6 w-full max-w-7xl">
        <Chips variant="secondary" text="FASILITAS KAMI" />
        <p className="font-mirage text-secondary font-bold text-3xl sm:text-4xl text-center">
          Glamping Segitiga
        </p>
        <p className="font-jakarta text-secondary text-center text-base sm:text-lg max-w-md sm:max-w-2xl">
          Malang Greenland Glamping menawarkan fasilitas glamping sekelas hotel
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {[facilityimg1, facilityimg2, facilityimg3, facilityimg4, facilityimg5, facilityimg6].map((img, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={`Facility ${index + 1}`}
                className="w-full object-cover rounded-lg"
              />
              <p className="font-mirage text-secondary font-medium text-2xl underline p-4">
                {[
                  'Kasur Queen Size',
                  'Room Amenities',
                  'Closet & Hot Water',
                  'Kolam Renang',
                  'Grill Venue',
                  'Cafe & Lounge',
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Facility
