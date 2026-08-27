

function add(a, b) {
    return a + b;
}

// a and b = parameters
// 10 and 20 = arguments

console.log(add(10, 20));




const multiply = (a, b) => a * b;

console.log(multiply(5, 4));




let name = "Rahul"; // Global scope

function greet() {
    let message = "Hello"; // Function scope

    console.log(message + " " + name);
}

greet();




if (true) {
    let age = 20;

    console.log(age); 
}






class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Rahul", 20);

person1.introduce();




class Student extends Person {

    constructor(name, age, course) {

       
        super(name, age);

        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

const student1 = new Student("Amit", 21, "JavaScript");

student1.introduce(); // Inherited from Person
student1.study();     // Student's own method
