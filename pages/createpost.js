import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const [Image, setImage] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await axios.post('https://assignment-api-spxd.onrender.com/api/createpost');
    
      console.log(response);
    } catch (error) {
     
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-4">Create Post</h1>
        <form onSubmit={handleCreatePost} className="space-y-4">
          <div>
            <label htmlFor="postText" className="block text-sm font-medium text-gray-700">
              Post Text:
            </label>
            <input
              type="text"
              id="postText"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="base64Image" className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="text"
              id="base64Image"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md">
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
