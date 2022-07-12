import { Link, NavLink } from "react-router-dom";
import "./Card.css";

function Card({ data }) {
  console.log(data);
  return (
    <div className="card_container">
      <div className="card_item">
        <div>{data.cite.domain}</div>
        <a
          href={`${data.link}`}
          className="card_link"
          style={{ textDecoration: "solid", color: "#2b2b2b" }}
        >
          <p className="card_title">{data.title}</p>
        </a>
        <div style={{ marginTop: "-20px" }}>{data.description}</div>
      </div>
    </div>
  );
}
export default Card;
