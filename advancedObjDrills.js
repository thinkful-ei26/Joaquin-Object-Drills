//make student reports
const sampleData = [{name: 'John', grade: 3},{name:'Beth', grade: 4}];
function makeStudentReports(data){
    let output = [];
    return data.map(obj => `${obj.name}, ${obj.grade}`);

}

console.log(makeStudentReports(sampleData));