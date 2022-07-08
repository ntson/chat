import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import NavLink from './NavLink';
import ConditionalShow from './ConditionalShow';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) return null;

  const logout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="p-6 bg-gray-900 text-gray-50 flex items-center justify-end gap-2">
      <ConditionalShow show={!loading && !user}>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Create an account</NavLink>
      </ConditionalShow>

      <ConditionalShow show={!loading && !!user}>
        <span className="text-gray-50">{user && user.displayName}</span>

        <button
          onClick={logout}
          className="bg-rose-600 text-gray-50 rounded-md py-2 px-4 ml-4"
        >
          Logout
        </button>
      </ConditionalShow>
    </nav>
  );
};

export default Nav;
