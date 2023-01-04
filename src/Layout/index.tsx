import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
  <div className="flex flex-col min-h-screen">
  {/* <header className="bg-red-50"><Header /></header> */}

  <div className="flex flex-col flex-1 sm:flex-row">
    <main className="flex-1 bg-white-800"><Outlet /></main>

    <nav className="order-first bg-white-800 sm:w-39"><Navbar /></nav>

    <aside className="bg-white-100 sm:w-40"><Sidebar /></aside>
  </div>

  <footer className="bg-gray-100"><Footer /></footer>
</div>
    </>
  );
}
export default Layout;
