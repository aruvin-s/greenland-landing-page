import Chips from '.././components/Chips.jsx'
import ButtonPrimary from '.././components/ButtonPrimary.jsx'
import { WhatsappLogoIcon , ArrowSquareRightIcon , ArrowSquareLeftIcon  } from '@phosphor-icons/react';

const Video = () => {
  return (
    <div>
       <div className="h-screen bg-secondary flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[1280px]">
                <Chips text="KELILING GLAMPING" />
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
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
    </div>
  )
}

export default Video
