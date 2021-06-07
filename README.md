# React Advanced Tutorial

### Completed all 12 React Advanced Tutorial including:

<br />

### 1. useState
  * `useState` is a variable that is accessible within the component.
  * Not accessible by children therefore Prop-drilling is required.
  * Triggers re-render

<br />

### 2. UseEffect
  * It is a function that runs right after the page loads.
  * We can pass in a dependency array to trigger the `useEffect` if a value has changed.
  * It should not have a re-rendering function such as `useState` if no array dependency is passed in, or it will cause infinite renders and browser might crash.
  * Has a return for the purpose of cleanup function. This part usually cleans up event listeners to prevent having multiple of the same event listeners upon re-render if no dependency array is passed in.

<br />

### 3. Conditional Rendering
  * Short circuits ( `&&` , `||` )
  * Ternary Operator ( `? :` )
  * Using the above techniques to decide whether a component is rendered or not by the value of 'show'

<br />

### 4. Forms
  * Learn about how forms work in react, including how states are used in input elements such as `value` and `onChange` property.
  * `e.preventDefault` to prevent the site to re-render upon submitting a form.

<br />

### 5. useRef
  * `useRef` is used in a component `ref` property. useRef locks itself to an element so it can be analyzed.
  * It is usually used for targetting DOM nodes/elements
  * Does NOT trigger re-render

<br />

### 6. useReducer
  * State Management function
  * It has `initialState` that defines a state and store its initial value.
  * It has a `dispatch` function that takes an array argument consists of `type` by default, and `payload` to pass in values.
  * It has a `reducer` which takes in the arguments from the `dispatch` function such as `type` and `payload`.
  * `reducer` is responsible for sending the current state to the correct state manipulation function according to the `type` that is sent from the `dispatch` function. This `type` can be accessed inside `reducer` with `action.type`.
  * The state manipulation function in `reducer` might need some arguments in order to work. The arguments can be accessed inside `reducer` with `action.payload`.
  * `reducer` should have a return in order to work. The return are usually an object of states after its data is manipulated.

<br />

### 7. Prop-drilling
  * Prop-drilling is the process of passing down function to the component's children as a prop.

<br />

### 8. useContext
  * `useContext` solves the Prop-drilling issue where a function is passed down into components that does not use its value.
  * `useContext` allows a variable or function to be used within the whole component alonside its childrens.
  * This means that we does not need to pass down a variable or function into components that does not use it.
  * Another fix to prop-drilling is Redux, where it combines `useReducer` and `useContext`.

<br />

### 9. Custom Hooks
  * Custom Hooks allows us to create and re-call a hook whenever we need.
  * This simplifies the code and make it look cleaner.
  * A custom hook should always start with a `'use'`.
  * A custom hook can use other hooks such as `useState` and `useEffect`.
  * A custom hook returns one or more values/states
  * Since a custom hook can use `useState`, the returned state can change when `setState` is called inside the custom hook.

<br />

### 10. PropTypes
  * `PropTypes` filters out incoming prop values from the parent component.
  * We can state specifically which property should have which data-type coming as its value.
  * We can also state whether the value is required or not. Stating `isRequired` when the value is empty will cause errors in the console.
  * `defaultProps` can be used to forcefully change the value of the property if the value does not match with the criteria stated in `propType`.

<br />

### 11. React Router
  * `Router`
  * `Switch` - To only assign 1 route starting from the top
  * `Route path` - Specify the path of the route
  * `Route exact` - The path must be exact
  * `Route children` - Used to pass in a dynamic value from the path
  * `Link to` - To show the specified route path
  * `useParams` - To access the dynamic value from the path

<br />

### 12. React.memo, useCallback, useMemo
  * Are optimization tools
  * `React.memo` saves a component. If the property and its values does not change, it will not get re-rendered in any way.
  * `useCallback` saves a function. We can pass in a state in the dependency array. The function will only be re-created if the state in the dependency array changes.
  * If we do not use `useCallback`, everytime the page re-renders, the function gets re-created. If the function is passed onto a component, the component will realize this as a prop value change and will re-render the whole component.
  * `useMemo` saves a value.  We can pass in a state in the dependency array. The value will get re-run if the state in the dependency array changes.
