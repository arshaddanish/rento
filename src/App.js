import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Category from "./pages/category/Category";
import News from "./pages/home/News";
import ForgotPass from "./pages/login/ForgotPass";
import Contact from "./pages/contact/Contact";
import Subscription from "./pages/subscription/Subscription";
import Item from "./pages/Item/Item";
import Account from "./pages/account/Account";
import ResetPass from "./pages/login/ResetPass";
import NewsItem from "./pages/newsItem/NewsItem";
import ScrollToTop from "./services/components/ScrollToTop";
import NavbarAdmin from "./admin/components/navbar/NavbarAdmin";
import FooterAdmin from "./admin/components/footer/FooterAdmin";
import HomeAdmin from "./admin/pages/home/HomeAdmin";
import BlogsAdmin from "./admin/pages/blogs/BlogsAdmin";
import AddBlog from "./admin/pages/blogs/AddBlog";
import PublicMessages from "./admin/pages/public-messages/PublicMessages";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavbarAdmin />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<News type="view-all" />} />
        <Route path="/blogs/:id" element={<NewsItem />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscription />} />
        <Route path="/account" element={<Account />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/categories/:category/:id" element={<Item />} />

        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/blogs/*" element={<BlogsAdmin />} />
        <Route path="/admin/messages" element={<PublicMessages />} />
      </Routes>
      <Footer />
      <FooterAdmin />
    </Router>
  );
}
