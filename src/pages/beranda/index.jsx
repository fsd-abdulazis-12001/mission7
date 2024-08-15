
import React from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import useFetch from '../../component/hooks/useFetch';
import useAddDaftarSaya from '../../component/hooks/useAddDaftarSaya';

const Index = React.memo(() => {
  const { data: resumeMovies, isLoading: loadingResumeMovies, isError: errorResumeMovies, error :errorObjectresumeMovies } = useFetch('resumeMovies');
  const { data: topRatingFilmAndMovies, isLoading: loadingtopRatingFilmAndMovies, isError: errortopRatingFilmAndMovies, error :errorObjecttopRatingFilmAndMovies } = useFetch('topRatingFilmAndMovies');
  const { data: filmTrandingMovies, isLoading: loadingfilmTrandingMovies, isError: errorfilmTrandingMovies, error :errorObjectfilmTrandingMovies } = useFetch('filmTrandingMovies');
  const { data: rilisBaruMovies, isLoading: loadingrilisBaruMovies, isError: errorrilisBaruMovies, error :errorObjectrilisBaruMovies} = useFetch('rilisBaruMovies');
  const {addDaftarSaya}  = useAddDaftarSaya("daftarsaya")
 
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/duty-afterschool.png", alt : "Duty After School" }} title = "Duty After School" description = 'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.'/>
      <CardsLayouts title="Melanjutkan Tonton Film" height="h-[309px]" amount = {4} isError={errorResumeMovies} isLoading={loadingResumeMovies} error={errorObjectresumeMovies}>
          { resumeMovies && resumeMovies.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
              </SwiperSlide>
          ))}
      </CardsLayouts>  
     <CardsLayouts title="Top Rating Film dan Series Hari ini" height="h-[512px]" amount = {5} isError={errortopRatingFilmAndMovies} isLoading={loadingtopRatingFilmAndMovies} error = {errorObjecttopRatingFilmAndMovies}>
        { topRatingFilmAndMovies && topRatingFilmAndMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Film Trending" height="h-[512px]" amount = {5} isError={errorfilmTrandingMovies} isLoading={loadingfilmTrandingMovies} error = {errorObjectfilmTrandingMovies}>
        {filmTrandingMovies && filmTrandingMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5} isError={errorrilisBaruMovies} isLoading={loadingrilisBaruMovies} error = {errorObjectrilisBaruMovies}>
        {rilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        ))}
      </CardsLayouts>  

      <Footer />

    </>
  );
});

Index.displayName = 'Index';

export default Index;
