import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardImage from "../components/CardImage";
import { getImage } from "../stores/action";
import Loader from "../components/Loader";
function ResultImages() {
  const { data } = useSelector((state) => state.images);
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
    return <Loader />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {data ? (
          data.map((el, i) => {
            return <CardImage key={i} data={el} />;
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
}

export default ResultImages;
