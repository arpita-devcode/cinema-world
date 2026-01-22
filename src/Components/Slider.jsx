import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import joker from "../assets/Images/joker.jpg";
import inception from "../assets/Images/inception.jpg";
import darkKnight from "../assets/Images/darkKnight.jpg";
import { Link, NavLink } from 'react-router';

const Slider = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide className="relative w-full h-full">
          <img src={joker} alt='' className="w-full h-full object-cover" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 md:px-16 text-white space-y-4">
              <h1 className="text-4xl italiana-regular   md:text-6xl font-bold">Joker</h1>

              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>⏱ 2h 2m</span>
                <span>⭐ 8.4</span>
                <span className="border border-gray-400 px-2 rounded">Drama</span>
              </div>

              <p className="text-gray-300 italic">
                "A mentally troubled comedian embarks on a downward spiral that
                leads to the creation of an iconic villain."
              </p>

              <div className="flex gap-4 pt-4">
                <button className="btn px-6 py-2 rounded-md font-semibold">
                  View Details
                </button>
                <NavLink to='/movies'><button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black">
                  Browse All Movies
                </button></NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative w-full h-full">
          <img src={inception} alt='' className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 md:px-16 text-white space-y-4">
              <h1 className="text-4xl md:text-6xl italiana-regular   font-bold">Inception</h1>

              <div className="flex items-center gap-4 text-sm text-gray-300">
                <span>⏱ 2h 28m</span>
                <span>⭐ 8.8</span>
                <span className="border px-2 rounded">Sci-Fi</span>
              </div>

              <p className="text-gray-300 italic">
                "A skilled thief enters dreams to steal secrets and plant ideas
                deep within the subconscious."
              </p>

              <div className="flex gap-4 pt-4">
                <button className="btn px-6 py-2 rounded-md font-semibold">
                  View Details
                </button>
                <button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black">
                  Browse All Movies
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative w-full h-full">
          <img src={darkKnight} alt='' className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 md:px-16 text-white space-y-4">
              <h1 className="text-4xl italiana-regular  md:text-6xl font-bold">The Dark Knight</h1>

              <div className="flex items-center gap-4 text-2xl text-gray-300">
                <span className='flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm font-medium'>⏱ 2h 32m</span>
                <span>⭐ 9.0</span>
                <span className="border px-2 rounded">Action</span>
              </div>

              <p className="text-gray-300 italic text-xl">
                "Batman faces his greatest psychological and moral challenge
                when the Joker unleashes chaos on Gotham.""
              </p>

              <div className="flex gap-4 pt-4">
                <button className="btn px-6 py-2 rounded-md font-semibold">
                  View Details
                </button>
                <button className="border border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black">
                  Browse All Movies
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
