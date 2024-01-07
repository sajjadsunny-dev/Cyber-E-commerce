import ProductsCards from "../Reuseable/ProductsCards"

const DiscountProducts = () => {
   return (
      <div>
         <section className="py-20">
            <div className="max-w-container mx-auto px-2">
               {/* heading */}
               <h4 className="font-Roboto font-medium text-mainColor text-2xl capitalize mb-8">Discounts up to -50%</h4>

               {/* product cards */}
               <div className="flex flex-wrap gap-4">
                  <ProductsCards
                     imageSrc={'images/products/Iphone14proGold.png'}
                     productName={'Apple iPhone 14 Pro 512GB Gold (MQ233)'}
                     productPrice={'$1437'}
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
                     imageSrc={'images/products/Iphone14proSilver.png'}
                     productName={'Apple iPhone 14 Pro 1TB Gold (MQ2V3)'}
                     productPrice={'$1499'}
                  />
               </div>

            </div>
         </section>
      </div>
   )
}

export default DiscountProducts