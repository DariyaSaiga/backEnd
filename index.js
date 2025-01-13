const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});

const Student = require('./models/Student');

// DELETE
async function deleteStudent() {
    await Student.deleteOne({ name: 'Leila' });
    console.log("Student deleted!");
}

deleteStudent();

//Find One
async function findOneStudentByName(name) {
    try {
        const student = await Student.findOne({ name: name }); 
        if (student) {
            console.log(`Student Found:`, student);
        } else {
            console.log(`No student found with name: ${name}`);
        }
    } catch (err) {
        console.error("Error retrieving student by name:", err);
    }
}
findOneStudentByName('Leila');


