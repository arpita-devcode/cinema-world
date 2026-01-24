import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../styles/Button.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({
    title: "",
    plotSummary: "",
    posterUrl: "",
    genre: "",
    releaseDate: "",
    duration: 0,
    rating: 0,
    director: "",
    cast: "",
    language: "",
    country: "",
  });

  useEffect(() => {
    axios.get(`https://movies-server-backend.vercel.app/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        setMovieData({
          title: res.data.title || "",
          plotSummary: res.data.plotSummary || "",
          posterUrl: res.data.posterUrl || "",
          genre: res.data.genre || "",
          releaseDate: res.data.releaseDate || "",
          duration: res.data.duration || 0,
          rating: res.data.rating || 0,
          director: res.data.director || "",
          cast: res.data.cast || "",
          language: res.data.language || "",
          country: res.data.country || "",
        });
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...movieData,
        rating: parseFloat(movieData.rating),
        duration: parseInt(movieData.duration),
      };

      const res = await axios.patch(
        `https://movies-server-backend.vercel.app/movies/${id}`,
        updatedData
      );

      if (res.data.modifiedCount > 0) {
        setMovie(updatedData); // update UI immediately
        alert("Movie updated 🎬");
        document.getElementById("my_modal_2").close(); // close modal
      } else {
        alert("No changes made");
      }
    } catch (err) {
      console.error(err);
      alert("Update failed! Check console.");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`https://movies-server-backend.vercel.app/movies/${id}`);
      if (res.data.deletedCount > 0) alert("Movie deleted");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading movie details...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Poster */}
        <img src={movie.posterUrl} alt={movie.title} className="rounded-2xl shadow-lg" />

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4 italiana-regular">{movie.title}</h1>
          <p className="text-gray-400 italic mb-4">"{movie.plotSummary}"</p>

          <div className="space-y-2">
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
            <p><strong>Release Year:</strong> {movie.releaseDate}</p>
            <p><strong>Duration:</strong> {movie.duration} min</p>
            <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Country:</strong> {movie.country}</p>
          </div>

          <div className="flex gap-3 my-3">
            <button className="btnn w-17 liquid" onClick={() => document.getElementById('my_modal_2').showModal()}>Edit</button>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Movie</h2>
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                  {Object.keys(movieData).map((key) => (
                    <div key={key}>
                      <label className="capitalize">{key}:</label>
                      <input
                        type={key === "plotSummary" ? "textarea" : "text"}
                        name={key}
                        value={movieData[key]}
                        onChange={handleChange}
                        className="input input-bordered w-full mt-1"
                      />
                    </div>
                  ))}
                  <button type="submit" className="btn btn-primary mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">
                    Update
                  </button>
                </form>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>

            <button onClick={handleDelete} className="btn h-12">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
