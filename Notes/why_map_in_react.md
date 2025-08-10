### Why `.forEach()` Does Not Work in JSX Rendering (But `.map()` Does)

---

#### ❓ The Core Difference

- `.map()` **returns** a new array (which can be rendered in JSX)
- `.forEach()` **does not return** anything (it returns `undefined`)

---

### ✅ JSX Needs an Array of Elements to Render

When writing this in React:

```jsx
{FilteredRestro.map((x) => (
  <RestaurantCard key={x.info.id} resData={x} />
))}
```

React expects the `{ ... }` to produce something that can be rendered — usually an array of JSX elements.

---

### ✔️ `.map()` Returns an Array

```js
const arr = [1, 2, 3];
const result = arr.map(x => x * 2);  // ✔️ result = [2, 4, 6]
```

In JSX:

```jsx
{arr.map(x => <div>{x}</div>)}  // ✔️ Valid: returns an array of <div> elements
```

---

### ❌ `.forEach()` Returns `undefined`

```js
const arr = [1, 2, 3];
const result = arr.forEach(x => x * 2);  // ❌ result = undefined
```

In JSX:

```jsx
{arr.forEach(x => <div>{x}</div>)}  // ❌ Invalid: returns undefined, nothing to render
```

React cannot render `undefined` as a list of elements.

---

### 📆 React's Expectation

React internally works with arrays of elements:

```js
const jsxArray = [<div>1</div>, <div>2</div>, <div>3</div>];
ReactDOM.render(jsxArray);
```

This is why `.map()` is used to dynamically render lists.

---

### 🧠 Summary Table

| Feature        | `.map()`                        | `.forEach()`                 |
| -------------- | ------------------------------- | ---------------------------- |
| Returns value? | ✅ Yes (array)                   | ❌ No (undefined)             |
| Use in JSX?    | ✅ Yes — returns renderable list | ❌ No — returns nothing       |
| Use Case       | Rendering elements              | Side-effects (e.g., logging) |

---

### ✅ When to Use `.forEach()` in React

Only when doing **side effects**, like:

```js
FilteredRestro.forEach((x) => {
  console.log(x.info.name);
});
```

But **not** for rendering JSX elements.

---

Let me know if you'd like a side-by-side code example using both `.map()` and `.forEach()`.

