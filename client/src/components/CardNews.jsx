import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteReadingList, postReadingList } from "../stores/action";
import moment from "moment";
import "./Card.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function CardNews({ data, page }) {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  async function addReadingList(link, title) {
    try {
      await dispatch(postReadingList(link, title));
    } catch (err) {
      console.log(err);
      MySwal.fire({
        title: <p>{err.response.data.message}</p>,
      });
    }
  }
  function handleDeleteReadingList(id) {
    dispatch(deleteReadingList(id));
  }
  console.log(data);
  return (
    <div>
      <div className="card_container">
        <div className="card_item">
          <div className="d-flex">
            <div style={{ width: "80%" }}>
              <a
                href={`${data.link}`}
                className="card_link"
                style={{ textDecoration: "solid", color: "#2b2b2b" }}
              >
                <p className="card_title">{data.title}</p>
              </a>
              <div style={{ marginTop: "-20px" }}>
                {page !== "ReadingLists" && moment(data.published).fromNow()}
              </div>
            </div>
            <div className="ms-auto d-flex align-items-center">
              {page !== "ReadingLists" && (
                <Button
                  onClick={() => addReadingList(data.link, data.title)}
                  variant="light"
                >
                  Add Readinglist
                </Button>
              )}
              {page === "ReadingLists" && (
                <Button
                  onClick={() => handleDeleteReadingList(data.id)}
                  variant="danger"
                >
                  Delete Readinglist
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
