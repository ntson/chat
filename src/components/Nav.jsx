import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav className="p-6 bg-gray-900 text-gray-50 flex justify-end gap-2">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Create an account</NavLink>
    </nav>
  );
};

export default Nav;
