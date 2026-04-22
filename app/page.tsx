import Header from "./components/Header"
import Hero from "./components/Hero"
import Home_Section2 from "./components/Home_Section2"
import Home_Section3 from "./components/Home_Section3"
function Home(){
  return(
    <div>
    <div className='min-h-screen flex flex-col'>
      
      <Header/>
      <Hero />
      </div>
      <Home_Section2 />
      <Home_Section3 />
    </div>
  )
}
export default Home