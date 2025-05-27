const Button = ({ children, onClick, className, ariaLabel }) => {
  return (
    <button 
    onClick={onClick} 
    className={`px-4 py-2 rounded text-base font-semibold bg-green text-offwhite hover:bg-offwhite border-[2px] border-green  hover:text-green transition ${className}`} 
    aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
