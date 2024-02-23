// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from '../cards/cards'

function CardsList({products}) {
    const productList = products



  return (
    <div className="grid grid-cols-2 md:grid-cols-3 Id:grid-cols-2 gap-8 p-5" >
       {
        productList?.map(product =>
            <Cards product={product}/>)
       }
    </div>
  )
}

export default CardsList