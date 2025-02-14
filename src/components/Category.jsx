import React from "react";
import { Link } from "react-router-dom";
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import m6 from "../assets/m6.png";
import m7 from "../assets/m7.png";
import m8 from "../assets/m8.png";
import m9 from "../assets/m9.png";
import m10 from "../assets/m10.png";
import m11 from "../assets/m11.png";
import m12 from "../assets/m12.png";

const categories = [
  { image: m1, title: "Baby Care", path: "/baby-care" },
  { image: m2, title: "Multivitamins", path: "/multivitamins" },
  { image: m3, title: "Personal Care", path: "/personal-care" },
  { image: m4, title: "Glucometer", path: "/glucometer" },
  { image: m5, title: "Women Care", path: "/women-care" },
  { image: m6, title: "Health Devices", path: "/health-devices" },
  { image: m7, title: "Whey & Supplements", path: "/supplements" },
  { image: m8, title: "Skin Care", path: "/skin-care" },
  { image: m9, title: "Whey Protein", path: "/whey-protein" },
  { image: m10, title: "Ayurveda", path: "/ayurveda" },
  { image: m11, title: "Dairy Stuffs", path: "/dairy-stuffs" },
  { image: m12, title: "Daily Essentials", path: "/daily-essentials" },
];

const Category = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Shop By Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <div className="group flex flex-col items-center bg-white p-4 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-28 h-28 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
