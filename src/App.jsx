import { Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './lib/firebase';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import ConditionalRoute from './components/ConditionalRoute';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <ConditionalRoute allow={!loading && !!user} redirect="/login">
              <Home />
            </ConditionalRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ConditionalRoute allow={!loading && !user} redirect="/">
              <Login />
            </ConditionalRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ConditionalRoute allow={!loading && !user} redirect="/">
              <Register />
            </ConditionalRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
