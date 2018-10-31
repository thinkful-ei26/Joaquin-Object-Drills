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


//console.log(enrollInSummerSchool(sampleStudent));

//find by id
const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

function findById(items, idNum) {
    return items.find(n => n.id === idNum);
}

//console.log(findById(data, 2));

//validate object keys
const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
    let srcKey = Object.keys(object);
    console.log(srcKey);
    return expectedKeys.every(key =>
       srcKey.includes(key));
       }

console.log(validateKeys(objectA,expectedKeys));