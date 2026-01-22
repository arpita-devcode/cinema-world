import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Watchlist = () => {
    const { user } = useContext(AuthContext);
    const [watchlist, setWatchlist] = useState([]);
    //   const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/watchlist?email=${user.email}`)
                .then((res) => {
                    setWatchlist(res.data);
                    //   setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    //   setLoading(false);
                });
        } else {
            //   setLoading(false);
        }
    }, [user]);

    //   if (loading) {
    //     return <p className="text-center mt-10">Loading watchlist...</p>;
    //   }

    if (watchlist.length === 0) {
        return <p className="text-center mt-10 text-gray-500">Your watchlist is empty 🎬</p>;
    }
    const handleDelete = (id) => {
  axios.delete(`http://localhost:3000/watchlist/${id}`)
    .then((res) => {
      if (res.data.deletedCount > 0) {
        setWatchlist(prev =>
          prev.filter(item => item.watchlistId !== id)
        );
      }
    })
    .catch(err=> console.log(err));
};


    return (
        <div className="max-w-6xl mx-auto mt-10 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">My Watchlist</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {watchlist.map((movie) => (
                    <div
                        key={movie.watchlistId}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={movie.posterUrl}
                            alt={movie.title}
                            className="h-64 w-full object-cover"
                        />

                        <div className="p-4">
                            <h3 className="text-xl font-bold">{movie.title}</h3>
                            <p className="text-sm mt-2">⭐ {movie.rating}</p>

                            <button
                                onClick={() => handleDelete(movie.watchlistId)}
                                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                            >
                                ❌ Remove from Watchlist
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Watchlist;
