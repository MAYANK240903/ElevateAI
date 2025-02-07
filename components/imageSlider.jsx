
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/banner.jpeg',  // Image 1
  '/banner3.jpeg',  // Image 2
  '/banner.jpeg',  
  '/banner2.jpeg',  // Image 3
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-2xl border">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="inset-0 w-full h-full"
        >
          <Image 
            src={images[currentImageIndex]} 
            width={1280} 
            height={720} 
            alt='Banner preview' 
            className='w-full h-auto' 
            priority 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
