import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsMovie = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getData = () => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => setMovieDetails(res.data))
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col md:flex-row mx-[5rem]">
        <div className="md:w-1/3">
          <img src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path || ""}`} alt="" className="w-full" />
        </div>
        <div className="md:w-2/3 mx-4">
          <h2 className="text-4xl font-bold mb-4">{movieDetails?.original_title || ""}</h2>
          <p className="text-gray-600 mb-2">{movieDetails?.tagline || ""}</p>
          <div className="flex items-center mb-4">
            <p className="mr-2">{movieDetails?.vote_average || ""}</p>
            <i className="fas fa-star text-yellow-500"></i>
            <span className="ml-2">{movieDetails ? `(${movieDetails.vote_count} vote)` : ""}</span>
          </div>
          <p className="mb-2">{movieDetails?.runtime ? `${movieDetails.runtime} mins` : ""}</p>
          <p className="mb-2">{movieDetails?.release_date ? `Release Date: ${movieDetails.release_date}` : ""}</p>
          <div className="flex flex-wrap mb-4">
            {movieDetails?.genres
              ? movieDetails.genres.map((genres) => (
                  <span key={genres.id} className="mr-2 mb-2 bg-black-900 border p-2 rounded">
                    {genres.name}
                  </span>
                ))
              : ""}
          </div>
          <div className="mb-4">
            <div className="font-bold mb-2">Synopsis</div>
            <p>{movieDetails?.overview || ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMovie;
