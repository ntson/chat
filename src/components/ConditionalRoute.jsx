import { Navigate } from 'react-router-dom';

const ConditionalRoute = ({ allow, redirect, children }) => {
  return allow ? <>{children}</> : <Navigate to={redirect} />;
};

export default ConditionalRoute;
