const models = require("../models/");

module.exports = {
    async getCourses(req, res) {
        const GetCourses = await models.course.findAll({
            include: [models.teacher]
        });
        if (!GetCourses) {
            return res.status(400).send({ "msg": "Sometings is Wrong" });
        }
        res.status(200).send(GetCourses);
    },
    async createCourses(req, res) {
        const createCourses = await models.course.create({
            course_name: req.body.name,
            course_dtion: req.body.description,
            teacher_course: req.body.teacherno
        })
        if (!createCourses) {
            return res.status(400).send({ "msg": "Sometings is Wrong" });
        }
        res.status(200).send(createCourses);
    }
}
