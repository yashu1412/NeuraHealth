import React, { useState } from 'react';
import { auth } from '../Components/Core/Auth/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../reducer/UserContext';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser(); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); 
      setIsLoading(false);
      navigate('/'); 
    } catch (err) {
      setIsLoading(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold mb-6 text-violet-500">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 w-80">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 ${isLoading ? 'bg-gray-600' : 'bg-violet-600'}`}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
