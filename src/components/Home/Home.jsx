import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from './Header/Header'
import News from './News/News' 
import Counter from './Counter/Counter'
import Units from './Units/Units'
import Board from './Boards/Board'
import Partners from './Partners/Partners'
import Testimonials from './Testimonials/Testimonials'
import Footer from '../Footer/Footer'
import BackToTopButton from './Scroll'
function Home() {

  return (
      <main>
        <section>
          <Navbar />
        </section>
        <BackToTopButton/>
        <section>
          <Header />
        </section>
        
        <section className="News">
          <News />
        </section>
        <section className="Counter">
          <Counter />
        </section>
        <section className="Units">
          <Units />
        </section>
        <section className="Boards">
          <Board />
        </section>
        <section className="Partners">
          <Partners />
        </section>
        <section className="Testimonials">
          <Testimonials />
        </section>
        <section className='Footer'>
          <Footer />
        </section>
      </main>
    
  )
}

export default Home