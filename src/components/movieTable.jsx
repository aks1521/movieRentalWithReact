import React from "react";
import { Link } from 'react-router-dom'
import Like from "./common/like";
import TableHeader from "./common/tableHeader"; 
import TableBody from "./common/tableBody";

const MovieTable = ({ movies, onDelete, onLike, onSort }) => {
  let columns = [
    { lable: "Title", path: "title", content: movie => <Link to={`/movies/${movie._id}`} >{movie.title} </Link>},
    { lable: "Genre", path: "genre.name" },
    { lable: "Stock", path: "numberInStock" },
    { lable: "Rate", path: "dailyRentalRate" },
    {
      content: (movie) => (
        <Like
          isLiked={movie.liked}
          toggleLike={() => onLike(movie)}
        />
      ),
    },
    {
      content: (movie) => (
        <button
          className="btn btn-danger"
          onClick={() => onDelete(movie._id)}
        >
          Delete
        </button>
      ),
    },
  ];
  //const ;
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} />
      <TableBody columns={columns} data={movies} />
    </table>
  );
};

export default MovieTable;
