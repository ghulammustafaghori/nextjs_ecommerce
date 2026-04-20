import Header from "./components/Header"
import Hero from "./components/Hero"
function Home(){
  return(
    <div>
    <div className='min-h-screen flex flex-col'>
      
      <Header/>
      <Hero />
      </div>
    </div>
  )
}
export default Home