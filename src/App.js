import React from "react";
import "./styles.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";

export default function App() {
  return (
    <ShoppingCartProvider>
      <Container className="mb-4">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ShoppingCartProvider>
  );
}
