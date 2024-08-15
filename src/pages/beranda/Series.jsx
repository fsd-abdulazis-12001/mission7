import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';


import useFetch from '../../component/hooks/useFetch';

import genres from '../../component/constants/genres';

import React from 'react';
import useAddDaftarSaya from '../../component/hooks/useAddDaftarSaya';

const Series = React.memo(() => {
 
  const { data: resumeSeries, isLoading: loadingResumeMovies, isError: errorResumeMovies , error :errorObjectresumeMovies } = useFetch('resumeMovies');
  const { data: seriesPersembahanChill, isLoading: loadingseriesPersembahanChill, isError: errorseriesPersembahanChill , error :errorObjectseriesPersembahanChill} = useFetch('seriesPersembahanChill');
  const { data: topRatingFilmSeriesHariIni, isLoading: loadingtopRatingFilmSeriesHariIni, isError: errortopRatingFilmSeriesHariIni, error :errorObjecttopRatingFilmSeriesHariIni} = useFetch('topRatingFilmSeriesHariIni');
  const { data: seriesTrending, isLoading: loadingseriesTrending, isError: errorseriesTrending, error :errorObjectseriesTrending} = useFetch('seriesTrending');
  const { data: rilisBaruMovies, isLoading: loadingrilisBaruMovies, isError: errorrilisBaruMovies, error :errorObjectsrilisBaruMovies} = useFetch('rilisBaruMovies');
  const {addDaftarSaya}  = useAddDaftarSaya("daftarsaya")
  
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/happiness.png", alt : "Happiness" }} genres = {genres} title = "Happiness" description = 'Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.'/>
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4} isError={errorResumeMovies} isLoading={loadingResumeMovies} error = {errorObjectresumeMovies}>
          {resumeSeries && resumeSeries.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
              </SwiperSlide>
          ))}
      </CardsLayouts>  
     <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount = {5} isError={errorseriesPersembahanChill} isLoading={loadingseriesPersembahanChill} error = {errorObjectseriesPersembahanChill}>
        {seriesPersembahanChill && seriesPersembahanChill.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount = {5} isError={errortopRatingFilmSeriesHariIni} isLoading={loadingtopRatingFilmSeriesHariIni} error = {errorObjecttopRatingFilmSeriesHariIni}>
        {topRatingFilmSeriesHariIni && topRatingFilmSeriesHariIni.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Series Trending" height="h-[512px]" amount = {5} isError={errorseriesTrending} isLoading={loadingseriesTrending} error = {errorObjectseriesTrending}>
        {seriesTrending && seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5} isError={errorrilisBaruMovies} isLoading={loadingrilisBaruMovies} error = {errorObjectsrilisBaruMovies}>
        {rilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  

      <Footer />

    </>
  );
});

Series.displayName = 'Series';
export default Series;
