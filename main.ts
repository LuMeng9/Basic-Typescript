/**
 * About Typescript
 */
console.log("/************************ About Typescript *******************/");
export {};
let message = "Oh! my god!";
console.log(message);

let name: string = "Meng Lu";
let sentence: string = `My name is ${name}. I'm beginnner in Typescript`;

let num: number = 456;

// console.log(sentence);

let numString: string = num.toString();

console.log(num);
console.log(numString);

console.log(
  "/************************ Typescript variable type *******************/"
);
/**
 * Typescript variable type
 */

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = n;
let myName: string = u;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

console.log(list1);
console.log(list2);

let person1: [string, number] = ["Jhon", 25];

console.log(person1);

enum color {
  Red = 3,
  blue,
  black
}

let c: color = color.black;

console.log(color);
console.log(c);

let randomValue: any = 10;
console.log(randomValue);
randomValue = [2, 3];
console.log(randomValue);
randomValue = "Hello";
console.log(randomValue);

console.log(randomValue.name);
// console.log(randomValue());
// console.log(randomValue.toUpperCase());

console.log("/************************ Function define *******************/");
/**
 * Function define
 */

function add(num1: number, num2?: number) {
  //   return num1 + num2;
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}
// console.log(add(5, "10"));

console.log(add(5));

console.log("/************************ Class *******************/");
/**
 * Class
 */

function fullName(person: { firstName: string; lastName: string }): string {
  return `${person.firstName} ${person.lastName}`;
}

let p = {
  firstName: "Meng",
  lastName: "Lu"
};

console.log(fullName(p));

interface Profile {
  firstName: string;
  lastName: string;
  email?: string;
  address?: string;
}

function detail(person: Profile) {
  return `Name: ${person.firstName} ${person.lastName} \nEmail: ${person.email} \nAddress: ${person.address}`;
}

let human = {
  firstName: "Meng",
  lastName: "Lu",
  email: "MengLu@outlook.com",
  address: "Los angeles"
};

console.log(detail(human));

console.log("/************************ Access Modifiers *******************/");
/**
 * Access Modifiers
 */

class Employee {
  employeeName: string; // equal to 'public employeeName: string'
  private pName: string; // don't use it in extend class.
  protected ptName: string; // use only within class.

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Meng Lu");

console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let m1 = new Manager("Bruce");

m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
