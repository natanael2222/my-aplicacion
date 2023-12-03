
import Cards from '../Components/Cards'

const CardContainer = () => {

    const platillos = [
        {
          id: 1,
          img: "https://theburgermaker.com/wp-content/uploads/2022/08/gabraloca.png ",
          title: "Cabra Completa",
          text: "Carne XL, cheddar, bacon, y salsa Cabras Locas.",
        },
        {
          id: 2,
          img: "https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/9222f8c428ad5088a9560b8b18099b05.png",
          title: "Cabra Doble",
          text: "Doble Carne, lechuga, tomate, bacon, guacamole, y salsa golf.",
        },   
        {
          id: 3,
          img: " https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/1e5ae71171f3065a839be04ae371619c.png",
          title: "Cabra Fondo",
          text: "Carne grillada, huevo, jamon, queso, pepino y salsa criolla.",
        }, 
        {
          id: 4,
          img: "https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/42b64213c5083d3424a4b620a2e22165.png",
          title: "Cabra Simple",
          text: "Carne, lechuga, tomate, jamon y queso.",
        },
        {
          id: 5,
          img: "https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/0a78f2d4c1256d115b92ee37b1657ec0.png",
          title: "Cabra Triple",
          text: "Triple Carne XL, triple cheddar, cebolla caramelizada, huevo y salsa Cabras Locas.",
        },
        {
          id: 6,
          img: "https://prior-client-images.s3.eu-west-2.amazonaws.com/burgermaker/a2035e864438e81e079002d8782c567b.png",
          title: "Cabra Bomba",
          text: "Carne XL, cheddar, bacon, cebolla, tomate y salsa Cabras Locas.",
        },
      ];

  return (
    <>

      <div className="estilocardscont">
        {
            platillos.map((platillo) => <Cards key={platillo.id} data={platillo}/>)
        }
      </div>  
    </>
    
  )
}

export default CardContainer