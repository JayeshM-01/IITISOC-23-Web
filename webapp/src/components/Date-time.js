import React, { useEffect, useState } from "react";
import { Datepicker, Input, initTE, Timepicker } from "tw-elements";
import Axios from "axios";
import "../App.css"

export const Date = () => {
  const [uname, setuName] = useState("");
  const [conseller, setcName] = useState("");
  const [inputdate, setInputdate] = useState("");
  const [inputtime, setInputtime] = useState("");
  const [dt, setdt] = useState([]);

  const appont = () => {
    if(uname=="" || conseller=="" || inputdate=="" || inputtime==""){
      alert('Please fill out all fields before submitting');
        return;
    }
    Axios.post("http://localhost:3001/dt", {
      name: uname,
      conseller:conseller,
      time: inputtime,
      date: inputdate,
    }).then(() => {
      setdt([
        ...dt,
        {
          name: uname,
          conseller:conseller,
          time: inputtime,
          date: inputdate,
        }
      ]);
      window.location.href='http://localhost:3000/';
      alert("Appoinment booked");
      
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getdt").then((response) => {
      setdt(response.data);
    });
  }, []);

  useEffect(() => {
    initTE({ Datepicker, Input });
    const datepickerDisablePast = document.getElementById(
      "datepicker-disable-past"
    );
    new Datepicker(datepickerDisablePast, {
      disablePast: true,
    });
  }, []);
  useEffect(() => {
    initTE({ Input, Timepicker });

  }, []);

  const onChange1 = (event) => {
    setInputdate(event.target.value);
    console.log(event.target.value);
  }
  const onChange2 = (event) => {
    setInputtime(event.target.value);
    console.log(event.target.value);
  }


  return (
    <div>
      <div className="pt-12 pb-8">
        <label >Name:
          <input
            type="text"
            className="b-counseller"
            onChange={(event) => {
              setuName(event.target.value);
              console.log(event.target.value);
            }}
          /></label>
        <label for="pet-select" >
          <select onInput={(e)=>{
            setcName(e.target.value);
            console.log(e.target.value);
          }} name="pets" id="pet-select" className="b-counseller-select">
            <option value="">--Please choose an Conseller--</option>
            <option value="lucas">lucas</option>
            <option value="liver">oliver</option>
            <option value="hamster">agastha</option>
            <option value="parrot">alexander</option>
            <option value="spider">charlotte</option>
            <option value="goldfish">ethan</option>
            <option value="goldfish">henry</option>
            <option value="goldfish">hazel</option>
          </select>
        </label>
        <div
          class="relative mb-3"
          id="datepicker-disable-past"
          data-te-input-wrapper-init
        >
          <input
            value={inputdate}
            onInput={onChange1}
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder="Select a date"
          />
          <label
            for="floatingInput"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Select a date
          </label>
        </div>

        <div
          class="relative"
          data-te-timepicker-init
          data-te-input-wrapper-init
        >
          <input
            value={inputtime}
            onInput={onChange2}
            type="text"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="form1"
          />
          <label
            for="form1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
          >
            Select a time
          </label>
        </div>

        <button onClick={appont} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full max-w-[50%]">
          Book Appointment
        </button>
      </div>
    </div>
  );
};
