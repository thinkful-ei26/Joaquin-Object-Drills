//make student reports
const sampleData = [{name: 'John', grade: 3},{name:'Beth', grade: 4}];
function makeStudentReports(data){
    let output = [];
    return data.map(obj => `${obj.name}, ${obj.grade}`);

}

//console.log(makeStudentReports(sampleData));

//enroll in summer school

const sampleStudent = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students) {
    return students.map(student => {
        return {
            name: student.name,
            status: "In Summer school",
            course: student.course
           }
        })
    };


console.log(enrollInSummerSchool(sampleStudent));