import Button from '../Reuseable/Button';


const Banners = () => {
   return (
      <>
         <section className="grid grid-cols-4">
            <div className="h-[620px] px-8 pb-14 col-span-1 flex flex-col justify-end items-start relative overflow-hidden">
               <img
                  src="images/banners/earbuds.png"
                  alt="earbuds"
                  className="absolute top-0 left-0 -translate-x-14 -translate-y-20 drop-shadow-customShadow"
               />
               <img
                  src="images/banners/smartwatch.png"
                  alt="earbuds"
                  className="absolute top-12 right-0  rotate-55"
               />

               <h2 className="font-Roboto font-light text-[33px] leading-10 text-mainColor capitalize">Popular Products</h2>
               <p className="my-4 font-Roboto font-medium text-sm leading-6 text-paraColor">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>

               <Button className="">shop now</Button>
            </div>

            <div className="h-[620px] bg-[#F9F9F9] px-8 pb-14 col-span-1 flex flex-col justify-end items-start relative overflow-hidden">
               <img
                  src="images/banners/ipadpro.png"
                  alt="ipadpro"
                  className="absolute top-0 left-0 translate-x-12 -translate-y-14"
               />

               <h2 className="font-Roboto font-light text-[33px] leading-10 text-mainColor capitalize">Ipad Pro</h2>
               <p className="my-4 font-Roboto font-medium text-sm leading-6 text-paraColor">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>

               <Button className="">shop now</Button>
            </div>

            <div className="h-[620px] bg-[#EAEAEA] px-8 pb-14 col-span-1 flex flex-col justify-end items-start relative overflow-hidden">
               <img
                  src="images/banners/samsungGalaxy.png"
                  alt="samsungGalaxy"
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3"
               />

               <h2 className="font-Roboto font-light text-[33px] leading-10 text-mainColor capitalize">Samsung Galaxy </h2>
               <p className="my-4 font-Roboto font-medium text-sm leading-6 text-paraColor">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>

               <Button className="">shop now</Button>
            </div>

            <div className="h-[620px] bg-[#2C2C2C] px-8 pb-14 col-span-1 flex flex-col justify-end items-start relative overflow-hidden">
               <img
                  src="images/banners/macbookpro.png"
                  alt="macbookpro"
                  className="h-[45%] absolute top-0 right-0 translate-x-16 translate-y-10"
               />

               <h2 className="font-Roboto font-light text-[33px] leading-10 text-white capitalize">Macbook Pro</h2>
               <p className="my-4 font-Roboto font-medium text-sm leading-6 text-paraColor">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>

               <Button className="text-white">shop now</Button>
            </div>
         </section>
      </>
   )
}

export default Banners