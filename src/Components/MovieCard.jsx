import React from "react";

const MovieCard = () => {
  const genres = [
    { name: "Action", icon: "🔥" },
    { name: "Comedy", icon: "😂" },
    { name: "Drama", icon: "🎭" },
    { name: "Horror", icon: "👻" },
    { name: "Romance", icon: "❤️" },
    { name: "Sci-Fi", icon: "🚀" },
    { name: "Thriller", icon: "😱" },
    { name: "Animation", icon: "🎨" },
  ];
  return (
    <div>
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Explore by Genre</h2>
          <p className="text-gray-600 mb-12 text-lg">
            Discover movies by genre and find the perfect movie for your mood.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {genres.map((genre, index) => (
              <Link
                key={index}
                to={`/genres/${genre.name.toLowerCase()}`} // Navigate to filtered genre page
                className="flex flex-col items-center justify-center p-4 rounded-xl shadow hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-yellow-50"
              >
                <div className="text-4xl mb-2">{genre.icon}</div>
                <span className="font-semibold text-gray-800">
                  {genre.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieCard;
