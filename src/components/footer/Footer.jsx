import React from "react";
import "./footer.css";
import instaImg from "../../assets/images/about/insta.png";
import wtspImg from "../../assets/images/about/wtsp.png";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html">
                {/* <img
                  src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png"
                  alt=""
                  className="img-fluid logo-footer"
                /> */}
                <h2 style={{ color: "black", margin: "0px 0px 30px 0px" }}>
                  Sai Engineering
                </h2>
              </a>
              <div className="footer-about">
                <p>
                  With over a decade of experience serving services across the
                  region, <b>Sai Engineering</b> team is ready to take on your
                  next project. Contact us today to discuss your <b>needs</b>.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="useful-link">
                <h2>Useful Links</h2>
                <img src="" alt="" className="img-fluid" />
                <div className="use-links">
                  <li>
                    <a href="#Home">
                      <i className="fa-solid fa-angles-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="#sec-about">
                      <i className="fa-solid fa-angles-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="#sec-features">
                      <i className="fa-solid fa-angles-right"></i> Our works
                    </a>
                  </li>
                  <li>
                    <a href="#footer">
                      <i className="fa-solid fa-angles-right"></i> Contact us
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="social-links">
                <h2>Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" />
                <div className="social-icons">
                  <li>
                    <a href="https://wa.me/7425830103">
                      <i className="fa-brands fa-facebook-f">
                        <IoLogoWhatsapp />
                      </i>{" "}
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/saiengineers1978?igsh=MTQ0aDhmdXBibWJpdg%3D%3D&utm_source=qr">
                      <i className="fa-brands fa-instagram">
                        {" "}
                        <FaInstagram />
                      </i>{" "}
                      Instagram
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i> Linkedin
                    </a>
                  </li> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="address">
                <h2>Address</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="address-links">
                  <li className="address1">
                    <i className="fa-solid fa-location-dot "></i>
                    Udaipur, Rajasthan, India
                  </li>
                  <li>
                    <a href="tel:9950115191">
                      <i className="fa-solid fa-phone"></i> +91 9950115191
                    </a>
                  </li>
                  <li>
                    <a href="tel:8946844434">
                      <i className="fa-solid fa-phone"></i> +91 8946844434
                    </a>
                  </li>
                  <li>
                    <a href="tel:6375526548">
                      <i className="fa-solid fa-phone"></i> +91 6375526548
                    </a>
                  </li>
                  <li>
                    <a href="mailto:saiengineers1978@gmail.com">
                      <i className="fa-solid fa-envelope"></i>{" "}
                      Saiengineers1978@gmail.com
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright"></i>
          @All rights reserved. Unauthorized use of any content from this
          website is prohibited. 2024 Powerd By{" "}
          <a href="https://wa.me/7425830103">Durga shankar dangi</a>
        </div>
      </section>
    </div>
  );
}
