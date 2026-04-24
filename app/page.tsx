import Header from "./components/Header"
import Hero from "./components/Hero"
import Home_Section2 from "./components/Home_Section2"
import Home_Section3 from "./components/Home_Section3"
import Home_Section4 from "./components/Home_Section4"
function Home(){

  
  return(
    <div>
    <div className='min-h-screen flex flex-col'>
      
      <Header/>
      <Hero />
      </div>
      <Home_Section2 />
      <Home_Section3 title='Best Selling Furniture' />
      <Home_Section4 />
      <Home_Section3 title='Featured Furniture' />
    </div>
  )
}
export default Home