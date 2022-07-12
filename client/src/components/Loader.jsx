import Load from "../assets/9978-circle-load.gif";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img className="img-fluid" src={Load} alt="loader" />
    </div>
  );
}
export default Loader;
