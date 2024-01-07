import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import userContext from "../Utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { adduser, removeuser } from "../Utils/userRegister";
import image from "../logo.png";
function Head() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { name } = useContext(userContext);
  const [use, setuse] = useState();
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Body");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
      setuse(user.email);
    });
  }, []);

  //Sign out API
  const navigate = useNavigate();
  function SignoutHandler() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});

    setLoggedIn(true);
  }

  useEffect(() => {
    if (location.pathname == "/") {
      setNav(false);
    } else {
      setNav(true);
    }
  }, [location]);
  return (
    <div>
      <div className="flex justify-between items-center bg-white px-12 shadow-xl fixed w-full top-0 z-10">
        <Link to="/body">
          <img alt="logo" src={image} className=" w-28 p-2"></img>
        </Link>
        <div>
          {nav && (
            <ul className="flex gap-8 font-medium">
              <Link to="/Body">
                <li className="text-xl hover:border-b-2 border-b border-transparent hover:border-red-500">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="text-xl hover:border-b-2 border-b border-transparent hover:border-red-500">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-xl hover:border-b-2 border-b border-transparent hover:border-red-500">
                  Contact
                </li>
              </Link>
              <Link to="/cart">
                <li className="flex items-center text-xl hover:border-b-2 border-b border-transparent hover:border-red-500">
                  <BsCart3 className="m-2" />
                  <p className="text-lg"> {cart.length}</p>
                </li>
              </Link>
            </ul>
          )}
        </div>

        <userContext.Provider value={{ name: use }}>
          {nav && (
            <div className="flex items-center">
              <FaUser className="m-2" />
              <p className="text-lg">{use}</p>
            </div>
          )}
        </userContext.Provider>

        <div>
          {nav && (
            <Link to="/">
              <button
                className="bg-red-500 text-white p-1 m-2 rounded-lg w-20"
                onClick={SignoutHandler}
              >
                Logout
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4"></h1>
      </div>
    </div>
  );
}

export default Head;
