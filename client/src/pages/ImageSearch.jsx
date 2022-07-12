import googleText from "../assets/google-images.png";
import Form from "react-bootstrap/Form";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ImageSearch() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function onChangeHandler(e) {
    setSearch(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    let temp = search.split(" ").join("+");

    navigate(`/resultImages?q=${temp}`);
  }
  return (
    <div className="container-fluid">
      <div className="home_container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={googleText}
            alt="logo"
            className="home_google_images mt-5"
          />
        </div>
        <Form
          style={{
            marginTop: "10px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "50%",
            display: "block",
          }}
          onSubmit={(e) => submitHandler(e)}
        >
          <Form.Control
            placeholder="Search"
            className="text-center"
            onChange={onChangeHandler}
            style={{ borderRadius: 20 }}
          ></Form.Control>
        </Form>
      </div>
    </div>
  );
}
export default ImageSearch;
