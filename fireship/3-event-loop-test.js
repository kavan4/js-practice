/* for each round of the event loop:
1. Run the sync code
2. Run Promise or microtask callbacks
3. Run async task callbacks */

setTimeout(() => console.log('do this first?'), 0)

Promise.resolve()
        .then(v => console.log('do this second?'))

console.log('let there be JavaScript')