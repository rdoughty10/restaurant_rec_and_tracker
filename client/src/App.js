import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const submitUser = () => {
    Axios.post('http://localhost:3001/api/insert/', {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
    }).then(() => {
      alert("successful insert")
    })
  }

  return (
    <div className="App">
      <h1>
        Restaurant Recommendation and Tracker
      </h1>
      <div className="login-form">
        <label> Login: </label>
        <input 
          type="text" 
          name="firstName" 
          onChange={(e)=>{
            setFirstName(e.target.value)
          }} 
        />
        <input 
          type="text" 
          name="lastName" 
          onChange={(e)=>{
            setLastName(e.target.value)
          }} 
        />
        <input 
          type="text" 
          name="username" 
          onChange={(e)=>{
            setUsername(e.target.value)
          }} 
        />
        <input 
          type="text" 
          name="email" 
          onChange={(e)=>{
            setEmail(e.target.value)
          }} 
        />

        <button onClick={submitUser}> Submit </button>

      </div>
    </div>
  );
}

export default App;
