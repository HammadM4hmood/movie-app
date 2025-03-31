import client from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

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
