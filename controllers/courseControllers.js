const models = require("../models/");

module.exports = {
    async getCourses(req, res) {
        await models.course.findAll({
            include: models.teacher
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(400).send({ "msg": err });
            })
    },
    async createCourses(req, res) {
        await models.course.create({
            course_name: req.body.name,
            course_dtion: req.body.description,
            teacher_course: req.body.teacherno
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(400).send({ "msg": err });
            })
    }
}
