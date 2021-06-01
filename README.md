# React JS - Javascript Library

## Installations, Settings and Configurations

### Creating a React Js App

```
npx create-react-app my-app
npx create-react-app folder/my-app
```

### Package.Json

**Dependencies**

Contains the Information of Installed Libraries

**Scripts**

Contains Information about Runable Scripts, in Terminal

### Node Modules

Contains all the Installed Libraries, and is not push over git or any server

## React - Coding Fundamentals

Main Libraries to be used with almost all the components and elements of react js

- import React from 'react';
- import ReactDOM from 'react-dom';

Simplest Base Rendering

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

Css Style Sheets can be Imported and used with any component or element as follows

```
import './index.css';
```

**JSX**

```
const element = <h1>Hello, world!</h1>;
```

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

```
const element = <div tabIndex="0"></div>;
```

```
const element = <img src={user.avatarUrl}></img>;
```

Attribute Replacements

- class -> className
- tab-index -> tabIndex

`/>` is compulsory in single html tags

```
const element = <img src={user.avatarUrl} />;
```

Tree Formats

```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

`Babel` Given Below Samples are Identical

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

Code Above Structurises to the following

```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

The Base Rendering Concept

```
<div id="root"></div>
```

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

**Note** React Elements are `Immutable`

### Components

Functional Components

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Class Component

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

User Defined Components may look like this

```
const element = <Welcome name="Sara" />;
```

`Example`

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
