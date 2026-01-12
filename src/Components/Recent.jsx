import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recent = () => {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/recent-movies")
        .then(res=>setMovies(res.data))
    })
    return (
        <div className="p-5 mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">
                ⭐ Recently Added Movies
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {movies.map(movie => (
                    <div key={movie._id} className="card bg-base-100 w-100 shadow-sm hover:text-yellow-600 ">
                        <figure className='overflow-hidden h-100 '>
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
                                <div className="badge badge-outline">{movie.releaseYear}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recent;