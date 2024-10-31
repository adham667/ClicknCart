import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import "./styles.css";

export default function Services() {
  return (
    <div className="services">
      <div className="service">
        <div className="big circle">
          <div className="small circle">
            <CiDeliveryTruck className="icon" />
          </div>
        </div>
        <h3>FREE AND FAST DELIVERY</h3>
        <span>Free delivery for all orders over $140</span>
      </div>
      <div className="service">
        <div className="big circle">
          <div className="small circle">
            <RiCustomerServiceLine className="icon"/>
          </div>
        </div>
        <h3>24/7 CUSTOMER SERVICE</h3>
        <span>Friendly 24/7 customer support</span>
      </div>
      <div className="service">
        <div className="big circle">
          <div className="small circle">
            <MdOutlineVerifiedUser className="icon" />
          </div>
        </div>
        <h3>MONEY BACK GUARANTEE</h3>
        <span>We reurn money within 30 days</span>
      </div>
    </div>
  );
}
