import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import paginate from "./util/paginate";
import MovieTable from "./movieTable";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: "",
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (id) => {
    let movies = [...this.state.movies].filter((x) => x._id !== id);
    this.setState({ movies });
    this.setState({
      currentPage: Math.min(
        this.state.currentPage,
        Math.ceil(movies.length / this.state.pageSize)
      ),
    });
  };

  handleToggleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageNavigation = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {

    const sortcolumn =  {...this.state.sortColumn};
    


    this.state({
      sortColumn: {
        path,
        order: "asc",
      },
    });
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: "", name: "All Genres" }, ...getGenres()],
    });
  }

  render() {
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filterMovie = selectedGenre._id
      ? [...allMovies].filter((x) => x.genre._id === selectedGenre._id)
      : [...allMovies];


    const sortedMovie = _.orderBy([...filterMovie],[sortColumn.path],[sortColumn.order] )
    
    _.orderBy()
    const movies = paginate([...sortedMovie], currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            textProperty="name"
            valueProperty="_id"
            onSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filterMovie.length} movies in Database</p>
          <MovieTable
            movies={movies}
            onSort={this.handleSort}
            onLike={this.handleToggleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            onClick={this.handlePageNavigation}
            totalCount={filterMovie.length}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Movies;