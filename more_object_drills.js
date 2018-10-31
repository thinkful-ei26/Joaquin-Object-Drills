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

for(let key in fooObj){
    console.log(key);
}