import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";
import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";
import c13 from "../assets/c13.png";

const products = [
  { image: c6, title: "Aciloc 150mg", price: 209, oldPrice: 360 },
  { image: c7, title: "Paracetamol", price: 209.75, oldPrice: 360.61 },
  { image: c8, title: "Ibugesic Plus", price: 209, oldPrice: 360 },
  { image: c9, title: "Crocin Tablet", price: 209, oldPrice: 360 },
  { image: c10, title: "Disprin Tablet", price: 209, oldPrice: 360 },
  { image: c11, title: "Dolo 650", price: 209, oldPrice: 360 },
  { image: c12, title: "Ibuprofen", price: 209, oldPrice: 360 },
  { image: c13, title: "Calpol", price: 209, oldPrice: 360 },
];

const Carousel2 = () => {
  const handleAddToCart = (productName) => {
    toast.success(`To Get This ${productName} Login First! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      style: {
        backgroundColor: "#6c757d", // Gray color
        color: "#fff",
      },
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <section className="py-6">
      {/* Toast Container for Notifications */}
      <ToastContainer />
      <div className="container mx-auto px-4">
        {/* Heading Above the Carousel */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Cardiac Care
        </h2>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          grabCursor={true}
          loop={true}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-3">{product.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product.title)}
                  className="mt-3 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel2;
