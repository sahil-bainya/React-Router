import { Header, Footer, Home } from "./components";
import { Outlet } from "react-router-dom";

export default function Layout() {

  // Layout component ek wrapper hai jo common UI ko hold karta hai
  // 👉 jaise Header aur Footer har page pe same rahenge

  return (
    <>
      {/* Header har page ke top pe dikhega */}
      <Header />

      {/* 
        Outlet React Router ka special component hai
        👉 Ye dynamically child routes ko render karta hai
        Jo bhi route match hoga (Home, About, Contact etc.)
        uska component yaha inject hoga
      */}
      <Outlet />

      {/* Footer har page ke bottom pe dikhega */}
      <Footer />
    </>
  );
}