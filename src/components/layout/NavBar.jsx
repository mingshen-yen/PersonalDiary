import { useAuth } from "../../context/AuthContext";
import SigninModal from "../ui/SigninModal";
import SignupModal from "../ui/SignupModal";
import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const { user, login, logout } = useAuth();
  const [users, setUsers] = useState(() => {
    const usersaved = localStorage.getItem("userDetails");
    return usersaved ? JSON.parse(usersaved) : [];
  });

  const userLogin = () => {
    const username = prompt("username?");
    login(username);
    console.log(user.isAuthenticated);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Link to="/">
          <span className="text-xl cursor-pointer hover:font-bold hover:text-cyan-500 transition">MyApp</span>
        </Link>
        {user.isAuthenticated ? (
          <div className="flex items-center gap-2">
            <SigninModal />
            <SignupModal users={users} setUsers={setUsers} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-base">user: {user.name}</span>
            <button onClick={userLogin}>Login</button>
          </div>
        )}
      </div>
      <div className="border-b p-2 mb-2"></div>
    </>
  );
}
