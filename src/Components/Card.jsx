import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 
    sm:m-2 transition-shadow duration-200 p-2"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="">
          <p className="line-clamp-2 text-base">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center text-sm">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3 hover:text-amber-400" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

// truncate will limit the long text
// line-clamp-2 will limit the number of lines into 2
