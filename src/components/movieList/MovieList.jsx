import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const GetData = () => {
    axios(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((er) => console.log(er));
  };

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    GetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="movie_list pt-0 pr-3rem pb-3rem pl-3rem">
        <h2 className="list_title text-1.75rem m-2.5rem text-center text-[2.5rem] font-bold">{(type ? type : "popular").toUpperCase()}</h2>
        <div className="list_cards flex justify-center flex-wrap">{movieList && movieList?.map((movie) => <Card movie={movie} key={movie.id} />)}</div>
      </div>
    </>
  );
};

export default MovieList;
