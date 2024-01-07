import { FaTwitter, FaFacebookF, FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
   return (
      <>
         <section className="py-104px bg-mainColor">
            <div className="max-w-container mx-auto px-2">
               {/* footer contact */}
               <div className="flex justify-between">
                  <div className="">
                     <img
                        src="images/footerLogo.png"
                        alt="footerLogo"
                        className="mb-6"
                     />
                     <p className="font-Roboto font-medium text-sm leading-[178%] text-white w-96">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                  </div>

                  <div className="flex">
                     <div className="w-72">
                        <h5 className="font-Roboto font-bold text-base text-white capitalize mb-4 select-none">services</h5>
                        <ul className="">
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize select-none">bonus program</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize select-none">gift cards</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize select-none">credit and payment</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize select-none">service contacts</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize">non-cash account</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] capitalize">payment</a></li>
                        </ul>
                     </div>

                     <div className="ml-8 w-72">
                        <h5 className="font-Roboto font-bold text-base text-white mb-4 select-none">Assistance to the buyer</h5>
                        <ul className="">
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none">Find an order</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none ">Terms of delivery</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none">Exchange and return of goods</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none">Guarantee</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none">Frequently asked questions</a></li>
                           <li className=""><a href="#" className="font-Roboto font-light text-sm leading-[32px] text-[#CFCFCF] select-none">Terms of use of the site</a></li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* footer social icons */}
               <div className="mt-6 flex items-center">
                  <div className="text-lg text-white mr-8  cursor-pointer"><FaTwitter /></div>
                  <div className="text-lg text-white mr-8  cursor-pointer"><FaFacebookF /></div>
                  <div className="text-lg text-white mr-8  cursor-pointer"><FaTiktok /></div>
                  <div className="text-xl text-white  cursor-pointer"><AiFillInstagram /></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Footer