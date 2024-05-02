
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSeller from './components/BestSeller'
import Oriental from './components/Oriental/Oriental'
import Tenora from './components/Tenora'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className=' font-mont'>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <BestSeller></BestSeller>
        <Oriental></Oriental>
        <Tenora></Tenora>
        <Subscribe></Subscribe>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default App
