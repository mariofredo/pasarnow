import "./Card.css";
function CardImage({ data }) {
  return (
    <div className="col-lg-3 col-md-4 col-6 d-flex justify-content-center mt-5">
      <a
        href={data.link.href}
        className="card_link text-center mt-auto"
        style={{ textDecoration: "solid", color: "#2b2b2b" }}
      >
        <img
          src={data.image.src}
          alt="card_images"
          style={{ height: "150px", width: "200px" }}
        />
        <p>{data.link.title}</p>
      </a>
    </div>
  );
}

export default CardImage;
