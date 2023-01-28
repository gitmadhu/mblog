# Async, Await and promise

In JavaScript, the `await` keyword is used to pause the execution of a function until a promise is resolved. It can only be used within an async function.
## When to use `await`:
- When you want to wait for a promise to resolve before continuing the execution of a function.
- When you need the resolved value of a promise to be used later in the same function.
- When you want to handle errors that may occur while resolving a promise.

## When not to use `await`:
- When you don't need to wait for a promise to resolve before continuing the execution of a function.
- When you don't need the resolved value of a promise to be used later in the same function.
- When you want to run multiple promises in parallel, instead of waiting for each one to resolve before - starting the next.

```javascript
async function fetchData() {
  const res = await fetch("https://api.example.com/data");
  const json = await res.json();
  console.log(json);
}
```
In the above example, the function fetchData() uses await twice, once to wait for the promise returned by fetch("https://api.example.com/data") to resolve and once to wait for the promise returned by res.json() to resolve.

On the other hand, if you don't need the resolved value of a promise, you can use the .then() method instead of await:

```javascript
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));

```
In this example, the function uses .then() method to handle the resolved promise of `fetch("https://api.example.com/data")` and `res.json()` and `catch()` method to handle the errors.

In short, `await` is used when you need to wait for a promise to resolve and handle errors, and `.then()` is used when you don't need to wait for a promise to resolve and handle errors.



