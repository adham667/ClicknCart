import React, { useEffect, useState } from 'react'
import ProductBox from './ProductBox'
import './styles.css'
export default function Section({word="hi", title="Our Products", limit=10, sortBy="", sale=false}) {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(0)


  function handleClick(){ 
    
    setLoaded(lod=>{
      return lod+limit
    })
  }

  function getproducts(){
    
    return products.map((item, index)=>{
      return <ProductBox key={index} product={item} sale={sale}/>
    })
  }

  
  
  
  useEffect(()=>{
    async function fetchProducts(){
      try{
      const sort = sortBy ? `&sortBy=${sortBy}&order=desc` : ""
      const res= await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${loaded}${sort}`)
      const data= await res.json()  
      console.log(data);
      setProducts(item =>{
        return [...item, ...data.products]
      })
      }catch(e){
        console.log(e);
        
      }
    }
    fetchProducts()
    },[loaded]);


  return (
    <div className='section'>
        <span className='word'>{word}</span>
        <h2 className='title'>{title}</h2>
        <div className='grid'>
          {
            getproducts()
          }
        </div>
        <button onClick={handleClick} className='more'>View more</button>
    </div>
  )
}
