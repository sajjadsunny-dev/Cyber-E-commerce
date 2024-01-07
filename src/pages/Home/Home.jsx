import Banner from "../../components/Banner/Banner"
import Banner2 from "../../components/Banner2/Banner2";
import Category from "../../components/Category/Category";
import DiscountProducts from "../../components/DiscountProducts/DiscountProducts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar"
import Products from "../../components/Products/Products";
import SmallerBanner from "../../components/SmallerBanner/SmallerBanner";
import Subnav from "../../components/Subnav/Subnav"
import Banners from './../../components/Banners/Banners';

const Home = () => {
   return (
      <>
         <div className="fixed w-full z-50">
            <Navbar /> {/* header or navbar */}
            <Subnav /> {/* navCategory */}
         </div>
         <Banner />
         <SmallerBanner />
         <Category />
         <Products />
         <Banners />
         <DiscountProducts />
         <Banner2 />
         <Footer />
      </>
   )
}

export default Home