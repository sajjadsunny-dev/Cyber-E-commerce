import Button from '../Reuseable/Button';

const Banner = () => {
   return (
      <>
         <section className="bg-[#211C24] h-dvh overflow-hidden">
            <div className="max-w-container mx-auto px-2 h-full relative">
               <div className="h-full flex flex-col justify-center">
                  <h4 className="font-Roboto font-medium text-2xl text-white opacity-40 capitalize">Pro.Beyond.</h4>

                  <h1 className="font-Roboto tracking-tighter font-extralight text-8xl leading-[72px] text-white  my-6">IPhone 14 <span className="font-bold tracking-normal">Pro</span></h1>

                  <h4 className="font-Roboto font-medium text-lg text-paraColor mb-6">Created to change everything for the better. For everyone</h4>

                  <div className="">
                     <Button className="text-white">shop now</Button>
                  </div>

               </div>

               <img
                  src="images/IphoneImageBanner.png"
                  alt="images/IphoneImageBanner.png"
                  className="absolute right-0 bottom-0 translate-y-16"
               />
            </div>
         </section>
      </>
   )
}

export default Banner