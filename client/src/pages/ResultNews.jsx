import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getNews } from "../stores/action";
import CardNews from "../components/CardNews";
import Loader from "../components/Loader";
function ResultNews() {
  const { data } = useSelector((state) => state.news);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  useEffect(() => {
    dispatch(getNews(query.get("q")));
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container-fluid">
      <div>
        {data ? (
          data.map((el, i) => {
            return <CardNews key={i} data={el} />;
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
}

export default ResultNews;
