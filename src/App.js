import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPost from "./pages/BlogPost";
import { React, useState } from "react";
import Footer from "./components/Footer";


function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);

  const getData = (blog) => {
    setGetBlogContent(blog);
  }
  return (
    <div>
      <div className="container_custom max-w-screen-lg">
        <Routes>
          <Route path="/" element={<HomePage data={getData}/>} />
          <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
