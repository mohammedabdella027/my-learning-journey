import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./assets/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/js/bootstrap.js"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/styles.css"

import Header from './Components/Header/Header'
import Alert from './Components/Main/Alert'
import SectionOne from './Components/Main/SectionOne'
import SectionTwo from './Components/Main/SectionTwo'
import SectionThree from './Components/Main/SectionThree'
import SectionFour from './Components/Main/SectionFour'
import SectionFive from './Components/Main/SectionFive'
import SectionSix from './Components/Main/SectionSix'
import Footer from './Components/Footer/Footer'
import YoutubeVideos from './Components/YoutubeVideos/YoutubeVideos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Alert />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <YoutubeVideos />
    <Footer />
  </StrictMode>,
)
