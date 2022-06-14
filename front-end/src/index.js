import React from "react";
import { render } from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Register from "./pages/Register";
import Deskripsi from "./pages/Deskripsi";
import Login from "./pages/Login";
import CreatePosts from "./pages/CreatePosts";
import UpdatePosts from "./pages/UpdatePosts";
import DeletePosts from "./pages/DeletePosts";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = document.getElementById("root");
render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/deskripsi" element={<Deskripsi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePosts />} />
        <Route path="/update/:id" element={<UpdatePosts />} />
        <Route path="/delete/:id" element={<DeletePosts />} />
      </Routes>
    </Router>
  </Provider>,
  root
);