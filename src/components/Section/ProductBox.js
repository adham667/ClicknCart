import React from 'react'
import { FaRegEye, FaRegHeart, FaStar } from 'react-icons/fa'

export default function ProductBox({key ,product, sale}) {


    function getStars(){
        return Array(5).fill().map((_,index)=>{
            return <FaStar key={index} fill={index<=product.rating ? "#ffad33": "grey"} className='star'/>
        })
    }

  return (
    <div className='box'>
        <div className='content'>
            {sale && <div className='sale'>
                -{product.discountPercentage-product.discountPercentage%1}%
            </div> }
            <img alt={product.title} src={product.images[0]}/>
            <div className='icons'>
                <div className='icon-wrap'><FaRegHeart className='icon'/></div>
                <div className='icon-wrap'><FaRegEye className='icon'/></div>
            </div>
            <div className='cart'>
                Add to cart
            </div>
        </div>
        <div className='info'>
            <span>{product.title}</span>
            <div className='details'>
                <span className='price'>${product.price}</span>
                {sale &&<span className='old price'>${Math.floor(product.price/(1-(product.discountPercentage/100)))}</span>}
                <div className='stars'>
                {
                    getStars()
                }
                </div>
                <span>({product.reviews.length})</span>
            </div>
        </div>
    </div>
  )
}
