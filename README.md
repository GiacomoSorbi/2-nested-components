# README #

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to make your first component-based app in React.js.

You need to create and manage an app with a pink Container component and to put (at least) a Circle component inside it.

Examples:

```
//just one, Container would most likely be a square if you allow it with his CSS
ReactDOM.render(
  <Container>
    <Circle />
  </Container>,
  document.getElementById('app')
);
```

```
//three Circles, Container would most likely be a square if you allow it with his CSS
ReactDOM.render(
  <Container>
    <Circle />
    <Circle />
    <Circle />
  </Container>,
  document.getElementById('app')
);
```

## Extra notes and tips

Feel free to play with CSS.

Ask yourself if there are maybe better ways to deal with a variable amount of `Circle`s inside the container.