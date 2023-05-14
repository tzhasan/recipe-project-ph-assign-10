import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Auth-Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Loading from "../SharedComponents/Loading";
const Register = () => {
  const navigate = useNavigate()
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { user, handleRegisterBtn, isfrom } = useContext(AuthContext);
  console.log(isfrom);
  const from = isfrom || "/";

  const handleRegister = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photo.value
    if (password.length < 6) {
      setError("Need more then 6 character");
      return;
    }
    handleRegisterBtn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        toast("Account Created");
      // signout();

        updateProfile(loggedUser, { displayName: name , photoURL: photoUrl })
          .then(() => {
          })
          .catch((error) => {
            console.error(error.message);
          });
        
        form.reset();
      })
        navigate(from, { replace: true })
    
      // navigate('/')
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleAccept = (e) => {
    setAccepted(e.target.checked);
  };

  // const handleGooglebtn = () => {
  //   handleGoogleLogin()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       toast("Login successfully with google");
  //       // form.reset();
  //     })
  //     .catch((error) => {
  //       toast(error.message);
  //     });
  // };
  // const handleGithubbtn = () => {
  //   handleGithubLogin()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       toast("Login successfully with GitHub");
  //     })
  //     .catch((error) => {
  //       toast(error.message);
  //       console.log(error);
  //     });
  // };
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <ToastContainer />

      <div className="hero-content flex-col  w-[80%]">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                required
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <p className="label-text-alt text-error">{success}</p>
              <p className="label-text-alt text-error">{error}</p>
            </div>
            <div className="form-control">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  onClick={handleAccept}
                  type="checkbox"
                  className="checkbox mr-2 md:mr-0"
                />
                <span className="label-text text-xs md:text-md">
                  Accept{" "}
                  <Link to={"/terms"} className="link">
                    terms and conditions
                  </Link>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={!accepted}
                className="btn bg-[#FF5771] border-0"
              >
                Register
              </button>
            </div>
            <label className="label">
              <p className="label-text-alt link link-hover">
                Already have an account?{" "}
                <Link to="/login" className="text-error">
                  {" "}
                  Login
                </Link>
              </p>
            </label>
          </form>

          {/* <div className="flex flex-col gap-2 p-4">
            <h4 className="text-center">Continue With:</h4>
            <button
              onClick={handleGooglebtn}
              className="btn btn-outline btn-info"
            >
              <FaGoogle />
              Login with Google
            </button>

            <button
              onClick={handleGithubbtn}
              className="btn btn-outline btn-success"
            >
              <FaGithub /> Login with Github
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
