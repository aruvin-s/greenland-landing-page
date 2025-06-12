import Hero from './sections/Hero.jsx'
import Showcase from './sections/Showcase.jsx'
import Facility from './sections/Facility.jsx'
import Video from './sections/Video.jsx'
import Book from './sections/Book.jsx'
import FAQ from './sections/FAQ.jsx'
import Testimony from './sections/Testimony.jsx'
import Footer from './sections/Footer.jsx'

function App() {

  return (
    <>
       <Hero />
      <div id="glamping">
        <Showcase />
      </div>
      <div id="menginap">
        <Facility />
      </div>
      <div id="reservasi">
        <Video />
      </div>
      <div id="book">
        <Book />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="testimoni">
        <Testimony />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default App
