//Problem 1 Solution |
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

const resultEvenArry=filterEvenNumbers([1, 2, 3, 4, 5, 6])

console.log('problem1 result',resultEvenArry)

//Problem 2 Solutions
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

const resultStr=reverseString("typescript");

console.log(resultStr)

// Problem 3 Solutions
type TStringOrNumber = string | number;

const checkType = (input: TStringOrNumber): string => {
  return typeof input === "string" ? "String" : "Number";
};


console.log(checkType('Horidas'))

//  Problem 4 Solutions
interface IuserObject {
  id: number;
  name: string;
  age: number;
}

const getProperty = <Tkey extends keyof IuserObject>(
  obj: IuserObject,
  key: Tkey,
) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));

// Problem 5 Solutions

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (Book: Book) => {
  return { ...Book, isRead: true };
};
const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const result = toggleReadStatus(myBook);
console.log(result);

// Problem 06  Solutions

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
      super(name, age);
     this.grade = grade;
  }
  getDetails(){
   return `Name: ${this.name} Age: ${this.age} Grade: ${this.grade}`
  }

}

 const student = new Student("Alice", 20, "A");
 const studentInfo=  student.getDetails();
 console.log(studentInfo)




