import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";
import { Date } from "../components/Date-time";

export const Lucas = () => {
  const style2 = {
    backgroundImage:
      "url('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600')",
  };
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
        <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          {/* <!--Main Col--> */}
          <div
            id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div class="p-4 md:p-12 text-center lg:text-left">
              {/* <!-- Image for mobile view--> */}
              <div
                class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={style2}
              ></div>

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">Dr. Lucas</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                {" "}
                Counselor Education and Supervision
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Credentials: Ph.D. in Counseling Psychology
              </p>

              <p class="pt-8 text-sm">
                Meet Dr. Lucas, an experienced counselor specializing in
                Education and Supervision. With his guidance, students,
                teachers, and professionals receive personalized support to
                navigate their educational and professional journeys
                effectively.
              </p>

              <Date/>

              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
            </div>
          </div>

          {/* <!--Img Col--> */}
          <div class="w-full lg:w-2/5">
            {/* <!-- Big profile image for side bar (desktop) --> */}
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="bgd"
            />
            {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lucas;
