1. What problem does the context API help solve?

    `A` - Context helps solve the problem of having to pass data as props from parents to children. It allows data to be shared between components in your app.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    `A` - `actions` set up behaviors that can be called latter in a component of the app. `reducers` provide a way to handle data and actions in state across the app. The `store` is the state in Redux. It is held at the top of your app and available for all components to access.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    `A ` - The difference is scope. Application state has a global scope and can be accessed by all of the components in the app. Component state is has a local scope only accessible to the functions within that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    `A` - `redux-thunk` allows delayed, or asynchronous use of the reducers. without it, they would be accessed and used sequentially when the app is initially rendered. The `redux-thunk` middlewear allows an action to be dispatched at the time a seperate event.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    `A` - I think I prefer redux because of the global hierarchy. It's easier for my head to wrap around the store being high at the top and each component pulling from it directly. Context passing at the component level is a little more muddy to me.
