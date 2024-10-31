import React, { useEffect, useState } from 'react'
import '../Section/styles.css'
import './styles.css'
export default function Featured({category="fragrances"}) {
    const [features, setFeatures] = useState([])



    function getfeatures(){
        return features.map((item, index)=>{
            return (
                <div className={index===0 ? "large cell" : "cell"}>
                    <img src={item.images[0]}/>
                    <div className='text'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href='#'>Shop Now</a>
                    </div>
                </div>
            )
        })
    }


    async function fetchfeatures(){
        try{
            const link=`https://dummyjson.com/products/category/${category}?limit=4&sortBy=rating&order=desc`
            const res= await fetch(link)
            const data= await res.json()
            
            setFeatures(data.products)
        }catch(e){
            console.log(e);
        }

    }


    useEffect(()=>{
        fetchfeatures();
    },[])

  return (
    <div className='section'>
        <span className='word'>Featured</span>
        <h2 className='title'>{category}</h2>

        <div className='features'>
            {
                getfeatures()
            }
        </div>
    </div>
  )
}
