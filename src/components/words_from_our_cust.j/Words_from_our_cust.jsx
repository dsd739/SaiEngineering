import React, { useState } from "react";
import "./words_from_our_cust.css";

export default function Words_from_our_cust() {
  const [count, setcount] = useState(1);

  return (
    <div>
      <section id="sec-testimonials" className="sec-testimonials">
        <div className="container">
          <h1 className="h4 mb-5 text-center">Words from our members</h1>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            style={{ display: "flex", flexDirection: "column" }}
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className={`carousel-item ${count == 1 ? "active" : ""}`}>
                {/* <img className="d-block w-100" src="..." alt="First slide" /> */}
                <blockquote className="blockquote">
                  <small>
                    Working with Sai Engineering was a game-changer for our
                    construction project. Their crane services were instrumental
                    in completing the installation of heavy equipment in our
                    manufacturing facility. Their professionalism and efficiency
                    exceeded our expectations.!
                  </small>

                  <footer className="blockquote-footer mt-2">Ram sharma</footer>
                </blockquote>
              </div>
              <div className={`carousel-item ${count == 2 ? "active" : ""}`}>
                {/* <img className="d-block w-100" src="..." alt="Second slide" /> */}
                <blockquote className="blockquote">
                  <small>
                    Sai Engineering constructed a warehouse shed for our
                    business, and we couldn't be happier with the result. The
                    clearspan design maximized our floor space, allowing for
                    efficient storage of our inventory. Their attention to
                    detail and quality craftsmanship were evident throughout the
                    entire process.!
                  </small>

                  <footer className="blockquote-footer mt-2">
                    Brijesh patel
                  </footer>
                </blockquote>
              </div>
              <div className={`carousel-item ${count == 3 ? "active" : ""}`}>
                {/* <img className="d-block w-100" src="..." alt="Third slide" /> */}
                <blockquote className="blockquote">
                  <small>
                    We chose Sai Engineering for the fabrication and erection of
                    steel structures in our industrial complex, and they
                    delivered exceptional results. Their team's expertise and
                    dedication to meeting our specific requirements were
                    impressive. We highly recommend their services to others in
                    need of reliable steel fabrication solutions.!
                  </small>

                  <footer className="blockquote-footer mt-2">
                    Harsh meena
                  </footer>
                </blockquote>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                className="carousel-control-prev"
                // href="/"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span
                  onClick={() => {
                    if (count == 1) setcount(3);
                    else setcount(count - 1);
                  }}
                  className="sr-only"
                >
                  Previous
                </span>
              </a>
              <a
                className="carousel-control-next"
                // href="/"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span
                  onClick={() => {
                    if (count == 3) setcount(1);
                    else setcount(count + 1);
                  }}
                  className=""
                >
                  Next
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
