import React from 'react';
import { assets } from '../assests/assets';
import Steps from '../components/steps';
import Descriptions from '../components/Description';
import Testimonials from '../components/Testimonials';
import GenerateBtn from '../components/GenerateBtn';

const Home = () => {
  return (
    <div className="text-center py-20 px-4">
      
      {/* 🏷️ Top Badge */}
      <div className="inline-block mb-6 px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-700 bg-white shadow-sm">
        Best text to image generator <span className="ml-1">🌟</span>
      </div>

      {/* 🖼️ Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </h1>

      {/* 📄 Subheading */}
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.
      </p>

      {/* 🔘 Button */}
      <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition duration-300">
        Generate Images ✨
      </button>

      {/* 🖼️ Image Previews */}
      <div className="flex flex-wrap justify-center  gap-3 mt-16">
        {Array(6).fill('').map((item,index) => (
          <img 
            className=" rounded hover:scale-105 transition-all duration-300 max-sm:w-10 shadow"
            src={index % 2 === 0? assets.sample_img_1 : assets.sample_img_2}
            key={index} width={70} alt=""
          />
          
        ))}
      </div>
        <p className='mt-2 text-neutral-600 '>Generated images from imagify</p>
        
        <Steps/>
        <Descriptions/>
        <Testimonials/>
        <GenerateBtn/>
    </div>
  );
};

export default Home;
