//Object initializers and methods
const loaf = ({
    flour: 300,
    water: 210,
    hydration : function() {
        return 'hydration :', this.water/this.flour *100;
    }
});

// console.log(loaf.flour);
// console.log(loaf.water);
// console.log(loaf.hydration());

//iterating over an object's properties

const fooObj = ({
    foo: 'foo',
    bar: 'bar',
    bam: 'bam',
    baz: 'baz',
    quux: 'quux',
})

// for(let key in fooObj){
//     console.log(key);
// }

// 3 Arrays in objects.

const barObj = ({
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']

})

//console.log(barObj.meals[3]);

// 4 Arrays of objects


const staff = [{
        name: 'Bill',
        jobTitle: 'accounting'
    },
    {
        name: 'Marty',
        jobTitle: 'accounting'
    },
    {
        name: 'Beth',
        jobTitle: 'IT'
    },
    {
        name: 'Sal',
        jobTitle: 'engineering'
    }];

for(let i = 0; i < staff.length; i ++){
    const employee = staff[i];
//    console.log(employee.name ,'is in', employee.jobTitle);
}

// properties that aren't there...

const staff2 = [{
        name: 'Bill',
        jobTitle: 'accounting',
        boss: 'Sal'
    },
    {
        name: 'Marty',
        jobTitle: 'accounting',
        boss: 'Sal'
    },
    {
        name: 'Beth',
        jobTitle: 'IT',
        boss: 'Sal'
    },
    {
        name: 'Sal',
        jobTitle: 'engineering'
    }];

for(let i = 0; i < staff2.length; i ++){
    const employee = staff2[i];
    if(!employee.boss){
        console.log(`${employee.jobTitle}, ${employee.name}, is the boss.`);
    }else{
    console.log(`${employee.jobTitle}, ${employee.name}, reports to ${employee.boss}`);
}
}
