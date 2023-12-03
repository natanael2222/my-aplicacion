
import ShoppingCart from "../Actions/ShoppingCart";
import Head from "next/head";
import HtmlContent from "../Components/HtmlContent";
import Footer from "../Components/Footer";
import CarouselBurguer from "../Components/CarouselBurguer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from "../Components/Section";
import Navigation from "../Components/Navigation";


const Index = () => {
  
  return (
    <>
    
    <Head>
    <title> Cabras Locas</title> 


    </Head>
    <Navigation/> 
    <main>
   <HtmlContent/> 
     <Section/>
     <CarouselBurguer/>
     {/* <ShoppingCart/> */}
     <Footer/>
     
    </main>
      
    </>
  )
}

export default Index