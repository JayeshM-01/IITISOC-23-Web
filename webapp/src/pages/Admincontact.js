import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import Axios from "axios";
import "./Admincontact.css";

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
    <div className="hgt">
      <div className="nav">
        <Navbar />
      </div>
    <div className="cardss">
      {msgList.map((val, key) => {
        return (
          <div className="card2">
            <div class="content">
              <p classname="heading">Name :{val.name} </p>
              <p classname="heading">Email : {val.Email}</p>
              <p className="para">Message : {val.msg}</p>
              <button
                class="btn "
                onClick={() => {
                  deleteMsg(val.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
       
        );
      })}
      </div>

      <Footer />
    </div>
  );
};
