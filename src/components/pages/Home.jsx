import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  return (
    <div className="px-4 py-8 mt-10">
      {/* Container for the entire layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Center - Carousel */}
        <div className="col-span-12 md:col-span-6 bg-gray-100 p-6 rounded-xl shadow-lg relative mb-6 md:mb-0 order-1 md:order-2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000} 
            className="rounded-xl"
          >
            <div>
              <img
                src="/images/product1.jpg"
                alt="Smart Watch"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">Smart Watch</h2>
                <p className="text-lg mb-6">Track your fitness in style</p>
                <Link to="/shop">
                  <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:opacity:.8 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <img
                src="/images/product2.jpg"
                alt="Wireless Earbuds"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">Wireless Earbuds</h2>
                <p className="text-lg mb-6">Crystal-clear sound experience</p>
                <Link to="/shop">
                  <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-500 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <img
                src="/images/product3.jpg"
                alt="Laptop"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className="text-4xl font-semibold mb-4">Laptop</h2>
                <p className="text-lg mb-6">Powerful performance for work and play</p>
                <Link to="/shop">
                  <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-500 transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Left Sidebar - Categories */}
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl shadow-lg mb-6 md:mb-0 order-2 md:order-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/category/smartwatches" className="text-lg text-gray-700 hover:text-red-600">
                Smart Watches
              </Link>
            </li>
            <li>
              <Link to="/category/earbuds" className="text-lg text-gray-700 hover:text-red-600">
                Earbuds
              </Link>
            </li>
            <li>
              <Link to="/category/laptops" className="text-lg text-gray-700 hover:text-red-600">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/category/phones" className="text-lg text-gray-700 hover:text-red-600">
                Smartphones
              </Link>
            </li>
            <li>
              <Link to="/category/accessories" className="text-lg text-gray-700 hover:text-red-600">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Contact Box */}
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-xl shadow-lg order-3 md:order-3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Become a Vendor</h2>
          <p className="text-gray-700 mb-4">Need assistance? Contact our Helplines directly for help!</p>
          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800">Phone: <span className="text-red-600">+123 456 7890</span></p>
            <p className="text-lg font-medium text-gray-800">Email: <span className="text-red-600">support@gookway.com</span></p>
          </div>
          <Link to="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-500 transition duration-300 mt-6 w-full">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
