import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./menu.css";

export const Admincontact = () => {
  const [msgList, setmsgList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/msg").then((response) => {
      setmsgList(response.data);
    });
  }, []);

  const deleteMsg = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setmsgList(
        msgList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="consellers">
        <h2 className="h-mainheading">Queries</h2>
        <div className="c-querie">
          <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
            <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
              {/* :TABLE HEAD */}
              <thead className="min-w-full bg-gray-100 text-left text-gray-700">
                <tr class="border-b border-info-200 bg-info-100 text-neutral-800 ">
                  {/* ::Name */}
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Client-Name
                  </th>
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    {" "}
                    Email
                  </th>
                  {/* ::Job Title */}
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Message
                  </th>
                  {/* ::Email */}
                  <th
                    className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
                    scope="col"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              {/* :TABLE BODY */}
              <tbody className="">
                {msgList.map((val, key) => {
                  return (
                    <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                      {/* ::User Name */}
                      <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                        {val.name}
                      </td>
                      <td className="py-3 px-4 text-base text-gray-700 font-semibold">
                        {val.Email}
                      </td>
                      {/* ::User Job Title */}
                      <td className="py-3 px-4 text-base text-gray-500 font-medium">
                        {val.msg}
                      </td>
                      {/* ::User Email */}
                      <td className="py-3 px-4 text-base text-gray-500 font-medium">
                        <button
                          className="c-d-btn"
                          onClick={() => {
                            deleteMsg(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
