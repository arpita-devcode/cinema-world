import React, { useState } from 'react';
import axios from 'axios';

const Latestmovies = () => {
    const [movies, setMovies] = useState(null);

    if (!movies) {
        axios.get('http://localhost:3000/latest-movies')
            .then(res => setMovies(res.data));
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="p-6 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">
                ⭐ Top Rated Movies
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <div key={movie._id} className="card bg-base-100 shadow-sm hover:text-yellow-600 ">
                <figure className='overflow-hidden h-100'>
                    <img
                        src={movie.posterUrl}
                        className='w-full h-full object-center'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {movie.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{movie.rating}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
                ))}
            </div>
        </div>
    );
};

export default Latestmovies;
