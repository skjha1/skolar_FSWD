Sure! Let's create a more interesting and practical example to demonstrate the concepts of function and class components in a React project. We'll build a simple "User Dashboard" that displays a list of users and their details. This project will include both function and class components to show how they can be used together effectively.

### Project Setup

1. **Create a new React project** using Create React App (CRA):
   ```sh
   npx create-react-app user-dashboard
   cd user-dashboard
   ```

2. **Navigate to the `src` directory** where the main code resides.

3. **Create separate files for the components**.

### Example Project Structure

```
user-dashboard/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── UserCard.js
│   │   ├── UserList.js
│   │   ├── UserDetails.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

### Component Code

#### `src/components/UserCard.js`

A function component that displays a user's name and triggers a callback when clicked.

```jsx
import React from 'react';
import './UserCard.css';

function UserCard({ user, onClick }) {
  return (
    <div className="user-card" onClick={() => onClick(user)}>
      <h2>{user.name}</h2>
    </div>
  );
}

export default UserCard;
```

#### `src/components/UserList.js`

A class component that maintains the list of users and the selected user state.

```jsx
import React, { Component } from 'react';
import UserCard from './UserCard';
import './UserList.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Alice', details: 'Alice is a software engineer.' },
        { id: 2, name: 'Bob', details: 'Bob is a data scientist.' },
        { id: 3, name: 'Charlie', details: 'Charlie is a product manager.' }
      ],
      selectedUser: null
    };
  }

  handleUserClick = (user) => {
    this.setState({ selectedUser: user });
    this.props.onUserSelect(user);
  }

  render() {
    return (
      <div className="user-list">
        {this.state.users.map(user => (
          <UserCard key={user.id} user={user} onClick={this.handleUserClick} />
        ))}
      </div>
    );
  }
}

export default UserList;
```

#### `src/components/UserDetails.js`

A function component that displays the details of the selected user.

```jsx
import React from 'react';
import './UserDetails.css';

function UserDetails({ user }) {
  if (!user) {
    return <div className="user-details">Select a user to see details.</div>;
  }
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>{user.details}</p>
    </div>
  );
}

export default UserDetails;
```

#### `src/App.js`

This component ties everything together, managing the state for the selected user and passing it down as props.

```jsx
import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  }

  return (
    <div className="app">
      <h1>User Dashboard</h1>
      <div className="content">
        <UserList onUserSelect={handleUserSelect} />
        <UserDetails user={selectedUser} />
      </div>
    </div>
  );
}

export default App;
```

### CSS Files

Create CSS files to style the components.

#### `src/components/UserCard.css`

```css
.user-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}

.user-card:hover {
  background-color: #f0f0f0;
}
```

#### `src/components/UserList.css`

```css
.user-list {
  width: 40%;
}
```

#### `src/components/UserDetails.css`

```css
.user-details {
  width: 50%;
  margin-left: 10px;
}
```

#### `src/App.css`

```css
.app {
  text-align: center;
}

.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
}
```

### `src/index.js`

This file is the entry point of the React application. It renders the `App` component into the root DOM node.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Running the Project

1. **Start the development server**:
   ```sh
   npm start
   ```

2. **Open your browser** and navigate to `http://localhost:3000`. You should see a User Dashboard with a list of users on the left. Clicking on a user will display their details on the right.

### Explanation

1. **UserCard Component (Function Component)**:
   - `UserCard` is a function component that displays a user's name.
   - It accepts `user` and `onClick` props. When the `div` is clicked, it calls the `onClick` function with the user object.

2. **UserList Component (Class Component)**:
   - `UserList` is a class component that maintains a list of users in its state.
   - It renders a list of `UserCard` components and passes the `handleUserClick` method to handle clicks on individual users.
   - It also maintains the state for the selected user and calls the `onUserSelect` prop function when a user is clicked.

3. **UserDetails Component (Function Component)**:
   - `UserDetails` is a function component that displays the details of the selected user.
   - It accepts a `user` prop and conditionally renders the user's details if a user is selected.

4. **App Component**:
   - `App` is a function component that manages the state for the selected user.
   - It renders the `UserList` and `UserDetails` components, passing necessary props and handling user selection.

5. **Styling**:
   - CSS files are used to style each component, providing separation of concerns and making the code more maintainable.

### Summary

This example project demonstrates how to use both function and class components in a React application. We created a simple User Dashboard where `UserCard` and `UserDetails` are function components, and `UserList` is a class component. This setup shows how to manage state and props, handle events, and compose components to build a functional UI. The project structure and code organization make it easy to understand and maintain.
