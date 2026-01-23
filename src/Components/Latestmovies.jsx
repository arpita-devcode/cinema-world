import React, { useEffect, useState } from "react";
import axios from "axios";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/latest-movies")
      .then((res) => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading latest movies...</p>;

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">⭐ Top Rated Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
        {movies.map((movie) => (
          <div key={movie._id} className="card bg-base-100 shadow-sm hover:text-yellow-600">
            <figure className="overflow-hidden h-64">
              <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between items-center">
                {movie.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <div className="card-actions justify-end mt-2">
                <div className="badge badge-outline">{movie.rating}</div>
                <div className="badge badge-outline">{movie.genre}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;
