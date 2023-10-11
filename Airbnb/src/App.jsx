import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import katie from "./assets/images/katie.png";
import Card from "./components/Card";
import data from "./Data";

export default function App() {
  let cards = data.map((element) => {
    return <Card key={element.id} item={element} />;
  });
  console.log(cards);

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
