import React from "react";
import {
  Star,
  Leaf,
  Smartphone,
  Truck,
  Check,
  MapPin,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="/public/hero.jpg"
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white">
          <p className="tracking-widest text-sm">
            OUR KITCHEN COMFORTS MEAL
          </p>
          <h1 className="text-5xl md:text-7xl font-bold">GO FOOD</h1>
          <p className="mt-2 text-lg">Unleash your inner chef</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-green-700 text-white py-16 px-6 md:flex gap-10 items-center">
        <img
          src="/public/About.jpg"
          className="rounded-xl md:w-1/2"
          alt=""
        />

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">ABOUT</h2>
          <p className="mb-4">
            At Go Food, we bring delicious meals from top kitchens straight to your doorstep.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Leaf /> Fresh ingredients
            </li>
            <li className="flex items-center gap-3">
              <Smartphone /> Easy ordering
            </li>
            <li className="flex items-center gap-3">
              <Truck /> Fast delivery
            </li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20 text-center">
        <img
          src="/public/delivery.jpg"
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-white">
          <h2 className="text-3xl font-bold mb-10">HOW IT WORKS</h2>

          <div className="grid md:grid-cols-3 gap-6 px-6">
            {["Browse", "Order & Pay", "Fast Delivery"].map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">PRICING</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "/public/food1.jpg", price: "₹120" },
            { img: "/public/food2.jpg", price: "₹150" },
            { img: "/public/food3.jpg", price: "₹200" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} className="h-56 w-full object-cover" />
              <div className="p-4 font-semibold">{item.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="py-16 px-6 md:flex gap-10 items-center">
        <img
          src="/public/box.jpg"
          className="rounded-xl md:w-1/2"
          alt=""
        />

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">
            What's inside each box?
          </h2>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check /> Fresh veggies
            </li>
            <li className="flex items-center gap-2">
              <Check /> Ready meals
            </li>
            <li className="flex items-center gap-2">
              <Check /> QR for COD
            </li>
            <li className="flex items-center gap-2">
              <Check /> Guaranteed taste
            </li>
          </ul>

          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full">
            Browse Food
          </button>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">REVIEWS</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-6 bg-white shadow rounded-xl">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} />
                ))}
              </div>
              <p>"Amazing food and fast delivery!"</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIAL */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          GO FOOD SPECIAL
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["family.jpg", "vegan.jpg", "asian.jpg"].map((img, i) => (
            <div key={i} className="shadow rounded-xl overflow-hidden">
              <img src={`/public/${img}`} className="h-56 w-full object-cover" />
              <button className="m-4 bg-green-700 text-white px-4 py-2 rounded-full">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-20 text-center text-white">
        <img
          src="/images/contact.jpg"
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative">
          <h2 className="text-3xl font-bold mb-6">GET IN TOUCH</h2>

          <div className="flex justify-center gap-6 mb-6">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>

          <div className="space-y-2">
            <p><MapPin /> Delhi</p>
            <p><MapPin /> Mumbai</p>
            <p><MapPin /> Bangalore</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;