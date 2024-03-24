import React from "react";
import Contact from "./Contact/contact";
import image from "./Images/Image-sunnyside.jpg";
import logo from "./Images/sunnyside restaurant.png";

function App() {
  return (
    <section style={{ backgroundColor: "rgb(85, 85, 85)" }}>
      <div className="flex justify-between">
        <Contact />
        <Logo />
        <Reservation>Reservation</Reservation>
      </div>
      <div className=" mt-40 border-y-2 border-gray-600 text-white ml-10 mr-10 p-8">
        <NavBar />
      </div>
      <Main />
    </section>
  );
}
export default App;

function Reservation({ children }) {
  return (
    <div
      className=" flex w-48 h-10 p-2 border mt-10 mr-10
  border-orange-300 align-center bg-orange-300"
    >
      {children}
    </div>
  );
}
function Logo() {
  return <img alt="restaurant" src="" className="text-orange-300" />;
}

function NavBar() {
  return (
    <div className="flex justify-between">
      <div>
        <ul className="flex justify-between space-x-6">
          <li>Home</li>
          <li>About Us</li>
          <li>Our Menu</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between space-x-6">
          <li>Twitter</li>
          <li>Facebok</li>
          <li>Pinterest</li>
        </ul>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div
      style={{
        alignItems: "center",
        boxSizing: "border-box",
        display: "grid",
        columnGap: "50px",
        gridAutoColumns: "1fr",
        gridTemplateColumns: "821.5px 821.5px",
        gridTemplateRows: "976px",
        fontSize: "20px",
        fontWeight: "400",
        justifyItems: "stretch",
        letterSpacing: "0.2px",
        textAlign: "left",
        textSizeAdjust: "100%",
      }}
    >
      <div className="text-white pl-14">
        <h1
          className="mt-10 mb-2"
          style={{ fontSize: "90px", margin: "10px 0px" }}
        >
          Welcome to SunnySide Restaurant
        </h1>
        <p
          style={{
            fontSize: "20px",
            margin: "0px 0px 10px",
            padding: "5px 0px 30px",
          }}
        >
          The people, food and the prime locations
          <br /> make the perfect place good friends & family to come together
          and have great time.
        </p>
        <button
          style={{
            color: "#E1B168",
            fontSize: "22px",
            padding: "18px 55px",
            borderBottomColor: "rgb(225, 177, 104)",
            borderImageRepeat: "stretch",
            border: "solid",
            borderColor: "rgb(225, 177, 104)",
          }}
        >
          View Menu
        </button>
      </div>
      <div className="">
      <Image />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div>
    <img
      alt="restaurant"
      src={image}
      style={{
        width:'450px',
        height:'800px',

        borderTopLeftRadius: "528px",
        borderTopRightRadius: "528px",
        borderImageWidth:'1',
        paddingRight: "0.5rem",
        marginRight: "10rem",

        paddingLeft:'0',
        border:'10px',
        borderStyle:'solid',
        borderColor:'grey',
        borderRightWidth:'10px',
        borderImageRepeat:'stretch',
        objectFit:'cover'
      }}
    />
    </div>
  );
}

