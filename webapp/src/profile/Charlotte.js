import { Navbar } from "../Navbar";
import { Footer } from "../components/Footer";
import { Date } from "../components/Date-time";

export const Charlotte = () => {
  const style2 = {
    backgroundImage:
      "url('https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=600')",
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

              <h1 class="text-3xl font-bold pt-8 lg:pt-0">Dr. Charlotte</h1>
              <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                {" "}
                Addiction Counseling
              </p>
              <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                Credentials: Ph.D. in Addiction Counseling
              </p>

              <p class="pt-8 text-sm">
                Dr. Charlotte is a highly experienced addiction counselor
                specializing in helping individuals overcome addiction. With a
                compassionate and non-judgmental approach, she provides
                personalized counseling, incorporating evidence-based therapies
                to support clients on their path to recovery. Her dedication and
                expertise empower individuals to make positive changes and live
                healthier, more fulfilling lives.
              </p>

              <Date/>

              {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}
            </div>
          </div>

          <div class="w-full lg:w-2/5">
            <img
              src="https://images.pexels.com/photos/8420889/pexels-photo-8420889.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
              alt="Profile"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Charlotte;
