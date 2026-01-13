import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar({ diaryDetails, setDiaryDetails }) {
  const { user, login, logout } = useAuth();
  const userLogin = () => {
    const username = prompt("username?");
    login(username);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <span>MyApp</span>
        {user.isAuthenticated ? (
          <div className="flex items-center gap-2">
            <span className="text-base">user: {user.name}</span>
            <button onClick={logout}>Logout</button>
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
