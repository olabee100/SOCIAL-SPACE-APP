import { useState } from 'react';
import axios from 'axios';
import social from  "../public/images/social.png"
import Image from 'next/image';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://assignment-api-spxd.onrender.com/api/login', {
        username,
        password,
      });
     
      console.log(response.data);
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-5">
      <Image  src={social}
          alt="Logo"
          className="mb-4  "
          width="300px"
          height="300px" />
        
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {
           
              console.log('Forget Password clicked');
            }}
            className="text-sm text-blue-500 cursor-pointer"
          >
            Forget Password
          </button>
          <button
            onClick={() => {
            
              console.log('Register clicked');
            }}
            className="text-sm text-blue-500 cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
