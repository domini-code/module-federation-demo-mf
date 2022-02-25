import React from "react";
import ReactDOM from "react-dom";
import Header from 'dominicode/Header';
import Footer from 'dominicode/Footer';
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>
      Hello from react!
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
