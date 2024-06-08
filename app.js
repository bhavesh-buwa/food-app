import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

const Header = () => {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};
