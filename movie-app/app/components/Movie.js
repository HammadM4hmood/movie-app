"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Movie = ({ movie }) => {

  const Router = useRouter();
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/movies/${movie.id}`, movieToEdit)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowModalEdit(false);
        Router.refresh();
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMovieToEdit((prevState) => ({
      ...prevState,
      [name]: name === "releaseYear" ? parseInt(value, 10) || "" : value,
    }));
  };

  const handleDeleteMovie = (id) => {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowDeleteModal(false);
        Router.refresh();
      });
  };

  return (
      <li className="bg-gray-100 shadow-xl p-6 rounded-lg m-5 w-full max-w-md">
        <h1 className="font-bold text-2xl text-center mb-4 text-gray-800">{movie.title}</h1>
        <p className="text-gray-700 mb-2"><span className="font-semibold">Actors:</span> {movie.actors}</p>
        <p className="text-gray-700 mb-4"><span className="font-semibold">Release Year:</span> {movie.releaseYear}</p>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            onClick={() => {
              setShowModalEdit(true);
              setMovieToEdit(movie);
            }}
          >
            Edit
          </button>

          <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
            <form className="w-full px-5 pb-6" onSubmit={handleEditSubmit}>
              <h1 className="text-xl font-bold mb-4">Edit Movie</h1>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="w-full p-2 mb-3 border border-gray-300  bg-gray-200 rounded-lg"
                value={movieToEdit.title}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Actors"
                name="actors"
                className="w-full p-2 mb-3 border border-gray-300  bg-gray-200 rounded-lg"
                value={movieToEdit.actors}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Release Year"
                name="releaseYear"
                className="w-full p-2 mb-3 border border-gray-300  bg-gray-200 rounded-lg"
                value={movieToEdit.releaseYear}
                onChange={handleChange}
              />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
                Submit
              </button>
            </form>
          </Modal>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete
          </button>
          <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold mb-4 text-gray-800">
                Are you sure you want to delete this movie?
              </h1>
              <div className="flex space-x-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                  onClick={() => handleDeleteMovie(movie.id)}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                  onClick={() => setShowDeleteModal(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </li>
  );
};

export default Movie;
