import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MyCollection = () => {
  const { user } = useContext(AuthContext);// ✅ get logged-in user
  const userEmail = user ? user.email : ""; // 👈 userEmail to filter

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return; // wait until userEmail exists

    fetch(`https://movies-server-backend.vercel.app/movies`)
      .then((res) => res.json())
      .then((data) => {
        // filter movies by userEmail
        const myMovies = data.filter((movie) => movie.userEmail === userEmail);
        setMovies(myMovies);
        setLoading(false);
      });
  }, [userEmail]); // ✅ rerun when userEmail changes

  if (!userEmail) {
    return <p className="text-center mt-10">Please log in to see your collection.</p>;
  }

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Movie Collection
      </h2>

      {movies.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any movies yet 🎬
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div key={movie._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={movie.posterUrl} alt={movie.title} className="h-64 w-full object-cover" />
               <div className="p-4">
                <h3 className="text-xl font-bold">{movie.title}</h3>
                <p className="text-sm text-gray-500">{movie.genre}</p>
                <p className="text-sm mt-2 line-clamp-3">{movie.plotSummary}</p>
                <p className="text-xs mt-2 text-gray-400">Release: {movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCollection;
