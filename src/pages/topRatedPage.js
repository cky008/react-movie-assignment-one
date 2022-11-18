import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from '../components/cardIcons/addToWatch'
import { useParams } from "react-router-dom";


const TopRatedPage = (props) => {

  const { pagination } = useParams();

  const {  data, error, isLoading, isError }  = useQuery(["discoverUpcoming", pagination], getTopRatedMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
      page="/movies/upcoming"
      pagination={pagination}
      total_pages={data.total_pages}
    />
  );
};

export default TopRatedPage;