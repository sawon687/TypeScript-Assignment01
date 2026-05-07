

# 2. How `Pick` and `Omit` Prevent Code Duplication in TypeScript

## Introduction
In TypeScript, `Pick` and `Omit` help us reuse existing interfaces instead of writing new ones again and again. This makes code cleaner and easier to maintain.

---

## Body
`Pick` is used to select only the properties we need from a main interface.  
`Omit` is used to remove the properties we don’t need.

Instead of creating many similar interfaces, we use one master interface and create smaller “slices” from it. This reduces repeated code and improves structure.

This follows the **DRY (Don't Repeat Yourself)** principle, which means we should avoid writing the same logic multiple times.

### Code Example
```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Only required fields
type UserPreview = Pick<User, "id" | "name">;

// Remove sensitive field
type SafeUser = Omit<User, "password">;
```

---

## Conclusion
`Pick` and `Omit` help keep code DRY by reducing duplication and making interfaces reusable and clean.






# 3. How Generics Enable Reusable and Strictly Typed Code

## Introduction
Generics in TypeScript allow us to write flexible and reusable code while keeping strong type safety.

---

## Body
With generics, we can write one function or component that works with multiple data types like number, string, or object.

Instead of creating separate functions for each type, we use a single reusable structure. TypeScript automatically keeps the correct type, so we don’t lose safety.

This makes code more scalable and reduces repetition.

### Code Example
```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(10);
const text = identity<string>("Hello");
```

---

## Conclusion
Generics help us write reusable, flexible, and type-safe code in TypeScript.

# 4. How OOP Pillars Reduce Complexity in TypeScript

## Introduction
Object-Oriented Programming (OOP) has four main pillars: Inheritance, Polymorphism, Abstraction, and Encapsulation. These help manage large applications easily.

---

## Body

### Inheritance
One class can reuse features of another class, so we avoid repeating code.

```ts
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }
}
```

---

### Polymorphism
The same method can behave differently in different classes.

```ts
class Animal {
  sound() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
```

---

### Abstraction
Hide complex implementation details and show only required functionality.

```ts
abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.getArea());
```

---

### Encapsulation
Protect data inside a class and control access.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance()); 
```

---

## Conclusion
OOP pillars make TypeScript applications more organized, reusable, and easier to maintain by reducing complexity.
