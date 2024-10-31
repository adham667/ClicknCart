import React, { useEffect, useState } from 'react'
import './styles.css'
import ImageSlider from './ImageSlider';



export default function Landing() {
const [categories, setCategories]=useState([]);
async function fetchCategories(){
    try{
        const res= await fetch('https://dummyjson.com/products/category-list');
    const data= await res.json()
    setCategories(data)
    }catch(e){
        console.log(e);
    }
}



useEffect(()=>{
    fetchCategories()
} ,[])

function lcategories(){
    return categories.map((item, index)=>{
        return <li key={index}>{item} </li>
    })
}



  return (
    <div className='landing'>
        <div className='side'>
            <ul>
                {lcategories()}
            </ul>
        </div>
        <ImageSlider/>
    </div>
  )
}
