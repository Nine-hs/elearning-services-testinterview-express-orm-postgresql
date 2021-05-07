'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      course.belongsTo(models.teacher, {
        foreignKey: 'teacher_course',
        as: 'Teacher'
      })
    }
  };
  course.init({
    course_name: DataTypes.STRING,
    course_dtion: DataTypes.STRING,
    teacher_course: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};