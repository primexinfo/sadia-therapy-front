import React, {useState} from 'react'
import './packagemenu.css'
import { NavLink } from "react-router-dom";
import Dropdown from 'react-multilevel-dropdown';
import './pricesection.css'
import "./infosection.css";
import { Button } from "./Button";

    const PackageMenu =()=>{

     return (
      <Dropdown
  title='PROGRAMS'
 className="nav-link"
 
>
  <Dropdown.Item
   className='item'
  >
   1*30 minutes session
   <Dropdown.Submenu>
   <div className="card package" >
   <img src="https://picsum.photos/400?random=1" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">DEEP RELAXATION SESSION</h5>
    <p className="card-text">Group sessions can be provided. <br />
Focusing on breathing <br />
Progressive muscle relaxation,<br /> tighten and relax muscles <br /> throughout the body <br /> Visualisation, imagine a relaxing <br /> place  and focus on the details. </p>
    <Button to={'/appointment'} className='home-button'>Book now</Button>
  </div>
  </div>
   </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item    className='item'>
  1*60 minutes session
    <Dropdown.Submenu>
    
    <div class="card package" >
  <img src="https://picsum.photos/400?random=2" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SINGLE SESSION</h5>
    <p class="card-text welcome-text">Exploration of the future <br /> the clients want and discovery <br /> of the strength that is already <br />
     within them.
Offering a twenty-five <br /> minutes hypnosis recording <br /> with instruction to listen <br /> to it every night. </p>
    <Button to={'/appointment'} className='home-button'>Book now</Button>
  </div>
</div>
     
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item    className='item'>
  3*60 minutes session
  <Dropdown.Submenu>
    
  <div class="card package" >
  <img src="https://picsum.photos/400?random=3" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">THREE SESSIONS PACKAGE</h5>
    <p className='card-text'>Exploration of the future <br /> the clients want and discovery <br /> of the strength they already possess.<br />
Offering  a twenty-five minutes<br /> hypnosis  recording.
Bespoke <br />hypnosis  audio can be offered if <br /> required.
  </p>
    <Button to={'/appointment'} className='home-button'>Book now</Button>
  </div>
</div>
     
    </Dropdown.Submenu>
  </Dropdown.Item>
  <Dropdown.Item    className='item'>
  5*60 minutes session
  <Dropdown.Submenu>
    
  <div class="card package" >
  <img src="https://picsum.photos/400?random=4" class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">FIVE SESSIONS PACKAGE</h5>
    <p className="card-text">Offering a twenty-five minutes <br /> hypnosis recording. <br />
Bespoke hypnosis audio can <br /> be offered if required. <br />
Unlimited support via WhatsApp <br /> or any preferred media.</p>
    <Button to={'/appointment'} className='home-button'>FREE DISCOVERY CALL</Button>
  </div>
  </div>

     
    </Dropdown.Submenu>
  </Dropdown.Item>

</Dropdown>
     )
    }
   
  


export default PackageMenu