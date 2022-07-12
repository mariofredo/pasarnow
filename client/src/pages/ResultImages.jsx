import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardImage from "../components/CardImage";
import { getImage } from "../stores/action";

function ResultImages() {
  const { data } = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  useEffect(() => {
    dispatch(getImage(query.get("q")));
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((el, i) => {
          return <CardImage key={i} data={el} />;
        })}
      </div>
    </div>
  );
}

export default ResultImages;
