import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-11/12 max-w-md"
      >
        <h2 className="font-extrabold text-2xl">Create an account</h2>

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

        <Button type="submit">Create an account</Button>

        <Link to="/login" className="text-blue-500 underline">
          Login instead
        </Link>
      </form>
    </main>
  );
};

export default Register;
