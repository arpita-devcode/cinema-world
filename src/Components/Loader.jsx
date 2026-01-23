import React from "react";

const Loader = () => {
  const features = [
    {
      title: "Top Rated Movies",
      description: "Access the best movies rated by users and critics, curated for your entertainment.",
      icon: "🎬",
    },
    {
      title: "Personal Watchlist",
      description: "Save your favorite movies and keep track of what you want to watch next.",
      icon: "❤️",
    },
    {
      title: "Latest Releases",
      description: "Stay updated with the newest movies released across genres worldwide.",
      icon: "🆕",
    },
    {
      title: "User-Friendly Interface",
      description: "Enjoy a sleek, intuitive, and responsive interface designed for seamless browsing.",
      icon: "💻",
    },
    {
      title: "Detailed Movie Info",
      description: "Get comprehensive information about movies including plot, ratings, genre, and more.",
      icon: "ℹ️",
    },
    {
      title: "Secure Account",
      description: "Login and manage your profile safely with our secure authentication system.",
      icon: "🔒",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose Movie Master Pro?</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Movie Master Pro is your ultimate platform to explore, save, and enjoy movies with ease. Here’s why users love our platform:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loader;
