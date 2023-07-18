import React, { useEffect, useState } from "react";
import { Datepicker, Input, initTE,Timepicker } from "tw-elements";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Date = () => {
  const [uname,setuName]=useState("");
  const [inputdate,setInputdate]=useState("");
  const [inputtime,setInputtime]=useState("");
  const [dt,setdt]=useState([]);
  
  const appont = () => {
    Axios.post("http://localhost:3001/dt", {
      name: uname,
      time: inputtime,
      date: inputdate,
    }).then(() => {
      setdt([
        ...dt,
        {
          name: uname,
          time: inputtime,
          date: inputdate,
        }
      ]);
      notify();
    });
  };

  useEffect( () => {
    Axios.get("http://localhost:3001/getdt").then((response) => {
      setdt(response.data);
    });
  },[] );

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
   
  const onChange1=(event)=>{
    setInputdate(event.target.value);
    console.log(event.target.value);
  }
  const onChange2=(event)=>{
    setInputtime(event.target.value);
    console.log(event.target.value);
  }

  const notify = () => {toast.success('🦄 Appointment Booked Successfully!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  }

  return (
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
       <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setuName(event.target.value);
            console.log(event.target.value);
          }}
        />
         <div className="pt-12 pb-8">
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
