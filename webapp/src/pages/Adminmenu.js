import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/menu.css";
import {Footer} from "../components/Footer";
import "./Adminmenu.css";
import { useNavigate } from "react-router-dom";

export const Adminmenu = () =>{
  const navigate = useNavigate();
  const [d, setd] = useState([]);
  const [n, setn] = useState([]);
  const setbookyes="Confirmed";
  const setbookno="Cancelled";

  useEffect( () => {
    Axios.get("http://localhost:3001/getdt").then((response) => {
      setd(response.data);
    });
  },[]);
  
  useEffect( ()=>{
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data.user[0].username);
      setn(response.data.user[0].username);
    });
  },[]);

  const rishi=(value)=>{
    if(value=="Cancelled"){
      return <div class="text-red-500 text-lg">Cancelled</div>;
    }
    if(value=="Confirmed"){
      return <div class="text-green-500 text-lg">Confirmed</div>;
    }
    return <div class="text-yellow-500 text-lg">Pending</div>;
  };

  const updateapponYes=(id)=>{
    Axios.put("http://localhost:3001/update",{
      book :setbookyes,
      id: id,
    }).then((res)=>{

    })
    alert("Conformed");
    window.location.href="http://localhost:3000/adminmenu";

  };

  const updateapponNo=(id)=>{
    Axios.put("http://localhost:3001/update1",{
      book :setbookno ,
      id: id,
    }).then((res)=>{

    })
    alert("Cancelled");
    window.location.href="http://localhost:3000/adminmenu";
  };

    return (
        <div>
     <div className="nav">
       < Navbar/> 
     </div>
 
        
      


        {d.map((val, key) => {
          if(val.conseller===n){
            return (
                  <div class="flex  w-full items-center justify-center m-4 flex-wrap ">
              <div class="w-full rounded-xl p-12 shadow-2xl shadow-green-200 md:w-8/12 lg:w-6/12 bg-white">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div class="grid-cols-1 lg:col-span-3">
                    <div class="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                      <svg id="logo-39" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" class="ccompli2"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" class="ccustom"></path>
                        <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" class="ccompli2" fill-opacity="0.3"></path>
                      </svg>
                    </div>
                  </div>
            
                  <div class="col-span-1 lg:col-span-9">
                    <div class="text-center lg:text-left">
                      <h2 class="text-2xl font-bold text-zinc-700">{val.name}</h2>
                      <p class="mt-2 font-semibold text-zinc-700">{val.date}</p>
                      <p class="mt-4 text-zinc-500">{val.time}</p>
                      <p class="mt-4 text-zinc-500">Status {rishi(val.book)}</p>
                    </div>
            
                    <div class="mt-6 grid grid-cols-2 gap-4">
                      <button onClick={()=>{updateapponYes(val.id)}} class="w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold  hover:bg-green-400 hover:text-white">YES</button>
                      <button onClick={()=>{updateapponNo(val.id)}}  class="w-full rounded-xl border-2 border-black-500 bg-white px-3 py-2 font-semibold  hover:bg-red-400 hover:text-white">NO</button>
            
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          }
        })}




      <Footer/> 
    </div>
    );
}