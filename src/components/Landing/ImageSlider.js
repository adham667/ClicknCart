import React, { useEffect, useState } from 'react'
import './styles.css'
import { FaArrowRight } from 'react-icons/fa';




export default function ImageSlider() {

    const [images, setImages]=useState([])
    const [titles, setTitles] = useState([])
    const [active, setActive] = useState(0);
    function getimages(){
        return images.map((item, index)=>{
            
            return <img className={index===active ? "activeimg" : ""} key={index} src={item} alt='image'/>
        })
    }

    function getcircles(){
        return Array(images.length).fill().map((_, index) => {
            return (
            <div
                key={index} 
                className={index === active ? "circle active" : "circle"}
                onClick={()=>{setActive(index)}}
            ></div>
            );
          });
    }

    function gettitles(){
        return titles.map((item, index)=>{
            return <h2 key={index} className={index===active ? "activet" : " "}>{item}</h2>
        })
    }

    async function fetchInfo(){
        try{
            const res= await fetch('https://dummyjson.com/products/search?q=phone&select=images,title&limit=5');
        const data= await res.json()
        const imagearray= data.products.map((item)=>{
            return item.images[0]
        })
        const titlearray = data.products.map((item)=>{
            return item.title
        })
        // console.log(data.products);
        setTitles(titlearray)
        setImages(imagearray)
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchInfo()
    })

  return (
    <div className='image-slider'>
            {
                getimages()
            }
        <div className='circles'>
            {
                getcircles()
            }
        </div>
            {
                gettitles()
            }
            <a>Shop Now <FaArrowRight className='icon'/></a>
    </div>
  )
}
