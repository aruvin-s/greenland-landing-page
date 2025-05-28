import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import {
  WhatsappLogoIcon,
  ArrowSquareRightIcon,
  ArrowSquareLeftIcon,
} from '@phosphor-icons/react'

const Video = () => {
  return (
    <div className="bg-secondary flex flex-col justify-center items-center px-4 sm:px-8 py-24">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-6xl">
        <Chips text="KELILING GLAMPING" />
        
        {/* Responsive Video Container */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
            title="Glamping Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video
