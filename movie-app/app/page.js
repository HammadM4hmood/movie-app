import AddMovie from './components/AddMovie'
import MovieList from './components/MovieList'

async function getData() {
  const res = await fetch('http://localhost:3000/api/movies', { cache: "no-cache" })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
const page = async () => {

  const movies = await getData()
  console.log(movies)
  return (
    <main className="flex min-h-screen flex-col p-24 bg-gray-100">
      <AddMovie />
      <h1 className="font-bold text-left text-3xl mt-5 text-blue-600">Movie List</h1>
      <div className="mt-4 p-4  rounded-lg">
        {movies && movies.length > 0 ? (
          <MovieList movie={movies} />
        ) : (
          <p className="text-gray-500 italic">No movies available</p>
        )}
      </div>
    </main>
  );
}

export default page;
