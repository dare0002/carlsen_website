const Button = ({ children, onClick }) => {
  return (
    <button
    onClick={onClick}
      className="px-4 py-2 rounded font-semibold bg-lightgreen text-green hover:bg-offwhite transition">
      {children}
    </button>
  );
};

export default Button;
