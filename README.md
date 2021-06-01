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

User Defined Components may look like this. Use Capital Letters for Custom Components

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

**Composing Components**

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

`More Split Components the better`

```
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

```
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

```
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

```
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

**Note** Props are read-only

### Pure and Impure Functions

**Pure**

```
function sum(a, b) {
  return a + b;
}
```

**Impure**

```
function withdraw(account, amount) {
  account.total -= amount;
}
```

### State and Life-Cycles

**Encapsulation**

```
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

Adding local state to a class

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

**Setting State in Class**

```
this.setState({comment: 'Hello'});
```

Dealing with Async

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

**Life Cycles**

- ComponentDidMount

After the component output is rendered to the DOM

- ComponentWillUnMount

Before the Component will get Destroyed

### Events

```
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

```
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

**2 Way Binding and Passing Arguments**

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
