import React, { useEffect } from 'react'

const Product = ({Product}) => {
    if (!Product){


        console.error('Producto no esta  definido');
    
    return null;
}

    
const { id, name, price } = Product;


    useEffect (() => {
        console.log("productos cargados:"+ name)
    },[]);
    
return (
    <div className='product'>
        <h4>name</h4>
        <h5>$price</h5>
        <button onClick={()=> addToCart(id)}>Agregar</button>

    </div>
)
};

export default Product;