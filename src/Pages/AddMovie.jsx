import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AddMovie = () => {
   const { user } = useContext(AuthContext); // 👈 get logged-in user
  const userEmail = user?.email || "";  
  const [movieData, setMovieData] = useState({
    title: "",
    plotSummary: "",
    posterUrl: "",
    genre: "",
    releaseDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send movie data along with logged-in user's email
      const res = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...movieData, userEmail }), // 👈 email added automatically
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Failed to add movie");
        return;
      }

      alert("Movie added successfully 🎬");
      setMovieData({
        title: "",
        plotSummary: "",
        posterUrl: "",
        genre: "",
        releaseDate: "",
      });
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Movie</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* AUTO-FILLED EMAIL (read-only) */}
        <input
          type="email"
          value={userEmail}
          readOnly
          className="input input-bordered w-full bg-gray-200"
        />

        <input
          type="text"
          name="title"
          value={movieData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input input-bordered w-full"
        />

        <textarea
          name="plotSummary"
          value={movieData.plotSummary}
          onChange={handleChange}
          placeholder="Plot Summary"
          required
          className="textarea textarea-bordered w-full"
        />

        <input
          type="text"
          name="posterUrl"
          value={movieData.posterUrl}
          onChange={handleChange}
          placeholder="Poster URL"
          required
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="genre"
          value={movieData.genre}
          onChange={handleChange}
          placeholder="Genre"
          required
          className="input input-bordered w-full"
        />

        <input
          type="date"
          name="releaseDate"
          value={movieData.releaseDate}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          className="btn bg-yellow-500 hover:bg-yellow-600 text-white mt-2"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
