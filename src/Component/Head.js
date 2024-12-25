import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import userContext from "../Utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { FaAngleDown, FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { adduser, removeuser } from "../Utils/userRegister";
import image from "../logo.png";
import SidebarLocation from "./SidebarLocation";
function Head() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { name } = useContext(userContext);
  const [use, setuse] = useState();
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const cart = useSelector((store) => store.cart.items);
  const Address = useSelector((state) => state.locationDetail.address);

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

  const [isNavOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen(!isNavOpen);
  }

  const SideBarHandler = () => {
    setSideBar(!sideBar);
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-white px-12 shadow-xl fixed w-full top-0 z-10 flex-col md:flex-row">
        <div className="flex justify-between items-center space-x-4">
          <div>
            <Link to="/body">
              <img alt="logo" src={image} className="w-28 p-2" />
            </Link>
          </div>

          {/* Location */}
          {nav && (
            <div
              className="flex justify-center items-center gap-2"
              onClick={SideBarHandler}
            >
              <p className=" text-black underline underline-offset-2 text-sm font-bold">
                Other
              </p>
              <h1 className=" text-gray-500 flex gap-3 items-center text-sm">
                {Address.slice(0, 20)}
                <span>
                  <FaAngleDown className="text-[#ef4444] text-2xl" />
                </span>
              </h1>
            </div>
          )}

          {sideBar && <SidebarLocation Handler={SideBarHandler} />}

          {isNavOpen ? (
            <div
              className="md:hidden font-bold text-3xl flex justify-end items-end"
              onClick={toggleNav}
            >
              X
            </div>
          ) : (
            <div
              className="md:hidden font-bold text-3xl flex justify-end items-end"
              onClick={toggleNav}
            >
              ☰
            </div>
          )}
        </div>

        <div className="flex gap-10 items-center">
          <div className="">
            {nav && (
              <ul
                className={`gap-8 font-medium  block md:flex ${
                  isNavOpen ? "block" : "hidden"
                }`}
              >
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

          <div className="">
            <userContext.Provider value={{ name: use }}>
              {nav && (
                <div
                  className={`flex items-center md:flex ${
                    isNavOpen ? "block" : "hidden"
                  }`}
                >
                  <FaUser className="m-2" />
                  <p className="text-lg">{use}</p>
                </div>
              )}
            </userContext.Provider>
          </div>

          <div>
            {nav && (
              <Link to="/">
                <button
                  className={`bg-red-500 text-white p-1 m-2 rounded-lg w-20  md:block ${
                    isNavOpen ? "block" : "hidden"
                  }`}
                  onClick={SignoutHandler}
                >
                  Logout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4"></h1>
      </div>
    </div>
  );
}

export default Head;
