import React from 'react';
import { assets } from '../assests/assets';
import Steps from '../components/steps';
import Descriptions from '../components/Description';
import Testimonials from '../components/Testimonials';
import GenerateBtn from '../components/GenerateBtn';
import { motion } from "motion/react"

const Home = () => {
  const onCLickHandler = () => {
    
  }
  return (
    <motion.div className="text-center py-20 px-4"
    initial={{ opacity: 0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      
      {/* 🏷️ Top Badge */}
      <motion.div className="inline-block mb-6 px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-700 bg-white shadow-sm"
       initial={{ opacity: 0,y:-20}}
       animate={{opacity:1,y:0}}
      transition={{delay:0.3,duration:0.8}}>
        Best text to image generator <span className="ml-1">🌟</span>
      </motion.div>

      {/* 🖼️ Main Heading */}
      <motion.h1 className="text-4xl md:text-5xl font-bold mb-4"
       initial={{ opacity: 0}}
       animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}> 
        Turn text to <span className="text-blue-600">image</span>, in seconds.
      </motion.h1>

      {/* 📄 Subheading */}
      <motion.p className="text-gray-600 max-w-xl mx-auto mb-8"
      initial={{ opacity: 0,y:20}}
       animate={{opacity:1,y:0}}
      transition={{delay:0.6,duration:0.8}}
      >
        Unleash your creativity with AI. Turn your imagination into visual art in seconds – just type, and watch the magic happen.
      </motion.p>

      {/* 🔘 Button */}
      <motion.button onClick={} className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition duration-300"
       whileHover={{scale:1.05}}
       whileTap={{scale:0.95}}
       initial={{ opacity: 0}}
       animate={{opacity:1}}
      transition={{default:{duration:0.5},opacity:{delay:0.8,duration:1}}}> 
        Generate Images ✨
      </motion.button>

      {/* 🖼️ Image Previews */}
      <motion.div className="flex flex-wrap justify-center  gap-3 mt-16"
        initial={{ opacity: 0}}
       animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      >
        {Array(6).fill('').map((item,index) => (
          <motion.img 
            whileHover={{scale:1.05,duration:0.1}}
            
            className=" rounded hover:scale-105 transition-all duration-300 max-sm:w-10 shadow"
            src={index % 2 === 0? assets.sample_img_1 : assets.sample_img_2}
            key={index} width={70} alt=""
          />
          
        ))}
      </motion.div>
        <motion.p 
         initial={{ opacity: 0}}
       animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
        className='mt-2 text-neutral-600 '>Generated images from imagify</motion.p>
        
        <Steps/>
        <Descriptions/>
        <Testimonials/>
        <GenerateBtn/>
    </motion.div>
  );
};

export default Home;
