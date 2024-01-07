import Button from "../Reuseable/Button"

const Banner2 = () => {
   return (
      <div>
         <section style={{ background: 'linear-gradient(100deg, #2E2E2E 42.36%, #000 98.65%)' }} className="h-[448px] w-full relative flex flex-col justify-center items-center overflow-hidden">
            <h3 className="font-Roboto font-extralight text-white text-7xl capitalize leading-[125%]">Big Summer <span className="font-medium">Sale</span></h3>
            <p className="font-Roboto text-[#787878] text-base mb-10">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            <Button className="text-white">shop now</Button>


            <img
               src="images/banner2/ipad.png"
               alt="ipad"
               className="absolute top-2 left-8 z-10"
            />

            <img
               src="images/banner2/macbook.png"
               alt="macbook"
               className="absolute top-0 left-44 -translate-y-14"
            />

            <img
               src="images/banner2/ipadpro.png"
               alt="ipadpro"
               className="absolute top-44 left-0 -translate-x-20"
            />

            <img
               src="images/banner2/iphone.png"
               alt="iphone"
               className="absolute top-0 right-0 translate-x-28 -translate-y-4"
            />

            <img
               src="images/banner2/smartWatch.png"
               alt="smartWatch"
               className="absolute bottom-0 right-0 translate-y-28 translate-x-2"
            />
         </section>
      </div>
   )
}

export default Banner2