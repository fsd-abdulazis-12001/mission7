import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';


import useFetch from '../../component/hooks/useFetch';
import useDaftarSaya from "../../component/hooks/useDaftarSaya"

import genres from '../../component/constants/genres';
import LoadingComponent from '../../component/UI/Elements/Loading';
import React from 'react';

const Series = React.memo(() => {
 
  const { data: resumeSeries, loading: loadingResumeMovies, error: errorResumeMovies } = useFetch('resumeMovies');
  const { data: seriesPersembahanChill, loading: loadingseriesPersembahanChill, error: errorseriesPersembahanChill } = useFetch('seriesPersembahanChill');
  const { data: topRatingFilmSeriesHariIni, loading: loadingtopRatingFilmSeriesHariIni, error: errortopRatingFilmSeriesHariIni} = useFetch('topRatingFilmSeriesHariIni');
  const { data: seriesTrending, loading: loadingseriesTrending, error: errorseriesTrending} = useFetch('seriesTrending');
  const { data: rilisBaruMovies, loading: loadingrilisBaruMovies, error: errorrilisBaruMovies} = useFetch('rilisBaruMovies');
  const {addDaftarSaya}  = useDaftarSaya("daftarsaya")
  
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/happiness.png", alt : "Happiness" }} genres = {genres} title = "Happiness" description = 'Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.'/>
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4} isError={errorResumeMovies}>
          {loadingResumeMovies ? (<LoadingComponent />) : (!errorResumeMovies && resumeSeries.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
              </SwiperSlide>
          )))}
      </CardsLayouts>  
     <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount = {5} isError={errorseriesPersembahanChill}>
        {loadingseriesPersembahanChill ? (<LoadingComponent />) : (!errorseriesPersembahanChill && seriesPersembahanChill.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        )))}
      </CardsLayouts>  
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount = {5} isError={errortopRatingFilmSeriesHariIni}>
        {loadingtopRatingFilmSeriesHariIni ? (<LoadingComponent />) : (!errortopRatingFilmSeriesHariIni && topRatingFilmSeriesHariIni.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        )))}
      </CardsLayouts>  
      <CardsLayouts title="Series Trending" height="h-[512px]" amount = {5} isError={errorseriesTrending}>
        {loadingseriesTrending ? (<LoadingComponent />) : (!errorseriesTrending && seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        )))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5} isError={errorrilisBaruMovies}>
        {loadingrilisBaruMovies ? (<LoadingComponent />) : (!errorrilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        )))}
      </CardsLayouts>  

      <Footer />

    </>
  );
});

Series.displayName = 'Series';
export default Series;
