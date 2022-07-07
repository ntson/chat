const ConditionalShow = ({ show, children }) => {
  return show ? <>{children}</> : null;
};

export default ConditionalShow;
