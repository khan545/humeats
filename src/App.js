import React from "react";
import TopNav from "./components/TopNav";
import Fetured from "./components/Fetured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meals from "./components/Meals";
import Cetegory from "./components/Cetegory";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <TopNav />
      <Fetured />
      <Delivery />
      <TopPicks />
      <Meals />
      <Cetegory />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
