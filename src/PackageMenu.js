import React from 'react'
import './packagemenu.css'
import { NavLink } from "react-router-dom";
import './pricesection.css'
import { Button } from './Button';
const PackageMenu = () => {
  return (
  
  <li className='menu-item'>
    <a  className=" nav-link">PACKAGES</a>
    <div className="mega-menu blog">
      <div className="package-content">
        <div className="col">
          <a href="#" className="img-wrapper"
            ><span className="img"
              ><img
                src="https://picsum.photos/400?random=2"
                alt="Random Image" /></span
          ></a>
          <h2>1*30 minutes session</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
            quibusdam deserunt quis.
          </p>
          <div class="pricingTable-signup read-more">
                        <a href="/appointment">Book Now</a>
                    </div>
        </div>
        <div className="col">
          <a href="#" className="img-wrapper"
            ><span className="img"
              ><img
                src="https://picsum.photos/400?random=3"
                alt="Random Image" /></span
          ></a>
          <h2>1*60 minutes session</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
            quibusdam deserunt quis.
          </p>
          <div class="pricingTable-signup read-more">
                        <a href="/appointment">Book Now</a>
                    </div>
        </div>
        <div className="col">
          <a href="#" className="img-wrapper"
            ><span className="img"
              ><img
                src="https://picsum.photos/400?random=4"
                alt="Random Image" /></span
          ></a>
          <h2>3*60 minutes session</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
            quibusdam deserunt quis.
          </p>
          <div class="pricingTable-signup read-more">
                        <a href="/appointment">Book Now</a>
                    </div>
        </div>
        <div className="col">
          <a href="#" className="img-wrapper"
            ><span className="img"
              ><img
                src="https://picsum.photos/400?random=5"
                alt="Random Image" /></span
          ></a>
          <h2>5*60 minutes session</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dolorum vel quae quos culpa! Voluptate ipsum adipisci et
            quibusdam deserunt quis.
          </p>
          <div class="pricingTable-signup read-more">
                        <a href="/appointment">Book Now</a>
                    </div>
        </div>
      </div>
    </div>
  </li>

  
  )
}
    
   
  


export default PackageMenu