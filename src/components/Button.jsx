const Button = ({ children, onClick }) => {
  return (
    <button
    onClick={onClick}
      className="px-4 py-2 rounded font-semibold bg-green text-offwhite hover:bg-offwhite hover:text-green transition">
      {children}
    </button>
  );
};

export default Button;
