import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Watchlist = () => {

    const { user } = useContext(AuthContext);
    const [watchlist, setWatchlist] = useState([]);
    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/watchlist?email=${user.email}`)
                .then(res => setWatchlist(res.data))
        }

    }, [user])
    return (
        <div>
            <h1>My Watchlist</h1>
            {
                watchlist.map(movie => (
                    <div key={movie._id} className="card bg-base-100 shadow">
                        <img src={movie.posterUrl} alt="" />
                        <div className="card-body">
                            <h2 className="card-title">{movie.title}</h2>
                            <p>⭐ {movie.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Watchlist;