import React, { useEffect } from "react";
import { Button } from "./Button";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./pricesection.css";
import { NavLink } from "react-router-dom";
import { SiHyperledger } from "react-icons/si";

// import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

const PriceSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up" class="demo">
        <div class="container price-container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable">
                <div class="pricingTable-header">
                  <div class="price-value">
                    {" "}
                    ₤40.00 <span class="month">relaxation session</span>{" "}
                  </div>
                </div>

                <div class="pricing-content">
                  <ul>
                    <li>
                      Deep relaxation sessions provide a warm space so that the
                      clients take control of finding a solution while relaxing
                      from the comfort of their couch. Sessions are designed to
                      calm both mind and body.{" "}
                    </li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a href="/appointment">Free Discovery Call</a>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-6">
              <div class="pricingTable green">
                <div class="pricingTable-header">
                  <div class="price-value">
                    {" "}
                    ₤120.00 <span class="month">single session</span>{" "}
                  </div>
                </div>

                <div class="pricing-content">
                  <ul>
                    <li>
                      Single Sessions are ideal for working with stress,
                      limiting beliefs, and anxiety. Time invested mostly to
                      build a rapport by taking personal information and helping
                      the client to understand how our mind works.
                    </li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a
                    // data-toggle="modal"
                    // data-target="#staticBackdrop"
                    href="/appointment"
                  >
                    Free Discovery Call
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable blue">
                <div class="pricingTable-header">
                  <div class="price-value">
                    {" "}
                    ₤300.00 <span class="month">
                      three session package
                    </span>{" "}
                  </div>
                </div>

                <div class="pricing-content">
                  <ul>
                    <li>
                      This package is suitable for anyone who wants to get
                      in-depth and continuous guidance to overcome the
                      challenges they are facing like relationship issues,
                      depression, chronic pain, etc.{" "}
                    </li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a href="/appointment">Free Discovery Call</a>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="pricingTable red">
                <div class="pricingTable-header">
                  <div class="price-value">
                    {" "}
                    ₤500.00 <span class="month">five session package</span>{" "}
                  </div>
                </div>

                <div class="pricing-content">
                  <ul>
                    <li>
                      This package is ideal for someone who wants a long-lasting
                      transformation such as weight management, treating
                      insomnia, etc. The first session is involved to build a
                      rapport by taking information .
                    </li>
                  </ul>
                </div>
                <div class="pricingTable-signup">
                  <a href="/appointment">Free Discovery Call</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        {" "}
        <div class="modal-dialog">
          {" "}
          <div class="modal-content">
            {" "}
            <div class="modal-body">
              {" "}
              <div class="text-right">
                {" "}
                <i class="fa fa-close close" data-dismiss="modal"></i>{" "}
              </div>{" "}
              <div class="tabs mt-3">
                {" "}
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  {" "}
                  <li class="nav-item" role="presentation">
                    {" "}
                    <a
                      class="nav-link active"
                      id="visa-tab"
                      data-toggle="tab"
                      href="#visa"
                      role="tab"
                      aria-controls="visa"
                      aria-selected="true"
                    >
                      {" "}
                      <img
                        src="https://i.imgur.com/sB4jftM.png"
                        width="80"
                      />{" "}
                    </a>{" "}
                  </li>{" "}
                  <li class="nav-item" role="presentation">
                    {" "}
                    <a
                      class="nav-link"
                      id="paypal-tab"
                      data-toggle="tab"
                      href="#paypal"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected="false"
                    >
                      {" "}
                      <img
                        src="https://i.imgur.com/yK7EDD1.png"
                        width="80"
                      />{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>{" "}
                <div class="tab-content" id="myTabContent">
                  {" "}
                  <div
                    class="tab-pane fade show active"
                    id="visa"
                    role="tabpanel"
                    aria-labelledby="visa-tab"
                  >
                    {" "}
                    <div class="mt-4 mx-4">
                      {" "}
                      <div class="text-center">
                        {" "}
                        <h5>Credit card</h5>{" "}
                      </div>{" "}
                      <div class="form mt-3">
                        {" "}
                        <div class="inputbox">
                          {" "}
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            required="required"
                          />{" "}
                          <span>Cardholder Name</span>{" "}
                        </div>{" "}
                        <div class="inputbox">
                          {" "}
                          <input
                            type="text"
                            name="name"
                            min="1"
                            max="999"
                            class="form-control"
                            required="required"
                          />{" "}
                          <span>Card Number</span> <i class="fa fa-eye"></i>{" "}
                        </div>{" "}
                        <div class="d-flex flex-row">
                          {" "}
                          <div class="inputbox">
                            {" "}
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              class="form-control"
                              required="required"
                            />{" "}
                            <span>Expiration Date</span>{" "}
                          </div>{" "}
                          <div class="inputbox">
                            {" "}
                            <input
                              type="text"
                              name="name"
                              min="1"
                              max="999"
                              class="form-control"
                              required="required"
                            />{" "}
                            <span>CVV</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div class="px-5 pay">
                          {" "}
                          <button class="btn btn-success btn-block">
                            Add card
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div
                    class="tab-pane fade"
                    id="paypal"
                    role="tabpanel"
                    aria-labelledby="paypal-tab"
                  >
                    {" "}
                    <div class="px-5 mt-5">
                      {" "}
                      <div class="inputbox">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          required="required"
                        />{" "}
                        <span>Paypal Email Address</span>{" "}
                      </div>{" "}
                      <div class="pay px-5">
                        {" "}
                        <a
                          href="https://www.paypal.com/paypalme/sat1200?country.x=GB&locale.x=en_GB"
                          class="btn btn-primary btn-block"
                        >
                          Pay Now
                        </a>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
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
