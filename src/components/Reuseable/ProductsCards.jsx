import PropTypes from 'prop-types';
import { CiHeart } from "react-icons/ci";

const ProductsCards = (props) => {
   const { productName, productPrice, imageSrc } = props;

   return (
      <>
         <div className="w-[268px] py-6 px-4 bg-[#F6F6F6] rounded-lg cursor-pointer flex flex-col items-center">
            <div className="text-3xl w-8 h-8 flex justify-center items-center cursor-pointer ml-auto">
               <CiHeart className='' />
            </div>

            <img
               src={imageSrc}
               alt="Iphone14pro"
               className="w-[160px] h-[160px] mx-auto my-4"
            />

            <h6 className="font-Roboto font-medium text-mainColor text-base text-center capitalize">{productName}</h6>

            <h5 className="font-Roboto font-bold text-mainColor text-2xl text-center capitalize mt-4 mb-6 select-none">{productPrice}</h5>

            <button
               className="font-Roboto font-medium text-white text-sm capitalize py-3 px-16 border-2 border-solid border-mainColor rounded-lg bg-mainColor duration-300 hover:bg-white hover:text-mainColor select-none"
               type="button"
            >
               buy now
            </button>
         </div>
      </>
   );
};

ProductsCards.propTypes = {
   productName: PropTypes.node.isRequired,
   productPrice: PropTypes.node.isRequired,
   imageSrc: PropTypes.node.isRequired,
};

export default ProductsCards;
