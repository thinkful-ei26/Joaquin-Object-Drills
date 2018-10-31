//Object creator
// function createMyObject (){
//     return {
//         foo: 'bar',
//         answerToUniverse : 42,
//         'olly olly' : 'oxen free',
//         sayHello: function(){
//             return 'Hello';
//         }
//     };
        
// }

//console.log(createMyObject());

//Object updater

let obj = {};

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;

}
//console.log(updateObject(obj));
//Person maker

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
     return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

//console.log(personMaker());

//key deleter

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj){
    delete obj.foo;
    delete obj.bar;
    return obj;
}

console.log(keyDeleter(sampleObj));