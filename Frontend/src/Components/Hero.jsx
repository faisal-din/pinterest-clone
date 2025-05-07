import { useState } from 'react';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Content for each slide
  const slides = [
    {
      headline: 'weeknight dinner idea',
      color: 'text-yellow-600',
      images: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      ],
    },
    {
      headline: 'outfit inspiration',
      color: 'text-[#C31958]',
      images: [
        'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNsb3RoaW5nfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNsb3RoaW5nfGVufDB8fDB8fHww',
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
      headline: 'green thumb idea',
      color: 'text-teal-800',
      images: [
        'https://images.unsplash.com/photo-1692052191004-73d930963a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyZWVuJTIwdGh1bWJ8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1685905662935-458c9aa64f3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdyZWVuJTIwdGh1bWJ8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1661587373014-b8151a7ec8c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1664197864796-833d4643341e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGdyZWVuJTIwdGh1bWJ8ZW58MHx8MHx8fDA%3D',
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
      <div className='min-h-screen bg-white pb-2 '>
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
