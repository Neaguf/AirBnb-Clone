import star from "../assets/images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--badge">SOLD OUT</div>

      <img src={props.img} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.raiting}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
