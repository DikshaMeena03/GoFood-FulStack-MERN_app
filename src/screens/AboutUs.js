import React from "react";
import {
  Star,
  Leaf,
  Smartphone,
  Truck,
  Check,
  MapPin,
  Share2,
  Heart,
  Globe,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div>

      {/* HERO */}
      <section className="position-relative text-center text-white">
        <img
          src="/hero.jpg"
          className="w-100"
          style={{ height: "90vh", objectFit: "cover" }}
          alt=""
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        <div className="position-absolute top-50 start-50 translate-middle">
          <p className="text-uppercase">OUR KITCHEN COMFORTS MEAL</p>
          <h1 className="display-3 fw-bold">GO FOOD</h1>
          <p>Unleash your inner chef</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-success text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="/About.jpg" className="img-fluid rounded" alt="" />
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <h2>ABOUT</h2>
              <p>
                At Go Food, we bring delicious meals from top kitchens straight
                to your doorstep.
              </p>

              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <Leaf className="me-2" /> Fresh ingredients
                </li>
                <li className="d-flex align-items-center mb-2">
                  <Smartphone className="me-2" /> Easy ordering
                </li>
                <li className="d-flex align-items-center">
                  <Truck className="me-2" /> Fast delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="position-relative text-center text-white py-5">
        <img
          src="/delivery.jpg"
          className="w-100 position-absolute top-0 start-0"
          style={{ height: "100%", objectFit: "cover" }}
          alt=""
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        <div className="container position-relative">
          <h2 className="mb-4">HOW IT WORKS</h2>

          <div className="row">
            {["Browse", "Order & Pay", "Fast Delivery"].map((step, i) => (
              <div className="col-md-4" key={i}>
                <div className="mb-3">
                  <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px" }}>
                    {i + 1}
                  </div>
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container text-center my-5">
        <h2 className="mb-4">PRICING</h2>

        <div className="row">
          {[
            { img: "/food1.jpg", price: "₹120" },
            { img: "/food2.jpg", price: "₹150" },
            { img: "/food3.jpg", price: "₹200" },
          ].map((item, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow">
                <img
                  src={item.img}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                  alt=""
                />
                <div className="card-body">
                  <h5>{item.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/box.jpg" className="img-fluid rounded" alt="" />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2>What's inside each box?</h2>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <Check className="me-2" /> Fresh veggies
              </li>
              <li className="d-flex align-items-center mb-2">
                <Check className="me-2" /> Ready meals
              </li>
              <li className="d-flex align-items-center mb-2">
                <Check className="me-2" /> QR for COD
              </li>
              <li className="d-flex align-items-center">
                <Check className="me-2" /> Guaranteed taste
              </li>
            </ul>

            <button className="btn btn-success mt-3">
              Browse Food
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="mb-4">REVIEWS</h2>

          <div className="row">
            {[1, 2, 3].map((_, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <div className="p-4 bg-white shadow rounded">
                  <div className="mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} />
                    ))}
                  </div>
                  <p>"Amazing food and fast delivery!"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL */}
      <section className="container text-center my-5">
        <h2 className="mb-4">GO FOOD SPECIAL</h2>

        <div className="row">
          {["family.jpg", "vegan.jpg", "asian.jpg"].map((img, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card shadow">
                <img
                  src={`/${img}`}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                  alt=""
                />
                <div className="card-body">
                  <button className="btn btn-success">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="position-relative text-center text-white py-5">
        <img
          src="/contact.jpg"
          className="w-100 position-absolute top-0 start-0"
          style={{ height: "100%", objectFit: "cover" }}
          alt=""
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

        <div className="container position-relative">
          <h2 className="mb-4">GET IN TOUCH</h2>

          <div className="d-flex justify-content-center gap-3 mb-3">
            <Share2 />
            <Heart />
            <Globe />
          </div>

          <div>
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