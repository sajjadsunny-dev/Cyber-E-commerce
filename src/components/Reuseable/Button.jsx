import PropTypes from 'prop-types';

const Button = (props) => {
   const { children, className } = props;
   const textColor = className.includes("text-white");
   return (
      <>
         <button
            className={textColor ? "px-14 py-4 rounded-md border-solid border-[1px] border-white font-Roboto font-medium text-lg text-white capitalize duration-300 hover:text-mainColor hover:bg-white" : "px-14 py-4 rounded-md border-solid border-[1px] border-mainColor font-Roboto font-medium text-lg text-mainColor capitalize duration-300 hover:text-white hover:bg-mainColor"}
            type="button">
            {children}
         </button >
      </>
   );
};

Button.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.node.isRequired,
};

export default Button;
