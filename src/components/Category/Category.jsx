import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuGamepad, LuHeadphones } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";

const Category = () => {
   return (
      <>
         <section className="py-[80px] bg-[#FAFAFA]">
            <div className="max-w-container mx-auto px-2">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="font-Roboto font-medium text-mainColor text-2xl tracking-wide capitalize">Browse By Category</h3>

                  <div className="flex">
                     <div className="text-2xl w-8 h-8 bg-transparent flex justify-center items-center duration-150 cursor-pointer hover:bg-[#EDEDED]">
                        <FaAngleLeft />
                     </div>
                     <div className="ml-4 text-2xl w-8 h-8 bg-transparent flex justify-center items-center duration-150 cursor-pointer hover:bg-[#EDEDED]">
                        <FaAngleRight />
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-12 gap-8">

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <IoPhonePortraitOutline className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Phones</h6>
                  </div>

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <BsSmartwatch className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Smart Watches</h6>
                  </div>

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <MdOutlineCameraAlt className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Cameras</h6>
                  </div>

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <LuHeadphones className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Headphones</h6>
                  </div>

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <HiOutlineDesktopComputer className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Computers</h6>
                  </div>

                  <div className="bg-[#EDEDED] rounded-2xl col-span-2 flex flex-col justify-center items-center py-9 cursor-pointer">
                     <LuGamepad className="text-4xl" />
                     <h6 className="font-Roboto font-medium text-mainColor text-base capitalize mt-2 select-none">Gaming</h6>
                  </div>

               </div>
            </div>
         </section>
      </>
   )
}

export default Category