import React, { useEffect } from "react";
import { Button } from "./Button";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import './pricesection.css'
import { NavLink } from "react-router-dom";

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
                        <div class="price-value"> ₤40.00 <span class="month">relaxation session</span> </div>
                    </div>
                    <h3 class="heading">Deep relaxation</h3>
                    <div class="pricing-content">
                        <ul>
                        <li>Focusing on your breathing

Progressive muscle relaxation — tighten and relax your muscles throughout your body

Visualisation — imagine a relaxing place and focus on the details</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                       <a href="/appointment">go for a free call</a>
                      
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="pricingTable green">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-grimace"></i>
                        <div class="price-value"> ₤120.00 <span class="month">single session</span> </div>
                    </div>
                    <h3 class="heading">Anxity and Stress</h3>
                    <div class="pricing-content">
                        <ul>
                        <li>A hypnotic approach to BFRBs may involve: Reducing stress. Stress and anxiety are common triggers for BFRBs. Hypnosis helps to regulate the autonomic nervous system by increasing parasympathetic activity.</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-tired"></i>
                        <div class="price-value"> ₤300.00 <span class="month">three session package</span> </div>
                    </div>
                    <h3 class="heading">phobias and fears</h3>
                    <div class="pricing-content">
                        <ul>
                            <li>

Break and update these patterns of behaviour and take full control of your life.
 tools and techniques of hypnotherapy to transform your subconscious patterns and eradicate negative thoughts. </li>
                          
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable red">
                    <div class="pricingTable-header">
                    <i class="fa-solid fa-face-smile-beam"></i>
                        <div class="price-value"> ₤500.00 <span class="month">five session package</span> </div>
                    </div>
                    <h3 class="heading">Sleep Improvement</h3>
                    <div class="pricing-content">
                        <ul>
                        <li>Realise that sound sleep is possible without medications.

Learn how hypnosis can help you calm your mind and stop overthinking in bed.

Discover how to shift your behaviour and build better sleep patterns.    
</li>
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="/appointment">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a target="_blank" href="#" className="white-mode">MORE ></a>
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
