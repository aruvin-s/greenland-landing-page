import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon } from '@phosphor-icons/react';
import facilityimg1 from '.././assets/facility.png'
import facilityimg2 from '.././assets/facility-1.png'
import facilityimg3 from '.././assets/facility-2.png'
import facilityimg4 from '.././assets/facility2.png'
import facilityimg5 from '.././assets/facility2-1.png'
import facilityimg6 from '.././assets/facility2-2.png'

const Facility = () => {
  return (
    <div>
        <div className="min-h-screen bg-primary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 py-24">
                <Chips variant="secondary" text="FASILITAS KAMI"/>
                <p className="font-mirage text-secondary font-bold text-4xl text-center">
                    Glamping Segitiga
                </p>
                <p className="font-jakarta text-secondary text-center text-lg">
                    Malang Greenland Glamping menawarkan fasilitas glamping sekelas hotel
                </p>
                <div className="justify-center grid grid-cols-3 gap-9">
                    <div>
                        <img src={facilityimg1} alt="Facility 1" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Kasur Queen Size</p>
                    </div>
                    <div>
                        <img src={facilityimg2} alt="Facility 2" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Room Amenities</p>
                    </div>
                     <div>
                        <img src={facilityimg3} alt="Facility 3" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Closet & Hot Water</p>
                    </div>
                    <div>
                        <img src={facilityimg4} alt="Facility 4" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Kolam Renang</p>
                    </div>
                    <div>
                        <img src={facilityimg5} alt="Facility 5" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Grill Venue</p>
                    </div>
                     <div>
                        <img src={facilityimg6} alt="Facility 6" className="object-cover rounded-lg" />
                        <p className='font-mirage text-secondary font-medium text-4xl p-4 text-center underline'>Cafe & Lounge</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facility
