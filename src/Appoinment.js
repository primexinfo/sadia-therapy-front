import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import "./appointment.css";
import AnimatedText from 'react-animated-text-content';
import { BASE_URL } from './api/api';
import axios from "axios";
import { notify } from "react-notify-toast";

const Appoinment = () => {
  document.title = "Appointment";
  const d = new Date();
  const [appointment_name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [appointment_date, setDate] = useState(new Date());
  const [appointment_time, setTime] = useState(d.getTime());

  const navigate = useNavigate()
  const handleDateChange = (date) => {
    setDate(date);
    setTime(date);
  };

  function saveAppointment(e) {
    
    e.preventDefault();
    let data = { appointment_name, phone, email, appointment_date, appointment_time, amount  };
    axios.post(`${BASE_URL}/set-appoint`, data)
      .then( res => 
        {
          let myColor = { background: 'green', text: "#FFFFFF" };
          notify.show("Success! Please pay now.", "custom", 5000, myColor);
          navigate("/payment-after-appointment",{state:{amount:amount, email:email}})
          
        }
      ).catch(error => {
        console.log("ERROR:: ",error.response.data);
      });
  }
  return (
    <>
      
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <div className="row rml justify-content-center">
        <div className="col-sm-12 col-md-6">
            <div className="modal-content anim mb-4">
              <div className="modal-header p-4">
                <h3 className="modal-title" id="modalRequestLabel">
                  Make an Appointment
                </h3>
              </div>
              <div className="modal-body">
                <form onSubmit={saveAppointment}>
                  <select className="form-control mb-2" name="amount" onChange={(e) => {
                      setAmount(e.target.value);
                    }
                  }>
                    <option selected={false} required>SELECT YOUR PACKAGE</option>
                    <option value="4000">RELAXATION SESSION £40</option>
                    <option value="12000">SINGLE SESSION £120</option>
                    <option value="30000">THREE SESSION PACKAGE £300</option>
                    <option value="50000">FIVE SESSION PACKAGE £500</option>
                  </select>
                  <div className="form-group">
                    <input
                      onChange={(e) => {
                        setName(e.target.value, e.preventDefault());
                      }}
                      type="text"
                      className="form-control"
                      name="appointment_name"
                      id="name"
                      value={appointment_name}
                      placeholder="Enter Your Full Name"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value, e.preventDefault());
                      }}
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      value={email}
                      placeholder="Enter Your Email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value, e.preventDefault());
                      }}
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      value={phone}
                      placeholder="Input Phone Number"
                      required=""
                    />
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                      <label for="appointment_name" className="text-black">
                        Select Date
                      </label>
                      <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            onChange={handleDateChange}
                            format="dd/MM/yyy"
                            margin="normal"
                            id="date"
                            label-="Date picker"
                            value={appointment_date}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                      <div className="col-sm-12 col-md-6">
                      <label for="appointment_name" className="text-black">
                        Select Time
                      </label>
                      <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardTimePicker
                            margin="normal"
                            id="time"
                            label-="Date picker"
                            value={appointment_time}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </div>
                  </div>
                  {/* <Link className="form-group w-100"> */}
                    <input
                      type="submit"
                      value="Go to Payment"
                      className="btn btn-primary sub-button btn-block"
                    />
                  {/* </Link> */}
                </form>
                
              </div>
          </div>
        </div>
      </div>
      
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph explore-text ml-5"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          > 
              A mobile number and email must be supplied at the time of booking so the relevant forms can be sent out prior to each appointment.
          </AnimatedText>
    </>
  );
};

export default Appoinment;
