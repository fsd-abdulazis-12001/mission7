import React from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import useFetch from '../../component/hooks/useFetch';

import genres from '../../component/constants/genres';
import useDaftarSaya from "../../component/hooks/useDaftarSaya"
import LoadingComponent from '../../component/UI/Elements/Loading';

const Films = React.memo(() => {
  console.log("Films component rendered");
  
  const { data: resumeMovies, loading: loadingResumeMovies, error: errorResumeMovies } = useFetch('resumeMovies');
  const { data: seriesPersembahanChill, loading: loadingSeriesChill, error: errorSeriesChill } = useFetch('seriesPersembahanChill');
  const { data: topRatingFilmSeriesHarIni, loading: loadingTopRating, error: errorTopRating } = useFetch('topRatingFilmSeriesHariIni');
  const { data: seriesTrending, loading: loadingSeriesTrending, error: errorSeriesTrending } = useFetch('seriesTrending');
  const { data: rilisBaruMovies, loading: loadingrilisBaruMovies, error: errorrilisBaruMovies } = useFetch('rilisBaruMovies');
  const {addDaftarSaya}  = useDaftarSaya("daftarsaya")
  
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/avatar.png", alt : "Avatar" }} genres = {genres} title = "Avatar" description = 'Avatar 3 melanjutkan cerita konflik antara manusia dan Navi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Navi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.'/>
 
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4} isError={errorResumeMovies}>
      
      {loadingResumeMovies ? (
          <LoadingComponent />
        ) : (
          !errorResumeMovies && resumeMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50'>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        )}
      </CardsLayouts>
  
      <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount={5} isError={errorSeriesChill}>
        {loadingSeriesChill ? (
          <LoadingComponent />
        ) : (
          !errorSeriesChill && seriesPersembahanChill.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        )}
      </CardsLayouts>
      
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount={5} isError={errorTopRating}>
        {loadingTopRating ? (
          <LoadingComponent />
        ) : (
          !errorTopRating && topRatingFilmSeriesHarIni.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        )}
      </CardsLayouts>
      
      <CardsLayouts title="Series Trending" height="h-[512px]" amount={5} isError={errorSeriesTrending}>
        {loadingSeriesTrending ? (
          <LoadingComponent />
        ) : (
          !errorSeriesTrending && seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        )}
      </CardsLayouts>
      
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount={5} isError={errorrilisBaruMovies}>
        {loadingrilisBaruMovies ? (
          <LoadingComponent />
        ) : (
          !errorrilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        )}
      </CardsLayouts>

      <Footer />
    </>
  );
});

Films.displayName = 'Films';
export default Films;
