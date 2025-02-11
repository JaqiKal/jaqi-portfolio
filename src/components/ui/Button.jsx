const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-white rounded-lg shadow-lg transition-transform duration-300 
        bg-primary-500 hover:bg-primary-600 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
