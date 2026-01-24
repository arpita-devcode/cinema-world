import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://movies-server-backend.vercel.app/recent-movies")
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []); // ✅ Add empty dependency array to avoid infinite requests

  return (
    <div className="p-5 min-h-screen bg-base-100">
      <h1 className="text-3xl font-bold mb-6 text-center">
        ⭐ Recently Added Movies
      </h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(movie => (
            <div key={movie._id} className="card bg-base-100 w-72 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <figure className="overflow-hidden h-80">
                <img
                  src={movie.posterUrl}
                  className="w-full h-full object-cover"
                  alt={movie.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title flex justify-between items-center">
                  {movie.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  A card component has a figure, a body part, and inside body there are title and actions parts
                </p>
                <div className="card-actions justify-end mt-2">
                  <div className="badge badge-outline">{movie.rating}</div>
                  <div className="badge badge-outline">{movie.releaseYear}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recent;
