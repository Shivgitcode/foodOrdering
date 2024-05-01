
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSeller from './components/BestSeller'

function App() {
  return (
    <div className=' font-mont'>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <BestSeller></BestSeller>
      </main>
    </div>
  )
}

export default App
