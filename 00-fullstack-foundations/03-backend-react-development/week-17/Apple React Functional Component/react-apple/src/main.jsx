import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/bootstrap.css"
import "./assets/css/styles.css"
// import "./assets/js/bootstrap.js"

import Header from './Components/Header/Header'
import Alert from './Components/Main/Alert'
import SectionOne from './Components/Main/SectionOne'
import SectionTwo from './Components/Main/SectionTwo'
import SectionThree from './Components/Main/SectionThree'
import SectionFour from './Components/Main/SectionFour'
import SectionFive from './Components/Main/SectionFive'
import SectionSix from './Components/Main/SectionSix'
import Footer from './Components/Footer/Footer'

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
    <Footer />
  </StrictMode>,
)
