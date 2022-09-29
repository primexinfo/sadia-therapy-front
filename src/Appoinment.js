import React, { useState, useCallback, Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import "./appointment.css";
import { BASE_URL } from './api/api';

const Appoinment = () => {
  const d = new Date();
  const [appointment_name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [appointment_date, setDate] = useState(new Date());
  const [appointment_time, setTime] = useState(d.getTime());

  const handleDateChange = (date) => {
    setDate(date);
    setTime(date);
  };
  function saveAppointment(e) {
    
    e.preventDefault();
    let data = { appointment_name, phone, appointment_date, appointment_time };
    axios.post(`${BASE_URL}/set-appoint`, data)
      .then( res => 
        alert(res.data)
      ).catch(error => {
        console.log("ERROR:: ",error.response.data);
      });
  }
  return (
    <>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <div className="modal-content anim mb-4">
        <div className="modal-header ">
          <h5 className="modal-title" id="modalRequestLabel">
            Make an Appointment
          </h5>
        </div>
        <div className="modal-body">
          <form onSubmit={saveAppointment}>
            <div className="form-group">
              <label for="appointment_name" className="text-black">
                Full Name
              </label>

              <input
                onChange={(e) => {
                  setName(e.target.value, e.preventDefault());
                }}
                type="text"
                className="form-control"
                name="appointment_name"
                id="name"
                value={appointment_name}
                placeholder="Full Name"
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
                <div className="col-md-6 col-sm-4">
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
                <div className="col-md-6 col-sm-4">
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
            <div className="form-group float-right">
              <input
                type="submit"
                value="Make an Appointment"
                className="btn btn-primary sub-button"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appoinment;
