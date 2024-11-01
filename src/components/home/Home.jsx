// import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import "./home.css";
import img1 from "../../assets/klipartz.png";
// import img2 from "../../assets/k.png";
import img3 from "../../assets/shed.png";
import img4 from "../../assets/shed2.png";

// import image1 from "../../assets/workphotos/image1.jpeg";
// import image2 from "../../assets/workphotos/image2.jpeg";
// import image3 from "../../assets/workphotos/image3.jpeg";
// import image4 from "../../assets/workphotos/image4.jpeg";
// import image5 from "../../assets/workphotos/image5.jpeg";
// import image6 from "../../assets/workphotos/image6.jpeg";
import Words_from_our_cust from "../words_from_our_cust.j/Words_from_our_cust";
import Footer from "../footer/Footer";

export default function Home() {
  // $(() => {
  //   $('a[href*="#"]:not([href="#"])').click((e) => {
  //     const target = $(e.target.hash);

  //     if (target.length) {
  //       $("html, body").animate(
  //         {
  //           scrollTop: target.offset().top,
  //         },
  //         1000
  //       );

  //       return false;
  //     }
  //   });
  // });
  return (
    <div>
      <div className="wrapper">
        <section id="Home" className="hero">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <b> Sai engineering</b>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#Home"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sec-about">
                      About us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sec-features">
                      Our works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#footer">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="jumbotron jumbotron-fluid mb-2">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-10 col-lg-6">
                  <h1 className="display-5">
                    Welcome to Sai engineering, your premier destination for
                    crane machine and Shed Construction Services!
                  </h1>

                  <p className="lead">
                    We offer a comprehensive range of crane machine services,
                    including rental, sales, and maintenance.
                  </p>

                  <p className="lead">
                    <button
                      type="button"
                      className="btn btn-primary"
                      href="tel:8946844434"
                    >
                      Book a Service
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-about" className="sec-about pt-5 pb-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-10 col-lg-8">
                <h1 className="h4">About us</h1>
                <p className="mt-4 mb-4">
                  Discover the story behind <b>Sai engineering</b> , from our
                  humble beginnings to becoming a leader in the crane machine
                  industry.At <b> Sai engineering</b> , we&apos;re committed to
                  providing top-quality products and exceptional customer
                  service &quot;
                </p>
              </div>
            </div>

            <div className="row mt-4 cus-center ">
              <hr />
              <div className="col-sm-4">
                <h4>500+</h4>

                <h5>Customers</h5>
              </div>
              <hr />

              <div className="col-sm-4">
                <h4>10+</h4>

                <h5>Active sites </h5>
              </div>
              <hr />
              {/* <div className="col-sm-4">
                <h4></h4>

                <hr />

                <h5>members' bars</h5>
              </div> */}
            </div>
          </div>
        </section>

        <section id="sec-features" className="sec-features pt-5 pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="h4">Crane service</h3>

                <hr />

                <p>
                  Crane services provided for construction of high-rise
                  buildings, installation of heavy equipment in manufacturing
                  facilities, maintenance and repair of infrastructure such as
                  bridges and highways
                </p>
              </div>

              <div className="col-md-6 text-center">
                {/* <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                > */}
                <img className="feature-icon" src={img1} alt="" />
                {/* </svg> */}
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6 text-center">
                <img
                  className="feature-icon feature-icon-shed"
                  src={img3}
                  alt=""
                />
              </div>

              <div className="col-md-6">
                <h3 className="h4">Shed Construction Services</h3>

                <hr />

                <p>
                  Large-scale factory sheds with clearspan design for maximum
                  floor space, warehouse sheds with high ceilings for storage of
                  tall equipment, industrial sheds with insulated panels for
                  temperature control
                </p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <h3 className="h4">Fabricators and erectors</h3>

                <hr />

                <p>
                  Fabrication and erection of steel-framed manufacturing
                  facilities, installation of steel support structures for
                  production lines, construction of warehouse facilities for
                  storage of raw materials and finished products
                </p>
              </div>

              <div className="col-md-6 text-center">
                <img className="feature-icon" src={img4} alt="" />
              </div>
            </div>
          </div>
        </section>

        <Words_from_our_cust />

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
