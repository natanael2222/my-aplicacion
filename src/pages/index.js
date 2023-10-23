import Navigation from "@/Components/Navigation"
import ShoppingCart from "@/Actions/ShoppingCart"
import Head from "next/head"
import Footer from "@/pages/Footer"
import HtmlContent from "@/Components/HtmlContent"



const index = () => {
  return (
    <>
    
    
    <Head>
   <HtmlContent/>
   
    
   <title> Comidas Caceras</title>
    <link rel="stylesheet" href="../styles/skeleton.css" />
    <link rel="stylesheet" href="../styles/normalize.css" />
    <link rel="stylesheet" href="../styles/styles.css" />
    

    </Head>
    
    <main>
      <header>
        <Navigation />
      <ShoppingCart/>
      </header>
      
    <Footer/>   
    </main>
    
    
    </>
  )
}

export default index