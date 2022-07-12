import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postReadingList } from "../stores/action";
import moment from "moment";
import "./Card.css";
function CardNews({ data }) {
  const dispatch = useDispatch();
  async function addReadingList(link, title) {
    try {
      await dispatch(postReadingList(link, title));
    } catch (err) {
      console.log(err);
    }
  }
  // function formattedDate(published) {
  //   let date = moment(published, "DD.MM.YYYY HH:mm", true),
  //     now = moment(),
  //     days = now.diff(date, "days"),
  //     weeks = now.diff(date, "weeks"),
  //     result = "";

  //   if (weeks) {
  //     result += weeks + (weeks === 1 ? " week " : " weeks ");
  //     days = days % 7;
  //   } else if (days || weeks === 0) {
  //     result += days + (days === 1 ? " day" : " days");
  //   }
  //   console.log(result);
  //   return result;
  // }
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
                {moment(data.published).fromNow()}
              </div>
            </div>
            <div className="ms-auto d-flex align-items-center">
              <Button
                onClick={() => addReadingList(data.link, data.title)}
                variant="light"
              >
                Add Readinglist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNews;
