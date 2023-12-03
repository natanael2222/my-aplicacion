import Button from "../Components/Button"

const Cards = ({data}) => {

  const {img, title, text} = data;

  return (
    <>
        <figure className="estiloCards">
            <img className="estiloImagen" src={img} alt={title} />
            <figcaption>
                <h4 className="estiloH4">
                    {title}
                </h4>
            </figcaption>
            <h6 className="estiloTexto">
            {text}
            </h6>

           <Button/>

        </figure>

      

    </>
  )
}

export default Cards