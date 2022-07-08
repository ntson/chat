const Input = ({ id, label, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        className="py-2 border-b border-gray-900 focus:border-blue-600 outline-none"
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
