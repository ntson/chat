import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Button from '../components/Button';
import Input from '../components/Input';
import ErrorBox from '../components/ErrorBox';
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-11/12 max-w-md"
      >
        <h2 className="font-extrabold text-2xl">Welcome back</h2>

        {error && <ErrorBox message={error} />}

        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          minLength="8"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">
          Login{' '}
          {loading && (
            <span>
              <Spinner text="white" />
            </span>
          )}
        </Button>

        <Link to="/register" className="text-blue-500 underline">
          Create a new account
        </Link>
      </form>
    </main>
  );
};

export default Login;
