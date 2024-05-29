import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './Header/Header'
import BackToTopButton from '../../Home/Scroll'
import Footer from '../Footer/Footer'
import News from './News/News'
import About from './About/About'
import Partners from './Partners/Partners'
import Team from './Team/Team'
function Home() {

  return (
    <main>
        <section>
          <Navbar />
        </section>
        <section>
          <Header />
        </section>
        <section>
          <News/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Team/>
        </section>
        <BackToTopButton/>
        <section>
          <Partners/>
        </section>
        <section className='relative lg:top-0 top-[-15px]'>
          <Footer />
        </section>
    </main>
    
  )
}

export default Home