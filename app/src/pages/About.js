import React from "react";
// import raj from "./app/public/raj.png";

function App() {
  return (
    <>
    <div className="container">
      <h1>About US</h1>
      <p>Here we Deliver Our Foods Items By Drones  </p>
    </div>
      <div className="row">
        <div className="col-6">
          <div
            className="card"
            style={{
              width: "80%",
              marginLeft: "500px",
              marginRight: "150px",
              marginTop: "30px",
              marginBottom: "10px",
              display: "block",
              height: "90%"
             
            }}
          >
            <div className="container" >
              <img
                src="/images/mahima.jpg"
                class="card-img-top"
                alt="..."
                style={{ height: "280px", width: "250px", marginTop: "5px" }}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title">Mahima Singh</h3>
              <h4>Web Developer</h4>
              <h5>Computer Engineer</h5>
              <p className="container">
                Hello foodies, I am Mahima Singh, a 2nd Year Student of
                Delhi Technological University (DTU).
              </p>
              <div className="container ">
                <span>Email: mahimasinghams@gmail.com</span>
                <br />
                <div>Contact: 9800000000</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
