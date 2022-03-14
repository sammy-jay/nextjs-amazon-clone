import React from 'react'
import Product from "./Product";
const ProductFeed = ({products}) => {
    // console.log(products)
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'> 
         
        {products.slice(0,4).map((product,i) => (
        <Product key={product.id} {...product} />
        ))}
       

        <img className='md:col-span-full' src='https://links.papareact.com/dyz' alt='advert'/>

        <div className='md:col-span-2'>
             {products.slice(4,5).map((product,i) => (
        <Product key={product.id} {...product} />
        ))}
        </div>

        {products.slice(5,products.length).map((product,i) => (
        <div className={`${i % 5 == 0 && 'col-span-2'}`}>
            <Product key={product.id} {...product} />
        </div>
        ))}
    </div>
  )
}

export default ProductFeed