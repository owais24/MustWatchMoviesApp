import React, { useState, useEffect } from "react";
import AddMovies from "../popup/AddMovies";
import Cards from "./Cards";
import "../App.css";

const MovieList = () => {
  const [modal, setModal] = useState(false);
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("movielist");

    if (arr) {
      let obj = JSON.parse(arr);
      setMovieList(obj);
    }
  }, []);

  const deleteMovie = (index) => {
    let tempList = MovieList;
    tempList.splice(index, 1);
    localStorage.setItem("movielist", JSON.stringify(tempList));
    setMovieList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = MovieList;
    tempList[index] = obj;
    localStorage.setItem("MovieList", JSON.stringify(tempList));
    setMovieList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const savemovies = (movieobj) => {
    let templist = MovieList;
    templist.push(movieobj);
    localStorage.setItem("movielist", JSON.stringify(templist));
    setMovieList(templist);
    setModal(false);
  };

  return (
    <>
      <div className=" header-container text-center">
        <h3> Must Watch Movies List</h3>
        <button className="btn btn-dark mt-2" onClick={() => setModal(true)}>
          Add Movie
        </button>
      </div>

      <div className="movie-container">
        {MovieList &&
          MovieList.map((obj, index) => (
            <Cards movies={obj} index={index} deleteMovie={deleteMovie} />
          ))}
      </div>
      <AddMovies toggle={toggle} modal={modal} save={savemovies} />
    </>
  );
};

export default MovieList;
