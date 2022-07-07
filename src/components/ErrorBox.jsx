const ErrorBox = ({ message }) => {
  return (
    <div className="border border-rose-600 bg-rose-500 text-gray-50 p-2 w-full text-center">
      {message}
    </div>
  );
};

export default ErrorBox;
