import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        {!user ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link to={"/createpost"}>Create post</Link>
        )}
      </div>

      <div className="user">
        <p>{user?.displayName}</p>

        <img
          src={user?.photoURL || ""}
          width="70"
          height="70"
          referrerPolicy="no-referrer"
        />
        <button className="logOut" onClick={signUserOut}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
