import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import App from "./components/App";
import Blog from "./components/Blog"
import Contact from "./components/Contact";
import CourseOne from "./components/CourseOne";
import CourseTwo from "./components/CourseTwo";
import CourseThree from "./components/CourseThree";
import CourseFour from "./components/CourseFour";
import Admin from "./components/Admin";
import Awards from "./components/Awards";
import Others from "./components/Others";
import Interest from "./components/Interest";
import InterestSub from "./components/InterestSub";




ReactDOM.render(
<Router>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/course_one" element={<CourseOne/>} />
        <Route path="/course_two" element={<CourseTwo/>} />
        <Route path='/course_three' element={<CourseThree/>} />
        <Route path='/course_four' element={<CourseFour/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/awards' element={<Awards/>}/>
        <Route path='/others' element={<Others/>}/>
        <Route path='/interest' element={<Interest/>}/>
        <Route path='/interestsub' element={<InterestSub/>}/>
    </Routes>
</Router>

    ,document.getElementById("root"));






