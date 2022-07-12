import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardNews from "../components/CardNews";
import { getReadingLists } from "../stores/action";
import Loader from "../components/Loader";
function ReadingList() {
  const data = useSelector((state) => state.readingLists);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReadingLists());
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  console.log(data);
  return (
    <div className="container-fluid">
      <div>
        {data ? (
          data.map((el, i) => {
            return <CardNews page={"ReadingLists"} key={i} data={el} />;
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
}

export default ReadingList;
