```ts
const fetchSomething = () => {
  // 2-1
  return new Promise((resolve, reject) => {
    // 4-1
    const something = fetch()
    // 4-2
    if (something === null) reject(new Error('Null!'))
    else resolve(something)
  })
};


p1 : 1초
p2 : 2초

fetchSomething: () => Promise<string>

const main = async () => {
  try {
    // 1-1
    const x = await fetchX() // 3
    const something: string = await fetchSomething() // 2
    const [x, something] = await Promise.all([fetchX(), fetchSomething()]) // 3
    const another = await fetchAnother(something) // 4
    // 1-2
    console.log(something)
  } catch(e) {
    console.error(e)
  }
};


main();
```

1-1 2-1 4-1 1-2 ... 4-2 then/catch
