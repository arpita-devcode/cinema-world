import React from 'react';
import Slider from '../Components/Slider';
import Latestmovies from '../Components/Latestmovies';
import Recent from '../Components/Recent';


const Home = () => {

    return (
        <div>
             <Slider></Slider>
            <Latestmovies></Latestmovies>
            <Recent></Recent>
        </div>
    );
};

export default Home;