import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

/**
 * @param {object} request request object
 * @param {object} param1 url and id (http://localhost:3000/api/movies/{id}) 
 * @returns {JSON} the movie with the given id
 */
export const GET = async (request, context) => {
  try {
    const { params } = context; 
    const { id } = params; 

    const movie = await client.movie.findUnique({
      where: { id },
    });

    if (!movie) {
      return NextResponse.json({ message: "Movie not found" }, { status: 404 });
    }

    return NextResponse.json(movie);
  } catch (error) {
    console.error("Error fetching movie:", error);
    return NextResponse.json({ message: "Error getting movie", error }, { status: 500 });
  }
};


/**
 * @param {object} request request object
 * @param {object} param1 url and id (http://localhost:3000/api/movies/{id})
 * @returns {JSON} updated movie
 */
export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { id } = params;
    const { title, actors, releaseYear } = body;

    const editMovie = await client.movie.update({
      where: {
        id
      },
      data: {
        title,
        actors,
        releaseYear
      }
    });
    if (!editMovie) {
      return NextResponse.json({ message: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(editMovie);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error updating movie", error }
    );
  }
};

/**
 * @param {object} request request object 
 * @param {object} param1 url and id (http://localhost:3000/api/movies/{id})
 * @description delete a movie from the database
 * @returns {JSON} status 200 if successful, 500 if error
 */
export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    await client.movie.delete({
      where: {
        id
      }
    });
    return NextResponse.json({ status: 200 }, { message: "Movie deleted" });
  } catch (error) {
    return NextResponse.json({ message: "Movie not found" }, { status: 500 });
  }
};
