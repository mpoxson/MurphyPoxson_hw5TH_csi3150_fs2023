import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  const sections = TravelData.map((item) => {
    //generalize the invocation of the card component inside app.js
    return (
      <TravelBlog
        key={item.id}
        place={item.placeHeading}
        img1={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        desc={item.placeDescription}
      />
    ); //end of map function callback's body
  });
  return (
    <div className="App">
      <Hero />
      <section className="product-card-parent-container"> {sections} </section>
    </div>
  );
}

export default App;
