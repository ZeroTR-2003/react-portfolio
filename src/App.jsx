import About from './Components/About'
import Certifications from './Components/Certifications'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Technologies from './Components/Technologies'
import './index.css'

const App=()=> {

  return (
    <div className='overflow-hidden text-neutral-300 antialiased slec bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,300,198,0.1),rgba(255,255,255,0))]' >
      <div className='fixed top-0 -z-10 h-full w-full '>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Certifications/>
      <Contact/>
      </div>
      
    </div>
  )
}



export default App
