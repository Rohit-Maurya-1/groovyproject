// src/components/InstagramPosts.js
import React, { useState, useEffect } from 'react';
import fetchInstagramPosts from '../services/instagramService';
import { Dialog } from '@headlessui/react';

const InstagramPosts = ({ accessToken }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchInstagramPosts(accessToken);
      setPosts(fetchedPosts);
    };
    getPosts();
  }, [accessToken]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.id} onClick={() => setSelectedPost(post)}>
          <img src={post.media_url} alt={post.caption} className="w-full h-auto cursor-pointer" />
        </div>
      ))}

      {selectedPost && (
        <Dialog open={true} onClose={() => setSelectedPost(null)} className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-lg mx-auto">
              <img src={selectedPost.media_url} alt={selectedPost.caption} className="w-full h-auto" />
              <p className="mt-2 text-center">{selectedPost.caption}</p>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-0 right-0 m-2 p-2 bg-gray-800 text-white rounded-full"
              >
                &times;
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default InstagramPosts;
