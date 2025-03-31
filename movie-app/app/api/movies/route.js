import client from "../../libs/prismadb";
import { NextResponse } from "next/server";

// url: http://localhost:3000/api/movies

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { title, actors, releaseYear } = body;
    const newMovie = await client.movie.create({
      data: {
        title,
        actors,
        releaseYear
      }
    });
    return NextResponse.json(newMovie);
  } catch (error) {
    console.error("POST /api/movies error:", error);
    return NextResponse.json(
      { message: "Error creating movie", error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const movies = await client.movie.findMany();
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json(
      { status: 500 },
      { message: "Error getting movies", error }
    );
  }
};
