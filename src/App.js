import React,{useState} from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { RxDotFilled,RxDot } from 'react-icons/rx';
import slides from './constatants/slides';


function App() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[900px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <h1 className="text-3xl font-semi-bold mb-4 m-auto text-blue-900">React Image Slider using Tailwind CSS</h1>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
        <BsArrowLeftShort onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer">
        <BsArrowRightShort onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {slideIndex === currentIndex ? (
              <RxDotFilled className="mr-1 text-gray-700" />
            ) : (
              <RxDot className="mr-1 text-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
