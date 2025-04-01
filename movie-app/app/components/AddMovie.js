/** Christopher Findlay, Hammad Mahmood, Samuel Kyle Yung, Gurnoor Singh | April 1st, 2025
 * Assignment 3 - Full-Stack Web Application
 * 
 * This compenent is the component that is used too add movie. When the use clicks on "Add Moive"
 * a modal will pop-up asking the user to fill in inputs. It asks the user to input the title of the movie,
 * the actors, and release date. If it encounters an error, it will log it to the console. When the button is
 * clicked, it'll send a POST to the endpoint "api/movies" and stores them. On successful submission, the form
 * resets and the movie list is refreshed.
 * 
 */

"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddMovie = () => {
  const Router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setInput((prevState) => ({
      ...prevState,
      [name]: name === "releaseYear" ? parseInt(value, 10) || "" : value, 
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/movies", input)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInput({});
        setShowModal(false);
        Router.refresh();
      });
  };
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-700 text-white p-3 cursor-pointer rounded-2xl"
      >
        Add Movie
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="mb-2 underline">Add or Update a Movie</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-2 mb-3 bg-white rounded-full"
            value={input.title || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Actors"
            name="actors"
            className="w-full p-2 mb-3 bg-white rounded-full"
            value={input.actors || ""}
            onChange={handleChange}
          />
          <input
            type="integer"
            placeholder="Release Year"
            name="releaseYear"
            className="w-full p-2 mb-3 bg-white rounded-full"
            value={input.releaseYear || ""}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-700 text-white px-5 py-2 rounded-4xl">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
