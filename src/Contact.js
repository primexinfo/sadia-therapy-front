import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faLocationDot } from '@fortawesome/free-solid-svg-icons'
import{faPhone} from '@fortawesome/free-solid-svg-icons'
import{faAt} from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return<>
 
  {/* <section className='contact anim'>
    <div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section">Contact Form #02</h2>
				</div>
			</div>
    <div className='row conteiner anim'>
      <div className='col-md-6 col-sm-12'>
        <div className='row box'>
          <div className='icon'><FontAwesomeIcon icon={faPhone} />
          </div>
          <div className='text'>
            <h3>Phone</h3>
            <p >
              <a href="tel:+44 7944 946496">+44 7944 946496</a> 
            </p>
          </div>
        </div>
        <div className='row box'>
          <div className='col-md-4 col-sm-4 icon'>   <FontAwesomeIcon icon={faAt} /> </div>
          <div className='col-md-4 col-sm-4 text'>
            <h3>Email</h3>
            <a href="mail:sadia.hypnotherapy@gmail.com">sadia.hypnotherapy@gmail.com</a>
          </div>
        </div>
      </div>
      <div className='col-md-6 col-sm-12 contactForm'>
        <form>
          <h2>send message</h2>
          <div className='inputBox'>
            <input type="text" name='' required="required" />
            <span>Full Name</span>
          </div>
          <div className='inputBox'>
            <input type="text" name='' required="required" />
            <span>Email</span>
          </div>
          <div className='inputBox'>
            <textarea required='required'></textarea>
            <span>Type your message....</span>
          </div>
          <div className='inputBox'>
            <input type="submit" value='send' />
          </div>
        </form>
      </div>
    </div>

  </section> */}
  <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-2">
					<h2 class="heading-section">Contact with me</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row">
							<div class="col-lg-7 col-md-7 order-md-last d-flex align-items-stretch">
								<div class="contact-wrap w-100">
                <form>
                  <h2>Send message</h2>
                  <div className='form-group'>
                    <span>Full Name</span>
                    <input type="text" className='form-control' name='' required="required" />
                  </div>
                  <div className='form-group'>
                    <span>Email</span>
                    <input type="text" className='form-control' name='' required="required" />
                  </div>
                  <div className='form-group'>
                    <span>Write your message</span>
                    <textarea required='required' className='form-control'></textarea>
                  </div>
                  <div className='form-group'>
                    <input type="submit" className='btn btn-info' value='send' />
                  </div>
                </form>
								</div>
							</div>
							<div class="col-lg-5 col-md-5 d-flex align-items-stretch">
								<div class="info-wrap w-100">
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text">
					            <p><span>Phone:</span> <a href="tel://+447944946496">+44 7944 946496</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text">
					            {/* <p><span>Email:</span> <a href="mailto:sadia.hypnotherapy@gmail.com">sadia.hypnotherapy@gmail.com</a></p> */}
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </>
}

export default Contact