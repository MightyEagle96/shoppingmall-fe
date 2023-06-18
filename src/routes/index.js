import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductList from "../shopping/ProductList";
import Checkout from "../shopping/Checkout";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import MyNavbar from "../components/Navbar";
import TestPage from "../pages/TestPage";
import MyFooter from "../components/Footer";
import HomePage from "../pages/private/HomePage";
import { loggedInUser } from "../httpService";
import NotFound from "../pages/NotFound";
import Profile from "../pages/private/Profile";

const publicRoutes = [
  { path: "/", component: ProductList },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignUpPage },
  { path: "/testpage", component: TestPage },
  { path: "*", component: NotFound },
];

const privateRoutes = [
  { path: "/", component: HomePage },
  { path: "/checkout", component: Checkout },
  { path: "/products", component: ProductList },
  { path: "/profile", component: Profile },
  { path: "*", component: NotFound },
];

export const navigationLinks = loggedInUser
  ? [
      { name: "Home", path: "/" },
      { name: "My Orders", path: "/myorders" },
      { name: "Checkout", path: "/mycheckout" },
      { name: "Products", path: "/products" },
    ]
  : [
      { name: "Home", path: "/" },
      { name: "Test Page", path: "/testpage" },
    ];

export const msAutoLinks = loggedInUser
  ? [
      { name: loggedInUser.firstName, path: "/profile" },
      {
        name: "Logout",
        type: "button",
        action: () => {
          localStorage.removeItem("token");
          window.location.assign("/");
        },
      },
    ]
  : [{ name: "Login", path: "/login" }];
function MainRoutes() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        {loggedInUser ? (
          <>
            {privateRoutes.map((c, i) => (
              <Route key={i} path={c.path} element={<c.component />} />
            ))}
          </>
        ) : (
          <>
            {publicRoutes.map((c, i) => (
              <Route key={i} path={c.path} element={<c.component />} />
            ))}
          </>
        )}
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default MainRoutes;
