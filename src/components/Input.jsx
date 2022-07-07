const Input = ({ id, label, ref, onChange, onBlur, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        className="py-2 border-b border-gray-900 focus:border-blue-600 outline-none"
        id={id}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </div>
  );
};

export default Input;
