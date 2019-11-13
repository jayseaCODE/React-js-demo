# Josh's tips with React.js
## Class Components
* The `constructor()` method, is used:
    * to call the constructor of the super class (parent class) through `super()`
    * to initialize our local state
    * to bind our methods
* In a **Class Component**, using `this.setState()` will cause the `render()` to execute next.
    * Therefore, never use `this.setState()` in the `render()` method.
    * Instead, use it in lifecycle methods or event handlers.

## Functional/Stateless Components
* Difference between **functional/stateless** components with **class components**, is the former is used generally for rendering static markup. The later is usually when needing to handle dynamic data or local state.
    * This improves performance.
    * A **Functional Component**, is the equivalent of just having the `render()` method in a **Class Component**.