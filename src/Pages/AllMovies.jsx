import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import "../styles/Button.css";
import { Link } from 'react-router';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../context/AuthContext';

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    let isMounted = true;

    axios.get("https://movies-server-backend.vercel.app/movies")
      .then(res => {
        if (isMounted) setMovies(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setMovies([]);
        setLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  const handleWatchlist = (movie) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    axios.post("https://movies-server-backend.vercel.app/watchlist", { movieId: movie._id, userEmail: user.email })
      .then(res => {
        if(res.data.message){
          alert(res.data.message);
        } else {
          alert("Added to Watchlist ❤️");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Failed to add to watchlist");
      });
  };

  if (loading) return <p className="text-center mt-10">Loading movies...</p>;
  if (movies.length === 0) return <p className="text-center mt-10 text-gray-500">No movies available 🎬</p>;

  return (
    <div className='p-3.5 bg-white'>
      <h1 className='text-center text-4xl my-5'>All Featured Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div key={movie._id} className="card bg-base-100 rounded-3xl shadow-sm hover:text-yellow-600 hover:liquid ">
            <figure className='overflow-hidden h-100'>
              <img src={movie.posterUrl} className='w-full h-full object-center' alt={movie.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl italiana-regular">
                {movie.title}
                <div className="badge bg-amber-200">{movie.genre}</div>
              </h2>
              <p className='italic text-gray-400'>"{movie.plotSummary}"</p>
              <div className='flex justify-between'>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{movie.rating}</div>
                  <div className="badge badge-outline">{movie.duration}m</div>
                </div>
                {user && (
                  <Link to={`/movies/${movie._id}`}>
                    <button className="btnn liquid">View Details</button>
                  </Link>
                )}
              </div>
              <div>
                <FontAwesomeIcon
                  className='text-3xl cursor-pointer text-gray-400 hover:text-red-500'
                  onClick={() => handleWatchlist(movie)}
                  icon={faHeart}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
