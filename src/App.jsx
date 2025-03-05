import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import Project from "./Pages/Project"
import Blog from "./Pages/Blog"
import Extras from "./Pages/Extras"
import ProjectDetail from "./Pages/ProjectDetail"
import Theme from "./Component/Theme"
function App() {

  return (
    <>
    <Theme/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/extras" element={<Extras />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
