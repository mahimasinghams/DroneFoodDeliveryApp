import React from "react";

function Footer() {
  return (
    <footer className="footer footer-expand-lg footer-dark bg-dark " style={{height:"300px", position: "relative", bottom: '0', width: '100%'}}>
      <div className="row my-3 mx-3">
        <div className="col md-4 ">
          <h3 className="text-light container my-3">Get To Know Us</h3>
          <li>
            <a href="/" className="text-decoration-none text-light ">About</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Drones</a>
          </li>
        </div>
        <div className="col md-4">
          <h3 className="text-light container my-3">Connect With Us</h3>
          <li>
            <a href="https://www.instagram.com/mahimasingh01/" target="_blank" _blank className="text-decoration-none text-light ">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahimasingh11/" target="_blank" className="text-decoration-none text-light ">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.facebook.com/profile.php?id=100007173249416" target="_blank" className="text-decoration-none text-light ">Facebook</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Twitter</a>
          </li>
        </div>
        <div className="col md-4 ">
          <h3 className="text-light container my-3">Make Money with Us</h3>
          <li>
            <a href="h/" className="text-decoration-none text-light ">Sell on Drone Delivery</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Become an Affiliate</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Advertise Your Products</a>
          </li>
        </div>
        <div className="col md-4">
          <h3 className="text-light container my-3">Let Us Help You</h3>
          <li>
            <a href="/" className="text-decoration-none text-light ">Your Account</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Return Center</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">100% Purchase Protection</a>
          </li>
          <li>
            <a href="/" className="text-decoration-none text-light ">Help</a>
          </li>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
