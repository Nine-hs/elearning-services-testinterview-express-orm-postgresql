const express = require("express");
const route = express.Router();

const teacherControllers = require("../controllers/teacherControllers");
const courseControllersControllers = require("../controllers/courseControllers");

//Get all teachers 
route.get("/teachers", teacherControllers.getTeachers);
//Create one teacher
route.post("/teacher", teacherControllers.createTeacher);

//Get all Courses
route.get("/courses", courseControllersControllers.getCourses);
//Create one Courses
route.post("/course", courseControllersControllers.createCourses);

module.exports = route;