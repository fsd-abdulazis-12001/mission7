/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FaArrowLeft, FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import getErrorMessage from '../../../utils/errorCode';
import LoadingComponent from '../Elements/Loading';

const CardsLayouts = ({ title, children, height, amount, isError, isLoading }) => {
  return (
    <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
      <div className='flex flex-col w-11/12'>
        <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>
        <div className='relative flex flex-row items-center justify-between h-[80%] pt-4'>
          <div className="overflow-y-visible overflow-x-clip h-full min-w-0">
            {isLoading ? (
                <LoadingComponent />
            ) : isError ? (
              <div className='w-full h-full flex flex-col justify-center items-center text-center p-6 bg-red-500/10 rounded-lg'>
                <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
                <h1 className='text-3xl font-bold text-red-400'>Oops! Something went wrong.</h1>
                <p className='text-xl mt-2'>{isError.message}</p>
                <p className='text-sm text-red-300 mt-1'>{getErrorMessage(isError.response?.status)}</p>
                <p className='text-sm text-green-300 mt-1'>Sengaja Saya Limit, Buat Testing Tampilan</p>
              </div>
            ) : (
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: amount - 3,
                    spaceBetween: 15,
                  },
                  600: {
                    slidesPerView: amount - 2,
                    spaceBetween: 15,
                  },
                  900: {
                    slidesPerView: amount - 1,
                    spaceBetween: 15,
                  },
                  1300: {
                    slidesPerView: amount,
                    spaceBetween: 15,
                  },
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="flex justify-center gap-2 h-full"
              >
                {children}
                <div className="swiper-button-prev relative flex items-center justify-center invisible sm:visible">
                  <FaArrowLeft className='absolute z-100 text-white' />
                </div>
                <div className="swiper-button-next relative flex items-center justify-center invisible sm:visible">
                  <FaArrowRight className='absolute z-100 text-white' />
                </div>
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsLayouts;
