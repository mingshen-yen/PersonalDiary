import { useNavigation, Outlet } from "react-router";
import Navbar from "./NavBar";
import AuthProvider from "../../context/AuthContext";
import ThemeProvider from "../../context/ThemeContext";

export default function AppLayout() {
  const navigation = useNavigation();
  const isloading = navigation.state === "loading";

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          {isloading && <div>Loading...</div>}
          <Outlet />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}
