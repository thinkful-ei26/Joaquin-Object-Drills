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
console.log(updateObject(obj));