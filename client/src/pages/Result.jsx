import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import { getSearch } from "../stores/action";

function Result() {
  const { data } = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  // console.log(data);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  useEffect(() => {
    dispatch(getSearch(query.get("q")));
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container-fluid">
      <div>
        {data.map((el) => {
          return <Card data={el} />;
        })}
      </div>
    </div>
  );
}

export default Result;