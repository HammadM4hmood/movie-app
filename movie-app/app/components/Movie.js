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
    <li className="p-3 my-5 bg-slate-300" key={movie.id}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="pt-5">
        <button
          className="text-white mr-3 bg-blue-500 rounded"
          onClick={() => {
            setShowModalEdit(true);
            setMovieToEdit(movie);
          }}
        >
          Edit
        </button>

        <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
          <form className="w-full px-5 pb-6" onSubmit={handleEditSubmit}>
            <h1>Add or Update a Movie</h1>
            <input
              type="text"
              placeholder="title"
              name="title"
              className="w-full p-2 mb-3"
              value={movieToEdit.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="actors"
              name="actors"
              className="w-full p-2 mb-3"
              value={movieToEdit.actors}
              onChange={handleChange}
            />
            <input
              type="integer"
              placeholder="releaseYear"
              name="releaseYear"
              className="w-full p-2 mb-3"
              value={movieToEdit.releaseYear}
              onChange={handleChange}
            />
            <button type="submit" className="bg-blue-700 text-white px-5 py-2">
              Submit
            </button>
          </form>
        </Modal>
        <button
          className="text-white mr-3 rounded bg-red-600"
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </button>
        <Modal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
          <div className="flex flex-col items-start">
            <h1 className="text-2xl pb-3">
              Are you sure you want to delete this movie?
            </h1>
            <div className="space-x-4">
              <button
                className="text-blue-700 font-bold border-2 border-solid bg-blue-200 rounded"
                onClick={() => handleDeleteMovie(movie.id)}
              >
                {" "}
                Yes
              </button>
              <button
                className="text-red-700 font-bold border-2 border-solid bg-red-200 rounded"
                onClick={() => setShowDeleteModal(false)}
              >
                {" "}
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
