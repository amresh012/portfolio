import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import Project from "./Pages/Project"
import Blog from "./Pages/Blog"
import Extras from "./Pages/Extras"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/extras" element={<Extras />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
