import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../styles/Button.css'
import { AuthContext } from "../context/AuthContext";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        setMovieData(res.data);
        setLoading(false);
      });
  }, [id]);
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  setMovieData({ ...movieData, [name]: value });
};

  const handleUpdate= (e) =>{
    e.preventDefault();
    // update logic here
    axios.patch(`http://localhost:3000/movies/${id}`, movieData)
    .then(res => {
      if (res.data.modifiedCount > 0) {
        alert("Movie updated 🎬");}
      })
      setMovie(movieData); // refresh display instantly

  }
  const handleDel=()=>{
    //delete logic here'
    axios.delete(`http://localHost:3000/movies/${id}`)
    .then(res=>{
      if(res.data.deletedCount>0){
        alert("Movie deleted")
      }
    })
  }

  // ✅ SAFETY CHECK
  if (loading) {
    return <p className="text-center mt-10">Loading movie details...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Poster */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="rounded-2xl shadow-lg"
        />

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 italiana-regular">{movie.title}</h1>

          <p className="text-gray-400 italic mb-4">
            "{movie.plotSummary}"
          </p>

          <div className="space-y-2">
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            <p><strong>Duration:</strong> {movie.duration} min</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Country:</strong> {movie.country}</p>
          </div>
          <div className="flex gap-3 my-3">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btnn w-17 liquid" onClick={() => document.getElementById('my_modal_2').showModal()}>Edit</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
                  <h2 className="text-2xl font-bold mb-4 text-center">Update the list</h2>
                  <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <label>
                      Title:
                      <input
                        type="text"
                        name="title"
                         value={movieData.title}
                         onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>

                    <label>
                      Plot Summary:
                      <textarea
                        name="plotSummary"
                        value={movieData.plotSummary}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full mt-1"
                      />
                    </label>

                    <label>
                      Poster URL:
                      <input
                        type="text"
                        name="posterUrl"
                        value={movieData.posterUrl}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>

                    <label>
                      Genre:
                      <input
                        type="text"
                        name="genre"
                        value={movieData.genre}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>
                    <label>
                      Release Date:
                      <input
                        type="date"
                        name="releaseDate"
                        value={movieData.releaseDate}
                         onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>
                    <label>
                      Duration:
                      <input
                        type="text"
                        name="duration"
                        value={movieData.duration}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>
                     <label>
                      Rating:
                      <input
                        type="text"
                        name="rating"
                        value={movieData.rating}
                        onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                      />
                    </label>
                    <button
                      type="submit"
                      className="btn btn-primary mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                       Update
                    </button>
                  </form>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <button onClick={handleDel} className="btn h-12 ">Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDetails;
