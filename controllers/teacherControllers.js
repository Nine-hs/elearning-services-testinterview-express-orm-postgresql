const models = require("../models/");

module.exports = {
    async getTeachers(req, res) {
        const GetTeachers = await models.teacher.findAll();
        if (!GetTeachers) {
            return res.status(400).send({ "msg": "Sometings is Wrong" });
        }
        res.status(200).send(GetTeachers);
    },
    async createTeacher(req, res) {
        const createTeacher = await models.teacher.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            salary: req.body.salary
        })
        if (!createTeacher) {
            return res.status(400).send({ "msg": "Sometings is Wrong" });
        }
        res.status(200).send(createTeacher);
    }
};