import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import googleText from "../assets/google-text.png";
import { postLogin } from "../stores/action";

function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  async function handlePostLogin(e) {
    try {
      e.preventDefault();
      const { data } = await dispatch(postLogin(email, password));

      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  function localEmail(e) {
    setEmail(e.target.value);
  }
  function localPassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="row-login">
      <div className="container-fluid">
        <div className="row row-login">
          <div className="col-12 col-md-6 col-sm-8 m-auto">
            <div className="card">
              <div className="card-body">
                <div>
                  <div className="img-container">
                    <img src={googleText} alt="google" className="logo" />
                  </div>
                </div>
                <form onSubmit={(e) => handlePostLogin(e)}>
                  <label className="ms-1">Email</label>
                  <input
                    value={email}
                    onChange={localEmail}
                    type="email"
                    className="form-control my-3 py-2"
                    placeholder="Email"
                  ></input>
                  <label className="ms-1">Password</label>
                  <input
                    value={password}
                    onChange={localPassword}
                    type="password"
                    className="form-control mt-3 py-2"
                    placeholder="Password"
                  ></input>
                  <div className="button-container">
                    <button type="submit" className="btn btn-outline-dark my-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
