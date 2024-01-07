import { LuSearch } from 'react-icons/lu';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline, IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
   return (
      <>
         <section className="py-3 bg-white">
            <div className="max-w-container mx-auto px-2 flex items-center">

               <img
                  className="select-none cursor-pointer"
                  src="images/Logo.png"
                  alt="Logo"
               />

               <div className="flex relative mx-8">
                  <input
                     className="w-[430px] text-sm text-SearchColor font-Roboto font-medium capitalize bg-[#F5F5F5] rounded-lg p-4 pl-12 border-transparent border-solid border-[2px] focus-visible:outline-none focus-visible:border-[#00000070]"
                     type="text"
                     placeholder="search"
                  />
                  <LuSearch className="text-xl text-SearchColor absolute top-1/2 -translate-y-1/2 translate-x-[1rem] cursor-pointer" />
               </div>

               <ul className="flex">
                  <li className="mr-3"><a
                     className="select-none px-4 pl-0 py-2 navActive text-base font-Roboto font-medium text-mainColor capitalize opacity-30 duration-300 hover:opacity-100"
                     href=""
                  >
                     home
                  </a></li>

                  <li className="mr-3"><a
                     className="select-none px-4 py-2 text-base font-Roboto font-medium text-mainColor capitalize opacity-30 duration-300 hover:opacity-100"
                     href=""
                  >
                     about
                  </a></li>

                  <li className="mr-3"><a
                     className="select-none px-4 py-2 text-base font-Roboto font-medium text-mainColor capitalize opacity-30 duration-300 hover:opacity-100"
                     href=""
                  >
                     contact us
                  </a></li>

                  <li className=""><a
                     className="select-none px-4 py-2 text-base font-Roboto font-medium text-mainColor capitalize opacity-30 duration-300 hover:opacity-100"
                     href=""
                  >
                     blog
                  </a></li>
               </ul>

               <div className="flex ml-auto">
                  <div className="w-8 h-8 flex justify-center items-center mr-5 cursor-pointer text-xl text-mainColor"><FaRegHeart /></div>

                  <div className="w-8 h-8 flex justify-center items-center mr-5 cursor-pointer text-2xl text-mainColor"><IoCartOutline /></div>

                  <div className="w-8 h-8 flex justify-center items-center cursor-pointer text-2xl text-mainColor"><IoPersonCircleOutline /></div>
               </div>

            </div>
         </section>
      </>
   )
}

export default Navbar