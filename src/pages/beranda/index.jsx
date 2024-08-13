
import React from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

import useFetch from '../../component/hooks/useFetch';
import useDaftarSaya from "../../component/hooks/useDaftarSaya"
import LoadingComponent from '../../component/UI/Elements/Loading';
 


const Index = React.memo(() => {
  const { data: resumeMovies, loading: loadingResumeMovies, error: errorResumeMovies } = useFetch('resumeMovies');
  const { data: topRatingFilmAndMovies, loading: loadingtopRatingFilmAndMovies, error: errortopRatingFilmAndMovies } = useFetch('topRatingFilmAndMovies');
  const { data: filmTrandingMovies, loading: loadingfilmTrandingMovies, error: errorfilmTrandingMovies } = useFetch('filmTrandingMovies');
  const { data: rilisBaruMovies, loading: loadingrilisBaruMovies, error: errorrilisBaruMovies} = useFetch('rilisBaruMovies');
  const {addDaftarSaya}  = useDaftarSaya("daftarsaya")

 
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/duty-afterschool.png", alt : "Duty After School" }} title = "Duty After School" description = 'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.'/>
      <CardsLayouts title="Melanjutkan Tonton Film" height="h-[309px]" amount = {4} isError={errorResumeMovies}>
          { loadingResumeMovies ? (<LoadingComponent />) : (resumeMovies && resumeMovies.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
              </SwiperSlide>
          )))}
      </CardsLayouts>  
     <CardsLayouts title="Top Rating Film dan Series Hari ini" height="h-[512px]" amount = {5} isError={errortopRatingFilmAndMovies}>
        { loadingtopRatingFilmAndMovies ? (<LoadingComponent />) : (topRatingFilmAndMovies && topRatingFilmAndMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        )))}
      </CardsLayouts>  
      <CardsLayouts title="Film Trending" height="h-[512px]" amount = {5} isError={errorfilmTrandingMovies}>
        { loadingfilmTrandingMovies ? (<LoadingComponent />) : (filmTrandingMovies && filmTrandingMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        )))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5} isError={errorrilisBaruMovies}>
        {loadingrilisBaruMovies ? (<LoadingComponent />) : (rilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
            </SwiperSlide>
        )))}
      </CardsLayouts>  

      <Footer />

    </>
  );
});

Index.displayName = 'Index';

export default Index;
