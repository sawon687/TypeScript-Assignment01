//Problem 01 Solution |
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

filterEvenNumbers([1, 2, 3, 4, 5, 6])


//Problem 02 Solutions
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

reverseString("typescript");



// Problem 03 Solutions
type TStringOrNumber = string | number;

const checkType = (input: TStringOrNumber): string => {
  return typeof input === "string" ? "String" : "Number";
};


checkType('Horidas')

//  Problem 04 Solutions
interface IuserObject {
  id: number;
  name: string;
  age: number;
}

const getProperty = <TKey extends keyof IuserObject>(
  obj: IuserObject,
  key: TKey,
): IuserObject[TKey] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

 getProperty(user,'name')

// Problem 05 Solutions

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

 toggleReadStatus(myBook);


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



// Problem 07  Solutons
const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
 
    return arr1.filter(num=> arr2.includes(num))
}

 getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
 
 


