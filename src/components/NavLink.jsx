import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link
      className="py-2 px-4 hover:bg-gray-50 hover:text-gray-900 rounded-md"
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
