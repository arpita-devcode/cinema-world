import React from 'react';
import Slider from '../Components/Slider';
import Latestmovies from '../Components/Latestmovies';
import Recent from '../Components/Recent';
import Loader from '../Components/Loader';
import MovieCard from '../Components/MovieCard';


const Home = () => {

    return (
        <div className='bg-white'>
             <Slider></Slider>
            <Latestmovies></Latestmovies>
            <Recent></Recent>
            {/* <MovieCard></MovieCard> */}
            <Loader></Loader>
        </div>
    );
};

export default Home;