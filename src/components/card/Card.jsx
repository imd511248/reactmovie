import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // <SkeletonTheme color="#202020" highlightColor="#444">
  //   <Skeleton duration={2} height={96} width="100%" count={3} />
  //   {/* height={300} */}
  // </SkeletonTheme>;
  return (
    <>
      {isLoading ? (
        <div className="card transform scale-120 hover:scale-100 z-0 shadow-lg m-2 relative rounded-lg inline-block transition-transform duration-200 overflow-hidden cursor-pointer w-64 h-96 border border-solid border-1 border-gray-600">
          <Skeleton duration={3} height="100%" width="100%" count={54} className="text-bg-gray-300" highlightColor="#444444" />
        </div>
      ) : (
        <Link to={`/movie/${movie?.id}`} className="no-underline text-white m-2">
          <div className="card transform scale-120 hover:scale-100 z-0 shadow-lg relative rounded-lg inline-block transition-transform duration-200 overflow-hidden cursor-pointer min-w-64 border border-solid border-1 border-gray-600">
            <img className="card-img h-96" src={`https://image.tmdb.org/t/p/original${movie?.poster_path || ""}`} alt="" />
            <div className="card-overlay hover:opacity-100 absolute pt-0 pr-4 pb-4 pl-4 bottom-0 h-96 flex flex-col w-85 justify-end">
              <div className="text-lg mb-2 font-bold">{movie?.original_title || ""}</div>
              <div className="text-sm mb-1">
                {movie?.release_date || ""}
                <span className="float-right">{movie?.vote_average || ""}</span>
              </div>
              <div className="italic text-sm mb-1">{movie?.overview?.slice(0, 118) + "..." || ""}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
