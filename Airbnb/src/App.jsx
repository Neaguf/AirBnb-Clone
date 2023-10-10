import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import katie from "./assets/images/katie.png";
import Card from "./components/Card";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating={5}
        reviewCount={6}
        country="Romania"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
