export const Henry = () => {
    const style2 = {
        backgroundImage:"url('https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600')",
      };
    return (
        <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover" >

        <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
  
{/* <!--Main Col--> */}
<div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


  <div class="p-4 md:p-12 text-center lg:text-left">
    {/* <!-- Image for mobile view--> */}
    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={style2}></div>
    
    <h1 class="text-3xl font-bold pt-8 lg:pt-0">Dr. Henry</h1>
    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"> Mental Health Counseling</p>
    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Credentials: Ph.D. in Counseling Psychology</p>
    
    <p class="pt-8 text-sm">Dr. Henry is a compassionate and experienced Mental Health Counselor with expertise in anxiety, depression, trauma, and relationship issues. He provides personalized support and evidence-based therapies to help clients achieve emotional well-being and lead fulfilling lives.</p>

    <div class="pt-12 pb-8">
      <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
        Book Appointment
      </button> 
    </div>

    
      
    
    {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}

  </div>

</div>


<div class="w-full lg:w-2/5">
    
  <img src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt='bgd'/>
  
</div>

</div>
    </div>
    );
  };

  export default Henry