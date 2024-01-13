import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-[8px] mx-[20px]">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-[80px] pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="nay hotaw" />
          </Link>
          <Link to="/movies/popular" className="no-underline">
            <span className=" mx-[30px] text-[20px] text-white pointer"> Popular </span>
          </Link>
          <Link to="/movies/top_rated" className="no-underline">
            <span className=" mx-[30px] text-[20px] text-white pointer">Top Rated </span>
          </Link>
          <Link to="/movies/upcoming" className="no-underline">
            <span className=" mx-[30px] text-[20px] text-white pointer"> Upcoming</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
