import React from 'react';
import { assets } from '../assests/assets';


const Descriptions = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: AI Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.sample_img_1}
            alt="AI Visual"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-[90%] md:max-w-[420px]"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Create AI Images
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold">Introducing the AI-Powered Text to Image Generator</span><br /><br />
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
            <br /><br />
            Imagine it, describe it, and watch it come to life instantly. Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds.
            <br /><br />
            From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Descriptions;
