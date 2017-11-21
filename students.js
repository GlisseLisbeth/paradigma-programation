const list = [
    {
        id: 1,
        name: "Lia",
        lastname: "Shelton",
        age: 22,
        city: "Lima",
        credentials: {
            username: "ls",
            password: "123"
        },
        enabled: true
    },
    {
        id: 2,
        name: "Angela",
        lastname: "Walker",
        age: 20,
        city: "Mexico DF.",
        credentials: {
            username: "aw",
            password: "123"
        },
        enabled: true
    },
    {
        id: 3,
        name: "Veronica",
        lastname: "Crosby",
        age: 21,
        city: "Lima",
        credentials: {
            username: "vc",
            password: "123"
        },
        enabled: true
    },
    {
        id: 4,
        name: "Cristal",
        lastname: "Hudson",
        age: 23,
        city: "Lima",
        credentials: {
            username: "ch",
            password: "123"
        },
        enabled: false
    },
    {
        id: 5,
        name: "Leslie",
        lastname: "Pearson",
        age: 22,
        city: "Lima",
        credentials: {
            username: "lp",
            password: "123"
        },
        enabled: true
    }
];

const ProtoStudent = {
    getId: function () {
        return this.id
    },
    fullName: function() {
        return this.name + ' ' +this.lastname;
    }
}
const ProtoAssessment = {
    grades: [],
    addGrade: function(grade) {
        this.grades.push(grade);
    }
}

const ProtoFullStudent = Object.assign(ProtoStudent, ProtoAssessment);

const CreateStudent = (id, name, lastname) => {
    const student = Object.create(ProtoFullStudent);

    student.id = id;
    student.name = name;
    student.lastname = lastname;

    return student;
}
module.exports = {
    StudentList: list,
    Student: CreateStudent
}