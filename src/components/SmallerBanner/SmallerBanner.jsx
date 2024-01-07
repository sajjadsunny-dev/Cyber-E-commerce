import Button from "../Reuseable/Button"

const SmallerBanner = () => {
   return (
      <>
         <section className="grid grid-cols-2 overflow-hidden">
            <div className="grid grid-rows-17">
               <div className="row-span-9 relative flex justify-end items-center pr-16">
                  <div className="w-[380px]">
                     <h3 className="font-Roboto font-medium text-mainColor text-5xl capitalize mb-4">Playstation 5</h3>
                     <p className="font-Roboto font-medium text-paraColor text-sm capitalize">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                  </div>
                  <img
                     src="images/smaller_banner/PlayStation.png"
                     alt="PlayStation.png"
                     className="absolute left-0 -translate-x-1/3 h-full"
                  />
               </div>
               <div className="row-span-8 grid grid-cols-2">
                  <div className="bg-[#EDEDED] relative flex justify-end items-center pr-6">
                     <div className="w-[180px]">
                        <h3 className="font-Roboto font-light text-mainColor text-3xl capitalize mb-3">Apple
                           AirPods <span className="font-medium">Max</span></h3>
                        <p className="font-Roboto font-medium text-paraColor text-sm capitalize">Computational audio. Listen, its powerful</p>
                     </div>
                     <img
                        src="images/smaller_banner/airpodsmax.png"
                        alt="airpodsmax.png"
                        className="absolute bottom-0 left-0 -translate-x-1/2 h-[98%]"
                     />
                  </div>
                  <div className="bg-[#353535] relative overflow-hidden flex justify-end items-center pr-6">
                     <div className="w-[170px]">
                        <h3 className="font-Roboto font-light text-white text-3xl capitalize mb-3">Apple
                           <br />Vision <span className="font-medium">Pro</span></h3>
                        <p className="font-Roboto font-medium text-paraColor text-sm capitalize">An immersive way to experience entertainment</p>
                     </div>
                     <img
                        src="images/smaller_banner/applevisionpro.png"
                        alt="applevisionpro.png"
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[60%] h-[90%]"
                     />
                  </div>
               </div>
            </div>
            <div className="py-44 pl-10 relative">
               <h2 className="font-Roboto font-extralight text-mainColor text-[64px] leading-[56px]">Macbook <span className="font-medium">Air</span></h2>
               <p className="font-Roboto font-medium text-paraColor text-base w-[420px] capitalize my-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
               <Button className="">shop now</Button>

               <img
                  src="images/smaller_banner/macbookpro14.png"
                  alt="macbookpro14.png"
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2/3"
               />
            </div>
         </section>
      </>
   )
}

export default SmallerBanner