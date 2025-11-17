import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Philosophy from "./components/Philosophy";
import PgCourses from "./components/PgCourses";
import UGCourses from "./components/Ugcourses";
import Supervision from "./components/Supervision";
import Interest from "./components/Interest";
import InterestSub from "./components/InterestSub";
import Blog from "./components/Blog";
import Admin from "./components/Admin";
import Awards from "./components/Awards";
import Others from "./components/Others";
import Contact from "./components/Contact";
import Grants from "./components/Grants";
import Publications from "./components/Publications";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/pgcourses" element={<PgCourses />} />
        <Route path="/ugcourses" element={<UGCourses />} />
        <Route path="/supervision" element={<Supervision />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/interestsub" element={<InterestSub />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/others" element={<Others />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/books" element={<Publications />} />
        <Route path="/machine-learning" element={<Publications />} />
        <Route path="/computer-vision" element={<Publications />} />
        <Route path="/robots" element={<Publications />} />
        <Route path="/weilding-process" element={<Publications />} />
        <Route path="/predictive-maintenance" element={<Publications />} />
        <Route path="/cognitive-science" element={<Publications />} />
        <Route path="/nlp" element={<Publications />} />
        <Route path="/others" element={<Publications />} />
        <Route path="/long-term-goals" element={<Publications />} />
      </Routes>
    </div>
  );
}

export default App;
