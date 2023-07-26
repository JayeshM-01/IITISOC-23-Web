import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import "../pages/menu.css";
import { Footer } from "../components/Footer";

export const Useruserpage = () => {
  const [d, setd] = useState([]);
  const [n, setn] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/getdt").then((response) => {
      setd(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response.data.user[0].username);
      setn(response.data.user[0].username);

    });
  }, [])

  const rishi=(value)=>{
    if(value=="Cancelled"){
      return <div class="text-red-500 text-lg">Cancelled</div>;
    }
    if(value=="conformed"){
      return <div class="text-green-500 text-lg">Conformed</div>;
    }
    return <div class="text-yellow-500 text-lg">Pending</div>;
  };


  return (
    <div>
      <div className="nav">
        < Navbar />
      </div>
      <div className="consellers">
        <h2 className="h-mainheading">HISTORY</h2>
        <div className="c-querie">

          <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">

              {/* :TABLE HEAD */}
              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr class="border-b border-info-200 bg-info-100 text-neutral-800 ">
                  {/* ::Name */}
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">counseller Name</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col"> Name</th>
                  {/* ::Job Title */}
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Date</th>
                  {/* ::Email */}
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Time</th>
                  <th className="py-3 px-4 text-sm font-medium uppercase tracking-wide" scope="col">Status</th>
                </tr>
              </thead>


              {/* :TABLE BODY */}
              <tbody className="">
                {d.map((val, key) => {
                  if (val.name === n) {
                    return (
                      <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        {/* ::User Name */}
                        <td className="py-3 px-4 text-base text-gray-700 font-semibold">{val.conseller}</td>
                        <td className="py-3 px-4 text-base text-gray-700 font-semibold">{val.name}</td>
                        {/* ::User Job Title */}
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.date}</td>
                        {/* ::User Email */}
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{val.time}</td>
                        <td className="py-3 px-4 text-base text-gray-500 font-medium">{rishi(val.book)}</td>
                      </tr>

                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
export default Useruserpage