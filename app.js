const express = require('express');
const bodyParser = require('body-parser');

const StudentList = require('./students').StudentList;
const Student = require('./students').Student;
const app = express();

app.use(bodyParser.urlencoded( { extended:false }));
app.use(express.static('public'));

app.post('/login', (request, response) => {
    const username = request.body.username;
    const password = request.body.password;

    let status = false;
    let currentStudent = undefined;

    const isValid = StudentList.filter(item => {
        return (item.credentials.username === username && item.credentials.password === password)
    });

    if( isValid.length) {
        status = true;
        currentStudent = Student(isValid[0].id, isValid[0].name, isValid[0].lastname);
        console.log(currentStudent);
        response.send({
            status: status,
            studentName: currentStudent.fullName(),
            studentId: currentStudent.getId()
        })
    } else {
        response.send({
            status: status
        })
    }

    
});


app.listen(3000, () => {
    console.log('Listening on port 3000')
})
