import Header from "./components/Header"
import Hero from "./components/Hero"
import Home_Section2 from "./components/Home_Section2"
function Home(){
  return(
    <div>
    <div className='min-h-screen flex flex-col'>
      
      <Header/>
      <Hero />
      </div>
      <Home_Section2 />
    </div>
  )
}
export default Home