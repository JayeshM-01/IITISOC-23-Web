import { Navbar } from "../Navbar";
import React from "react";
import "../App.css";
import { Footer } from "../components/Footer";
import { Date } from "../components/Date-time";

export const Usermenu = () => {
  const style2 = {
    backgroundImage:
      "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600')",
  };


  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          {/* <!--Main Col--> */}
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <div
                className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={style2}
              ></div>

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">Lucas</h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  class="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                Counselor Education and Supervision
              </p>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Credentials: Ph.D. in Counseling Psychology
              </p>

              <p className="pt-8 text-sm">
                Totally optional short description about yourself, what you do
                and so on.
              </p>

              <Date/>

              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
            </div>
          </div>

          {/* <!--Img Col--> */}
          <div className="w-full lg:w-2/5">
            {/* <!-- Big profile image for side bar (desktop) --> */}
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="bgd-image"
            />
            {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
          </div>

          {/* <!-- Pin to top right corner --> */}
          {/* <div class="absolute top-0 right-0 h-12 w-18 p-4">
  <button class="js-change-theme focus:outline-none">🌙</button>
  </div> */}
        </div>
      </div>


      <Footer />
    </div>
  );
};