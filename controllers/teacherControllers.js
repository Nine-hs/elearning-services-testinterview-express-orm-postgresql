const models = require("../models/");

module.exports = {
    async getTeachers(req, res) {
        await models.teacher.findAll()
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(400).send({ "msg": err });
            })
    },
    async createTeacher(req, res) {
        await models.teacher.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            age: req.body.age,
            gender: req.body.gender,
            salary: req.body.salary
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(400).send({ "msg": err });
            })
    }
};