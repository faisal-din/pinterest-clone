import { useState } from 'react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Content for each slide
  const slides = [
    {
      headline: 'weeknight dinner idea',
      color: 'text-yellow-600',
      images: [
        'https://i.pinimg.com/736x/e6/7f/88/e67f88965ef8e5a84478c5d9bc477d37.jpg',
        'https://i.pinimg.com/736x/23/5c/3f/235c3f57dcfa9a1e9881a7cb897d3a2c.jpg',
        'https://i.pinimg.com/736x/3d/05/bd/3d05bd6f3123c98d6918cb11d2208d2f.jpg',
        'https://i.pinimg.com/736x/84/74/e5/8474e52ac73be4a5a600e3f453778f2a.jpg',
      ],
    },
    {
      headline: 'outfit inspiration',
      color: 'text-[#C31958]',
      images: [
        '/api/placeholder/300/224?text=Summer+Dress',
        '/api/placeholder/300/224?text=Office+Look',
        '/api/placeholder/300/224?text=Casual+Weekend',
        '/api/placeholder/300/224?text=Evening+Outfit',
      ],
    },
    {
      headline: 'home decor idea',
      color: 'text-[#0076D3]',
      images: [
        'https://i.pinimg.com/736x/dc/7d/37/dc7d3706bdc2c3e452c2823f0aa9ede5.jpg',
        'https://i.pinimg.com/736x/60/ce/bb/60cebb8bd5658a86c6cb667221223740.jpg',
        'https://i.pinimg.com/736x/1d/bb/de/1dbbded8c4023b86f99d39713287941e.jpg',
        'https://i.pinimg.com/736x/23/26/0b/23260bbc6ca44b1d15c18f6a76021434.jpg',
      ],
    },
    {
      headline: 'new DIY project',
      color: 'text-teal-800',
      images: [
        '/api/placeholder/300/224?text=Plant+Hanger',
        '/api/placeholder/300/224?text=Photo+Frames',
        '/api/placeholder/300/224?text=Upcycled+Furniture',
        '/api/placeholder/300/224?text=Handmade+Candles',
      ],
    },
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  // Get current slide data
  const currentSlide = slides[activeSlide];

  return (
    <div>
      <div className='min-h-screen bg-white '>
        {/* Hero Section */}
        <div className='mt-8 md:mt-16 text-center px-4'>
          <h1 className='text-4xl text-gray-800 md:text-6xl font-bold mb-2 '>
            Get your next
          </h1>
          <h2
            className={`text-4xl md:text-6xl font-bold ${currentSlide.color} transition-colors duration-300`}
          >
            {currentSlide.headline}
          </h2>

          {/* Dots Navigation */}
          <div className='flex justify-center mt-8 space-x-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeSlide === index ? 'bg-[#C31958]' : 'bg-gray-300'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className='mt-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {currentSlide.images.map((image, index) => (
            <div
              key={index}
              className='bg-gray-100 rounded-lg overflow-hidden h-56 transform transition-all duration-500 hover:shadow-lg hover:scale-105'
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image}
                alt={`${currentSlide.headline} image ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
