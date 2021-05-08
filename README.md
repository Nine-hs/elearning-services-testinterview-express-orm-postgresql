## Setup Docker-Compose multiple Services in this directory
* docker-compose up --build -d  :for create docker-compose and run contrainer
* docker exec contrainerName npx sequelize-cli db:create  : for creating database
* docker exec contrainerName npx sequelize-cli db:migrate  : for creating Tables
* docker exec contrainerName npm start  : start server


# Get Resources Here
* /api/resource/teachers Get All Teachers
* /api/resource/teacher Create One Teacher
* /api/resource/courses Get All Courses
* /api/resource/course  Create One Course

