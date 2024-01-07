import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuHeadphones } from "react-icons/lu";
import { LuGamepad } from "react-icons/lu";

const Subnav = () => {
   return (
      <>
         <section className="bg-subNavBG">
            <div className="max-w-container mx-auto px-2 grid grid-cols-16">
               <div className="pl-1 text-base leading-8 font-Roboto font-medium text-subNavWhite flex items-center cursor-pointer py-2 hover:bg-[#00000060] hover:text-subNavHoverWhite duration-300 col-span-2 relative after:content-[''] after:absolute after:bg-subNavWhite after:h-[60%] after:w-[1px] after:top-1/2 after:right-0 after:-translate-y-1/2">
                  <MdPhoneIphone className="text-xl mr-2" />
                  <h5 className="select-none">Phones</h5>
               </div>

               <div className="text-base leading-8 font-Roboto font-medium text-subNavWhite flex items-center justify-center cursor-pointer py-2 hover:bg-[#00000060] hover:text-subNavHoverWhite duration-300 col-span-3 relative after:content-[''] after:absolute after:bg-subNavWhite after:h-[60%] after:w-[1px] after:top-1/2 after:right-0 after:-translate-y-1/2">
                  <HiOutlineDesktopComputer className="text-xl mr-2" />
                  <h5 className="select-none">Computers</h5>
               </div>

               <div className="text-base leading-8 font-Roboto font-medium text-subNavWhite flex items-center justify-center cursor-pointer py-2 hover:bg-[#00000060] hover:text-subNavHoverWhite duration-300 col-span-3 relative after:content-[''] after:absolute after:bg-subNavWhite after:h-[60%] after:w-[1px] after:top-1/2 after:right-0 after:-translate-y-1/2">
                  <BsSmartwatch className="text-xl mr-2" />
                  <h5 className="select-none">Smart Watches</h5>
               </div>

               <div className="text-base leading-8 font-Roboto font-medium text-subNavWhite flex items-center justify-center cursor-pointer py-2 hover:bg-[#00000060] hover:text-subNavHoverWhite duration-300 col-span-3 relative after:content-[''] after:absolute after:bg-subNavWhite after:h-[60%] after:w-[1px] after:top-1/2 after:right-0 after:-translate-y-1/2">
                  <MdOutlineCameraAlt className="text-xl mr-2" />
                  <h5 className="select-none">Cameras</h5>
               </div>

               <div className="text-base leading-8 font-Roboto font-medium text-subNavWhite flex items-center justify-center cursor-pointer py-2 hover:bg-[#00000060] hover:text-subNavHoverWhite duration-300 col-span-3 relative after:content-[''] after:absolute after:bg-subNavWhite after:h-[60%] after:w-[1px] after:top-1/2 after:right-0 after:-translate-y-1/2">
                  <LuHeadphones className="text-xl mr-2" />
                  <h5 className="select-none">Headphones</h5>
               </div>

               <div className="pr-1 text-base leading-8 font-Roboto font-medium text-white flex items-center justify-end opacity-50 cursor-pointer py-2 hover:bg-[#00000060] hover:opacity-80 duration-300 col-span-2">
                  <LuGamepad className="text-3xl mr-2" />
                  <h5 className="select-none">Games</h5>
               </div>
            </div>
         </section>
      </>
   )
}

export default Subnav