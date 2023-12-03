import HtmlContent from '../Components/HtmlContent';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';

import CarouselBurguer from '../Components/CarouselBurguer';
import '../styles/globals.css';






const App = () => {
  return (

    <>
    
    <div className='App'> 
    <Navigation/>
    <HtmlContent/>
    <CarouselBurguer/>
    <Footer/>
  
    </div>    
    </>

  )
}

export default App;


