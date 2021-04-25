import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/index/banner'
import ServicesSection from './layouts/sections/index/services'
import AboutSection from './layouts/sections/index/about'
import DownloadSection from './layouts/sections/index/download'
import ScreenShotsSection from './layouts/sections/index/screenshots'
import PriceSection from './layouts/sections/index/price'
import VideoSection from './layouts/sections/index/video'
import FooterSection from './layouts/sections/index/footer'


const App1 = () => {

  useEffect(() => {
      document.body.classList.add('rtl');
    document.body.style.setProperty('--primary', '#357fef')
    document.body.style.setProperty('--secondary', '#4e4e4e')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })

  return (
    <div>
      <Head>
        <title>Mushaf Mauri</title>
      </Head>


      <BannerSection />

      <ServicesSection />

      <AboutSection />

      <DownloadSection />

      <ScreenShotsSection />

      <PriceSection />

      <VideoSection />

      <FooterSection />

    </div>
  )
}

export default App1
