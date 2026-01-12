import React from 'react';

const AddMovie = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-center">Add a New Movie</h2>
            <form className="flex flex-col gap-4">
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        // value={movieData.title}
                        // onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                    />
                </label>

                <label>
                    Plot Summary:
                    <textarea
                        name="plotSummary"
                        // value={movieData.plotSummary}
                        // onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full mt-1"
                    />
                </label>

                <label>
                    Poster URL:
                    <input
                        type="text"
                        name="posterUrl"
                        // value={movieData.posterUrl}
                        // onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                    />
                </label>

                <label>
                    Genre:
                    <input
                        type="text"
                        name="genre"
                        // value={movieData.posterUrl}
                        // onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                    />
                </label>
                <label>
                    Release Date:
                    <input
                        type="date"
                        name="releaseDate"
                        // value={movieData.releaseDate}
                        // onChange={handleChange}
                        required
                        className="input input-bordered w-full mt-1"
                    />
                </label>

                <button
                    type="submit"
                    className="btn btn-primary mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );

};

export default AddMovie;