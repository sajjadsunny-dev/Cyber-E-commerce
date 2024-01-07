import ProductsCards from "../Reuseable/ProductsCards"

const Products = () => {
   return (
      <>
         <section className="py-14">
            <div className="max-w-container mx-auto px-2">
               {/* filter part */}
               <div className="flex mb-8">
                  <h5 className="producFiltertHover productFilterActive font-Roboto font-medium text-[#8B8B8B] text-lg capitalize py-1 px-0.5 mr-8 relative after:contents-[''] after:w-full after:h-[3px] after:bg-mainColor after:absolute after:left-0 after:bottom-0 after:rounded-[2px] after:origin-bottom-right after:duration-300 after:ease-linear after:transition-transform hover:after:origin-bottom-left hover:text-mainColor cursor-pointer">new arrival</h5>

                  <h5 className="producFiltertHover font-Roboto font-medium text-[#8B8B8B] text-lg capitalize py-1 px-0.5 mr-8 relative after:contents-[''] after:w-full after:h-[3px] after:bg-mainColor after:absolute after:left-0 after:bottom-0 after:rounded-[2px] after:origin-bottom-right after:duration-300 after:ease-linear after:transition-transform hover:after:origin-bottom-left hover:text-mainColor cursor-pointer">Bestseller</h5>

                  <h5 className="producFiltertHover font-Roboto font-medium text-[#8B8B8B] text-lg capitalize py-1 px-0.5 mr-8 relative after:contents-[''] after:w-full after:h-[3px] after:bg-mainColor after:absolute after:left-0 after:bottom-0 after:rounded-[2px] after:origin-bottom-right after:duration-300 after:ease-linear after:transition-transform hover:after:origin-bottom-left hover:text-mainColor cursor-pointer">Featured Products</h5>
               </div>

               {/* product cards */}
               <div className="flex flex-wrap gap-4">
                  <ProductsCards
                     imageSrc={'images/products/Iphone14pro.png'}
                     productName={'Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)'}
                     productPrice={'$900'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/pocketCinemaCamera.png'}
                     productName={'Blackmagic Pocket Cinema Camera 6k'}
                     productPrice={'$2535'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/AppleWatchSeries9.png'}
                     productName={'Apple Watch Series 9 GPS 41mm Starlight Aluminium Case'}
                     productPrice={'$399'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/AirPodsMaxSilver.png'}
                     productName={'AirPods Max Silver Wireless Over-Ear Headphones'}
                     productPrice={'$349'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/SamsungGalaxyWatch6Classic.png'}
                     productName={'Samsung Galaxy Watch6 Classic 47mm Black'}
                     productPrice={'$369'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/GalaxyZFold5Unlocked.png'}
                     productName={'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black'}
                     productPrice={'$1799'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/GalaxyBudsFEGraphite.png'}
                     productName={'Galaxy Buds FE Graphite SM-R400NZAAXAR'}
                     productPrice={'$99.99'}
                  />

                  <ProductsCards
                     imageSrc={'images/products/AppleiPad9_2021.png'}
                     productName={'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'}
                     productPrice={'$398'}
                  />
               </div>
            </div>
         </section>
      </>
   )
}

export default Products