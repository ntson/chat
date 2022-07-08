import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../lib/firebase';
import Button from '../components/Button';
import Input from '../components/Input';
import Spinner from '../components/Spinner';
import ErrorBox from '../components/ErrorBox';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName });

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
        <h2 className="font-extrabold text-2xl">Create an account</h2>

        {error && <ErrorBox message={error} />}

        <Input
          id="display-name"
          label="Display Name"
          type="text"
          name="displayName"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

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
          Create an account{' '}
          {loading && (
            <span>
              <Spinner />
            </span>
          )}
        </Button>

        <Link to="/login" className="text-blue-500 underline">
          Login instead
        </Link>
      </form>
    </main>
  );
};

export default Register;
