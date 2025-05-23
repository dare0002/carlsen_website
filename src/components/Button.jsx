const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded font-semibold bg-green text-offwhite hover:bg-offwhite border-[2px] border-green  hover:text-green transition ${className}`}>
      {children}
    </button>
  );
};

export default Button;
