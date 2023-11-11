import Link from 'next/link';
import Image from 'next/image';
import social from  "../public/images/social.png"

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white shadow-md rounded-lg">
        <Image  src={social}
          alt="Logo"
          className="mb-4  "
          width="300px"
          height="300px" />
        
        <h1 className="text-3xl font-bold mb-4 text-center">Social Space App</h1>
        <nav className=" flex justify-between">
          <Link href="/login" >
            <button className="block bg-green-300 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
          <Link href="/register" >
            <button className="block bg-orange-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition duration-300 ease-in-out">
              Register
            </button>
          </Link>
          
        </nav>
      </div>
    </div>
  );
};

export default Home;
