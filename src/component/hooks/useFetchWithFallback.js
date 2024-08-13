import { useState, useEffect } from 'react';
import useFetch from './useFetch';

import resumeMovies from '../constants/resumeMovies';
import seriesPersembahanChill from '../constants/seriesPersembahanChill';
import topRatingFilmSeriesHariIni from '../constants/topRatingFilmSeriesHariIni';
import seriesTrending from '../constants/seriesTrending';
import rilisBaruMovies from '../constants/rilisBaruMovies';
import filmTrendingMovies from '../constants/filmTrendingMovies';
import resumeSeries from '../constants/resumeSeries';
import topRatingFilmAndMovies from '../constants/topRatingFilmAndMovies';


const fallbackDataMap = {
    resumeMovies,
    seriesPersembahanChill,
    topRatingFilmSeriesHariIni,
    seriesTrending,
    rilisBaruMovies,
    filmTrendingMovies,
    resumeSeries,
    topRatingFilmAndMovies
  };
const useFetchWithFallback = (apiEndpoint, fallbackDataPath) => {
  const { data, loading, error, isApiOnline } = useFetch(apiEndpoint);
  const [finalData, setFinalData] = useState(data);
   
    useEffect(() => {
        if (isApiOnline && data) {
          setFinalData(data);
        } else {
          const fallbackData = fallbackDataMap[fallbackDataPath];
          setFinalData(fallbackData);
        }
      }, [data, isApiOnline, fallbackDataPath]);

  return { data: finalData, loading, error };
};

export default useFetchWithFallback;
