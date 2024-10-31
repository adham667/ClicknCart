import React from "react";
import Featured from '../components/Featured/Featured';
import Landing from '../components/Landing/Landing';
import Section from '../components/Section/Section';
import Services from '../components/Services/Services';
export default function HomePage() {
  return (
    <div>
      
      <Landing />
      <Section word="explore" title="Our Products" />
      <Section
        word="Buy now"
        title="Big Sales"
        limit={5}
        sortBy="discountPercentage"
        sale={true}
      />
      <Featured />
      <Services />
      
    </div>
  );
}
