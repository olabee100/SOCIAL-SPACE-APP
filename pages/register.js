import { useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import social from  "../public/images/social.png"
import Image from 'next/image';
const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://assignment-api-spxd.onrender.com/api/register',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
           
          },
        }
      );

      console.log(response);

   

      router.push('/login');
    } catch (error) {
      console.error('Registration failed:', error);

   
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
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
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
              onChange={handlePasswordChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded-md">
            Register
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => {
            
              console.log('Forget Password clicked');
            }}
            className="text-sm text-blue-500 cursor-pointer"
          >
            Login
          </button>
          <button
            onClick={() => {
             
              console.log('Register clicked');
            }}
            className="text-sm text-blue-500 cursor-pointer"
          >
            Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
