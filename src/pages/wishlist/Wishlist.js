import React from 'react'
import Section from '../../components/Section/Section'

export default function Wishlist() {
  return (
    <div>
        <Section word="Favourites"
        title="Wishlist"
        limit={5}
        sale={false}
        viewmore={false}
        wishlist={true}/>
        <Section word="Suggested"
        title="Just for you"
        limit={5}
        sale={false}
        viewmore={false}
        skip={30}/>
    </div>
  )
}
