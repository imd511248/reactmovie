import React, { useEffect, useState } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
// https://655acda16981238d054dbdc1.mockapi.io/irshad
const Home = () => {
  const [popularMovie, setPopulerMovie] = useState([]);
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).then((res) => setPopulerMovie(res.data.results));
  }, []);
  return (
    <>
      <div className="poster relative ">
        <OwlCarousel items="1" autoplaySpeed={1000} autoplay={false} autoplayTimeout={1000} smartSpeed={250} nav className="owl-theme">
          {popularMovie.map((movie) => (
            <div className="item" key={movie.id}>
              <Link className="no-underline text-white" to={`/movie/${movie.id}`}>
                <div className="h-[600px] block w-[100%]">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                </div>
                <div className=" absolute p-[5rem] h-[70%] flex w-[100%] bottom-0 flex-col justify-end items-start ">
                  {/* ........ */}
                  <div className="text-[64px] mb-[5px] text-left font-black">{movie ? movie.original_title : ""}</div>
                  <div className="text-[32px] mb-[16px]">
                    {movie ? movie.release_date : ""}
                    <span className="ml-[48px]">
                      {/* .......... */}
                      {movie ? movie.vote_average : ""} <i className="fa-solid fa-star" />
                      {""}
                    </span>
                  </div>
                  <div className="italic text-[16px] mb-[4px] flex text-left w-[50%]">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            </div>
          ))}
        </OwlCarousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
