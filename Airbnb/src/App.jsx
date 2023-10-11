import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import katie from "./assets/images/katie.png";
import Card from "./components/Card";
import data from "./Data";

export default function App() {
  let info = data;
  let cards = data.map((element) => {
    return (
      <Card
        key={element.id}
        img={element.coverImg}
        rating={element.stats.rating}
        reviewCount={element.stats.reviewCount}
        location={element.location}
        title={element.title}
        price={element.price}
        openSpots={element.openSpots}
      />
    );
  });
  console.log(info);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards=list">{cards}</section>
    </div>
  );
}
