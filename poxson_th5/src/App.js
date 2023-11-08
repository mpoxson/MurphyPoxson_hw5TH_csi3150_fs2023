import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  //map each object in traveldata array, return html
  const sections = TravelData.map((item) => {
    return (
      // send data to js
      <TravelBlog
        key={item.id}
        place={item.placeHeading}
        img1={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        desc={item.placeDescription}
      />
    );
  });
  return (
    // Send html to dom
    <div className="App">
      <Hero />
      {/* Calls above function and returns html for all elements in array */}
      <section className="product-card-parent-container"> {sections} </section>
    </div>
  );
}

export default App;
