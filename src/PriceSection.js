import React from 'react'
import {Button}  from './Button';
import './home.css'

import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const PriceSection = () => {
  return (
    <PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={''}   title='FREE' priceText='$0/month'
    >
        <PricingDetail> <b>5</b> therapy</PricingDetail>
        <PricingDetail> <b>2 types</b> audio</PricingDetail>
        <PricingDetail> <b>1</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
        <div className='price-btn'>
        <PricingDetail >
            <button className="home-button p-btn">TRY IT FREE</button>
        </PricingDetail>
        </div>
    </PricingSlot>
<PricingSlot  onClick={''} buttonText='' title='BASIC' priceText='$20/month'>
        <PricingDetail> <b>10</b> therapy</PricingDetail>
        <PricingDetail> <b>3 types</b> audio</PricingDetail>
        <PricingDetail> <b>3</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
        <div className='price-btn'>
        <PricingDetail >
            <button className="home-button p-btn">TRY IT FREE</button>
        </PricingDetail>
        </div>
    </PricingSlot>
    <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
        <PricingDetail> <b>15</b> therapy</PricingDetail>
        <PricingDetail> <b>5 types</b> audio</PricingDetail>
        <PricingDetail> <b>5</b> users</PricingDetail>
        <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
        <div className='price-btn'>
        <PricingDetail >
            <button className="home-button p-btn">TRY IT FREE</button>
        </PricingDetail>
        </div>
    </PricingSlot>
    </PricingTable>
  )
}

export default PriceSection