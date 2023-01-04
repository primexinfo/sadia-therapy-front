import React, { useEffect } from "react";
import { Button } from "./Button";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import './pricesection.css'

// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const PriceSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
    <div data-aos="fade-up"   class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div  class="pricingTable">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-grin-beam"></i>
                        <div class="price-value"> $10.00 <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Deep relaxation</h3>
                    <div class="pricing-content">
                        <ul>
                        <li><b>Value $99</b>RTT™ relaxation recording to introduce and prepare you for your Hypnotherapy session </li>
                            <li><b>Value $350</b> 1.5-hour to 2-hour RTT® hypnotherapy session to address your main issue/habit/concern</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">sign up</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="pricingTable green">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-grimace"></i>
                        <div class="price-value"> $20.00 <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Anxity and Stress</h3>
                    <div class="pricing-content">
                        <ul>
                        <li><b>Value $99</b>RTT™ relaxation recording to introduce and prepare you for your Hypnotherapy session </li>
                            <li><b>Value $350</b> 1.5-hour to 2-hour RTT® hypnotherapy session to address your main issue/habit/concern</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">sign up</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-tired"></i>
                        <div class="price-value"> $30.00 <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">phobias and fears</h3>
                    <div class="pricing-content">
                        <ul>
                            <li><b>Value $99</b>RTT™ relaxation recording to introduce and prepare you for your Hypnotherapy session </li>
                            <li><b>Value $350</b> 1.5-hour to 2-hour RTT® hypnotherapy session to address your main issue/habit/concern</li>
                          
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">sign up</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable red">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> $40.00 <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Sleep Improvement</h3>
                    <div class="pricing-content">
                        <ul>
                        <li><b>Value $99</b>RTT™ relaxation recording to introduce and prepare you for your Hypnotherapy session </li>
                            <li><b>Value $350</b> 1.5-hour to 2-hour RTT® hypnotherapy session to address your main issue/habit/concern</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">sign up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a target="_blank" href="https://gosnippets.com" className="white-mode">MORE ></a>
</>
    
    // <section className="pricing py-5">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div className="card-head card-head-bg">
    //             {" "}
    //             <h5 className=" card-title text-white  text-center ">
    //               Deep relaxation
    //             </h5>
    //             <hr />
    //           </div>
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="5000"
    //             className=" card-body"
    //           >
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Single User
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 5GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="4000"
    //             className="card-body"
    //           >
    //             <h5 className=" price-title card-title text-uppercase text-center">
    //               anxity and stress
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="4000"
    //             className="card-body"
    //           >
    //             <h5 className="price-title card-title text-uppercase text-center">
    //               phobias and fears
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-lg-3">
    //         <div className="card mb-5 mb-lg-0">
    //           <div
    //             data-aos="fade-up"
    //             data-aos-duration="2000"
    //             className=" card-body"
    //           >
    //             <h5 className="price-title card-title  text-uppercase text-center">
    //               sleep improvement
    //             </h5>
    //             <h6 className="card-price text-center">
    //               $9<span className="period">/month</span>
    //             </h6>
    //             <hr />
    //             <ul className="fa-ul">
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 <strong>5 Users</strong>
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 50GB Storage
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Public Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Community Access
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Unlimited Private Projects
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Dedicated Phone Support
    //               </li>
    //               <li>
    //                 <span className="fa-li">
    //                   <i className="fas fa-check"></i>
    //                 </span>
    //                 Free Subdomain
    //               </li>
    //               <li className="text-muted">
    //                 <span className="fa-li">
    //                   <i className="fas fa-times"></i>
    //                 </span>
    //                 Monthly Status Reports
    //               </li>
    //             </ul>
    //             <div className="d-grid">
    //               {/* <a href="#" className="btn btn-primary text-uppercase">Button</a> */}
    //               <button className="home-button p-btn">TRY IT FREE</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    //     <PricingTable  highlightColor='#1976D2'>
    //     <PricingSlot className='priceBox'  onClick={''}   title='FREE' priceText='$0/month'
    //     >
    //         <PricingDetail> <b>5</b> therapy</PricingDetail>
    //         <PricingDetail> <b>2 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>1</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    // <PricingSlot  onClick={''} buttonText='' title='BASIC' priceText='$20/month'>
    //         <PricingDetail> <b>10</b> therapy</PricingDetail>
    //         <PricingDetail> <b>3 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>3</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>
    //     <PricingSlot  onClick={''}  title='PREMIUM' priceText='$50/month'>
    //         <PricingDetail> <b>15</b> therapy</PricingDetail>
    //         <PricingDetail> <b>5 types</b> audio</PricingDetail>
    //         <PricingDetail> <b>5</b> users</PricingDetail>
    //         <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
    //         <div className='price-btn'>
    //         <PricingDetail >
    //             <button className="home-button p-btn">TRY IT FREE</button>
    //         </PricingDetail>
    //         </div>
    //     </PricingSlot>

    //     </PricingTable>
  );
};

export default PriceSection;
