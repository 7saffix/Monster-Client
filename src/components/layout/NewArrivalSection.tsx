import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const newArrival = [
  {
    id: 1,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=1",
  },
  {
    id: 2,
    name: "Shirt",
    price: 800,
    image: "https://picsum.photos/500/500?random=2",
  },
  {
    id: 3,
    name: "Punjabi",
    price: 1500,
    image: "https://picsum.photos/500/500?random=3",
  },
  {
    id: 4,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=4",
  },
  {
    id: 5,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=5",
  },
  {
    id: 6,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=6",
  },
  {
    id: 7,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=7",
  },
  {
    id: 8,
    name: "T-shirt",
    price: 500,
    image: "https://picsum.photos/500/500?random=8",
  },
];

const NewArrivalSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 relative">
      <h1 className="text-4xl text-center font-semibold">New Arrival</h1>
      <p className=" my-5 text-sm px-2 sm:px-0 sm:text-lg max-w-2xl m-auto ">
        Discover our latest collection, featuring stylish outfits crafted for
        comfort and elegance. Perfect for this season, these pieces bring
        freshness and energy.
      </p>

      {/* TOP BUTTONS */}
      <div className="flex justify-end max-w-7xl m-auto pr-2 mb-2 space-x-3">
        <button
          onClick={scrollLeft}
          className="bg-black/60 text-white p-3 rounded-xl hover:bg-black transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={scrollRight}
          className="bg-black/60 text-white p-3 rounded-xl hover:bg-black transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        className="
          max-w-7xl m-auto flex overflow-x-scroll space-x-4 pb-4 cursor-grabbing scroll-smooth
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:'none']
          [scrollbar-width:'none']
        "
      >
        {newArrival.map((product) => (
          <div
            key={product.id}
            className="min-w-[90%] sm:min-w-[50%] md:min-w-[30%] relative rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md p-3 text-white">
              <Link to={`/product/${product.id}`}>
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="text-sm">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalSection;
