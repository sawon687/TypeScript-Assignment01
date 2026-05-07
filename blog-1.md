# Why `any` Is a Type Safety Hole and Why `unknown` Is Safer

## Introduction
TypeScript helps prevent errors before running code. `any` and `unknown` are used for uncertain data, but they are not the same.

---

## Body

### Why `any` is unsafe
`any` disables type checking. You can do anything with it, but TypeScript will not warn you. This can cause runtime errors, so it is called a **type safety hole**.

```ts
let data: any = "hello";

data.toUpperCase(); // ok
data.toFixed(2);    // no error but runtime crsash
```

---

### Why `unknown` is safer
`unknown` can hold any value, but you cannot use it directly. You must check its type first.

```ts
let data: unknown = "hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

### Type Narrowing
Type narrowing means checking and refining a value’s type before using it.

```ts
function print(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

---

## Conclusion
`any` removes type safety and can cause bugs. `unknown` is safer because it forces type checking. Type narrowing helps safely use unknown values.