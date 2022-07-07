const Button = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-gray-900 text-gray-50 p-2 rounded-md w-full"
    >
      {children}
    </button>
  );
};

export default Button;
