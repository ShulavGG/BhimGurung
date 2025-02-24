import { useState } from 'react'
import logo from './assets/logo.svg'
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";


function App() {
  const [showContact, setShowContact] = useState(false);
  const [showBlog, setShowBlog] = useState(false);

  const handleNavigationClick = (e, section) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });

    if (section === 'contact') {
      setShowContact(true);
      setShowBlog(false);
    } else if (section === 'blog') {
      setShowBlog(true);
      setShowContact(false);
    } else {
      setShowContact(false);
      setShowBlog(false);
    }
  };

  return (
    <>
      <header id='home' className='flex flex-col'>
        {/* Top part */}
        <div className='flex items-center justify-between w-[90%] mx-auto'>
          <div>
            <img src={logo} alt="logo" className='h-16' />
          </div>
          <div className='flex items-center gap-9'>
            <div className='flex gap-3'>
              <img src="/facebook.png" alt="" className='w-9' />
              <img src="/instagram.png" alt="" className='w-9' />
              <img src="/linkedin.png" alt="" className='w-9' />
            </div>
            <div className='flex gap-4'>
              <p className='flex gap-1 items-center text-sm'>
                <IoCallOutline />
                <span>
                  (402) 312 1435
                </span>
              </p>
              <p className='flex gap-1 items-center text-sm'>
                <IoMailOpenOutline />
                <span>
                  contact@bhimgurung.org
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom part */}
        <nav className='w-screen  bg-gray-700 text-white left-0'>
          <ul className='flex gap-10 w-[90%] mx-auto px-2 py-7 font-semibold text-2xl'>
            {[
              { label: 'Home', to: '#home' },
              { label: 'About', to: '#about' },
              { label: 'Team', to: '#team' },
              { label: 'Services & Firm', to: '#service' },
              { label: 'Contact', to: 'contact' },
              { label: 'Blog', to: 'blog' },
            ].map((item) => (
              <a
                href={item.to}
                onClick={(e) => handleNavigationClick(e, item.to.replace('#', ''))}
              >

                <li key={item.label}>
                  <span>{item.label}</span>
                </li>
              </a>
            ))
            }
          </ul>
        </nav>
      </header>
      {/* main  */}
      {!showContact && !showBlog && (
        <main >
          {/* Home */}
          <section className='w-[80%] mx-auto'>
            <div className='flex gap-6 my-24'>
              {/* Left side  */}
              <div className='flex flex-col gap-14 text-4xl w-[50%] text-[#EF3D23]
        font-semibold'>
                <h3 className='border-b border-black'>MEET THE TEAM</h3>
                <h3 className='border-b border-black'>WHAT WE OFFER</h3>
                <h3 className='border-b border-black'>WE WORK WITH THE BEST</h3>
                <h3 className='border-b border-black'>FAQ</h3>
                <button className='bg-[#EF3D23] text-white mr-12 py-6'>
                  REQUEST FOR APPOINTMENT
                </button>
              </div>
              {/* Right side */}
              <div className='w-[50%] border-2 border-black flex justify-center items-center'>
                <img src="" alt="Image" />
              </div>
            </div>

          </section>
          {/* About  */}
          <>
            <section id='about' className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto flex'>
                <div className='w-[70%] flex gap-6 flex-col'>
                  <h2 className='text-6xl'>About Us</h2>
                  <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                  </p>
                </div>
                <div className='w-[30%] flex gap-6 justify-center items-center'>
                  <div className='w-80 h-80 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image2" />
                  </div>
                </div>
              </div>
            </section>
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto flex flex-row-reverse'>
                <div className='w-[60%] flex gap-6 flex-col'>
                  <h2 className='text-6xl'>Our Mission</h2>
                  <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                  </p>
                </div>
                <div className='w-[40%] flex gap-6 justify-center items-center border-2 border-black mr-16'>
                  <img src=" " alt="Image3" />
                </div>
              </div>
            </section>
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto flex'>
                <div className='w-[60%] flex gap-6 flex-col'>
                  <h2 className='text-6xl'>Our Story</h2>
                  <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                  </p>
                </div>
                <div className='w-[40%] flex gap-6 justify-center items-center border-2 border-black ml-16'>
                  <img src=" " alt="Image4" />
                </div>
              </div>
            </section>
            {/* Team  */}
            <section id='team' className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto space-y-6'>
                {/* top  */}
                <div className='space-y-6'>
                  <h2 className='text-6xl font-semibold'>Meet The Team Leader</h2>
                  <p className='text-xl'>
                    The leadership team consists of upper-level executives who run the  business's daily operations. Together, they guide the business and its  employees toward fulfilling the company's better future. The leadership  team meets from time to time to discuss strategy, make decisions, solve  problems, and set goals.
                  </p>
                </div>
                {/* bottom  */}
                <div className='flex gap-6'>
                  {/* 1st */}
                  <div className='w-[25%] h-64 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image5 Team Leader Photo" />
                  </div>
                  {/* 2nd */}
                  <div className='flex gap-6 w-[75%]'>
                    <div className='w-[70%] space-y-3'>
                      <h3 className='text-4xl'>Full Name</h3>
                      <p className='text-xl'>(CEO)</p>
                      <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                      </p>
                      <button className='bg-[#EF3D23] text-white py-3 text-3xl w-full mr-10'>
                        Request For Appointment
                      </button>
                    </div>
                    <div className='w-[30%] flex flex-col gap-6 items-center justify-center'>
                      <div className='border-l-2 border-[#EF3D23] pl-10 py-10 text-xl text-[#EF3D23]'>
                        <p>EMAIL OF THE PERSON</p>
                        <p>OFFICE NUMBER</p>
                        <p>MOBILE NUMBER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 1 */}
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto'>
                <div className='flex gap-6 flex-row-reverse'>
                  {/* 1st */}
                  <div className='w-[25%] h-64 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image6" />
                  </div>
                  {/* 2nd */}
                  <div className='flex gap-6 w-[75%]'>
                    <div className='w-[70%] space-y-3'>
                      <h3 className='text-4xl'>Full Name</h3>
                      <p className='text-xl'>(Ph.D.,MS.,MCEC.,LLB.)</p>
                      <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                      </p>
                      <button className='bg-[#EF3D23] text-white py-3 text-3xl w-full mr-10'>
                        Request For Appointment
                      </button>
                    </div>
                    <div className='w-[30%] flex flex-col gap-6 items-center justify-center'>
                      <div className='border-l-2 border-[#EF3D23] pl-10 py-10 text-xl text-[#EF3D23]'>
                        <p>EMAIL OF THE PERSON</p>
                        <p>OFFICE NUMBER</p>
                        <p>MOBILE NUMBER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 2 */}
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto'>
                <div className='flex gap-6'>
                  {/* 1st */}
                  <div className='w-[25%] h-64 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image7" />
                  </div>
                  {/* 2nd */}
                  <div className='flex gap-6 w-[75%]'>
                    <div className='w-[70%] space-y-3'>
                      <h3 className='text-4xl'>Full Name</h3>
                      <p className='text-xl'>(Position in Company)</p>
                      <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                      </p>
                      <button className='bg-[#EF3D23] text-white py-3 text-3xl w-full mr-10'>
                        Request For Appointment
                      </button>
                    </div>
                    <div className='w-[30%] flex flex-col gap-6 items-center justify-center'>
                      <div className='border-l-2 border-[#EF3D23] pl-10 py-10 text-xl text-[#EF3D23]'>
                        <p>EMAIL OF THE PERSON</p>
                        <p>OFFICE NUMBER</p>
                        <p>MOBILE NUMBER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 3 */}
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto'>
                <div className='flex gap-6 flex-row-reverse'>
                  {/* 1st */}
                  <div className='w-[25%] h-64 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image8" />
                  </div>
                  {/* 2nd */}
                  <div className='flex gap-6 w-[75%]'>
                    <div className='w-[70%] space-y-3'>
                      <h3 className='text-4xl'>Full Name</h3>
                      <p className='text-xl'>(Ph.D.,MS.,MCEC.,LLB.)</p>
                      <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                      </p>
                      <button className='bg-[#EF3D23] text-white py-3 text-3xl w-full mr-10'>
                        Request For Appointment
                      </button>
                    </div>
                    <div className='w-[30%] flex flex-col gap-6 items-center justify-center'>
                      <div className='border-l-2 border-[#EF3D23] pl-10 py-10 text-xl text-[#EF3D23]'>
                        <p>EMAIL OF THE PERSON</p>
                        <p>OFFICE NUMBER</p>
                        <p>MOBILE NUMBER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* 4 */}
            <section className='w-screen bg-[#f9f9f9]  py-20 mb-10 shadow-md'>
              <div className='w-[80%] mx-auto'>
                <div className='flex gap-6'>
                  {/* 1st */}
                  <div className='w-[25%] h-64 border-2 border-black flex justify-center items-center'>
                    <img src=" " alt="Image9" />
                  </div>
                  {/* 2nd */}
                  <div className='flex gap-6 w-[75%]'>
                    <div className='w-[70%] space-y-3'>
                      <h3 className='text-4xl'>Full Name</h3>
                      <p className='text-xl'>(Position in Company)</p>
                      <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco la
                      </p>
                      <button className='bg-[#EF3D23] text-white py-3 text-3xl w-full mr-10'>
                        Request For Appointment
                      </button>
                    </div>
                    <div className='w-[30%] flex flex-col gap-6 items-center justify-center'>
                      <div className='border-l-2 border-[#EF3D23] pl-10 py-10 text-xl text-[#EF3D23]'>
                        <p>EMAIL OF THE PERSON</p>
                        <p>OFFICE NUMBER</p>
                        <p>MOBILE NUMBER</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
          {/* Service */}
          <section id="service" className="w-screen bg-[#3c3c3c] py-20 mb-10 shadow-md flex justify-center">
            <div className="w-[85%]">
              <h2 className="text-white text-4xl font-bold text-center mb-10">OUR SERVICES</h2>
              <div className="grid grid-cols-3 gap-6">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="bg-[#222] text-white p-6 rounded-lg shadow-lg text-center">
                    <div className="flex justify-center mb-4">
                      <img src="/your-logo-path.png" alt="Logo" className="h-16" />
                    </div>
                    <h3 className="font-bold text-lg">UNITED FAMILY</h3>
                    <p className="text-sm">Home Health Care LLC</p>
                    <p className="text-sm italic mb-4">Love - Care - Happiness</p>
                    <h4 className="font-bold">Healthcare</h4>
                    <p className="text-sm mt-2">
                      United Family Home Healthcare offers compassionate, non-medical home care in Nebraska, promoting
                      independence and safety for adults and children. Call (402) 783-8385 to learn more or simply{" "}
                      <a href="#" className="text-red-500 hover:underline">click here</a>.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-6xl mx-auto py-12 text-center">
              {/* Header Section */}
              <h2 className="text-5xl font-bold">Visit Our Firm</h2>
              <p className="text-gray-500 text-xl">We are passionate about our work</p>

              {/* Logos Section */}
              <div className="flex justify-center space-x-6 my-6">
                <img src="/logo1.jpeg" alt="Logo 1" className="h-32" />
                <img src="/logo1.jpeg" alt="Logo 2" className="h-32" />
                <img src="/logo1.jpeg" alt="Logo 3" className="h-32" />
                <img src="/logo1.jpeg" alt="Logo 4" className="h-32" />
              </div>

              {/* Divider */}
              <hr className="border-t border-gray-300 my-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side Links */}
                <div className="text-left space-y-7 text-4xl">
                  <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                    MEET THE TEAM
                  </p>
                  <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                    WHAT WE OFFER
                  </p>
                  <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                    WE WORK WITH THE BEST
                  </p>
                  <p className="text-red-500 cursor-pointer hover:text-red-700">FAQ</p>
                </div>

                {/* Right Side Branding & Button */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-red-500">
                    <img src={logo} alt="Bhim Gurung logo" />
                  </div>
                  <button className="mt-4 px-10 py-4 bg-red-500 text-white text-3xl  shadow-md hover:bg-red-700">
                    REQUEST FOR APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
      {/* contact */}
      {showContact && !showBlog && (
        <main className=''>
          <div className="max-w-[85%] mx-auto p-6 shadow" >
            <h2 className="text-5xl font-bold">Contact</h2>
            <p className="text-gray-600 text-xl mt-2">
              You may send your message to the CEO of Global Business Management & Investment Company using this platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-6 text-xl ">
              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">Subject *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700">Message *</label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                  Send Message
                </button>
              </div>

              {/* Contact Details */}
              <div className="border-l pl-20">
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">United States of America</p>

                <p className="font-semibold mt-4">Phone:</p>
                <p className="text-gray-600">+1 (402) 3031435</p>

                <p className="font-semibold mt-4">Email:</p>
                <p className="text-gray-600">contact@bhinguru.org</p>
              </div>
            </div>
          </div>
          {/* bottom  */}
          <div className="max-w-6xl mx-auto py-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side Links */}
              <div className="text-left space-y-7 text-4xl">
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  MEET THE TEAM
                </p>
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  WHAT WE OFFER
                </p>
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  WE WORK WITH THE BEST
                </p>
                <p className="text-red-500 cursor-pointer hover:text-red-700">FAQ</p>
              </div>

              {/* Right Side Branding & Button */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-500">
                  <img src={logo} alt="Bhim Gurung logo" />
                </div>
                <button className="mt-4 px-10 py-4 bg-red-500 text-white text-3xl  shadow-md hover:bg-red-700">
                  REQUEST FOR APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
      {/* blog */}
      {showBlog && !showContact && (
        <main>
          <div className='grid grid-rows-3 w-[75%] mx-auto space-y-10 pt-10'>
              <div className='w-full'>
                <img src="/blog.jpeg" alt="" className='cover'/>
              </div>
              <div className='w-full'>
                <img src="/blog.jpeg" alt="" className='cover'/>
              </div>
              <div className='w-full'>
                <img src="/blog.jpeg" alt="" className='cover'/>
              </div>
          </div>
          <div className="max-w-6xl mx-auto py-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side Links */}
              <div className="text-left space-y-7 text-4xl">
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  MEET THE TEAM
                </p>
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  WHAT WE OFFER
                </p>
                <p className="text-red-500 border-b pb-2 cursor-pointer hover:text-red-700">
                  WE WORK WITH THE BEST
                </p>
                <p className="text-red-500 cursor-pointer hover:text-red-700">FAQ</p>
              </div>

              {/* Right Side Branding & Button */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-500">
                  <img src={logo} alt="Bhim Gurung logo" />
                </div>
                <button className="mt-4 px-10 py-4 bg-red-500 text-white text-3xl  shadow-md hover:bg-red-700">
                  REQUEST FOR APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default App
