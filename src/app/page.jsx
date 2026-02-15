import React from 'react';
import '../style/globals.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100 overflow-x-hidden">

      {/* Hero Section */}
      <section
  className="relative min-h-screen bg-cover bg-[position:75%_center] md:bg-center flex items-center"
  style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/266770.jpg)' }}
>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-60"></div>

        <div className="relative z-10 w-full flex items-center justify-center text-center text-white px-4 sm:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Adopt Your New Best Friend
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6">
              Give a pet a loving home today!
            </p>
            <a href="/explorePets"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
              Start Exploring
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">
            Why Adopt With Us?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Trusted Shelters</h3>
              <p className="text-sm md:text-base text-black">
                We collaborate with reputable shelters to ensure all pets are healthy and well-cared for.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Easy Process</h3>
              <p className="text-sm md:text-base text-black">
                Our streamlined adoption process makes it easy to find your new companion.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-yellow-200 via-lime-300 to-green-100 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Ongoing Support</h3>
              <p className="text-sm md:text-base text-black">
                We provide guidance and support to help you and your pet adjust to life together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="relative bg-lime-400 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

          <div className="relative h-64 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://cdn.eathappyproject.com/wp-content/uploads/2023/05/how-to-introduce-new-cat-and-dog-1024x576-1-768x432.jpg)' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>

          <div className="flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-black">
              INTRODUCE A PET
            </h1>
            <p className="text-sm sm:text-base md:text-xl mb-6 text-black">
              "Give them a chance to find their forever home!"
            </p>
            <Link href="/addPet"
              className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-lime-600 transition">
              Add
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Adoption Assistance</h3>
              <p className="text-sm md:text-base text-black">
                Our team is here to help you throughout the entire adoption process.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Pet Matching</h3>
              <p className="text-sm md:text-base text-black">
                We'll help you find the perfect pet that fits your lifestyle and needs.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-200 via-lime-300 to-yellow-200 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">Post-Adoption Support</h3>
              <p className="text-sm md:text-base text-black">
                Get support and resources after the adoption to ensure a happy transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative min-h-[60vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/dog-dry-food-pet-background-close-up-dog-dry-food-pet-background-close-up-205108551.jpg)' }}>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-50"></div>

        <div className="relative z-10 w-full text-center text-white px-4 sm:px-6 max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
            #AdoptLove
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6">
            Approximately 1478 dogs & cats die every day on roads in India.
            Let's start a mission to provide every dog and cat a home before 2035.
          </p>
          <a href="/explorePets"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Adopt, Don't Shop!
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white">
            What Our Adopters Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg hover:scale-105 transition">
              <p className="text-sm md:text-base text-black mb-4">
                "Adopting our dog through this service was a wonderful experience."
              </p>
              <h4 className="text-base md:text-lg font-semibold text-black">
                - Emily R.
              </h4>
            </div>

            <div className="p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg hover:scale-105 transition">
              <p className="text-sm md:text-base text-black mb-4">
                "The pet matching service was fantastic!"
              </p>
              <h4 className="text-base md:text-lg font-semibold text-black">
                - John D.
              </h4>
            </div>

            <div className="p-6 bg-gradient-to-r from-red-200 via-yellow-300 to-lime-400 rounded-lg shadow-lg hover:scale-105 transition">
              <p className="text-sm md:text-base text-black mb-4">
                "Our puppy has settled in so well!"
              </p>
              <h4 className="text-base md:text-lg font-semibold text-black">
                - Sarah K.
              </h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
